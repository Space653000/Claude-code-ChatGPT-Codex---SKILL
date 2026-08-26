#!/usr/bin/env python3
"""Bootstrap the canonical pptx-beautify-lock Skill from the central catalog."""
from __future__ import annotations

import argparse
import os
from pathlib import Path
import shutil
import subprocess
import sys
import tempfile

REPO = "https://github.com/Space653000/pptx-beautify-lock-Skill.git"


def run(cmd, cwd=None):
    print("$", subprocess.list2cmdline([str(x) for x in cmd]))
    return subprocess.call([str(x) for x in cmd], cwd=str(cwd) if cwd else None)


def main() -> int:
    p = argparse.ArgumentParser()
    p.add_argument("--target", choices=("auto", "claude", "codex", "both"), default="auto")
    args = p.parse_args()

    git = shutil.which("git")
    if not git:
        print("PPTX_BOOTSTRAP_PASS=false")
        print("ERROR=git_not_found")
        return 2

    cache_root = Path(os.environ.get("LOCALAPPDATA", tempfile.gettempdir())) / "pptx-beautify-lock-catalog-cache"
    repo_dir = cache_root / "pptx-beautify-lock-Skill"
    cache_root.mkdir(parents=True, exist_ok=True)

    if (repo_dir / ".git").is_dir():
        if run([git, "fetch", "origin", "main"], repo_dir) != 0:
            print("PPTX_BOOTSTRAP_PASS=false")
            return 3
        if run([git, "merge", "--ff-only", "origin/main"], repo_dir) != 0:
            print("PPTX_BOOTSTRAP_PASS=false")
            print("ERROR=cache_has_local_or_divergent_changes")
            return 4
    else:
        if run([git, "clone", "--depth", "1", REPO, str(repo_dir)], cache_root) != 0:
            print("PPTX_BOOTSTRAP_PASS=false")
            return 5

    installer = repo_dir / "scripts" / "install_skill.py"
    if not installer.is_file():
        print("PPTX_BOOTSTRAP_PASS=false")
        print("ERROR=canonical_installer_missing")
        return 6

    target = args.target
    if target == "auto":
        # The canonical installer has the same auto-detection policy.
        target = "auto"
    rc = run([sys.executable, str(installer), "--target", target, "--force"], repo_dir)
    if rc != 0:
        print("PPTX_BOOTSTRAP_PASS=false")
        return rc

    print("PPTX_BOOTSTRAP_PASS=true")
    print(f"CANONICAL_CHECKOUT={repo_dir}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

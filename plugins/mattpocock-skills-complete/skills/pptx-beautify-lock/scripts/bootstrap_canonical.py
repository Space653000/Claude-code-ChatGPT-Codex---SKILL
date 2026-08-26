#!/usr/bin/env python3
from __future__ import annotations
import argparse, os, shutil, subprocess, sys, tempfile
from pathlib import Path

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
        print("PPTX_BOOTSTRAP_PASS=false\nERROR=git_not_found")
        return 2
    cache_root = Path(os.environ.get("LOCALAPPDATA", tempfile.gettempdir())) / "pptx-beautify-lock-catalog-cache"
    repo_dir = cache_root / "pptx-beautify-lock-Skill"
    cache_root.mkdir(parents=True, exist_ok=True)
    if (repo_dir / ".git").is_dir():
        if run([git, "fetch", "origin", "main"], repo_dir) != 0 or run([git, "merge", "--ff-only", "origin/main"], repo_dir) != 0:
            print("PPTX_BOOTSTRAP_PASS=false\nERROR=cache_update_failed")
            return 3
    else:
        if run([git, "clone", "--depth", "1", REPO, str(repo_dir)], cache_root) != 0:
            print("PPTX_BOOTSTRAP_PASS=false\nERROR=clone_failed")
            return 4
    installer = repo_dir / "scripts" / "install_skill.py"
    if not installer.is_file():
        print("PPTX_BOOTSTRAP_PASS=false\nERROR=canonical_installer_missing")
        return 5
    rc = run([sys.executable, str(installer), "--target", args.target, "--force"], repo_dir)
    if rc != 0:
        print("PPTX_BOOTSTRAP_PASS=false")
        return rc
    print("PPTX_BOOTSTRAP_PASS=true")
    print(f"CANONICAL_CHECKOUT={repo_dir}")
    return 0

if __name__ == "__main__":
    raise SystemExit(main())

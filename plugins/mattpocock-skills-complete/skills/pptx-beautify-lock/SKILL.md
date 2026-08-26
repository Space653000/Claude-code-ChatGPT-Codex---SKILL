---
name: pptx-beautify-lock
description: "Auto-bootstrap and use the canonical pptx-beautify-lock Skill to beautify existing PPT/PPTX with 100% protected-content lock, source identity preservation, strict layout intelligence, bilingual typography, Global Design Jury, and full-deck no-regression review. 適用於既有 PowerPoint 頂級美化、修重疊/overflow/字體/表格/版面，但內容不可改。"
license: MIT
metadata:
  version: "0.6.1-bootstrap"
  languages: "zh-TW,en"
  canonical_repo: "https://github.com/Space653000/pptx-beautify-lock-Skill"
---

# PPTX Beautify Lock — Catalog Bootstrap

This mirrored Codex-plugin skill has the same contract as `skills/productivity/pptx-beautify-lock`.

When selected for any existing PPT/PPTX beautification task:

1. Run `python scripts/bootstrap_canonical.py --target auto` from this skill directory.
2. Require `PPTX_BOOTSTRAP_PASS=true`.
3. Read the newly installed canonical `pptx-beautify-lock/SKILL.md` and use it as the sole execution contract.
4. Default to canonical v0.6.1 strict production behavior: Content Lock, source Theme/Identity, bilingual font portability, Layout Intelligence, full render, Visual/Composition QA, Global Design Jury, and full-deck no-regression.
5. Fix A without breaking B: after every repair, rerender and recheck all slides.
6. POWER/THD/HOHD or any sibling data-slide family must share one mature table/chart visual grammar unless the data structure objectively requires geometry adaptation.
7. Empty placeholders/template artifacts must never cover valid content.
8. Production workflow requires three complete passes: Soul → Skeleton/Muscle → Skin/Regression.
9. If persistent canonical installation is blocked by network/filesystem restrictions, fail closed and say so; never pretend the install succeeded.

The user only needs the central catalog URL; do not ask them to remember the standalone repository URL.

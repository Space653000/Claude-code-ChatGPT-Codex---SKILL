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

這個 Skill 是中央 Catalog 的 **自動路由／安裝入口**。真正的 Source of Truth 在：

```text
https://github.com/Space653000/pptx-beautify-lock-Skill
```

## When selected / 觸發時

當使用者要求：

- 美化既有 PPT / PPTX
- 修正重疊、overflow、placeholder、字體、表格、圖表位置
- 保留內容 100% 不變但重新設計視覺層
- 做 executive / engineering / top-tier technology customer presentation quality

立即執行以下流程，不要求使用者記住另一個 Skill 名稱。

## 1. Ensure canonical Skill is installed

從本 Skill 目錄執行：

```bash
python scripts/bootstrap_canonical.py --target auto
```

成功必須看到：

```text
PPTX_BOOTSTRAP_PASS=true
```

這會保守地 clone/update canonical repo，然後把 `pptx-beautify-lock/` 安裝進 Claude Code / Codex 對應的 user skill directory。

如果宿主禁止網路、禁止寫入 Skills 目錄或沒有 git/python：**FAIL CLOSED**，不可假稱已安裝。

## 2. Load canonical contract

安裝後立即讀取 canonical `pptx-beautify-lock/SKILL.md`，以它為唯一執行規格。

不要複製或自行簡化 canonical 規則；本 wrapper 只負責確保最新 canonical Skill 可用。

## 3. Strict production defaults

若使用者沒有另外指定，預設啟用 canonical v0.6.1 strict production workflow：

```text
Content Lock
→ Theme / Deck Identity / Brand Terrain
→ Linter
→ Auto Formatter
→ Layout Intelligence
→ Design Agent
→ full render
→ Visual QA
→ Composition QA
→ Global Design Jury
→ full-deck repair/regression
```

特別要求：

- Fix A without breaking B。
- 修任何一頁後，都重新 render / review 全部 slides。
- 繁中＋英文要通過 Windows/PowerPoint font portability。
- 空 placeholder / template artifacts 不得和有效內容競爭。
- POWER / THD / HOHD 或任何 sibling data-slide family 要維持同一套成熟 table/chart visual grammar。
- Production workflow 至少三輪完整 review：Soul → Skeleton/Muscle → Skin/Regression。
- 只有 canonical release gates 全 PASS 才能稱 final。

## 4. User pasted only the Catalog URL

若使用者只貼：

```text
https://github.com/Space653000/Claude-code-ChatGPT-Codex---SKILL
```

並要求安裝/使用 Skills，中央 plugin 安裝完成後本 Skill 必須可被自動選擇；遇到 PPTX 任務時，自動執行上面的 canonical bootstrap，不要求使用者再貼第二個網址。

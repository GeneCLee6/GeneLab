# RULES.md — 工程規範

本文件是 GeneLab 的工程規範，核心精神為 **KISS、DRY**，SOLID 只挑用得上的部分套用（這是一個單人維護的靜態展示網站，不是分層架構的產品）。與 `ARCHITECTURE.md` 的資料夾結構、`DESIGN.md` 的視覺規範搭配使用；內容真實性規則見 `CLAUDE.md`「Hard rule: no invented personal facts」，本文件不重複。

## 1. KISS（Keep It Simple, Stupid）

這是**個人靜態展示網站**，明確不做的事：

- 不需要後端、資料庫、CMS——所有內容（專案卡片、履歷）都是原始碼裡的 TypeScript data 物件。
- 不提前引入狀態管理套件（Redux/Zustand）；目前規模用 React 內建 `useState`/props 就夠。
- 不提前做多語系、多主題（light mode）——`DESIGN.md` §2 已明確 v1 只有一個深色主題，需要時再加，不要預先搭骨架。
- 不追求測試覆蓋率；這是一個以排版/內容為主的網站，`ARCHITECTURE.md` 已說明何時才該補 Vitest（有真正的邏輯可測時）。
- 不為了「以後可能要加 blog/CMS」預先設計可擴充架構——`PRD.md`「Explicitly out of scope」列出的項目，真的要做時再回來改設計，不要現在猜。

## 2. DRY（Don't Repeat Yourself）

| 容易重複的東西 | 集中管理位置 | 說明 |
|---|---|---|
| 顏色、字級、間距 | `src/theme/theme.ts` | 元件一律從 `theme` 取值，禁止在 styled-components 裡寫死 hex 色碼或字體字串（`DESIGN.md` 的 token 是唯一來源） |
| 專案卡片內容（標題/分類/描述/技術標籤/repo 連結） | `src/data/projects.ts` | 新增或修改任一專案卡片只改這個檔案，不動 `Home.tsx` 的渲染邏輯 |
| 履歷內容（經歷/技能/學歷） | 比照 `data/projects.ts` 的模式，做成獨立 typed data 檔案（見 `ARCHITECTURE.md`「Content vs. code」） | 讓「這是佔位符還是真實內容」一眼可查，不必在 `Resume.tsx` 的 JSX 裡逐行找 |
| Section 標題樣式（`// projects` 這種 mono eyebrow） | 共用元件（`ui/SectionEyebrow` 或等效元件） | 不要在每個 section 各自重刻一份類似但不同的標題樣式 |

## 3. SOLID（只套用用得到的部分）

- **SRP**：`pages/` 底下的頁面元件只負責排版與組裝，不寫死內容資料（內容一律從 `data/` 匯入）；`components/ui/` 底下的元件是純展示用的「笨元件」，不含業務規則、不直接匯入 `data/`。
- **OCP**：新增一個專案卡片、一筆履歷經歷，都應該是「在對應的 `data/*.ts` 檔案加一筆資料」，不需要修改渲染這些資料的元件程式碼。若發現新增內容必須連帶改渲染邏輯，代表資料結構設計得不夠好，先調整型別而不是在元件裡加特例判斷。
- 其餘 SOLID 原則（LSP/ISP/DIP）在目前規模（無介面、無多實作）用不上，不必為了套用原則而創造抽象。

## 4. 命名慣例

與其他 sibling 專案一致：

- 元件/型別檔案：PascalCase（如 `Header.tsx`、`SectionEyebrow.tsx`）。
- 工具/資料檔案：camelCase（如 `projects.ts`、`theme.ts`）。
- 元件命名即檔名，不加 `index.ts` re-export 之外的額外包裝層。

## 5. 目錄組織原則

依 `ARCHITECTURE.md` 的資料夾結構分層（`theme/` / `components/layout/` / `components/ui/` / `pages/` / `data/`），新增檔案前先問：「這是版型（layout）、可重用純展示元件（ui）、頁面組裝（pages）、還是內容資料（data）？」放錯層最常見的訊號是：`components/ui/` 底下的元件卻直接 import 了 `data/projects.ts`。

## 6. Commit 訊息風格

簡化版 Conventional Commits，格式 `<type>: <說明>`（可用中文或英文）：

- `feat: 新增 Projects 卡片區塊`
- `fix: 修正 Resume 頁在手機寬度的間距`
- `docs: 更新 DESIGN.md 的按鈕規範`
- `chore: 補上 favicon`

常用 type：`feat`、`fix`、`docs`、`chore`、`refactor`。不強制訊息長度，但標題要說清楚「做了什麼」而非「改了哪個檔案」。

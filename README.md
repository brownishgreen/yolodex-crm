# 📇 Yolodex

A lightweight single-page CRM for managing contacts and their interactions.  
靈感來自五零年代的 Rolodex 旋轉式名片架。  
**Yolodex** 是一款極簡 CRM，左側列表＋右側詳情同步更新，讓你透過一張張小卡片紀錄每段生命裡的美好情誼。  

- Built with **Vue 3 + Vite + TypeScript**  
- Fully responsive (RWD)  
- Manage contacts, interactions, and export lists in CSV format  

---

## Demo 

- 🔗 [Live Demo (GitHub Pages)](https://brownishgreen.github.io/yolodex-crm/)  

---

## Features 功能與特色

1. **Live Search** – 搜尋聯絡人  
   - 即時搜尋，快速找到需要的聯絡人。  

2. **Sorting** – 名字 / 狀態 / 建立時間  
   - 清單可依不同條件排序。  

3. **Contact Management** – 新增 / 編輯 / 刪除聯絡人  
   - 使用表單建立或修改，列表與詳情面板即時更新。  

4. **Interactions Timeline** – 新增互動紀錄  
   - 可紀錄「通話 / 信件 / 會議」，並即時顯示於右側時間線。  

5. **Export CSV** – 匯出搜尋/篩選後的聯絡人清單  
   - 篩選想要的資料後，一鍵匯出成 CSV 檔。  

6. **Responsive Design** – 行動裝置友善  
   - 在手機、平板與桌機都有良好體驗。  

---

## Tech Stack 技術棧

- **Vue 3** – Composition API + `<script setup>`
- **Pinia** – 全域狀態管理（管理 contacts / forms / interactions）
- **TypeScript** – 強型別模型（`types/contact.ts`）  
- **Vite** – 開發環境  
- **SCSS Modules + CSS Variables** – 樣式模組化  
- **Icons** – Font Awesome / Heroicons  
- **Data** – 無後端，使用 Reactive Array 暫存（重新整理即重置）  

---

## Project Setup

```bash
# Clone 專案
git clone https://github.com/your-username/yolodex.git

cd yolodex

# 安裝依賴
npm install

# 開發環境
npm run dev

# 打包建置
npm run build

# 預覽產出
npm run preview

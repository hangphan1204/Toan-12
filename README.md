# Toán 12 — Website tĩnh cho GitHub + Vercel

Website gồm:

- `index.html` — Trang chủ
- `gui-bai/index.html` — Gửi bài / hỏi bài bằng link Google Drive
- `giai-dap/index.html` — Danh sách các bộ bài tương tác
- `giai-dap/chuong-1.html` — Bộ bài Toán 12 Chương I hiện có
- `luyen-tap/index.html` — Bài luyện tập thêm + chấm tự động
- `assets/css/style.css` — Giao diện chung
- `assets/js/common.js` — Điều hướng
- `assets/js/submit.js` — Form gửi bài
- `assets/js/practice.js` — Bộ chấm bài tổng quát
- `assets/icons/favicon.svg` — Favicon
- `404.html` — Trang lỗi 404
- `vercel.json` — Cấu hình Vercel

## 1. Đưa lên GitHub

1. Giải nén file ZIP.
2. Tạo repository mới trên GitHub.
3. Upload **toàn bộ nội dung bên trong thư mục** `toan12-web-vercel-polished`.
4. Commit.

## 2. Deploy Vercel

1. Vào Vercel.
2. `Add New` → `Project`.
3. Import repository GitHub.
4. Framework Preset: `Other`.
5. Build Command: để trống.
6. Output Directory: để trống.
7. Deploy.

Vercel sẽ tự deploy lại mỗi lần bạn push/commit thay đổi lên GitHub.

## 3. Tự thêm bài luyện tập bằng HTML

Mở:

`luyen-tap/index.html`

### Trắc nghiệm

```html
<div class="quiz" data-type="mcq" data-answer="B">
  <h3>Câu 4</h3>
  <p>Nội dung câu hỏi</p>
  <label class="option"><input type="radio" name="q4" value="A"> A. ...</label>
  <label class="option"><input type="radio" name="q4" value="B"> B. ...</label>
  <label class="option"><input type="radio" name="q4" value="C"> C. ...</label>
  <label class="option"><input type="radio" name="q4" value="D"> D. ...</label>
  <div class="explain">Giải thích đáp án.</div>
</div>
```

### Điền số

```html
<div class="quiz" data-type="number" data-answer="7" data-tolerance="0">
  <h3>Câu 5</h3>
  <p>Nội dung câu hỏi</p>
  <input class="answer-input" placeholder="Nhập đáp án">
  <div class="explain">Đáp án: 7.</div>
</div>
```

Không cần sửa JavaScript.

## 4. Lưu ý phần “Gửi bài”

Bản hiện tại là static website nên câu hỏi chỉ được lưu trong `localStorage` trên trình duyệt của học sinh.

Muốn học sinh gửi và admin thấy ở máy khác thì bước sau cần nối Supabase/Firebase hoặc API riêng.

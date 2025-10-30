# Cafe Ordering App

Ứng dụng đặt cafe sử dụng Expo Router, SQLite và API.

## Tính năng

### a. Dữ liệu từ API

-   File `app/services/api.ts` chứa mock API trả về danh sách các loại thức uống
-   Danh sách đồ uống: Milk, Origin, Salt, Espresso, Cappuchino, Weasel, Culi, Catimor
-   Có thể dễ dàng thay thế bằng API thật

### b. Lưu trữ dữ liệu local (SQLite)

-   File `app/utils/db.ts` quản lý database SQLite
-   Lưu trữ orders với các thông tin: tên đồ uống, giá, số lượng, loại order, ID order
-   Các chức năng: thêm order, xem orders, xóa order, clear tất cả orders

## Cấu trúc màn hình

### 1. Home Screen (`app/index.tsx`)

-   Màn hình chào mừng
-   Nút "GET STARTED" để vào màn hình Drinks
-   Nút "View Your Orders" để xem đơn hàng đã lưu

### 2. Drinks Screen (`app/drinks/index.tsx`)

-   Hiển thị danh sách đồ uống từ API
-   Có thể tăng/giảm số lượng cho từng món
-   Nút "GO TO CART" để lưu order vào SQLite và chuyển sang màn Orders

### 3. Orders Screen (`app/orders/index.tsx`)

-   Hiển thị tất cả orders đã lưu trong SQLite
-   Mỗi order hiển thị: loại order (CAFE/CAFE DELIVERY), tổng tiền, danh sách món
-   Nút "PAY NOW" để thanh toán và xóa order

## Cấu trúc thư mục

```
app/
├── _layout.tsx          # Root layout, khởi tạo database
├── index.tsx            # Home screen
├── drinks/
│   └── index.tsx        # Drinks listing screen
├── orders/
│   └── index.tsx        # Orders screen
├── services/
│   └── api.ts           # API service (mock data)
└── utils/
    └── db.ts            # SQLite database utilities
```

## Chạy ứng dụng

```bash
# Cài đặt dependencies (đã làm)
npm install

# Chạy ứng dụng
npm start

# Hoặc chạy trên platform cụ thể
npm run android
npm run ios
npm run web
```

## Dependencies đã thêm

-   `expo-sqlite`: Lưu trữ dữ liệu local

## Workflow

1. Mở app → Màn hình Home
2. Click "GET STARTED" → Màn hình Drinks
3. Chọn đồ uống và số lượng
4. Click "GO TO CART" → Lưu vào SQLite và chuyển sang Orders
5. Xem orders đã lưu, có thể thanh toán hoặc xóa
6. Sau khi thanh toán, order sẽ bị xóa khỏi database

## Ghi chú

-   Database được khởi tạo tự động khi app start
-   Dữ liệu được lưu persistent trên thiết bị
-   Có thể thay thế mock API bằng API thật trong `app/services/api.ts`

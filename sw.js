// Bắt buộc để Chrome cho "Cài đặt ứng dụng". Không lưu đệm gì: luôn lấy bản mới nhất từ mạng.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () {});

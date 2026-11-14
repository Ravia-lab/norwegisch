const CACHE = "norsk-v20";
const FILES = ["./", "index.html", "style.css", "app.js", "data.js", "more-a1.js", "more-a2.js", "more-b1.js", "more-b2.js", "more-c1.js", "more-freq.js", "vocab-a.js", "vocab-b1.js", "vocab-b2.js", "vocab-c1.js", "vocab-eigen.js", "vocab-a2x.js", "vocab-themes.js", "vocab-verbs.js", "vocab-b2x.js", "vocab-film2.js", "vocab-c1x.js", "vocab-more1.js", "vocab-more2.js", "vocab-more3.js", "syll.js", "dialogs.js", "viking.js", "manifest.webmanifest", "icon.svg", "icon-192.png", "icon-512.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  // Netz zuerst (für Updates), bei Offline aus dem Cache
  e.respondWith(fetch(e.request).then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return r; }).catch(() => caches.match(e.request).then(r => r || caches.match("index.html"))));
});

// Tägliche Erinnerung (nur installierte App auf Android/Chrome, vom System gesteuert)
self.addEventListener("periodicsync", e => {
  if (e.tag !== "norsk-reminder") return;
  e.waitUntil(caches.open("norsk-meta").then(c => c.match("meta")).then(r => r ? r.json() : {}).then(m => {
    const now = new Date(), today = now.toISOString().slice(0, 10);
    const [h] = String(m.time || "18:00").split(":").map(Number);
    if (m.last === today || now.getHours() < h) return;
    return self.registration.showNotification("Zeit für Norwegisch 🇳🇴", { body: "Dein Tagesziel wartet – schon 5 Minuten helfen!", icon: "icon-192.png", badge: "icon-192.png", tag: "norsk-reminder" });
  }));
});
self.addEventListener("notificationclick", e => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type: "window" }).then(cs => cs.length ? cs[0].focus() : self.clients.openWindow("./")));
});

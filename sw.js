// O Código Mirim mudou para a org GamificaPampa (montar_ponte.py).
// Este service worker apaga a cópia que o modo sem internet guardou no aparelho e se desliga,
// para quem instalou o app abrir os endereços novos.
self.addEventListener("install", () => self.skipWaiting())

self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    for (const nome of await caches.keys()) await caches.delete(nome)
    await self.registration.unregister()
    for (const janela of await self.clients.matchAll({ type: "window" })) janela.navigate(janela.url)
  })())
})

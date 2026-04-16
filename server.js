const { PeerServer } = require('peer');

const PORT = process.env.PORT || 9000;

const peerServer = PeerServer({
    port: PORT,
    path: '/',
    allow_discovery: true,
    proxied: true  // важно для работы за прокси Railway
});

console.log(`PeerJS сервер запущен на порту ${PORT}`);

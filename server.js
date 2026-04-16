const { PeerServer } = require('peer');
const peerServer = PeerServer({ port: process.env.PORT || 9000, path: '/' });
console.log('PeerJS сервер запущен на порту', process.env.PORT || 9000);

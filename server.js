import {createServer} from 'node:http';
import express from 'express';
import { Server as SocketIO } from 'socket.io';

const app = express(); // <-- Création d'une application Express
const server = createServer(app); // <-- Utilisation de l'application Express
const io = new SocketIO(server);

// Configuration de l'application Express
app.use(express.static('public')); // <-- Serveur de fichiers statiques

app.get('/', (req, res) => {
	res.redirect('/index.html'); // <-- Redirection vers la page d'accueil
});

server.listen(3000, () => { // <-- Démarrage du serveur
	console.log('Server is running on port 3000');
});

// Exemple de serveur Express avec un serveur HTTP
//////////////////////////////

io.on('connection', (socket) => {
	console.log(`Client connected: ${socket.id}`);

    io.emit("system_message", {
        content: `Welcome to: ${socket.id} !`

    });
    io.on('disconnected', () => {
        console.log('User disconnected');
    });
}); 



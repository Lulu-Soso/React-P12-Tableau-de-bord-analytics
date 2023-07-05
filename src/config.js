const config = {
  development: {
    apiUrl: 'http://localhost:3000',
  },
  production: {
    apiUrl: 'https://api.example.com',
  },
};

export default config;

// Pour un serveur Node.js : Vous pouvez définir la variable NODE_ENV lors du démarrage du serveur Node.js.
// Par exemple, si vous utilisez un script start dans votre fichier package.json pour démarrer votre application,
// vous pouvez ajouter NODE_ENV=production avant la commande de démarrage. Voici un exemple :
//
// {
//   "scripts": {
//   "start": "NODE_ENV=production node server.js"
// }
// }





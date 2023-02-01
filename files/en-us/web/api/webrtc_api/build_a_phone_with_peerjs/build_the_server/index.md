---
title: Building the server
slug: Web/API/WebRTC_API/Build_a_phone_with_peerjs/Build_the_server
page-type: guide
---

{{DefaultAPISidebar("WebRTC")}}

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Setup", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers")}}

In this article we'll set up the server for our phone app. The server file will look like a regular Express server file with one difference, the Peer server.

1. First of all, create a file called `server.js` in the same location as the HTML and CSS files you created previously. This is the entry point of our app, as defined in our `package.json` file.
2. You'll need to start your code by requiring the peer server at the top of the `server.js` file, to ensure that we have access to the peer server:

   ```js
   const { ExpressPeerServer } = require("peer");
   ```

3. You then need to actually create the peer server. Add the following code below your previous line:

   ```js
   const peerServer = ExpressPeerServer(server, {
     proxied: true,
     debug: true,
     path: "/myapp",
     ssl: {},
   });
   ```

   We use the `ExpressPeerServer` object to create the peer server, passing it some options in the process. The peer server will handle the signalling required for WebRTC for us, so we don't have to worry about STUN/TURN servers or other protocols.

4. Finally, you'll need to tell your app to use the `peerServer` by calling `app.use(peerServer)`. Your finished `server.js` should include the other necessary dependencies you'd include in a server file, as well as serving the `index.html` file to the root path.

   Update `server.js` so that it looks like this:

   ```js
   const express = require("express");
   const http = require("http");
   const path = require("path");
   const app = express();
   const server = http.createServer(app);
   const { ExpressPeerServer } = require("peer");
   const port = process.env.PORT || "8000";

   const peerServer = ExpressPeerServer(server, {
     proxied: true,
     debug: true,
     path: "/myapp",
     ssl: {},
   });

   app.use(peerServer);

   app.use(express.static(path.join(__dirname)));

   app.get("/", (request, response) => {
     response.sendFile(`${__dirname}/index.html`);
   });

   server.listen(port);
   console.log(`Listening on: ${port}`);
   ```

5. You should be able to connect to your app via `localhost` (in our `server.js` we're using port 8000 (defined on line 7) but you may be using another port number). Run `yarn start` (where `start` refers to the script you declared in `package.json` on the previous page) in your terminal. Visit `localhost:8000` in your browser and you should see a page that looks like this:

   ![A cream background with the words 'phone a friend' in bold, dark green font as the heading. 'Connecting...' is immediately below that and 'please use headphones!' below that. Following on, a big dark green button with 'Call' written in the same cream color of the background. ](connecting_screen.png)

If you want to learn more about Peer.js, check out the [Peer.js Server repo on GitHub](https://github.com/peers/peerjs-server).

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Setup", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers")}}

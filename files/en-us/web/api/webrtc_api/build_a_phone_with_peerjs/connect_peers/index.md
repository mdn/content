---
title: Connecting the peers
slug: Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers
page-type: guide
---

{{DefaultAPISidebar("WebRTC")}}

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Build_the_server", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Get_microphone_permission")}}

In the last article we set up our server, but it doesn't do anything yet because we are not serving anything. This is the part you've been waiting for — actually creating the client-side peer connection and call logic. This is going to be an involved process, but we've split it into numerous subsections so you can tackle the different parts in easy bite-sized chunks.

1. First up, create a `script.js` file in the same location as the others — this is where all your logic will live.
2. We need to create a peer object with an ID. The ID will be used to connect two peers together and if you don't create one, one will be assigned to the peer. Add the following to `script.js`:

   ```js
   const peer = new Peer(
     `${Math.floor(Math.random() * 2 ** 18)
       .toString(36)
       .padStart(4, 0)}`,
     {
       host: location.hostname,
       debug: 1,
       path: "/myapp",
     },
   );
   ```

3. You'll then need to attach the peer to the window so that it's accessible. Add the following line below your previous code:

   ```js
   window.peer = peer;
   ```

4. In another terminal window, start the peer server by running the following command inside the root of your phone app directory:

   ```bash
   peerjs --port 443 --key peerjs --path /myapp
   ```

This looks very similar to the peer server we created in the last step; this is the client-side portion. In order for the browser to connect to the running peer server, we need to tell it how; this is what the above line does.

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Build_the_server", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Get_microphone_permission")}}

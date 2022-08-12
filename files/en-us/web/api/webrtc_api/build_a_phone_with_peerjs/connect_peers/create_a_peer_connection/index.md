---
title: Creating a peer connection
slug: >-
  Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Create_a_peer_connection
page-type: guide
---
{{WebRTCSidebar}}

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Show_hide_html", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Creating_a_call")}}

Next, you want to ensure your users have a way of connecting with their peers. In order to connect two peers, you'll need the peer ID for one of them.

1. Let's create a variable to contain the ID, and a function to request that the user enters it that we'll call later. Add this to the bottom of `script.js`:

    ```js
    let code;
    function getStreamCode() {
        code = window.prompt('Please enter the sharing code');
    }
    ```

    The [`window.prompt()`](/en-US/docs/Web/API/Window/prompt) method provides a convenient way of getting the relevant peer ID — you can use this when you want to collect the peerID needed to create the connection.

2. Using the peerJS framework, you'll want to connect the `localPeer` to the `remotePeer`. PeerJS gives us the `connect()` function, which takes a peer ID to connect to. Add this block below your previous code:

    ```js
        let conn;
        function connectPeers() {
            conn = peer.connect(code);
        }
    ```

3. When a connection is created, let's use the PeerJS framework's `on('connection')` to set the remote peer's ID and open the connection. The function for this listener accepts a `connection` object which is an instance of the `DataConnection` object (which is a wrapper around WebRTC's [`RTCDataChannel`](/en-US/docs/Web/API/RTCDataChannel)); within this function you'll want to assign it to a variable. Again you'll want to create the variable outside of the function so that you can assign it later. Add the following below your previous code:

    ```js
    peer.on('connection', (connection) => {
        conn = connection;
    });
    ```

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Show_hide_html", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Creating_a_call")}}

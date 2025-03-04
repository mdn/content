---
title: Setup
slug: Web/API/WebRTC_API/Build_a_phone_with_peerjs/Setup
page-type: guide
---

{{DefaultAPISidebar("WebRTC")}}

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Build_the_server")}}

So let's get started by setting up the basis for our WebRTC-powered phone app.

1. First find a sensible place on your local file structure and run `mkdir audio_app` and then `cd audio_app` to create a directory to contain your app and enter into it.
2. Next, create a new app by running `yarn init`. Follow the prompts, providing a name, version, description, etc. to your project.
3. Next, install the required dependencies using the following commands:

   - [Express](https://expressjs.com/): `yarn add express`
   - [PeerJS](https://peerjs.com/docs/): `yarn add peerjs`
   - [Peer](https://github.com/peers/peerjs-server): `yarn add peer`

   Peer will be used for the peer server and PeerJS will be used to access the PeerJS API and framework. Your `package.json` should something look like this when you've finished installing the dependencies:

   ```json
   {
     "name": "audio_app",
     "version": "1.0.0",
     "description": "An audio app using WebRTC",
     "scripts": {
       "start": "node server.js",
       "test": "echo \"Error: no test specified\" && exit 1"
     },
     "keywords": [],
     "author": "Lola Odelola",
     "license": "MIT",
     "dependencies": {
       "express": "^4.17.1",
       "peer": "^0.5.3",
       "peerjs": "^1.3.1"
     }
   }
   ```

4. To finish the setup, you should copy the following HTML and CSS files into the root of your project folder. You can name both files `index`, so the HTML file will be `index.html` and the CSS file will be `index.css`. You won't need to modify these much in the articles that follow.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <title>Lola's Web Phone!</title>

    <meta property="og:title" content="Teleprompter!" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@lady_ada_king" />
    <meta name="twitter:creator" content="@lady_ada_king" />
    <meta property="og:url" content="https://teleprompter.glitch.me" />
    <meta
      property="og:description"
      content="Cast your computer to your phone or tablet to use it in a teleprompter" />
    <meta
      name="description"
      content="Cast your computer to your phone or tablet to use it in a teleprompter" />
    <!--     <meta property="og:image" content="https://cdn.glitch.com/1695682e-08d3-41c8-a322-1e235b5782e1%2Fimage.png?v=1561449954420"> -->

    <!-- import the webpage's stylesheet -->
    <link rel="stylesheet" href="/index.css" />

    <link rel="manifest" href="/manifest.json" />

    <!-- import the webpage's javascript file -->
    <script src="https://unpkg.com/peerjs@1.3.1/dist/peerjs.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/davidshimjs-qrcodejs@0.0.2/qrcode.min.js"></script>
    <script src="script.js" defer></script>
  </head>
  <body>
    <div class="container">
      <h1>Phone a friend</h1>
      <p id="cast-status" class="big">Connecting...</p>
      <p>Please use headphones!</p>
      <button class="call-btn">Call</button>
      <section class="call-container" hidden>
        <div class="audio-container">
          <p>You're automatically muted, unmute yourself!</p>
          <audio controls id="remoteAudio" muted="true"></audio>
          <audio controls id="localAudio" muted="true"></audio>
        </div>
        <button class="hangup-btn">Hang up</button>
      </section>
    </div>

    <section class="modal" hidden>
      <div id="close">close</div>
      <div class="inner-modal">
        <label>Give us your friend's device ID</label>
        <input placeholder="Enter your friend's device ID" aria-colcount="10" />
        <button class="connect-btn">Connect</button>
      </div>
    </section>
  </body>
</html>
```

```css
*,
*:before,
*:after {
  box-sizing: border-box;
}

body {
  color: darkslategrey;
  display: flex;
  align-items: center;
  justify-content: center;
  background: antiquewhite;
}

h1 {
  font-size: 6rem;
  letter-spacing: 0.2rem;
  margin-bottom: auto;
}

p {
  text-align: center;
  font-size: 2rem;
}

button {
  background-color: -internal-light-dark(white, black);
  padding: 1rem 10rem;
  border-radius: 3rem;
  border: none;
  cursor: pointer;
}

.call-btn {
  background-color: darkslategrey;
  color: antiquewhite;
  font-size: 3rem;
  margin-left: 7rem;
}

.hangup-btn {
  background-color: darkred;
  color: white;
  font-size: 1.5rem;
  margin-left: 6rem;
  margin-top: 4rem;
}

.modal {
  padding: 5rem;
  background-color: whitesmoke;
  border-radius: 2rem;
  width: 40rem;
  height: 20rem;
}

.inner-modal {
  text-align: center;
}

.modal label {
  font-size: 1.5rem;
}
.modal input {
  margin: 1rem 7rem 3rem;
  display: block;
  padding: 1rem;
  border-radius: 3rem;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.19);
  border: none;
  width: 50%;
}

.connect-btn {
  background-color: #0c1d1d;
  color: whitesmoke;
  font-size: 1.5rem;
}
```

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Build_the_server")}}

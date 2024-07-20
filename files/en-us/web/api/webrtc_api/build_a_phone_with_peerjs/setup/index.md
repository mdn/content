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

4. To finish the setup, you'll want to copy the following [HTML](https://gist.github.com/lolaodelola/578d692e4700dfe2c9d239c80bbdbabc) and [CSS](https://gist.github.com/lolaodelola/b4498288b86ddce995603546a64abb29) files into the root of your project folder. You can name both files 'index', so the HTML file will be 'index.html' and the CSS file will be 'index.css'. You won't need to modify these much in the articles that follow.

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Build_the_server")}}

---
title: Writing a WebSocket server in JavaScript (Deno)
slug: Web/API/WebSockets_API/Writing_a_WebSocket_server_in_JavaScript_Deno
page-type: guide
---

{{DefaultAPISidebar("WebSockets API")}}

This example shows you how to create a WebSocket API server using Deno, with an accompanying web page.

Deno is a JavaScript runtime which supports TypeScript compiling and caching on the fly. Deno has built-in formatter, linter, test runner and more, and also implements many web APIs. By being compliant with the web standards, all Deno-specific APIs are implemented under the `Deno` namespace.

The [Deno website](https://deno.com/) provides instructions for installing Deno.

Deno version at the time of writing: `1.36`.

## Code

The code will be contained in two files, one for the server, and one for the client.

### Server

Create a `main.js` file. This file will contain the code for a simple HTTP server which will also serve the client HTML.

```js
Deno.serve({
  port: 80,
  handler: async (request) => {
    // If the request is a websocket upgrade,
    // we need to use the Deno.upgradeWebSocket helper
    if (request.headers.get("upgrade") === "websocket") {
      const { socket, response } = Deno.upgradeWebSocket(request);

      socket.onopen = () => {
        console.log("CONNECTED");
      };
      socket.onmessage = (event) => {
        console.log(`RECEIVED: ${event.data}`);
        socket.send("pong");
      };
      socket.onclose = () => console.log("DISCONNECTED");
      socket.onerror = (error) => console.error("ERROR:", error);

      return response;
    } else {
      // If the request is a normal HTTP request,
      // we serve the client HTML file.
      const file = await Deno.open("./index.html", { read: true });
      return new Response(file.readable);
    }
  },
});
```

`Deno.upgradeWebSocket()` upgrades the connection to a WebSocket connection, which is explained further in [Protocol upgrade mechanism](/en-US/docs/Web/HTTP/Protocol_upgrade_mechanism).

[`Deno.serve()`](https://docs.deno.com/api/deno/~/Deno.serve) uses `Deno.listen()` and `Deno.serveHttp()` under the hood, and is a higher-level interface to easily set up a HTTP server. Without it, the code would look something like this.

```js
for await (const conn of Deno.listen({ port: 80 })) {
  for await (const { request, respondWith } of Deno.serveHttp(conn)) {
    respondWith(handler(request));
  }
}
```

### Client

Create an `index.html` file. This file will contain a script that will ping the server every five seconds after a connection has been made.

```html
<!doctype html>
<h2>WebSocket Test</h2>
<p>Sends a ping every five seconds</p>
<div id="output"></div>
<script>
  const wsUri = "ws://127.0.0.1/";
  const output = document.querySelector("#output");
  const websocket = new WebSocket(wsUri);
  let pingInterval;

  function writeToScreen(message) {
    output.insertAdjacentHTML("afterbegin", `<p>${message}</p>`);
  }

  function sendMessage(message) {
    writeToScreen(`SENT: ${message}`);
    websocket.send(message);
  }

  websocket.onopen = (e) => {
    writeToScreen("CONNECTED");
    sendMessage("ping");
    pingInterval = setInterval(() => {
      sendMessage("ping");
    }, 5000);
  };

  websocket.onclose = (e) => {
    writeToScreen("DISCONNECTED");
    clearInterval(pingInterval);
  };

  websocket.onmessage = (e) => {
    writeToScreen(`RECEIVED: ${e.data}`);
  };

  websocket.onerror = (e) => {
    writeToScreen(`ERROR: ${e.data}`);
  };
</script>
```

## Running the code

With the two files, run the app using Deno.

```sh
deno run --allow-net=0.0.0.0:80 --allow-read=./index.html main.js
```

Deno requires us to give explicit permissions for what we can access on the host machine.

- `--allow-net=0.0.0.0:80` allows the app to attach to localhost on port 80
- `--allow-read=./index.html` allows access to the HTML file for the client

## See also

- [Writing WebSocket servers](/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers)

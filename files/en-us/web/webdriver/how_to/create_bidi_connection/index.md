---
title: Create a WebDriver BiDi connection
short-title: Create a BiDi connection
slug: Web/WebDriver/How_to/Create_BiDi_connection
page-type: how-to
sidebar: webdriver
---

The client and the browser communicate using the WebDriver BiDi protocol over a WebSocket connection. There are two ways a client can establish this connection.

In one method, when creating a classic WebDriver session, the WebDriver client sets the [`webSocketUrl`](/en-US/docs/Web/WebDriver/Reference/Capabilities/webSocketUrl) capability to `true` to request BiDi to be enabled; the client then starts the browser with the WebSocket port open.

In the other method, the WebDriver client starts the browser from the command line by passing the required flag and the desired port. This method works with Firefox directly; however, Chromium-based browsers require the additional Chromium BiDi wrapper package. The sections in this article walk you through this method using Firefox.

## Launching the browser

To use WebDriver BiDi, you need to enable it in the browser by launching it with the `--remote-debugging-port` flag. The browser then listens for incoming WebSocket connections on the specified port. Port `9222` is a conventional default for browser debugging, but you can use any available port, or specify `0` to let the system assign a free port automatically.

```bash
firefox --remote-debugging-port 9222
```

On macOS, `firefox` may not be in your PATH. In that case, use the full path instead:

```bash
/Applications/Firefox.app/Contents/MacOS/firefox --remote-debugging-port 9222
```

## Getting the WebSocket URL

Firefox exposes the BiDi WebSocket directly at:

```plain
ws://127.0.0.1:PORT/session
```

For example, if you launched Firefox with `--remote-debugging-port 9222`, the URL is `ws://127.0.0.1:9222/session`. If you specified port `0`, check the `stderr` output for a message like `WebDriver BiDi listening on ws://127.0.0.1:46249` to find the assigned port.

> [!NOTE]
> Firefox uses `127.0.0.1` rather than `localhost` for the BiDi WebSocket endpoint.

## Connecting to the WebSocket endpoint

With the WebSocket URL, use any WebSocket client to open a connection. Common options include the `ws` package for Node.js and the `websockets` package for Python.

Once connected, you can send WebDriver BiDi [commands](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#commands) as JSON messages and receive responses and [events](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules#events) from the browser. See [`session.new`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) to create a BiDi session after connecting.

## See also

- [WebDriver BiDi reference](/en-US/docs/Web/WebDriver/Reference/BiDi)
- [`session.new`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) command
- [WebSockets API](/en-US/docs/Web/API/WebSockets_API)
- [Chromium BiDi wrapper](https://github.com/GoogleChromeLabs/chromium-bidi)
- [WebDriver BiDi web client](https://firefox-dev.tools/bidi-web-client/web/)

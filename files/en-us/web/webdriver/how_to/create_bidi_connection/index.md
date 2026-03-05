---
title: Create a WebDriver BiDi connection
short-title: Create a BiDi connection
slug: Web/WebDriver/How_to/Create_BiDi_connection
page-type: how-to
sidebar: webdriver
---

The client and the browser communicate using the WebDriver BiDi protocol over a WebSocket connection. This article explains how to establish that connection.

## Launching the browser with remote debugging enabled

To use WebDriver BiDi, you need to enable it in the browser by launching it with the `--remote-debugging-port` flag. The browser then listens for incoming WebSocket connections on the specified port. Port `9222` is a conventional default for browser debugging, but you can use any available port.

```bash
firefox --remote-debugging-port 9222
```

On macOS, `firefox` may not be in your PATH. In that case, use the full path instead:

```bash
/Applications/Firefox.app/Contents/MacOS/firefox --remote-debugging-port 9222
```

> [!NOTE]
> For Chrome, enabling WebDriver BiDi requires a different setup using ChromeDriver with the `webSocketUrl` capability.

## Getting the WebSocket URL

Firefox exposes the BiDi WebSocket directly at:

```plain
ws://127.0.0.1:PORT/session
```

For example, if you launched Firefox with `--remote-debugging-port 9222`, the URL is `ws://127.0.0.1:9222/session`.

> [!NOTE]
> Firefox uses `127.0.0.1` rather than `localhost` for the BiDi WebSocket endpoint.

## Connecting to the WebSocket

With the WebSocket URL, use any WebSocket client to open a connection. Common options include the `ws` package for Node.js and the `websockets` package for Python.

Once connected, you can send WebDriver BiDi commands as JSON messages and receive responses and events from the browser. See [`session.new`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) to create a BiDi session after connecting.

## See also

- [WebDriver BiDi reference](/en-US/docs/Web/WebDriver/Reference/BiDi)
- [`session.new`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) command
- [WebSockets API](/en-US/docs/Web/API/WebSockets_API)

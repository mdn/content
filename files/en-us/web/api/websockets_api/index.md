---
title: The WebSocket API (WebSockets)
slug: Web/API/WebSockets_API
page-type: web-api-overview
browser-compat:
  - api.WebSocket
  - api.WebSocketStream
---

{{DefaultAPISidebar("WebSockets API")}}

The **WebSocket API** is an advanced technology that makes it possible to open a two-way interactive communication session between the user's browser and a server. With this API, you can send messages to a server and receive event-driven responses without having to poll the server for a reply.

> [!NOTE]
> While a WebSocket connection is functionally somewhat similar to standard Unix-style sockets, they are not related.

### WebSocketStream

The {{domxref("WebSocketStream")}} API is a modern reimagining of WebSocket client-side JavaScript functionality. It is promise-based, and therefore simpler to work with than the traditional {{domxref("WebSocket")}} API in the modern JavaScript scosystem. In addition, it uses the [Streams API](/en-US/docs/Web/API/Streams_API) to handle receiving and sending messages, meaning that socket connections can take advantage of stream [backpressure](/en-US/docs/Web/API/Streams_API/Concepts#backpressure) automatically, regulating the speed of reading or writing to avoid bottlenecks in the application. See [Using WebSocketStream to write a client](/en-US/docs/Web/API/WebSockets_API/Using_WebSocketStream) for more information.

## Interfaces

- [`WebSocket`](/en-US/docs/Web/API/WebSocket)
  - : The primary interface for connecting to a WebSocket server and then sending and receiving data on the connection.
- [`WebSocketStream`](/en-US/docs/Web/API/WebSocketStream) {{non-standard_inline}}
  - : Promise-based interface for connecting to a WebSocket server; uses [streams](/en-US/docs/Web/API/Streams_API) to send and receive data on the connection.
- [`CloseEvent`](/en-US/docs/Web/API/CloseEvent)
  - : The event sent by the WebSocket object when the connection closes.
- [`MessageEvent`](/en-US/docs/Web/API/MessageEvent)
  - : The event sent by the WebSocket object when a message is received from the server.

## Guides

- [Writing WebSocket client applications](/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
- [Writing WebSocket servers](/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers)
- [Writing a WebSocket server in C#](/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_server)
- [Writing a WebSocket server in Java](/en-US/docs/Web/API/WebSockets_API/Writing_a_WebSocket_server_in_Java)
- [Writing a WebSocket server in JavaScript (Deno)](/en-US/docs/Web/API/WebSockets_API/Writing_a_WebSocket_server_in_JavaScript_Deno)
- [Using WebSocketStream to write a client](/en-US/docs/Web/API/WebSockets_API/Using_WebSocketStream)

## Tools

- [AsyncAPI](https://www.asyncapi.com/): A specification for describing event-driven architectures based on protocols like WebSocket. You can use it to describe WebSocket-based APIs just as you would describe REST APIs with the OpenAPI specification. Learn [why you should consider using AsyncAPI with WebSocket](https://www.asyncapi.com/blog/websocket-part1) and [how to do so](https://www.asyncapi.com/blog/websocket-part2).
- [µWebSockets](https://github.com/uNetworking/uWebSockets): Highly scalable WebSocket server and client implementation for [C++11](https://isocpp.org/) and [Node.js](https://nodejs.org/).
- [Socket.IO](https://socket.io/): A long polling/WebSocket based third party transfer protocol for [Node.js](https://nodejs.org/).
- [SocketCluster](https://socketcluster.io/): A pub/sub WebSocket framework for [Node.js](https://nodejs.org/) with a focus on scalability.
- [WebSocket-Node](https://github.com/theturtle32/WebSocket-Node): A WebSocket server API implementation for [Node.js](https://nodejs.org/).
- [Total.js](https://www.totaljs.com/): Web application framework for [Node.js](https://nodejs.org/en) (Example: [WebSocket chat](https://github.com/totaljs/examples/tree/master/websocket))
- [SignalR](https://dotnet.microsoft.com/en-us/apps/aspnet/signalr): SignalR will use WebSockets under the covers when it's available, and gracefully fallback to other techniques and technologies when it isn't, while your application code stays the same.
- [Caddy](https://caddyserver.com/): A web server capable of proxying arbitrary commands (stdin/stdout) as a websocket.
- [ws](https://github.com/websockets/ws): a popular WebSocket client & server library for [Node.js](https://nodejs.org/en).
- [cowboy](https://github.com/ninenines/cowboy): Cowboy is a small, fast and modern HTTP server for Erlang/OTP with WebSocket support.
- [ZeroMQ](https://zeromq.org/): ZeroMQ is embeddable networking library that carries messages across in-process, IPC, TCP, UDP, TIPC, multicast and WebSocket.
- [WebSocket King](https://websocketking.com/): A client tool to help develop, test and work with WebSocket servers.
- [PHP WebSocket Server](https://github.com/napengam/phpWebSocketServer): Server written in PHP to handle connections via websockets `wss://` or `ws://` and normal sockets over `ssl://`, `tcp://`
- [Django Channels](https://channels.readthedocs.io/en/stable/index.html): Django library that adds support for WebSockets (and other protocols that require long running asynchronous connections).
- [(Phoenix) Channels](https://hexdocs.pm/phoenix/channels.html): Scalable real-time communication using WebSocket in Elixir Phoenix framework.
- [Phoenix LiveView](https://github.com/phoenixframework/phoenix_live_view): Real-time interactive web experiences through WebSocket in Elixir Phoenix framework.
- [Flask-SocketIO](https://flask-socketio.readthedocs.io/en/latest/): gives Flask applications access to low latency bi-directional communications between the clients and the server.
- [Gorilla WebSocket](https://pkg.go.dev/github.com/gorilla/websocket): Gorilla WebSocket is a [Go](https://go.dev/) implementation of the WebSocket protocol.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [RFC 6455 — The WebSocket Protocol](https://datatracker.ietf.org/doc/html/rfc6455)
- [WebSocket API Specification](https://websockets.spec.whatwg.org/)
- [Server-Sent Events](/en-US/docs/Web/API/Server-sent_events)

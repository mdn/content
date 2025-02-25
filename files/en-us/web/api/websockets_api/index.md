---
title: The WebSocket API (WebSockets)
slug: Web/API/WebSockets_API
page-type: web-api-overview
browser-compat:
  - api.WebSocket
  - api.WebSocketStream
---

{{DefaultAPISidebar("WebSockets API")}}{{AvailableInWorkers}}

The **WebSocket API** makes it possible to open a two-way interactive communication session between the user's browser and a server. With this API, you can send messages to a server and receive responses without having to poll the server for a reply.

The WebSocket API provides two alternative mechanisms for creating and using web socket connections: the {{domxref("WebSocket")}} interface and the {{domxref("WebSocketStream")}} interface.

- The `WebSocket` interface is stable and has good browser and server support. However it doesn't support [backpressure](/en-US/docs/Web/API/Streams_API/Concepts#backpressure). As a result, when messages arrive faster than the application can process them it will either fill up the device's memory by buffering those messages, become unresponsive due to 100% CPU usage, or both.
- The `WebSocketStream` interface is a {{jsxref("Promise")}}-based alternative to `WebSocket`. It uses the [Streams API](/en-US/docs/Web/API/Streams_API) to handle receiving and sending messages, meaning that socket connections can take advantage of stream backpressure automatically, regulating the speed of reading or writing to avoid bottlenecks in the application. However, `WebSocketStream` is non-standard and currently only supported in one rendering engine.

Additionally, the [WebTransport API](/en-US/docs/Web/API/WebTransport_API) is expected to replace the WebSocket API for many applications. WebTransport is a versatile, low-level API that provides backpressure and many other features not supported by either `WebSocket` or `WebSocketStream`, such as unidirectional streams, out-of-order delivery, and unreliable data transmission via datagrams. WebTransport is more complex to use than WebSockets and its cross-browser support is not as wide, but it enables the implementation of sophisticated solutions. If standard WebSocket connections are a good fit for your use case and you need wide browser compatibility, you should employ the WebSockets API to get up and running quickly. However, if your application requires a non-standard custom solution, then you should use the WebTransport API.

> [!NOTE]
> While a WebSocket connection is functionally somewhat similar to standard Unix-style sockets, they are not related.

## Interfaces

- [`WebSocket`](/en-US/docs/Web/API/WebSocket)
  - : The primary interface for connecting to a WebSocket server and then sending and receiving data on the connection.
- [`WebSocketStream`](/en-US/docs/Web/API/WebSocketStream) {{non-standard_inline}}
  - : Promise-based interface for connecting to a WebSocket server; uses [streams](/en-US/docs/Web/API/Streams_API) to send and receive data on the connection.
- [`CloseEvent`](/en-US/docs/Web/API/CloseEvent)
  - : The event sent by the WebSocket object when the connection closes.
- [`MessageEvent`](/en-US/docs/Web/API/MessageEvent)
  - : The event sent by the WebSocket object when a message is received from the server.

## Related HTTP headers

The HTTP headers are used in the [WebSocket handshake](/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake):

- {{HTTPHeader("Sec-WebSocket-Key")}}
  - : An HTTP request header that contains a nonce from the client.
    This is used in the [WebSocket opening handshake](/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) to verify that the client explicitly intends to open a WebSocket.
    It is added automatically by the browser.
- {{HTTPHeader("Sec-WebSocket-Accept")}}
  - : An HTTP {{glossary("response header")}} used in the _WebSocket opening handshake_ to indicate that the server is willing to upgrade to a WebSocket connection.
    The value in the directive is calculated from the value of `Sec-WebSocket-Key` in the corresponding request.
- {{HTTPHeader("Sec-WebSocket-Version")}}
  - : An HTTP header that in requests indicates the version of the WebSocket protocol understood by the client.
    In responses, it is sent only if the requested protocol version is not supported by the server, and lists the versions that the server supports.
- {{HTTPHeader("Sec-WebSocket-Protocol")}}
  - : An HTTP header that in requests indicates the sub-protocols supported by the client in preferred order.
    In responses, it indicates the sub-protocol selected by the server from the client's preferences.
- {{HTTPHeader("Sec-WebSocket-Extensions")}}
  - : An HTTP header that in requests indicates the WebSocket extensions supported by the client in preferred order.
    In responses, it indicates the extension selected by the server from the client's preferences.

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

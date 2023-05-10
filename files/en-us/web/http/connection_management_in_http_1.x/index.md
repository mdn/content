---
title: Connection management in HTTP/1.x
slug: Web/HTTP/Connection_management_in_HTTP_1.x
page-type: guide
---

{{HTTPSidebar}}

Connection management is a key topic in HTTP: opening and maintaining connections largely impacts the performance of websites and Web applications. In HTTP/1.x, there are several models: _short-lived connections_, _persistent connections_, and _HTTP pipelining._

HTTP mostly relies on TCP for its transport protocol, providing a connection between the client and the server. In its infancy, HTTP used a single model to handle such connections. These connections were short-lived: a new one created each time a request needed sending, and closed once the answer had been received.

This simple model held an innate limitation on performance: opening each TCP connection is a resource-consuming operation. Several messages must be exchanged between the client and the server. Network latency and bandwidth affect performance when a request needs sending. Modern Web pages require many requests (a dozen or more) to serve the amount of information needed, proving this earlier model inefficient.

Two newer models were created in HTTP/1.1. The persistent-connection model keeps connections opened between successive requests, reducing the time needed to open new connections. The HTTP pipelining model goes one step further, by sending several successive requests without even waiting for an answer, reducing much of the latency in the network.

![Compares the performance of the three HTTP/1.x connection models: short-lived connections, persistent connections, and HTTP pipelining.](http1_x_connections.png)

> **Note:** HTTP/2 adds additional models for connection management.

It's important to note that connection management in HTTP applies to the connection between two consecutive nodes, which is [hop-by-hop](/en-US/docs/Web/HTTP/Headers#hop-by-hop_headers) and not [end-to-end](/en-US/docs/Web/HTTP/Headers#end-to-end_headers). The model used in connections between a client and its first proxy may differ from the model between a proxy and the destination server (or any intermediate proxies). The HTTP headers involved in defining the connection model, like {{HTTPHeader("Connection")}} and {{HTTPHeader("Keep-Alive")}}, are [hop-by-hop](/en-US/docs/Web/HTTP/Headers#hop-by-hop_headers) headers with their values able to be changed by intermediary nodes.

A related topic is the concept of HTTP connection upgrades, wherein an HTTP/1.1 connection is upgraded to a different protocol, such as TLS/1.0, WebSocket, or even HTTP/2 in cleartext. This [protocol upgrade mechanism](/en-US/docs/Web/HTTP/Protocol_upgrade_mechanism) is documented in more detail elsewhere.

## Short-lived connections

The original model of HTTP, and the default one in HTTP/1.0, is _short-lived connections_. Each HTTP request is completed on its own connection; this means a TCP handshake happens before each HTTP request, and these are serialized.

The TCP handshake itself is time-consuming, but a TCP connection adapts to its load, becoming more efficient with more sustained (or warm) connections. Short-lived connections do not make use of this efficiency feature of TCP, and performance degrades from optimum by persisting to transmit over a new, cold connection.

This model is the default model used in HTTP/1.0 (if there is no {{HTTPHeader("Connection")}} header, or if its value is set to `close`). In HTTP/1.1, this model is only used when the {{HTTPHeader("Connection")}} header is sent with a value of `close`.

> **Note:** Unless dealing with a very old system, which doesn't support a persistent connection, there is no compelling reason to use this model.

## Persistent connections

Short-lived connections have two major hitches: the time taken to establish a new connection is significant, and performance of the underlying TCP connection gets better only when this connection has been in use for some time (warm connection). To ease these problems, the concept of a _persistent connection_ has been designed, even prior to HTTP/1.1. Alternatively this may be called a _keep-alive connection_.

A persistent connection is one which remains open for a period of time, and can be reused for several requests, saving the need for a new TCP handshake, and utilizing TCP's performance enhancing capabilities. This connection will not stay open forever: idle connections are closed after some time (a server may use the {{HTTPHeader("Keep-Alive")}} header to specify a minimum time the connection should be kept open).

Persistent connections also have drawbacks; even when idling they consume server resources, and under heavy load, {{glossary("DoS attack", "DoS attacks")}} can be conducted. In such cases, using non-persistent connections, which are closed as soon as they are idle, can provide better performance.

HTTP/1.0 connections are not persistent by default. Setting {{HTTPHeader("Connection")}} to anything other than `close`, usually `retry-after`, will make them persistent.

In HTTP/1.1, persistence is the default, and the header is no longer needed (but it is often added as a defensive measure against cases requiring a fallback to HTTP/1.0).

## HTTP pipelining

> **Note:** HTTP pipelining is not activated by default in modern browsers:
>
> - Buggy [proxies](https://en.wikipedia.org/wiki/Proxy_server) are still common and these lead to strange and erratic behaviors that Web developers cannot foresee and diagnose easily.
> - Pipelining is complex to implement correctly: the size of the resource being transferred, the effective [RTT](https://en.wikipedia.org/wiki/Round-trip_delay_time) that will be used, as well as the effective bandwidth, have a direct incidence on the improvement provided by the pipeline. Without knowing these, important messages may be delayed behind unimportant ones. The notion of important even evolves during page layout! HTTP pipelining therefore brings a marginal improvement in most cases only.
> - Pipelining is subject to the [HOL](https://en.wikipedia.org/wiki/Head-of-line_blocking) problem.
>
> For these reasons, pipelining has been superseded by a better algorithm, _multiplexing_, that is used by HTTP/2.

By default, [HTTP](/en-US/docs/Web/HTTP) requests are issued sequentially. The next request is only issued once the response to the current request has been received. As they are affected by network latencies and bandwidth limitations, this can result in significant delay before the next request is _seen_ by the server.

Pipelining is the process to send successive requests, over the same persistent connection, without waiting for the answer. This avoids latency of the connection. Theoretically, performance could also be improved if two HTTP requests were to be packed into the same TCP message. The typical [MSS](https://en.wikipedia.org/wiki/Maximum_segment_size) (Maximum Segment Size), is big enough to contain several simple requests, although the demand in size of HTTP requests continues to grow.

Not all types of HTTP requests can be pipelined: only {{glossary("idempotent")}} methods, that is {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}}, {{HTTPMethod("PUT")}} and {{HTTPMethod("DELETE")}}, can be replayed safely. Should a failure happen, the pipeline content can be repeated.

Today, every HTTP/1.1-compliant proxy and server should support pipelining, though many have limitations in practice: a significant reason no modern browser activates this feature by default.

## Domain sharding

> **Note:** Unless you have a very specific immediate need, don't use this deprecated technique; switch to HTTP/2 instead. In HTTP/2, domain sharding is no longer useful: the HTTP/2 connection is able to handle parallel unprioritized requests very well. Domain sharding is even detrimental to performance. Most HTTP/2 implementations use a technique called [connection coalescing](https://daniel.haxx.se/blog/2016/08/18/http2-connection-coalescing/) to revert eventual domain sharding.

As an HTTP/1.x connection is serializing requests, even without any ordering, it can't be optimal without large enough available bandwidth. As a solution, browsers open several connections to each domain, sending parallel requests. Default was once 2 to 3 connections, but this has now increased to a more common use of 6 parallel connections. There is a risk of triggering [DoS](/en-US/docs/Glossary/DOS_attack) protection on the server side if attempting more than this number.

If the server wishes a faster website or application response, it is possible for the server to force the opening of more connections. For example, instead of having all resources on the same domain, say `www.example.com`, it could split over several domains, `www1.example.com`, `www2.example.com`, `www3.example.com`. Each of these domains resolves to the _same_ server, and the Web browser will open 6 connections to each (in our example, boosting the connections to 18). This technique is called _domain sharding_.

![Without domain sharding, a client requests six images from a domain with a maximum of two requests taking place in parallel. With domain sharding, the images are available from two domains and the client can run four requests in parallel, downloading the images in less time.](httpsharding.png)

## Conclusion

Improved connection management allows considerable boosting of performance in HTTP. With HTTP/1.1 or HTTP/1.0, using a persistent connection – at least until it becomes idle – leads to the best performance. However, the failure of pipelining has lead to designing superior connection management models, which have been incorporated into HTTP/2.

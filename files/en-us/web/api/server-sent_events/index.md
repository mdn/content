---
title: Server-sent events
slug: Web/API/Server-sent_events
page-type: web-api-overview
spec-urls: https://html.spec.whatwg.org/multipage/server-sent-events.html#server-sent-events
---

{{DefaultAPISidebar("Server Sent Events")}}

Traditionally, a web page has to send a request to the server to receive new data; that is, the page requests data from the server. With server-sent events, it's possible for a server to send new data to a web page at any time, by pushing messages to the web page. These incoming messages can be treated as _[Events](/en-US/docs/Web/API/Event) + data_ inside the web page.

{{AvailableInWorkers}}

> **Note:** Firefox does not currently support the use of server-sent events in service workers (it does support them in dedicated and shared workers). See [Firefox bug 1681218](https://bugzil.la/1681218).

## Concepts and usage

To learn how to use server-sent events, see our article [Using server-sent events](/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events).

## Interfaces

- {{domxref("EventSource")}}
  - : Defines all the features that handle connecting to a server, receiving events/data, errors, closing a connection, etc.

## Examples

- [Simple SSE demo using PHP](https://github.com/mdn/dom-examples/tree/main/server-sent-events)

## Specifications

{{Specifications}}

## See also

### Tools

- [Mercure: a real-time communication protocol (publish-subscribe) built on top of SSE](https://mercure.rocks)
- [EventSource polyfill for Node.js](https://github.com/EventSource/eventsource)
- Remy Sharp's [EventSource polyfill](https://github.com/remy/polyfills/blob/master/EventSource.js)
- Yaffle's [EventSource polyfill](https://github.com/Yaffle/EventSource)
- Rick Waldron's [jquery plugin](https://github.com/rwaldron/jquery.eventsource)
- intercooler.js [declarative SSE support](https://intercoolerjs.org/docs.html#sse)

### Related Topics

- [AJAX](/en-US/docs/Web/Guide/AJAX)
- [JavaScript](/en-US/docs/Web/JavaScript)
- [WebSockets](/en-US/docs/Web/API/WebSockets_API)

### Other resources

- A [Twitter like application](https://hacks.mozilla.org/2011/06/a-wall-powered-by-eventsource-and-server-sent-events/) powered by server-sent events and [its code on GitHub](https://github.com/mozilla/webowonder-demos/tree/master/demos/friends%20timeline).
- [HTML5 and Server-sent events](https://dsheiko.com/weblog/html5-and-server-sent-events/)

---
title: EventSource
slug: Web/API/EventSource
page-type: web-api-interface
browser-compat: api.EventSource
---

{{APIRef("Server Sent Events")}}

The **`EventSource`** interface is web content's interface to [server-sent events](/en-US/docs/Web/API/Server-sent_events).

An `EventSource` instance opens a persistent connection to an [HTTP](/en-US/docs/Web/HTTP) server, which sends [events](/en-US/docs/Learn/JavaScript/Building_blocks/Events) in `text/event-stream` format. The connection remains open until closed by calling {{domxref("EventSource.close()")}}.

{{InheritanceDiagram}}

Once the connection is opened, incoming messages from the server are delivered to your code in the form of events. If there is an event field in the incoming message, the triggered event is the same as the event field value. If no event field is present, then a generic {{domxref("EventSource/message_event", "message")}} event is fired.

Unlike [WebSockets](/en-US/docs/Web/API/WebSockets_API), server-sent events are unidirectional; that is, data messages are delivered in one direction, from the server to the client (such as a user's web browser). That makes them an excellent choice when there's no need to send data from the client to the server in message form. For example, `EventSource` is a useful approach for handling things like social media status updates, news feeds, or delivering data into a [client-side storage](/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage) mechanism like [IndexedDB](/en-US/docs/Web/API/IndexedDB_API) or [web storage](/en-US/docs/Web/API/Web_Storage_API).

> **Warning:** When **not used over HTTP/2**, SSE suffers from a limitation to the maximum number of open connections, which can be specially painful when opening various tabs as the limit is _per browser_ and set to a very low number (6). The issue has been marked as "Won't fix" in [Chrome](https://crbug.com/275955) and [Firefox](https://bugzil.la/906896). This limit is per browser + domain, so that means that you can open 6 SSE connections across all of the tabs to `www.example1.com` and another 6 SSE connections to `www.example2.com.` (from [Stackoverflow](https://stackoverflow.com/questions/5195452/websockets-vs-server-sent-events-eventsource/5326159)). When using HTTP/2, the maximum number of simultaneous _HTTP streams_ is negotiated between the server and the client (defaults to 100).

## Constructor

- {{domxref("EventSource.EventSource", "EventSource()")}}
  - : Creates a new `EventSource` to handle receiving server-sent events from a specified URL, optionally in credentials mode.

## Instance properties

_This interface also inherits properties from its parent, {{domxref("EventTarget")}}._

- {{domxref("EventSource.readyState")}} {{ReadOnlyInline}}
  - : A number representing the state of the connection. Possible values are `CONNECTING` (`0`), `OPEN` (`1`), or `CLOSED` (`2`).
- {{domxref("EventSource.url")}} {{ReadOnlyInline}}
  - : A string representing the URL of the source.
- {{domxref("EventSource.withCredentials")}} {{ReadOnlyInline}}
  - : A boolean value indicating whether the `EventSource` object was instantiated with cross-origin ([CORS](/en-US/docs/Web/HTTP/CORS)) credentials set (`true`), or not (`false`, the default).

## Instance methods

_This interface also inherits methods from its parent, {{domxref("EventTarget")}}._

- {{domxref("EventSource.close()")}}
  - : Closes the connection, if any, and sets the `readyState` attribute to `CLOSED`. If the connection is already closed, the method does nothing.

## Events

- {{domxref("EventSource/error_event", "error")}}
  - : Fired when a connection to an event source failed to open.
- {{domxref("EventSource/message_event", "message")}}
  - : Fired when data is received from an event source.
- {{domxref("EventSource/open_event", "open")}}
  - : Fired when a connection to an event source has opened.

Additionally, the event source itself may send messages with an event field, which will create ad hoc events keyed to that value.

## Examples

In this basic example, an `EventSource` is created to receive unnamed events from the server; a page with the name `sse.php` is responsible for generating the events.

```js
const evtSource = new EventSource("sse.php");
const eventList = document.querySelector("ul");

evtSource.onmessage = (e) => {
  const newElement = document.createElement("li");

  newElement.textContent = `message: ${e.data}`;
  eventList.appendChild(newElement);
};
```

Each received event causes our `EventSource` object's `onmessage` event handler to be run. It, in turn, creates a new {{HTMLElement("li")}} element and writes the message's data into it, then appends the new element to the list element already in the document.

> **Note:** You can find a full example on GitHub — see [Simple SSE demo using PHP](https://github.com/mdn/dom-examples/tree/main/server-sent-events).

To listen to named events, you'll require a listener for each type of event sent.

```js
const sse = new EventSource("/api/v1/sse");

/*
 * This will listen only for events
 * similar to the following:
 *
 * event: notice
 * data: useful data
 * id: someid
 */
sse.addEventListener("notice", (e) => {
  console.log(e.data);
});

/*
 * Similarly, this will listen for events
 * with the field `event: update`
 */
sse.addEventListener("update", (e) => {
  console.log(e.data);
});

/*
 * The event "message" is a special case, as it
 * will capture events without an event field
 * as well as events that have the specific type
 * `event: message` It will not trigger on any
 * other event type.
 */
sse.addEventListener("message", (e) => {
  console.log(e.data);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Server-sent events](/en-US/docs/Web/API/Server-sent_events)
- [Using server-sent events](/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events)

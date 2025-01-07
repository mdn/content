---
title: Using server-sent events
slug: Web/API/Server-sent_events/Using_server-sent_events
page-type: guide
browser-compat: api.EventSource
---

{{DefaultAPISidebar("Server Sent Events")}}

Developing a web application that uses [server-sent events](/en-US/docs/Web/API/Server-sent_events) is straightforward. You'll need a bit of code on the server to stream events to the front-end, but the client side code works almost identically to [websockets](/en-US/docs/Web/API/WebSockets_API) in part of handling incoming events. This is a one-way connection, so you can't send events from a client to a server.

## Receiving events from the server

The server-sent event API is contained in the {{domxref("EventSource")}} interface.

### Creating an `EventSource` instance

To open a connection to the server to begin receiving events from it, create a new `EventSource` object with the URL of a script that generates the events. For example:

```js
const evtSource = new EventSource("sse-demo.php");
```

If the event generator script is hosted on a different origin, a new `EventSource` object should be created with both the URL and an options dictionary. For example, assuming the client script is on `example.com`:

```js
const evtSource = new EventSource("//api.example.com/sse-demo.php", {
  withCredentials: true,
});
```

### Listening for `message` events

Messages sent from the server that don't have an [`event`](#event) field are received as `message` events. To receive message events, attach a handler for the {{domxref("EventSource.message_event", "message")}} event:

```js
evtSource.onmessage = (event) => {
  const newElement = document.createElement("li");
  const eventList = document.getElementById("list");

  newElement.textContent = `message: ${event.data}`;
  eventList.appendChild(newElement);
};
```

This code listens for incoming message events and appends the message text to a list in the document's HTML.

### Listening for custom events

Messages from the server that do have an `event` field defined are received as events with the name given in `event`. For example:

```js
evtSource.addEventListener("ping", (event) => {
  const newElement = document.createElement("li");
  const eventList = document.getElementById("list");
  const time = JSON.parse(event.data).time;
  newElement.textContent = `ping at ${time}`;
  eventList.appendChild(newElement);
});
```

This code will be called whenever the server sends a message with the `event` field set to `ping`; it then parses the JSON in the `data` field and outputs that information.

> [!WARNING]
> When **not used over HTTP/2**, SSE suffers from a limitation to the maximum number of open connections, which can be especially painful when opening multiple tabs, as the limit is _per browser_ and is set to a very low number (6). The issue has been marked as "Won't fix" in [Chrome](https://crbug.com/275955) and [Firefox](https://bugzil.la/906896). This limit is per browser + domain, which means that you can open 6 SSE connections across all of the tabs to `www.example1.com` and another 6 SSE connections to `www.example2.com` (per [Stack Overflow](https://stackoverflow.com/questions/5195452/websockets-vs-server-sent-events-eventsource/5326159)). When using HTTP/2, the maximum number of simultaneous _HTTP streams_ is negotiated between the server and the client (defaults to 100).

## Sending events from the server

The server-side script that sends events needs to respond using the MIME type `text/event-stream`. Each notification is sent as a block of text terminated by a pair of newlines. For details on the format of the event stream, see [Event stream format](#event_stream_format).

The {{Glossary("PHP")}} code for the example we're using here follows:

```php
date_default_timezone_set("America/New_York");
header("X-Accel-Buffering: no");
header("Content-Type: text/event-stream");
header("Cache-Control: no-cache");

$counter = rand(1, 10);
while (true) {
  // Every second, send a "ping" event.

  echo "event: ping\n";
  $curDate = date(DATE_ISO8601);
  echo 'data: {"time": "' . $curDate . '"}';
  echo "\n\n";

  // Send a simple message at random intervals.

  $counter--;

  if (!$counter) {
    echo 'data: This is a message at time ' . $curDate . "\n\n";
    $counter = rand(1, 10);
  }

  if (ob_get_contents()) {
      ob_end_flush();
  }
  flush();

  // Break the loop if the client aborted the connection (closed the page)

  if (connection_aborted()) break;

  sleep(1);
}
```

The code above generates an event every second, with the event type "ping". Each event's data is a JSON object containing the ISO 8601 timestamp corresponding to the time at which the event was generated. At random intervals, a simple message (with no event type) is sent.
The loop will keep running independent of the connection status, so a check is included
to break the loop if the connection has been closed (e.g. client closes the page).

> [!NOTE]
> You can find a full example that uses the code shown in this article on GitHub — see [Simple SSE demo using PHP](https://github.com/mdn/dom-examples/tree/main/server-sent-events).

## Error handling

When problems occur (such as a network timeout or issues pertaining to [access control](/en-US/docs/Web/HTTP/CORS)), an error event is generated. You can take action on this programmatically by implementing the `onerror` callback on the `EventSource` object:

```js
evtSource.onerror = (err) => {
  console.error("EventSource failed:", err);
};
```

## Closing event streams

By default, if the connection between the client and server closes, the connection is restarted. The connection is terminated with the `.close()` method.

```js
evtSource.close();
```

## Event stream format

The event stream is a simple stream of text data which must be encoded using [UTF-8](/en-US/docs/Glossary/UTF-8). Messages in the event stream are separated by a pair of newline characters. A colon as the first character of a line is in essence a comment, and is ignored.

> [!NOTE]
> The comment line can be used to prevent connections from timing out; a server can send a comment periodically to keep the connection alive.

Each message consists of one or more lines of text listing the fields for that message. Each field is represented by the field name, followed by a colon, followed by the text data for that field's value.

### Fields

Each message received has some combination of the following fields, one per line:

- `event`
  - : A string identifying the type of event described. If this is specified, an event will be dispatched on the browser to the listener for the specified event name; the website source code should use `addEventListener()` to listen for named events. The `onmessage` handler is called if no event name is specified for a message.
- `data`
  - : The data field for the message. When the `EventSource` receives multiple consecutive lines that begin with `data:`, [it concatenates them](https://html.spec.whatwg.org/multipage/#dispatchMessage), inserting a newline character between each one. Trailing newlines are removed.
- `id`
  - : The event ID to set the [`EventSource`](/en-US/docs/Web/API/EventSource) object's last event ID value.
- `retry`
  - : The reconnection time. If the connection to the server is lost, the browser will wait for the specified time before attempting to reconnect. This must be an integer, specifying the reconnection time in milliseconds. If a non-integer value is specified, the field is ignored.

All other field names are ignored.

> [!NOTE]
> If a line doesn't contain a colon, the entire line is treated as the field name with an empty value string.

### Examples

#### Data-only messages

In the following example, there are three messages sent. The first is just a comment, since it starts with a colon character. As mentioned previously, this can be useful as a keep-alive mechanism if messages might not be sent regularly.

The second message contains a data field with the value "some text". The third message contains a data field with the value "another message\nwith two lines". Note the newline special character in the value.

```bash
: this is a test stream

data: some text

data: another message
data: with two lines
```

#### Named events

This example sends named events. Each has an event name specified by the `event` field, and a `data` field whose value is an appropriate JSON string with the data needed for the client to act on the event. The `data` field could, of course, have any string data; it doesn't have to be JSON.

```bash
event: userconnect
data: {"username": "bobby", "time": "02:33:48"}

event: usermessage
data: {"username": "bobby", "time": "02:34:11", "text": "Hi everyone."}

event: userdisconnect
data: {"username": "bobby", "time": "02:34:23"}

event: usermessage
data: {"username": "sean", "time": "02:34:36", "text": "Bye, bobby."}
```

#### Mixing and matching

You don't have to use just unnamed messages or typed events; you can mix them together in a single event stream.

```bash
event: userconnect
data: {"username": "bobby", "time": "02:33:48"}

data: Here's a system message of some kind that will get used
data: to accomplish some task.

event: usermessage
data: {"username": "bobby", "time": "02:34:11", "text": "Hi everyone."}
```

## Browser compatibility

{{Compat}}

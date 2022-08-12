---
title: 'RemotePlayback: connect event'
slug: Web/API/RemotePlayback/connect_event
page-type: web-api-event
tags:
  - API
  - Event
  - Reference
  - onconnect
  - RemotePlayback
browser-compat: api.RemotePlayback.connect_event
---
{{APIRef()}}

The **`connect`** event of the {{domxref("RemotePlayback")}} interface fires when the user agent connects to the remote device.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('connect', (event) => { });

onconnect = (event) => { };
```

## Event type

A generic {{domxref("Event")}}.

## Example

In the following example the value of {{domxref("RemotePlayback.state")}} is printed to the console when the user agent successfully connects.

```js
RemotePlayback.onconnect = () => {
  console.log(RemotePlayback.state);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

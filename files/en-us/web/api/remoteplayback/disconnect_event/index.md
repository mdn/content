---
title: "RemotePlayback: disconnect event"
short-title: disconnect
slug: Web/API/RemotePlayback/disconnect_event
page-type: web-api-event
browser-compat: api.RemotePlayback.disconnect_event
---

{{APIRef()}}

The **`disconnect`** event of the {{domxref("RemotePlayback")}} interface fires when the user agent disconnects from the remote device.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("disconnect", (event) => {});

ondisconnect = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Example

In the following example the value of {{domxref("RemotePlayback.state")}} is printed to the console when the user agent disconnects from the remote device.

```js
RemotePlayback.disconnect = () => {
  console.log(RemotePlayback.state);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

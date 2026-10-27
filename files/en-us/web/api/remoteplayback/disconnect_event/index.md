---
title: "RemotePlayback: disconnect event"
short-title: disconnect
slug: Web/API/RemotePlayback/disconnect_event
page-type: web-api-event
browser-compat: api.RemotePlayback.disconnect_event
---

{{APIRef("Remote Playback API")}}

The **`disconnect`** event of the {{domxref("RemotePlayback")}} interface fires when the user agent disconnects from the remote device.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("disconnect", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
ondisconnect = (event) => { }
```

## Event type

A generic {{domxref("Event")}}.

## Example

In the following example the value of {{domxref("RemotePlayback.state")}} is printed to the console when the user agent disconnects from the remote device.

```js
RemotePlayback.ondisconnect = () => {
  console.log(RemotePlayback.state);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

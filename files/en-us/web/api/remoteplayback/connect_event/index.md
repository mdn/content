---
title: "RemotePlayback: connect event"
short-title: connect
slug: Web/API/RemotePlayback/connect_event
page-type: web-api-event
browser-compat: api.RemotePlayback.connect_event
---

{{APIRef("Remote Playback API")}}

The **`connect`** event of the {{domxref("RemotePlayback")}} interface fires when the user agent connects to the remote device.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("connect", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onconnect = (event) => { }
```

## Event type

A generic {{domxref("Event")}}.

## Example

In the following example the value of {{domxref("RemotePlayback.state")}} is printed to the console when the user agent successfully connects.

```js
RemotePlayback.onconnect = () => {
  console.log(RemotePlayback.state);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

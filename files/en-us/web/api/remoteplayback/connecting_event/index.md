---
title: "RemotePlayback: connecting event"
short-title: connecting
slug: Web/API/RemotePlayback/connecting_event
page-type: web-api-event
browser-compat: api.RemotePlayback.connecting_event
---

{{APIRef("Remote Playback API")}}

The **`connecting`** event of the {{domxref("RemotePlayback")}} interface fires when the user agent initiates remote playback.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("connecting", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onconnecting = (event) => { }
```

## Event type

A generic {{domxref("Event")}}.

## Example

In the following example the value of {{domxref("RemotePlayback.state")}} is printed to the console when the user agent initiates a connection.

```js
RemotePlayback.onconnecting = () => {
  console.log(RemotePlayback.state);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

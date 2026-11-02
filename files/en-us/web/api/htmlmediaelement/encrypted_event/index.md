---
title: "HTMLMediaElement: encrypted event"
short-title: encrypted
slug: Web/API/HTMLMediaElement/encrypted_event
page-type: web-api-event
browser-compat: api.HTMLMediaElement.encrypted_event
---

{{APIRef("Encrypted Media Extensions")}}

The `encrypted` event is fired when initialization data is found in the media that indicates it is encrypted.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("encrypted", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onencrypted = (event) => { }
```

## Event type

A {{domxref("MediaEncryptedEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("MediaEncryptedEvent")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLAudioElement")}}
- {{domxref("HTMLVideoElement")}}
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
- {{domxref("MediaEncryptedEvent")}}

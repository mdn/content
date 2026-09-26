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

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("encrypted", (event) => { })

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

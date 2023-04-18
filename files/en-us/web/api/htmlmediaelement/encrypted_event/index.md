---
title: "HTMLMediaElement: encrypted event"
short-title: encrypted
slug: Web/API/HTMLMediaElement/encrypted_event
page-type: web-api-event
browser-compat: api.HTMLMediaElement.encrypted_event
---

{{APIRef("EncryptedMediaExtensions")}}

The `encrypted` event is fired when the media encounters some initialization data indicating it is encrypted.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("encrypted", (event) => {});

onencrypted = (event) => {};
```

## Event type

A {{domxref("MediaEncryptedEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("MediaEncryptedEvent")}}

## Event properties

- {{domxref("MediaEncryptedEvent.initDataType")}} {{ReadOnlyInline}}
  - : Returns a case-sensitive string with the _type_ of the format of the initialization data found.
- {{domxref("MediaEncryptedEvent.initData")}} {{ReadOnlyInline}}
  - : Returns an {{jsxref("ArrayBuffer")}} containing the initialization data found. If there is no initialization data associated with the format, it returns `null`.

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

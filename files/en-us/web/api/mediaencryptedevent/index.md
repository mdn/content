---
title: MediaEncryptedEvent
slug: Web/API/MediaEncryptedEvent
page-type: web-api-interface
browser-compat: api.MediaEncryptedEvent
---

{{APIRef("Encrypted Media Extensions")}}

The **`MediaEncryptedEvent`** interface of the [Encrypted Media Extensions API](/en-US/docs/Web/API/Encrypted_Media_Extensions_API) contains the information associated with an {{domxref("HTMLMediaElement/encrypted_event", "encrypted")}} event sent to a {{domxref("HTMLMediaElement")}} when some initialization data is encountered in the media.

{{InheritanceDiagram}}

## Constructor

- {{domxref("MediaEncryptedEvent.MediaEncryptedEvent", "MediaEncryptedEvent()")}}
  - : Creates a new instance of a `MediaEncryptedEvent` object.

## Instance properties

_This interface also inherits properties from its parent, {{domxref("Event")}}._

- {{domxref("MediaEncryptedEvent.initDataType")}} {{ReadOnlyInline}}
  - : Returns a case-sensitive string with the _type_ of the format of the initialization data found.
- {{domxref("MediaEncryptedEvent.initData")}} {{ReadOnlyInline}}
  - : Returns an {{jsxref("ArrayBuffer")}} containing the initialization data found. If there is no initialization data associated with the format, it returns `null`.

## Instance methods

_This interface doesn't provide any specific methods, but inherits methods from its parent, {{domxref("Event")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

---
title: MediaKeyMessageEvent
slug: Web/API/MediaKeyMessageEvent
page-type: web-api-interface
browser-compat: api.MediaKeyMessageEvent
---

{{APIRef("EncryptedMediaExtensions")}}

The **`MediaKeyMessageEvent`** interface of the [Encrypted Media Extensions API](/en-US/docs/Web/API/Encrypted_Media_Extensions_API) contains the content and related data when the content decryption module generates a message for the session.

{{InheritanceDiagram}}

## Constructor

- {{domxref("MediaKeyMessageEvent.MediaKeyMessageEvent","MediaKeyMessageEvent()")}}
  - : Creates a new instance of `MediaKeyMessageEvent`.

## Instance properties

Inherits properties from its parent, {{domxref("Event")}}.

- {{domxref("MediaKeyMessageEvent.message")}} {{ReadOnlyInline}}
  - : Returns an {{jsxref("ArrayBuffer")}} with a message from the content decryption module. Messages vary by key system.
- {{domxref("MediaKeyMessageEvent.messageType")}} {{ReadOnlyInline}}
  - : Indicates the type of message. May be one of `license-request`, `license-renewal`, `license-release`, or `individualization-request`.

## Instance methods

Inherits methods from its parent, {{domxref("Event")}}.

## Examples

```js
// TBD
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

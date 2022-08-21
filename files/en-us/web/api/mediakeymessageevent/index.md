---
title: MediaKeyMessageEvent
slug: Web/API/MediaKeyMessageEvent
page-type: web-api-interface
tags:
  - API
  - EncryptedMediaExtensions
  - MediaKeyMessageEvent
  - NeedsContent
  - NeedsExample
  - Reference
browser-compat: api.MediaKeyMessageEvent
---
{{APIRef("EncryptedMediaExtensions")}}

The **`MediaKeyMessageEvent`** interface of the [EncryptedMediaExtensions API](/en-US/docs/Web/API/Encrypted_Media_Extensions_API) contains the content and related data when the content decryption module generates a message for the session.

{{InheritanceDiagram}}

## Constructor

- {{domxref("MediaKeyMessageEvent.MediaKeyMessageEvent","MediaKeyMessageEvent()")}}
  - : Creates a new instance of `MediaKeyMessageEvent`.

## Properties

Inherits properties from its parent, {{domxref("Event")}}.

- {{domxref("MediaKeyMessageEvent.message")}} {{ReadOnlyInline}}
  - : Returns an {{jsxref("ArrayBuffer")}} with a message from the content decryption module. Messages vary by key system.
- {{domxref("MediaKeyMessageEvent.messageType")}} {{ReadOnlyInline}}
  - : Indicates the type of message. May be one of `license-request`, `license-renewal`, `license-release`, or `individualization-request`.

## Methods

Inherits methods from its parent, {{domxref("Event")}}.

## Examples

```js
// TBD
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

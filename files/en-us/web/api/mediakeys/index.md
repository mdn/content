---
title: MediaKeys
slug: Web/API/MediaKeys
page-type: web-api-interface
tags:
  - API
  - Audio
  - EncryptedMediaExtensions
  - Interface
  - Media
  - MediaKeys
  - NeedsExample
  - Reference
  - Video
browser-compat: api.MediaKeys
---
{{APIRef("EncryptedMediaExtensions")}}

The **`MediaKeys`** interface of [EncryptedMediaExtensions API](/en-US/docs/Web/API/Encrypted_Media_Extensions_API) represents a set of keys that an associated {{domxref("HTMLMediaElement")}} can use for decryption of media data during playback.

## Properties

None.

## Methods

- {{domxref("MediaKeys.createSession()")}}
  - : Returns a new {{domxref("MediaKeySession")}} object, which represents a context for message exchange with a content decryption module (CDM).
- {{domxref("MediaKeys.setServerCertificate()")}}
  - : Returns a {{jsxref("Promise")}} to a server certificate to be used to encrypt messages to the license server.

## Examples

```js
//TBD
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

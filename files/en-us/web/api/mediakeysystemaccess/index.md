---
title: MediaKeySystemAccess
slug: Web/API/MediaKeySystemAccess
tags:
  - API
  - Audio
  - EncryptedMediaExtensions
  - Interface
  - Media
  - MediaKeySystemAccess
  - NeedsExample
  - Reference
  - Video
browser-compat: api.MediaKeySystemAccess
---
{{APIRef("EncryptedMediaExtensions")}}{{SeeCompatTable}}

The **`MediaKeySystemAccess`** interface of the [EncryptedMediaExtensions API](/en-US/docs/Web/API/Encrypted_Media_Extensions_API) provides access to a Key System for decryption and/or a content protection provider. You can request an instance of this object using the {{domxref("Navigator.requestMediaKeySystemAccess","Navigator.requestMediaKeySystemAccess()")}} method.

## Properties

- {{domxref("MediaKeySystemAccess.keySystem")}} {{readonlyinline}}
  - : Returns a {{domxref('DOMString')}} identifying the key system being used.

## Methods

- {{domxref("MediaKeySystemAccess.createMediaKeys()")}}
  - : Returns a {{jsxref('Promise')}} that resolves to a new {{domxref("MediaKeys")}} object.
- {{domxref("MediaKeySystemAccess.getConfiguration()")}}
  - : Returns a {{domxref("MediaKeySystemConfiguration")}} object with the supported combination of configuration options.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

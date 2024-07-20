---
title: MediaKeySystemAccess
slug: Web/API/MediaKeySystemAccess
page-type: web-api-interface
browser-compat: api.MediaKeySystemAccess
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

The **`MediaKeySystemAccess`** interface of the [Encrypted Media Extensions API](/en-US/docs/Web/API/Encrypted_Media_Extensions_API) provides access to a Key System for decryption and/or a content protection provider. You can request an instance of this object using the {{domxref("Navigator.requestMediaKeySystemAccess","Navigator.requestMediaKeySystemAccess()")}} method.

## Instance properties

- {{domxref("MediaKeySystemAccess.keySystem")}} {{ReadOnlyInline}}
  - : Returns a string identifying the key system being used.

## Instance methods

- {{domxref("MediaKeySystemAccess.createMediaKeys()")}}
  - : Returns a {{jsxref('Promise')}} that resolves to a new {{domxref("MediaKeys")}} object.
- {{domxref("MediaKeySystemAccess.getConfiguration()")}}
  - : Returns an object with the supported combination of configuration options.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

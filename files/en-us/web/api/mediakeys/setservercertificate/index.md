---
title: MediaKeys.setServerCertificate()
slug: Web/API/MediaKeys/setServerCertificate
page-type: web-api-instance-method
tags:
  - API
  - EncryptedMediaExtensions
  - Media
  - MediaKeys
  - Method
  - Reference
  - setServerCertificate
browser-compat: api.MediaKeys.setServerCertificate
---
{{APIRef("EncryptedMediaExtensions")}}

The **`MediaKeys.setServerCertificate()`** method provides a
server certificate to be used to encrypt messages to the license server.

## Syntax

```js
setServerCertificate(serverCertificate)
```

### Parameters

- `serverCertificate`
  - : An {{jsxref("ArrayBuffer")}}, a {{jsxref("TypedArray")}}, or a {{jsxref("DataView")}} object containing the server certificate. The contents are Key System-specific. It MUST NOT contain executable code.

### Return value

A {{jsxref('Promise')}} that resolves to a boolean. If the Key System implementation represented by this object's cdm implementation value does not support server certificates, return a promise resolved with false.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

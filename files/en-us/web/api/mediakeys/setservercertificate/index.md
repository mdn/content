---
title: "MediaKeys: setServerCertificate() method"
short-title: setServerCertificate()
slug: Web/API/MediaKeys/setServerCertificate
page-type: web-api-instance-method
browser-compat: api.MediaKeys.setServerCertificate
---

{{APIRef("EncryptedMediaExtensions")}}

The **`MediaKeys.setServerCertificate()`** method provides a
server certificate to be used to encrypt messages to the license server.

## Syntax

```js-nolint
setServerCertificate(serverCertificate)
```

### Parameters

- `serverCertificate`
  - : An {{jsxref("ArrayBuffer")}}, a {{jsxref("TypedArray")}}, or a {{jsxref("DataView")}} object containing the server certificate. The contents are Key System-specific. It MUST NOT contain executable code.

### Return value

A {{jsxref('Promise')}} that resolves to a boolean. If the Key System implementation represented by this object's content decryption module's implementation value does not support server certificates, return a promise resolved with false.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

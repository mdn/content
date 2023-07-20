---
title: "OTPCredential: code property"
short-title: code
slug: Web/API/OTPCredential/code
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.OTPCredential.code
---

{{SecureContext_Header}}{{APIRef("WebOTP API")}}{{SeeCompatTable}}

The **`code`** property of the {{domxref("OTPCredential")}} interface contains the one-time password (OTP).

## Value

A string containing the OTP.

## Examples

The below code triggers the browser's permission flow when an SMS message arrives. If permission is granted, then the promise resolves with an `OTPCredential` object. The contained `code` value is then set as the value of an {{htmlelement("input")}} form element, which is then submitted.

```js
navigator.credentials
  .get({
    otp: { transport: ["sms"] },
    signal: ac.signal,
  })
  .then((otp) => {
    input.value = otp.code;
    if (form) form.submit();
  })
  .catch((err) => {
    console.error(err);
  });
```

> **Note:** For a full explanation of the code, see the {{domxref('WebOTP API','','',' ')}} landing page. You can also [see this code as part of a full working demo](https://web-otp.glitch.me/).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

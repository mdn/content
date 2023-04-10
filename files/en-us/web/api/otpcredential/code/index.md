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

The **`code`** property of the {{domxref("OTPCredential")}} interface returns the one-time password.

## Value

A string containing the one-time password.

## Examples

The below code uses the value of `code` to complete an input form element. [See this code as part of a simple demo](https://glitch.com/edit/#!/web-otp?path=views%2Findex.html%3A55%3A8).

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

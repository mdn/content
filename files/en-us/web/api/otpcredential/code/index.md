---
title: OTPCredential.code
slug: Web/API/OTPCredential/code
tags:
  - API
  - Property
  - Reference
  - code
  - OTPCredential
browser-compat: api.OTPCredential.code
---
{{securecontext_header}}{{DefaultAPISidebar("WebOTP API")}}

The **`code`** property of the {{domxref("OTPCredential")}} interface returns the one-time password.

## Syntax

```js
let code = OTPCredential.code;
```

### Value

A {{domxref("DOMString","string")}} containing the one-time password.

## Examples

The below code uses the value of `code` to complete an input form element. [See this code as part of a simple demo](https://glitch.com/edit/#!/web-otp?path=views%2Findex.html%3A55%3A8).

```js
navigator.credentials.get({
  otp: { transport:['sms'] },
  signal: ac.signal
}).then(otp => {
  input.value = otp.code;
  if (form) form.submit();
}).catch(err => {
  console.log(err);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

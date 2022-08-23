---
title: OTPCredential
slug: Web/API/OTPCredential
page-type: web-api-interface
tags:
  - API
  - Interface
  - Reference
  - OTPCredential
  - Experimental
browser-compat: api.OTPCredential
---
{{APIRef("WebOTP API")}}{{SecureContext_Header}}{{SeeCompatTable}}

The **`OTPCredential`** interface of the {{domxref('WebOTP API','','',' ')}} contains the attributes that are returned when a new one-time password is retrieved.

{{InheritanceDiagram}}

## Properties

_This interface also inherits properties from {{domxref("Credential")}}._

- {{domxref("OTPCredential.code")}} {{Experimental_Inline}}
  - : The one-time password.

### Event handlers

None.

## Methods

None.

## Examples

The below code triggers the browser's permission flow when an SMS message arrives. If permission is granted then the promise resolves with an `OTPCredential` object. [See this code as part of a simple demo](https://glitch.com/edit/#!/web-otp?path=views%2Findex.html%3A55%3A8).

```js
navigator.credentials.get({
  otp: { transport:['sms'] },
  signal: ac.signal
}).then((otp) => {
  input.value = otp.code;
  if (form) form.submit();
}).catch((err) => {
  console.error(err);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

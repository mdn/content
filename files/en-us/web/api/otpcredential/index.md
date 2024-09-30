---
title: OTPCredential
slug: Web/API/OTPCredential
page-type: web-api-interface
status:
  - experimental
browser-compat: api.OTPCredential
---

{{APIRef("WebOTP API")}}{{SecureContext_Header}}{{SeeCompatTable}}

The **`OTPCredential`** interface of the {{domxref('WebOTP API','','',' ')}} is returned when a WebOTP {{domxref("CredentialsContainer.get", "navigator.credentials.get()")}} call (i.e. invoked with an `otp` option) fulfills. It includes a `code` property that contains the retrieved one-time password (OTP).

{{InheritanceDiagram}}

## Instance properties

_This interface also inherits properties from {{domxref("Credential")}}._

- {{domxref("OTPCredential.code")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : The one-time password (OTP).

## Instance methods

None.

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

> [!NOTE]
> For a full explanation of the code, see the {{domxref('WebOTP API','','',' ')}} landing page. You can also [see this code as part of a full working demo](https://web-otp.glitch.me/).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

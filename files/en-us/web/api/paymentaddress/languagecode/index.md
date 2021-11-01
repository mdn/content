---
title: PaymentAddress.languageCode
slug: Web/API/PaymentAddress/languageCode
tags:
  - API
  - Address
  - Deprecated
  - Language
  - LanguageCode
  - Locale
  - RTCRtpStreamStats
  - RTP
  - Reference
  - Statistics
  - Stats
  - WebRTC
  - WebRTC API
  - rtc
browser-compat: api.PaymentAddress.languageCode
---
{{deprecated_header}}{{APIRef("Payment Request API")}}{{Non-standard_header}}

The **`languageCode`** read-only
property of the {{domxref('PaymentAddress')}} interface returns a string containing
the language code for the address according to
{{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}}.

This is used while localizing the display of the address, allowing
the determination of the field separators and the order of fields when formatting the
address.

## Syntax

```js
var paymentLanguageCode = PaymentAddress.languageCode;
```

### Value

A {{domxref("DOMString")}} providing the {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}}
format language code indicating
the language the address was written in, such as `"en-US"`,
`"pt-BR"`, or `"ja-JP"`.

## Browser compatibility

{{Compat}}

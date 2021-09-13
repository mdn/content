---
title: PaymentAddress.dependentLocality
slug: Web/API/PaymentAddress/dependentLocality
tags:
  - API
  - Payment Request
  - Payment Request API
  - PaymentRequest
  - Property
  - Reference
  - paymentAddress
browser-compat: api.PaymentAddress.dependentLocality
---
{{APIRef("Payment Request API")}}{{Deprecated_header}}{{Non-standard_header}}

The read-only **`dependentLocality`**
property of the {{domxref('PaymentAddress')}} interface is a string containing a
sublocality designation within a city, such as a  neighborhood, borough, district, or,
in the United Kingdom, a dependent locality. Also known as a _post
town_.

## Syntax

```js
var paymentDependentLocality = PaymentAddress.dependentLocality;
```

### Value

A {{domxref("DOMString")}} indicating the sublocality portion of the address. This may
be an empty string if no sublocality is available or required. It's used to provide
disambiguation when a city may include areas that duplicate street names

A sublocality is an area within a city, such as a neighborhood, borough, or district.
In the United Kingdom, this is used to indicate the **post town** in the
United Kingdom (known officially by the Royal Mail as the **dependent
locality**). This is a disambiguating feature of addresses in places where a
city may have areas that duplicate street names.

## Browser compatibility

{{Compat}}

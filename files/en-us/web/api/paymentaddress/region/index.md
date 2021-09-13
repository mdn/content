---
title: PaymentAddress.region
slug: Web/API/PaymentAddress/region
tags:
  - API
  - Address
  - County
  - Oblast
  - Payment Request
  - Payment Request API
  - Prefecture
  - Property
  - Province
  - Read-only
  - Reference
  - payment
  - paymentAddress
  - region
  - state
browser-compat: api.PaymentAddress.region
---
{{APIRef("Payment Request API")}}{{Deprecated_header}}{{Non-standard_header}}

The read-only **`region`** property of the
{{domxref('PaymentAddress')}} interface returns a string containing the top-level
administrative subdivision of the country in which the address is located. For example,
this may be a state, province, oblast, or prefecture.

## Syntax

```js
var paymentRegion = PaymentAddress.region;
```

### Value

A {{domxref("DOMString")}} specifying the top-level administrative subdivision within
the country in which the address is located. This region has different names in
different countries, such as: state, province, oblast, prefecture, or county.

## Usage notes

In some countries, like Belgium, it's uncommon for people to provide a region as part
of their postal address. In such cases, the browser returns an empty string as the value
of `region`. However, the address should still be acceptable to use for its
intended purpose (e.g., to ship a product). However, always verify addresses to make
sure what the user provides is usable.

## Browser compatibility

{{Compat}}

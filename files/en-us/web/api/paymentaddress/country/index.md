---
title: "PaymentAddress: country property"
short-title: country
slug: Web/API/PaymentAddress/country
page-type: web-api-instance-property
status:
  - deprecated
  - non-standard
browser-compat: api.PaymentAddress.country
---

{{APIRef("Payment Request API")}}{{Deprecated_Header}}{{Non-standard_Header}}

The **`country`** read-only property of the
{{domxref('PaymentAddress')}} interface is a string identifying the address's country
using the [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) standard. The string is
always in its canonical upper-case form.

Some examples of valid `country` values: `"US"`,
`"GB"`, `"CN"`, or `"JP"`.

## Value

A string which contains the ISO3166-1 alpha-2 code identifying the
country in which the address is located, or an empty string if no country is available,
which frequently can be assumed to mean "same country as the site owner."

## Usage notes

If the payment handler validates the address and determines that the value of
`country` is invalid, a call to
{{domxref("PaymentRequestUpdateEvent.updateWith()")}} will be made with a
`details` object containing a `shippingAddressErrors`
field. That field contains an {{domxref("AddressErrors")}}-compliant object whose
{{domxref("AddressErrors.country", "country")}} property is a string indicating the
validation error that occurred and, if possible, suggests how to fix it.

## Browser compatibility

{{Compat}}

## See also

- [Using the Payment Request API](/en-US/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- {{domxref("PaymentRequestUpdateEvent.updateWith")}}
- {{domxref("AddressErrors.country")}}

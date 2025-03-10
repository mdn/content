---
title: "PaymentAddress: addressLine property"
short-title: addressLine
slug: Web/API/PaymentAddress/addressLine
page-type: web-api-instance-property
status:
  - deprecated
  - non-standard
browser-compat: api.PaymentAddress.addressLine
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{Deprecated_Header}}{{Non-standard_Header}}

The **`addressLine`** read-only
property of the {{domxref('PaymentAddress')}} interface is an array of
strings, each specifying a line of the address that is not
covered by one of the other properties of `PaymentAddress`.

These
lines may include the street name, house number, apartment number, rural delivery route,
descriptive instructions, or post office box.

## Value

An array of strings, each containing one line of the address.
For example, the `addressLine` array for the Mozilla Space in London would
have the following entries:

| Index | addressLine[] value       |
| ----- | ------------------------- |
| 0     | Metal Box Factory         |
| 1     | Suite 441, 4th floor      |
| 2     | 30 Great Guildford Street |

These, combined with additional values for other properties of the
{{domxref("PaymentAddress")}}, would represent the full address, which is:

Mozilla
Metal Box Factory
Suite 441, 4th floor
30 Great Guildford Street
London SE1 0HS
United Kingdom

## Browser compatibility

{{Compat}}

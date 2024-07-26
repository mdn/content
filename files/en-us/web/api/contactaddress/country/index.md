---
title: "ContactAddress: country property"
short-title: country
slug: Web/API/ContactAddress/country
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.ContactAddress.country
---

{{securecontext_header}}{{APIRef("Contact Picker API")}}{{SeeCompatTable}}

The **`country`** read-only property of the {{domxref("ContactAddress")}} interface is a string identifying the address's country using the [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) standard. The string is always in its canonical upper-case form.

Some examples of valid `country` values: `"US"`, `"GB"`, `"CN"`, or `"JP"`.

## Value

A string which contains the ISO3166-1 alpha-2 code identifying the country in which the address is located, or an empty string if no country is available, which frequently can be assumed to mean "same country as the site owner."

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

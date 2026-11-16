---
title: "PreferenceObject: validValues property"
short-title: validValues
slug: Web/API/PreferenceObject/validValues
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.PreferenceObject.validValues
spec-urls: https://drafts.csswg.org/mediaqueries-5/#valid-values-attribute
---

{{APIRef("User Preferences API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`validValues`** read-only property of the {{domxref("PreferenceObject")}} interface returns a read-only array of values that are accepted by the override.

## validValues

An array containing the valid values to override the {{domxref("PreferenceObject")}} value with.

## Examples

### Basic usage

This example demonstrates how to log all possible contrast values.

```js
console.log(navigator.preferences.contrast.validValues);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

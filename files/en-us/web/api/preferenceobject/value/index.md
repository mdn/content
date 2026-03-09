---
title: "PreferenceObject: value property"
short-title: value
slug: Web/API/PreferenceObject/value
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.PreferenceObject.value
spec-urls: https://drafts.csswg.org/mediaqueries-5/#preference-value-attribute
---

{{APIRef("User Preferences API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`value`** read-only property of the {{domxref("PreferenceManager")}} interface returns the override value of a preference if one is set, or the UA-defined value if an override value is not set.

## Value

The override of the {{domxref("PreferenceObject")}} interface if one is set, or the UA-defined value otherwise.

## Examples

### Basic usage

This example demonstrates how to query the user's reduced motion preference.

```js
if (navigator.preferences.reducedMotion.value === "reduce") {
  // The user prefers reduced motion.
} else {
  // The user has stated no preference regarding motion.
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

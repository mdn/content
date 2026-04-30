---
title: "PreferenceObject: override property"
short-title: override
slug: Web/API/PreferenceObject/override
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.PreferenceObject.override
spec-urls: https://drafts.csswg.org/mediaqueries-5/#override-attribute
---

{{APIRef("User Preferences API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`override`** read-only property of the {{domxref("PreferenceObject")}} interface returns the override of a preference if one is set, `null` otherwise.

## Value

The override of the {{domxref("PreferenceObject")}} interface, if set, or `null` if an override is not set.

## Examples

## Basic usage

This example demonstrates how to disambiguate between the color scheme preference set by the user agent vs a programmatic override.

```js
if (navigator.preferences.colorScheme.override === null) {
  console.log(
    "The user agent set the following color scheme:",
    navigator.preferences.colorScheme.value,
  );
} else {
  console.log(
    "The following color scheme was set programmatically:",
    navigator.preferences.colorScheme.override,
  );
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

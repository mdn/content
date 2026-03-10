---
title: "PreferenceManager: colorScheme property"
short-title: colorScheme
slug: Web/API/PreferenceManager/colorScheme
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.PreferenceManager.colorScheme
spec-urls: https://drafts.csswg.org/mediaqueries-5/#color-scheme-attribute
---

{{APIRef("User Preferences API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`colorScheme`** read-only property of the {{domxref("PreferenceManager")}} interface returns a {{domxref("PreferenceObject")}} used to override the user's preference for the [color scheme](/en-US/docs/Web/CSS/Reference/Reference/At-rules/@media/prefers-color-scheme) of the site.

Valid `colorScheme` {{domxref("PreferenceObject.value")}} settings are `dark` and `light`.

## Value

A {{domxref("PreferenceObject")}} used to override the user's preference for the [color scheme](/en-US/docs/Web/CSS/Reference/Reference/At-rules/@media/prefers-color-scheme) of the site.

## Examples

### Basic usage

This example demonstrates how to query the user's preferred color scheme.

```js
if (navigator.preferences.colorScheme.value === "dark") {
  // The user prefers a dark color scheme.
} else {
  // The user prefers a light color scheme.
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

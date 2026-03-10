---
title: "PreferenceManager: reducedTransparency property"
short-title: reducedTransparency
slug: Web/API/PreferenceManager/reducedTransparency
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.PreferenceManager.reducedTransparency
spec-urls: https://drafts.csswg.org/mediaqueries-5/#reduced-transparency-attribute
---

{{APIRef("User Preferences API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`reducedTransparency`** read-only property of the {{domxref("PreferenceManager")}} interface returns the {{domxref("PreferenceObject")}} used to override the user's preference for the [reduced transparency](/en-US/docs/Web/CSS/Reference/Reference/At-rules/@media/prefers-reduced-transparency) of the site.

Valid `reducedTransparency` {{domxref("PreferenceObject.value")}} settings are `reduce` and `no-preference`.

## Value

A {{domxref("PreferenceObject")}} used to override the user's preference for the [reduced transparency](/en-US/docs/Web/CSS/Reference/Reference/At-rules/@media/prefers-reduced-transparency) of the site.

## Examples

### Basic usage

This example demonstrates how to query the user's reduced transparency preference.

```js
if (navigator.preferences.reducedTransparency.value === "reduce") {
  // The user prefers reduced transparency.
} else {
  // The user has stated no preference regarding transparency.
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

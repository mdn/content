---
title: "PreferenceManager: reducedData property"
short-title: reducedData
slug: Web/API/PreferenceManager/reducedData
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.PreferenceManager.reducedData
spec-urls: https://drafts.csswg.org/mediaqueries-5/#reduced-data-attribute
---

{{APIRef("User Preferences API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`reducedData`** read-only property of the {{domxref("PreferenceManager")}} interface returns a {{domxref("PreferenceObject")}} used to override the user's preference for the [reduced data](/en-US/docs/Web/CSS/Reference/Reference/At-rules/@media/prefers-reduced-data) of the site.

Valid `reducedData` {{domxref("PreferenceObject.value")}} settings are `reduce` and `no-preference`.

## Value

A {{domxref("PreferenceObject")}} used to override the user's preference for the [reduced data](/en-US/docs/Web/CSS/Reference/Reference/At-rules/@media/prefers-reduced-data) of the site.

## Examples

### Basic usage

This example demonstrates how to query the user's reduced data preference.

```js
if (navigator.preferences.reducedData.value === "reduce") {
  // The user prefers you use less data.
} else {
  // The user has stated no preference regarding data use.
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

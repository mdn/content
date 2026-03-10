---
title: "PreferenceManager: contrast property"
short-title: contrast
slug: Web/API/PreferenceManager/contrast
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.PreferenceManager.contrast
spec-urls: https://drafts.csswg.org/mediaqueries-5/#contrast-attribute
---

{{APIRef("User Preferences API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`contrast`** read-only property of the {{domxref("PreferenceManager")}} interface returns a {{domxref("PreferenceObject")}} used to override the user's preference for the [contrast](/en-US/docs/Web/CSS/Reference/Reference/At-rules/@media/prefers-contrast) of the site.

Valid `contrast` {{domxref("PreferenceObject.value")}} settings are `more`, `less`, and `no-preference`.

## Value

A {{domxref("PreferenceObject")}} used to override the user's preference for the [contrast](/en-US/docs/Web/CSS/Reference/Reference/At-rules/@media/prefers-contrast) of the site.

## Examples

### Basic usage

This example demonstrates how to query the user's contrast preference.

```js
if (navigator.preferences.contrast.value === "more") {
  // The user prefers a high color contrast.
} else if (navigator.preferences.contrast.value === "less") {
  // The user prefers a low color contrast.
} else {
  // The user has stated no preference regarding color contrast.
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

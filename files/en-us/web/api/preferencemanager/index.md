---
title: PreferenceManager
slug: Web/API/PreferenceManager
page-type: web-api-interface
status:
  - experimental
browser-compat: api.PreferenceManager
spec-urls: https://drafts.csswg.org/mediaqueries-5/#preference-manager
---

{{APIRef("Preferences API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`PreferenceManager`** interface of the [User Preferences API](/en-US/docs/Web/API/User_Preferences_API) provides access to {{domxref("PreferenceObject")}} objects used to query and modify user preferences.

The `PreferenceManager` for the current document can be accessed via the {{domxref("Navigator.preferences")}} property.

The `PreferenceManager` interface inherits from {{domxref("EventTarget")}}.

{{InheritanceDiagram}}

## Instance properties

- {{domxref("PreferenceManager.colorScheme")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A {{domxref("PreferenceObject")}} used to override the user's preference for the {{cssxref("@media/prefers-color-scheme", "color scheme")}} of the site.
- {{domxref("PreferenceManager.contrast")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A {{domxref("PreferenceObject")}} used to override the user's preference for the {{cssxref("@media/prefers-contrast", "contrast")}} of the site.
- {{domxref("PreferenceManager.reducedMotion")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A {{domxref("PreferenceObject")}} used to override the user's preference for the {{cssxref("@media/prefers-reduced-motion", "reduced motion")}} of the site.
- {{domxref("PreferenceManager.reducedTransparency")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A {{domxref("PreferenceObject")}} used to override the user's preference for the {{cssxref("@media/prefers-reduced-transparency", "reduced transparency")}} of the site.
- {{domxref("PreferenceManager.reducedData")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A {{domxref("PreferenceObject")}} used to override the user's preference for the {{cssxref("@media/prefers-reduced-data", "reduced data")}} of the site.

## Examples

### Basic usage

This examples demonstrates how to see the user's preferred color scheme.

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

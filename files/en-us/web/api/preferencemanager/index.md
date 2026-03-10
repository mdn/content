---
title: PreferenceManager
slug: Web/API/PreferenceManager
page-type: web-api-interface
status:
  - experimental
browser-compat: api.PreferenceManager
spec-urls: https://drafts.csswg.org/mediaqueries-5/#preference-manager
---

{{APIRef("User Preferences API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`PreferenceManager`** interface of the [User Preferences API](/en-US/docs/Web/API/User_Preferences_API) provides access to {{domxref("PreferenceObject")}} objects used to query and modify user preferences.

The `PreferenceManager` for the current document can be accessed via the {{domxref("Navigator.preferences")}} property.

The `PreferenceManager` interface inherits from {{domxref("EventTarget")}}.

{{InheritanceDiagram}}

## Instance properties

- {{domxref("PreferenceManager.colorScheme")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A {{domxref("PreferenceObject")}} used to override the user's preference for the [color scheme](/en-US/docs/Web/CSS/Reference/Reference/At-rules/@media/prefers-color-scheme) of the site.
- {{domxref("PreferenceManager.contrast")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A {{domxref("PreferenceObject")}} used to override the user's preference for the [contrast](/en-US/docs/Web/CSS/Reference/Reference/At-rules/@media/prefers-contrast) of the site.
- {{domxref("PreferenceManager.reducedMotion")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A {{domxref("PreferenceObject")}} used to override the user's preference for the [reduced motion](/en-US/docs/Web/CSS/Reference/Reference/At-rules/@media/prefers-reduced-motion) of the site.
- {{domxref("PreferenceManager.reducedTransparency")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A {{domxref("PreferenceObject")}} used to override the user's preference for the [reduced transparency](/en-US/docs/Web/CSS/Reference/Reference/At-rules/@media/prefers-reduced-transparency) of the site.
- {{domxref("PreferenceManager.reducedData")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A {{domxref("PreferenceObject")}} used to override the user's preference for the [reduced data](/en-US/docs/Web/CSS/Reference/Reference/At-rules/@media/prefers-reduced-data) of the site.

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

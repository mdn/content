---
title: PreferencesManager
slug: Web/API/PreferencesManager
page-type: web-api-interface
status:
  - experimental
browser-compat: api.PreferencesManager
spec-urls: https://drafts.csswg.org/mediaqueries-5/#preference-manager
---

{{APIRef("Preferences API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`PreferencesManager`** interface of the [User Peferences API](/en-US/docs/Web/API/User_Preferences_API) provides access to the various {{domxref("PreferenceObject")}} objects.

The `PreferencesManager` interface inherits from {{domxref("EventTarget")}}.

{{InheritanceDiagram}}

## Instance properties

- {{domxref("PreferencesManager.colorScheme")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A {{domxref("PreferenceObject")}} used to override the user's preference for the {{cssxref("@media/prefers-color-scheme", "color scheme")}} of the site.
- {{domxref("PreferencesManager.contrast")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A {{domxref("PreferenceObject")}} used to override the user's preference for the {{cssxref("@media/prefers-contrast", "contrast")}} of the site.
- {{domxref("PreferencesManager.reducedMotion")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A {{domxref("PreferenceObject")}} used to override the user's preference for the {{cssxref("@media/prefers-reduced-motion", "reduced motion")}} of the site.
- {{domxref("PreferencesManager.reducedTransparency")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A {{domxref("PreferenceObject")}} used to override the user's preference for the {{cssxref("@media/prefers-reduced-transparency", "reduced transparency")}} of the site.
- {{domxref("PreferencesManager.reducedData")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A {{domxref("PreferenceObject")}} used to override the user's preference for the {{cssxref("@media/prefers-reduced-data", "reduced data")}} of the site.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

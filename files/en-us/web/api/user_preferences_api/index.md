---
title: User Preferences API
slug: Web/API/User_Preferences_API
page-type: web-api-overview
browser-compat:
  - api.Navigator.preferences
  - api.PreferencesManager
  - api.PreferenceObject
spec-urls: https://drafts.csswg.org/mediaqueries-5/#preferences-attribute
---

{{DefaultAPISidebar("User Preferences API")}}{{SeeCompatTable}}

The **User Preferences API** allows users to override user preference related {{cssxref("Guides/Media_queries", "media queries")}}.

## Concepts and Usage

A user agent defines values for the CSS media queries {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}, {{cssxref("@media/prefers-contrast", "prefers-contrast")}}, {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}}, {{cssxref("@media/prefers-reduced-transparency", "prefers-reduced-transparency")}}, and {{cssxref("@media/prefers-reduced-data", "prefers-reduced-data")}}. The {{domxref("PreferencesManager")}} object provides programmatic access to these preferences, allowing you to listen for preference changes and override them.

## Examples

### Dark Mode Toggle

The following code implements a minimal dark mode toggle.

#### HTML

```html
<form>
  <label>
    <input type="radio" name="color-scheme" value="system" /> System default
  </label>
  <label>
    <input type="radio" name="color-scheme" value="light" /> Light
  </label>
  <label> <input type="radio" name="color-scheme" value="dark" /> Dark </label>
</form>
```

#### JavaScript

```js
for (const input of document.getElementsByName("color-scheme")) {
  input.addEventListener("change", () => {
    if (input.value === "system") {
      navigator.preferences.colorScheme.clearOverride();
    } else {
      navigator.preferences.colorScheme.requestOverride(input.value);
    }
  });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

---
title: User Preferences API
slug: Web/API/User_Preferences_API
page-type: web-api-overview
browser-compat:
  - api.Navigator.preferences
  - api.PreferenceManager
  - api.PreferenceObject
spec-urls: https://drafts.csswg.org/mediaqueries-5/#preferences-attribute
---

{{DefaultAPISidebar("User Preferences API")}}{{SeeCompatTable}}

The **User Preferences API** allows page authors to programmatically override user preference-related {{cssxref("Guides/Media_queries", "media query")}} settings.

## Concepts and Usage

Supporting user agents define values for the CSS media queries {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}, {{cssxref("@media/prefers-contrast", "prefers-contrast")}}, {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}}, {{cssxref("@media/prefers-reduced-transparency", "prefers-reduced-transparency")}}, and {{cssxref("@media/prefers-reduced-data", "prefers-reduced-data")}}. The {{domxref("PreferenceManager")}} object provides programmatic access to these preferences, allowing page authors to listen for preference changes and override them.

## Examples

### Dark Mode Toggle

The following code implements a minimal dark mode toggle.

#### HTML

The HTML has a form with 3 radio buttons. These radio buttons set the `color-scheme` field to either `system`, `light`, or `dark`.

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

The JavaScript registers change event listeners for all elements named `color-scheme`. If the value is `system`, the handler clears the color scheme override. Otherwise, it requests a color scheme override with the value of the input element.

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

---
title: User Preferences API
slug: Web/API/User_Preferences_API
page-type: web-api-overview
status:
  - experimental
browser-compat:
  - api.Navigator.preferences
  - api.PreferenceManager
  - api.PreferenceObject
spec-urls: https://drafts.csswg.org/mediaqueries-5/#preferences-attribute
---

{{DefaultAPISidebar("User Preferences API")}}{{SeeCompatTable}}

The **User Preferences API** allows page authors to programmatically override user preference-related [media query](/en-US/docs/Web/CSS/Guides/Media_queries/Using) settings.

## Concepts and Usage

Supporting user agents define values for the CSS media queries {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}, {{cssxref("@media/prefers-contrast", "prefers-contrast")}}, {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}}, {{cssxref("@media/prefers-reduced-transparency", "prefers-reduced-transparency")}}, and {{cssxref("@media/prefers-reduced-data", "prefers-reduced-data")}}. The {{domxref("PreferenceManager")}} object provides programmatic access to these preferences, allowing page authors to listen for preference changes and override them.

## Examples

### Dark Mode Toggle

The following code implements a minimal dark mode toggle.

#### HTML

The HTML features a form containing three radio buttons. These radio buttons set the `color-scheme` field to either `system`, `light`, or `dark`.

```html live-sample___dark-mode-toggle
<!doctype html>
<html lang="en-US">
  <head>
    <meta name="color-scheme" content="light dark" />
  </head>
  <body>
    <form>
      <label>
        <input type="radio" name="color-scheme" value="light" />
        Light
      </label>
      <label>
        <input type="radio" name="color-scheme" value="dark" />
        Dark
      </label>
    </form>
  </body>
</html>
```

#### JavaScript

The JavaScript registers change event listeners for all elements named `color-scheme`. If the value is `system`, the handler clears the color scheme override. Otherwise, it requests a color scheme override with the value of the input element.

```js live-sample___dark-mode-toggle
if (navigator.preferences) {
  const inputs = {
    light: document.querySelector('[name="color-scheme"][value="light"]'),
    dark: document.querySelector('[name="color-scheme"][value="dark"]'),
  };

  inputs[navigator.preferences.colorScheme.value].checked = true;

  inputs.light.addEventListener("change", () => {
    navigator.preferences.colorScheme.requestOverride("light");
  });
  inputs.dark.addEventListener("change", () => {
    navigator.preferences.colorScheme.requestOverride("dark");
  });

  navigator.preferences.colorScheme.addEventListener("change", () => {
    inputs[navigator.preferences.colorScheme.value].checked = true;
  });
} else {
  document.body.append(
    "Your browser doesn’t support the navigator.preferences API",
  );
}
```

#### Result

```css hidden live-sample___dark-mode-toggle
body {
  font-family: system-ui, sans-serif;
}

label {
  display: block;
  margin: 0.5em 0;
}
```

{{EmbedLiveSample("dark-mode-toggle", "100%", 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

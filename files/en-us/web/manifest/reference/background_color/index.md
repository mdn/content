---
title: background_color
slug: Web/Manifest/Reference/background_color
page-type: web-manifest-member
browser-compat: html.manifest.background_color
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Manifest/Reference")}}

The `background_color` manifest member is used to specify an initial background color for your web application.
This color appears in the application window before your application's stylesheets have loaded.

## Syntax

```json-nolint
/* Using named color */
"background_color": "aliceblue"

/* Using hexadecimal value */
"background_color": "#f0fbff"

/* Using RGB value */
"background_color": "rgb(240 248 255)"
```

### Values

- `background_color`

  - : A string that specifies a valid [color value](/en-US/docs/Web/CSS/color_value).

## Description

The `background_color` member serves the following purposes:

- Provides a smooth visual transition from the app's initial launch to its fully loaded state.
- Improves user experience while the app files are loading over the network or being accessed from storage media.
- Contributes to the appearance of the splash screen in some browsers and operating systems when an installed progressive web app (PWA) is launched.

It is recommended that the color value you specify for the `background_color` manifest member matches the {{cssxref("background-color")}} property value in your app's stylesheet.
This will ensure visual consistency between the initial display (including the splash screen, where applicable) and the fully loaded application.
By aligning these colors, you can create a more polished and seamless experience for your users.

After an app has loaded, the `background-color` in the stylesheet takes precedence.
The manifest's `background_color` is used only as a temporary measure during the initial loading phase and for generating splash screens in some environments.

> [!NOTE]
> Browsers may override the `background_color` manifest value to support any [`prefers-color-scheme`](/en-US/docs/Web/CSS/@media/prefers-color-scheme) media query defined in your app's CSS.

## Examples

### Setting a consistent background color for your app

Imagine you're building a weather app, and the background color in your app's stylesheet is set as shown below:

```css
body {
  background-color: #87ceeb;
}
```

To ensure your users see a consistent background color from launch to full load of your app, you would set the same background color in your app's manifest file like so:

```json
{
  "name": "WeatherPro",
  "display": "standalone",
  "background_color": "#87ceeb",
  "theme_color": "#4682b4",
  "icons": [
    {
      "src": "icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ]
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`display`](/en-US/docs/Web/Manifest/Reference/display) manifest member
- [`theme_color`](/en-US/docs/Web/Manifest/Reference/theme_color) manifest member
- [Customize your app's theme and background colors](/en-US/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors) when building PWAs

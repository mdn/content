---
title: theme_color
slug: Web/Manifest/Reference/theme_color
page-type: web-manifest-member
browser-compat: html.manifest.theme_color
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Manifest/Reference")}}

The `theme_color` member is used to specify the default color for your web application's user interface.
This color may be applied to various browser UI elements, such as the toolbar, address bar, and status bar.
It can be particularly noticeable in contexts like the task switcher or when the app is added to the home screen.

## Syntax

```json-nolint
/* Valid named color */
"theme_color": "rebeccapurple"

/* Using hexadecimal value */
"theme_color": "#42b5f4"

/* Using RGB value */
"theme_color": "rgb(66 133 244)"
```

### Values

- `theme_color`

  - : A string that specifies a valid [color value](/en-US/docs/Web/CSS/color_value).

    > [!NOTE]
    > Browsers may ignore the alpha component of the color based on the context.
    > In most environments, `theme_color` cannot be transparent.
    > It's recommended to use fully opaque colors (alpha value of 1 or 100%) to ensure consistent behavior across different platforms and browsers.

## Description

While optional, specifying a `theme_color` allows you to extend your app's visual identity beyond its content areas.
This color application can provide a more native app-like experience for your web app, especially when it's loaded in [standalone](/en-US/docs/Web/Manifest/Reference/display#standalone) mode.
Choose a `theme_color` that aligns with your app's brand guidelines, as this can enhance user recognition and recall, particularly when your app is viewed alongside other applications or system interfaces.

In browsers that support `theme_color`, the value specified in the manifest file serves as the default theme color for your web app across all pages where the manifest is applied.
You can override this default in the following ways:

- Using the [`theme-color`](/en-US/docs/Web/HTML/Element/meta/name/theme-color) value of the `name` attribute in the HTML `<meta>` element: You can specify a theme color for a web page that's different from the manifest `theme_color` specified for your app. This enables you to set different theme colors for individual pages within your app.

  ```html
  <meta name="theme-color" content="#9370DB" />
  ```

- Combining the `<meta name="theme-color">` element with media queries: You can specify the theme color to be used based on user's color scheme preference.

  ```html
  <meta
    name="theme-color"
    content="#F4E6D8"
    media="(prefers-color-scheme: light)" />
  <meta
    name="theme-color"
    content="#5D4037"
    media="(prefers-color-scheme: dark)" />
  ```

These override methods provide you the flexibility to adapt your app's appearance for specific pages or user preferences, improving the overall user experience.

Browsers may also adjust the applied theme color based on user preferences.
If a user has set a preference for light or dark mode, browsers may override the manifest `theme_color` value to support any [`prefers-color-scheme`](/en-US/docs/Web/CSS/@media/prefers-color-scheme) media query defined in your app's CSS.

```css
body {
  background: #f8f9fa;
  color: #212529;
}

@media (prefers-color-scheme: dark) {
  body {
    background: #212529;
    color: #f8f9fa;
  }
}
```

## Examples

### Using a named color

```json
{
  "theme_color": "red"
}
```

### Using an RGB value

```json
{
  "theme_color": "rgb(66, 133, 244)"
}
```

### Using a hexadecimal value

```json
{
  "name": "My First App",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#ff4500"
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`display`](/en-US/docs/Web/Manifest/Reference/display) manifest member
- [`background_color`](/en-US/docs/Web/Manifest/Reference/background_color) manifest member
- [`scope`](/en-US/docs/Web/Manifest/Reference/scope) manifest member
- [Customize your app's theme and background colors](/en-US/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors) when building PWAs

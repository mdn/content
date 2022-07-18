---
title: display-mode
slug: Web/CSS/@media/display-mode
tags:
  - '@media'
  - CSS
  - Media Queries
  - Reference
  - display
  - display-mode
  - media feature
  - web app manifest
browser-compat: css.at-rules.media.display-mode
---
{{CSSRef}}

The **`display-mode`** [CSS](/en-US/docs/Web/CSS) [media feature](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#media_features) can be used to test the display mode of an application. You can use it to provide a consistent user experience between launching a site from a URL and launching it from a desktop icon.

This feature corresponds to the Web app manifest's [`display`](/en-US/docs/Web/Manifest#display) member. Both apply to the top-level browsing context and any child browsing contexts. The feature query applies regardless of whether a web app manifest is present.

## Syntax

The `display-mode` feature is specified as a keyword value chosen from the list below.

| Display mode | Description                                                                                                                                                                                                                                                                                                            | Fallback display mode |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| `fullscreen` | All of the available display area is used and no user agent {{glossary("chrome")}} is shown.                                                                                                                                                                                                                     | `standalone`          |
| `standalone` | The application will look and feel like a standalone application. This can include the application having a different window, its own icon in the application launcher, etc. In this mode, the user agent will exclude UI elements for controlling navigation, but can include other UI elements such as a status bar. | `minimal-ui`          |
| `minimal-ui` | The application will look and feel like a standalone application, but will have a minimal set of UI elements for controlling navigation. The elements will vary by browser.                                                                                                                                            | `browser`             |
| `browser`    | The application opens in a conventional browser tab or new window, depending on the browser and platform.                                                                                                                                                                                                              | (none)                |

## Examples

### The CSS is used if the device is at fullscreen

```css
@media all and (display-mode: fullscreen) {
  body {
    margin: 0;
    border: 5px solid black;
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Media Queries](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
- [@media](/en-US/docs/Web/CSS/@media)

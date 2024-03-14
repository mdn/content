---
title: display-mode
slug: Web/CSS/@media/display-mode
page-type: css-media-feature
browser-compat: css.at-rules.media.display-mode
---

{{CSSRef}}

The **`display-mode`** [CSS](/en-US/docs/Web/CSS) [media feature](/en-US/docs/Web/CSS/@media#media_features) can be used to test whether a web app is being displayed in a normal browser tab or in some alternative way, such as a standalone app or fullscreen mode.

For example:

- A [progressive web app](/en-US/docs/Web/Progressive_web_apps) will often rely on opening apps [fullscreen](/en-US/docs/Web/API/Fullscreen_API) to provide an experience more like a native app. In this case, this `display-mode` media feature corresponds to the Web app manifest's [`display`](/en-US/docs/Web/Manifest#display) member. Both apply to the top-level browsing context and any child browsing contexts, although we aware that the feature query will apply regardless of whether a web app manifest is present.
- The [Fullscreen API](/en-US/docs/Web/API/Fullscreen_API) and other APIs such as the [Document Picture-in-Picture API](/en-US/docs/Web/API/Document_Picture-in-Picture_API) can be used to display regular web app content in different contexts.

## Syntax

The `display-mode` feature is specified as a keyword value chosen from the list below.

| Display mode              | Description                                                                                                                                                                                                                                                                                                                                                                             | Fallback display mode |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| `browser`                 | The application opens in a conventional browser tab or new window, depending on the browser and platform.                                                                                                                                                                                                                                                                               | None                  |
| `fullscreen`              | All of the available display area is used and no user agent {{glossary("chrome")}} is shown. This can be used to apply CSS only when the app has been put in fullscreen mode by the [Fullscreen API](/en-US/docs/Web/API/Fullscreen_API).                                                                                                                                               | `standalone`          |
| `minimal-ui`              | The application will look and feel like a standalone application, but will have a minimal set of UI elements for controlling navigation. The elements will vary by browser.                                                                                                                                                                                                             | `browser`             |
| `picture-in-picture`      | This mode allows users to continue consuming specific content while they interact with other sites or applications on their device. The app is displayed in a floating and always-on-top window. This can be used to apply CSS only when the app has been put in Picture-in-Picture mode by the [Document Picture-in-Picture API](/en-US/docs/Web/API/Document_Picture-in-Picture_API). | None                  |
| `standalone`              | The application will look and feel like a standalone application. This can include the application having a different window, its own icon in the application launcher, etc. In this mode, the user agent will exclude UI elements for controlling navigation, but can include other UI elements such as a status bar.                                                                  | `minimal-ui`          |
| `window-controls-overlay` | In this mode, the application looks and feels like a standalone desktop application, and the [Window Controls Overlay](/en-US/docs/Web/API/Window_Controls_Overlay_API) feature is enabled.                                                                                                                                                                                             | None                  |

## Examples

### Apply CSS if the application is in fullscreen mode

```css
@media all and (display-mode: fullscreen) {
  body {
    margin: 0;
    border: 5px solid black;
  }
}
```

### Provide a light and dark color scheme to Picture-in-Picture content

In this example, we combine the `display-mode: picture-in-picture` value with the {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}} media feature to create light and dark color schemes that are applied based on the user's color scheme preference, only when the app is being shown in Picture-in-Picture mode.

```css
@media (display-mode: picture-in-picture) and (prefers-color-scheme: light) {
  body {
    background: antiquewhite;
  }
}

@media (display-mode: picture-in-picture) and (prefers-color-scheme: dark) {
  body {
    background: #333;
  }

  a {
    color: antiquewhite;
  }
}
```

See [Using the Document Picture-in-Picture API](/en-US/docs/Web/API/Document_Picture-in-Picture_API/Using) for more information and a full example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Media Queries](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [@media](/en-US/docs/Web/CSS/@media)

---
title: '@viewport'
slug: Web/CSS/@viewport
tags:
  - '@viewport'
  - At-rule
  - CSS
  - Deprecated
  - Layout
  - Mobile
  - Reference
  - Screen Layout
  - viewport
browser-compat: css.at-rules.viewport
---
{{CSSRef}}{{deprecated_header}}

> **Note:** See <https://github.com/w3c/csswg-drafts/issues/4766> for discussion around @viewport's removal from the standards track.

The **`@viewport`** [CSS](/en-US/docs/Web/CSS) [at-rule](/en-US/docs/Web/CSS/At-rule) lets you configure the {{glossary("viewport")}} through which the document is viewed. It's primarily used for mobile devices, but is also used by desktop browsers that support features like "snap to edge" (such as Microsoft Edge).

Lengths specified as percentages are calculated relative to the **initial viewport**, which is the viewport before any user agent or authored styles have had an opportunity to adjust the viewport. This is typically based on the size of the window on desktop browsers that aren't in fullscreen mode.

On mobile devices (or desktop devices that are in fullscreen mode), the initial viewport is usually the portion of a device's screen that is available for application use. This may be either the full screen or the full screen area minus areas controlled by the operating system (such as a taskbar) or the application-available screen area (either the full screen or the screen minus any areas owned by the operating system or other applications).

```css
@viewport {
  width: 100vw; /*Sets the width of the actual viewport to the device width*/
}
```

> **Note:** The use of `<meta name="viewport">` tag overrides `@viewport`

## Syntax

The at-rule contains a set of nested {{glossary("descriptor (CSS)", "descriptor")}}s in a CSS block that is delimited by curly braces.

A _zoom factor_ of `1.0` or `100%` corresponds to no zooming. Larger values zoom in. Smaller values zoom out.

### Descriptors

Browser support for `@viewport` is weak at this time, with support being largely available in Internet Explorer and Edge. Even in those browsers, only a small number of descriptors are available. Browsers will ignore `@viewport` if they don't support it, and will ignore any descriptors that they don't recognize.

- `min-width`
  - : Used in the determination of the width of the viewport when the document is first displayed.
- `max-width`
  - : Used in the determination of the width of the viewport when the document is first displayed.
- `width`
  - : A shorthand descriptor for setting both `min-width` and `max-width`.
- `min-height`
  - : Used in the determination of the height of the viewport when the document is first displayed.
- `max-height`
  - : Used in the determination of the height of the viewport when the document is first displayed.
- `height`
  - : A shorthand descriptor for setting both `min-height` and `max-height`.
- `zoom`
  - : Sets the initial zoom factor.
- `min-zoom`
  - : Sets the minimum zoom factor.
- `max-zoom`
  - : Sets the maximum zoom factor.
- `user-zoom`
  - : Controls whether or not the user should be able to change the zoom factor.
- `orientation`
  - : Controls the document's orientation.
- `viewport-fit`
  - : Controls the display of the document on non-rectangular displays.

## Formal syntax

```
@viewport {
  <group-rule-body>
}
```

## Examples

### Setting viewport size, zoom, and orientation

```css
@viewport {
  min-width: 640px;
  max-width: 800px;
}

@viewport {
  zoom: 0.75;
  min-zoom: 0.5;
  max-zoom: 0.9;
}

@viewport {
  orientation: landscape;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("meta")}}, specifically `<meta name="viewport">`
- [Using the viewport meta tag to control layout on mobile browsers](/en-US/docs/Web/HTML/Viewport_meta_tag)

---
title: CSS performance optimization
slug: Learn/Performance/CSS
page-type: learn-module-chapter
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Performance/html", "Learn/Performance/business_case_for_performance", "Learn/Performance")}}

Painting an unstyled page, and then repainting it once styles are parsed would be bad user experience. For this reason, CSS is render blocking, unless the browser knows the CSS is not currently needed. The browser can paint the page once it has downloaded the CSS and built the CSS object model. Browsers follow a specific rendering path: paint only occurs after layout, which occurs after the render tree is created, which in turn requires both the DOM and the CSSOM trees. To optimize the CSSOM construction, remove unnecessary styles, minify, compress and cache it, and split CSS not required at page load into additional files to reduce CSS render blocking.

### Optimizing for render blocking

CSS can scope styles to particular conditions with media queries. Media queries are important for a responsive web design and help us optimize a critical rendering path. The browser blocks rendering until it parses all of these styles but will not block rendering on styles it knows it will not use, such the print stylesheets. By splitting the CSS into multiple files based on media queries, you can prevent render blocking during download of unused CSS. To create a non-blocking CSS link, move the not-immediately used styles, such as print styles, into separate file, add a [`<link>`](/en-US/docs/Web/HTML/Element/link) to the HTML mark up, and add a media query, in this case stating it's a print stylesheet.

```html
<!-- Loading and parsing styles.css is render-blocking -->
<link rel="stylesheet" href="styles.css" />

<!-- Loading and parsing print.css is not render-blocking -->
<link rel="stylesheet" href="print.css" media="print" />

<!-- Loading and parsing mobile.css is not render-blocking on large screens -->
<link
  rel="stylesheet"
  href="mobile.css"
  media="screen and (max-width: 480px)" />
```

By default, the browser assumes that each specified style sheet is render blocking. Tell the browser when the style sheet should be applied by adding a `media` attribute with the [media query](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries). When the browser sees a style sheet it knows that it only needs to apply it for a specific scenario, it still downloads the stylesheet, but doesn't render block. By separating out the CSS into multiple files, the main render-blocking file, in this case `styles.css`, is much smaller, reducing the time that rendering is blocked.

### Animating on the GPU

Browsers are optimized to handle CSS animations, and handle animating properties that do not trigger a reflow (and therefore also a repaint) very well. To improve performance, the node being animated can be moved off the main thread and onto the GPU. Properties that will lead to compositing include 3D transforms ([`transform: translateZ()`](/en-US/docs/Web/CSS/transform), [`rotate3d()`](/en-US/docs/Web/CSS/transform-function/rotate3d), etc.), animating transform and [`opacity`](/en-US/docs/Web/CSS/opacity), [`position: fixed`](/en-US/docs/Web/CSS/position), [`will-change`](/en-US/docs/Web/CSS/will-change), and [`filter`](/en-US/docs/Web/CSS/filter). Some elements, including [`<video>`](/en-US/docs/Web/HTML/Element/video), [`<canvas>`](/en-US/docs/Web/HTML/Element/canvas) and [`<iframe>`](/en-US/docs/Web/HTML/Element/iframe), are also on their own layer. When an element is promoted as a layer, also known as composited, animating transform properties is done in the GPU, resulting in improved performance, especially on mobile.

### `will-change` property

The CSS [`will-change`](/en-US/docs/Web/CSS/will-change) property hints to browsers how an element is expected to change. Browsers may set up optimizations before an element is actually changed. These kinds of optimizations can increase the responsiveness of a page by doing potentially expensive work before it is actually required.

> **Note:** `will-change` is intended to be used as a last resort to try to deal with existing performance problems. It should not be used to anticipate performance problems.

```css
.element {
  will-change: opacity, transform;
}
```

### The `font-display` property

Applied to the [@font-face](/en-US/docs/Web/CSS/@font-face) rule, the [font-display](/en-US/docs/Web/CSS/@font-face/font-display) property defines how font files are loaded and displayed by the browser, allowing text to appear with a fallback font while a font loads, or fails to load. This improves performance by making the text visible instead of having a blank screen, with a trade-off being a flash of unstyled text.

```css
@font-face {
  font-family: someFont;
  src: url(/path/to/fonts/someFont.woff) format("woff");
  font-weight: 400;
  font-style: normal;
  font-display: fallback;
}
```

### The `contain` property

The {{cssxref('contain')}} CSS property allows an author to indicate that an element and its contents are, as much as possible, _independent_ of the rest of the document tree. This allows the browser to recalculate layout, style, paint, size, or any combination of them for a limited area of the DOM and not the entire page.

## Conclusion

{{PreviousMenuNext("Learn/Performance/html", "Learn/Performance/business_case_for_performance", "Learn/Performance")}}

## See also

- [CSS animation performance](/en-US/docs/Web/Performance/CSS_JavaScript_animation_performance)

---
title: CSS viewport
slug: Web/CSS/CSS_viewport
page-type: css-module
spec-urls: https://drafts.csswg.org/css-viewport/
sidebar: cssref
---

The **CSS viewport** module enables specifying the size, zoom factor, and orientation of the user-agent's initial containing block, or _viewport_.

Content designed for large viewports may exhibit a variety of bugs when viewed in smaller viewports, including unintended wrapping, clipped content, and incorrectly sized {{glossary("scroll container", "scroll containers")}}. HTML provides a [viewport meta tag](/en-US/docs/Web/HTML/Reference/Elements/meta/name/viewport), `<meta name="viewport">`, to provide hints about the initial size of the viewport. If the site isn't designed to work well on small viewports and this tag is omitted, some mobile browsers render the site using a fixed initial containing block width, typically `980px`. The content is then scaled down, making the CSS pixel size smaller than an actual pixel. The resulting page fits into the available screen space but is illegible, requiring the user to zoom and pan to view the content.

The {{glossary("viewport")}} initial containing block for continuous media has the dimensions of the viewport. Since the viewport is generally no larger than the display, devices with smaller displays, such as phones or tablets, typically present a smaller viewport than larger devices like desktops or laptops.

## Reference

### Properties

- {{cssxref("zoom")}}

### Interfaces

- {{domxref("Window.Viewport")}}
- {{domxref("Viewport")}}
  - {{domxref("Viewport.segments")}}

### Glossary terms and definitions

- {{glossary("Viewport")}}
- [Actual viewport](/en-US/docs/Web/CSS/Guides/CSSOM_view/Viewport_concepts#actual_viewport)
- [Initial viewport](/en-US/docs/Web/CSS/Guides/CSSOM_view/Viewport_concepts#initial_viewport)

## Guides

- [Viewport concepts](/en-US/docs/Web/CSS/Guides/CSSOM_view/Viewport_concepts)
  - : The concept of the viewport — what it is, its impact in terms of CSS, SVG, and mobile devices — and the difference between the visual viewport and the layout viewport.

- [Using environment variables](/en-US/docs/Web/CSS/Guides/Environment_variables/Using)
  - : An overview of what environment variables are, browser-defined environment variables, and how to use the `env()` function.

- [Using the Viewport Segments API](/en-US/docs/Web/API/Viewport_segments_API/Using)
  - : Create responsive designs optimized for different viewport segment sizes and arrangements with the API and environment variables.

## Related concepts

- [CSS media queries](/en-US/docs/Web/CSS/CSS_media_queries) module
  - {{cssxref("@media")}}
  - {{cssxref("@media/horizontal-viewport-segments", "horizontal-viewport-segments")}} descriptor
  - {{cssxref("@media/vertical-viewport-segments", "vertical-viewport-segments")}} descriptor

- [CSS environment variables](/en-US/docs/Web/CSS/Guides/Environment_variables)
  - {{cssxref("env()")}}
  - [`<environment-variable-name>`](/en-US/docs/Web/CSS/Guides/Environment_variables/Using#browser-defined_environment_variables)

- [Device Posture API](/en-US/docs/Web/API/Device_Posture_API)

## Specifications

{{Specifications}}

## See also

- [CSSOM view](/en-US/docs/Web/CSS/Guides/CSSOM_view) module

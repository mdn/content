---
title: CSS media queries
slug: Web/CSS/CSS_media_queries
page-type: css-module
spec-urls:
  - https://drafts.csswg.org/mediaqueries-3/
  - https://drafts.csswg.org/mediaqueries/
  - https://drafts.csswg.org/mediaqueries-5/
---

{{CSSRef}}

The **CSS media queries** module enables testing and querying of viewport values and browser or device features, to conditionally apply CSS styles based on the current user environment. Media queries are used in the CSS `@media` rule and other contexts and languages such as HTML and JavaScript.

Media queries are a key component of [responsive design](/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design). They enable conditional setting of CSS styles depending on the presence or value of device characteristics. It's common to use a media query based on {{Glossary("viewport")}} size to set appropriate layouts on devices with different screen sizes — for example three columns on a wide screen or a single column on a narrow screen.

Other common examples include increasing the font size and hiding navigation menus when printing a page, adjusting the padding between paragraphs when a page is viewed in portrait or landscape mode, or increasing the size of buttons to provide a larger hit area on touchscreens.

In [CSS](/en-US/docs/Web/CSS), use the {{cssxref("@media")}} [at-rule](/en-US/docs/Web/CSS/CSS_syntax/At-rule) to conditionally apply part of a style sheet based on the result of a media query. To conditionally apply an entire style sheet, use {{cssxref("@import")}}.

When designing reusable HTML components, you may also use [container queries](/en-US/docs/Web/CSS/CSS_containment/Container_queries), which allow you to apply styles based on the size of a containing element rather than the viewport or other device characteristics.

## Reference

### At-rules

- {{cssxref("@import")}}
- {{cssxref("@media")}}

### Descriptors

- {{cssxref("@media/any-hover", "any-hover")}}
- {{cssxref("@media/any-pointer", "any-pointer")}}
- {{cssxref("@media/aspect-ratio", "aspect-ratio")}}
- {{cssxref("@media/color", "color")}}
- {{cssxref("@media/color-gamut", "color-gamut")}}
- {{cssxref("@media/color-index", "color-index")}}
- {{cssxref("@media/device-aspect-ratio", "device-aspect-ratio")}}
- {{cssxref("@media/device-height", "device-height")}}
- {{cssxref("@media/device-width", "device-width")}}
- {{cssxref("@media/display-mode", "display-mode")}}
- {{cssxref("@media/dynamic-range", "dynamic-range")}}
- {{cssxref("@media/forced-colors", "forced-colors")}}
- {{cssxref("@media/grid", "grid")}}
- {{cssxref("@media/height", "height")}}
- {{cssxref("@media/hover", "hover")}}
- {{cssxref("@media/inverted-colors", "inverted-colors")}}
- {{cssxref("@media/monochrome", "monochrome")}}
- {{cssxref("@media/orientation", "orientation")}}
- {{cssxref("@media/overflow-block", "overflow-block")}}
- {{cssxref("@media/overflow-inline", "overflow-inline")}}
- {{cssxref("@media/pointer", "pointer")}}
- {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}
- {{cssxref("@media/prefers-contrast", "prefers-contrast")}}
- {{cssxref("@media/prefers-reduced-data", "prefers-reduced-data")}}
- {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}}
- {{cssxref("@media/prefers-reduced-transparency", "prefers-reduced-transparency")}}
- {{cssxref("@media/resolution", "resolution")}}
- {{cssxref("@media/scan", "scan")}}
- {{cssxref("@media/scripting", "scripting")}}
- {{cssxref("@media/update", "update")}}
- {{cssxref("@media/video-dynamic-range", "video-dynamic-range")}}
- {{cssxref("@media/width", "width")}}

> [!NOTE]
> CSS media queries level 5 introduces five `@media` descriptors that have not been implemented: {{cssxref("@media/environment-blending", "environment-blending")}}, {{cssxref("@media/horizontal-viewport-segments", "horizontal-viewport-segments")}}, {{cssxref("@media/nav-controls", "nav-controls")}}, {{cssxref("@media/vertical-viewport-segments", "vertical-viewport-segments")}}, and {{cssxref("@media/video-color-gamut", "video-color-gamut")}}

> [!NOTE]
> CSS media queries level 4 deprecated three `@media` descriptors: {{cssxref("@media/device-aspect-ratio", "device-aspect-ratio")}}, {{cssxref("@media/device-height", "device-height")}}, and {{cssxref("@media/device-width", "device-width")}}.

### Data types and operators

- [`<media-types>`](/en-US/docs/Web/CSS/@media#media_types)
- [`<media-features>`](/en-US/docs/Web/CSS/@media#media_features)
- [`<resolution>`](/en-US/docs/Web/CSS/resolution)
- [Logical operators](/en-US/docs/Web/CSS/@media#logical_operators)

### Glossary terms

- [media](/en-US/docs/Glossary/Media/CSS)
- [media query](/en-US/docs/Glossary/Media_query)

## Guides

- [Using media queries](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries)

  - : Introduces media queries, their syntax, and the operators and media features used to construct media query expressions.

- [Learn: Media query fundamentals](/en-US/docs/Learn_web_development/Core/CSS_layout/Media_queries)

  - : Introduction to media queries and approaches for using them to create responsive designs.

- [Testing media queries](/en-US/docs/Web/CSS/CSS_media_queries/Testing_media_queries)

  - : Describes how to use media queries in your JavaScript code to determine the state of a device, and to set up listeners that notify your code when the results of media queries change (such as when the user rotates the screen or resizes the browser).

- [Using media queries for accessibility](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries_for_accessibility)

  - : Learn how media queries can help users understand your website better.

- [Printing](/en-US/docs/Web/CSS/CSS_media_queries/Printing)

  - : Tips and techniques for helping improve web content printer output.

- [Responsive images](/en-US/docs/Web/HTML/Responsive_images)

  - : Learn how to use media queries with `sizes` to implement responsive image solutions on websites.

## Related concepts

- [CSS containment](/en-US/docs/Web/CSS/CSS_containment) module
  - {{cssxref("@container")}} at-rule
  - [Using container queries](/en-US/docs/Web/CSS/CSS_containment/Container_queries)
  - [Using size and style container queries](/en-US/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- [CSS conditional rules](/en-US/docs/Web/CSS/CSS_conditional_rules) module
  - {{cssxref("@supports")}} at-rule
  - [Using feature queries](/en-US/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
- [CSS paged media](/en-US/docs/Web/CSS/CSS_paged_media) module
  - {{cssxref("@page")}} at-rule
- [CSS object model](/en-US/docs/Web/API/CSS_Object_Model) module
  - {{DOMxRef("MediaQueryList")}} interface
    - {{DOMxRef("MediaQueryList.matches", "matches")}} property
    - {{DOMxRef("MediaQueryList.media", "media")}} property
    - {{DOMxRef("MediaQueryList.change_event", "change")}} event
  - {{DOMxRef("MediaList")}} interface
    - {{DOMxRef("MediaList.mediaText", "mediaText")}} property
  - {{DOMxRef("MediaQueryListEvent")}} object
- [Device Posture API](/en-US/docs/Web/API/Device_Posture_API)
  - {{cssxref("@media/device-posture", "device-posture")}} descriptor
- HTML
  - `sizes` attribute for [`<img>`](/en-US/docs/Web/HTML/Element/img#sizes), [`<link>`](/en-US/docs/Web/HTML/Element/link#sizes), and [`<source>`](/en-US/docs/Web/HTML/Element/source#sizes) for {{HTMLElement("picture")}}
  - `media` attribute for [`<link>`](/en-US/docs/Web/HTML/Element/link#media), [`<source>`](/en-US/docs/Web/HTML/Element/source#media), and [`<style>`](/en-US/docs/Web/HTML/Element/style#media) [HTML](/en-US/docs/Web/HTML)
  - [Viewport `<meta>` tag](/en-US/docs/Web/HTML/Viewport_meta_tag)
- SVG [`media`](/en-US/docs/Web/SVG/Attribute/media) attribute

## Specifications

{{Specifications}}

## See also

- [Container queries](/en-US/docs/Web/CSS/CSS_containment/Container_queries)
- [Using the `srcset` and `sizes` attributes](/en-US/docs/Web/HTML/Element/img#using_the_srcset_and_sizes_attributes)
- [CSS paged media](/en-US/docs/Web/CSS/CSS_paged_media)
- Use {{cssxref("@supports")}} to apply styles that depend on browser support for various CSS technologies.

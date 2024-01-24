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

**CSS media queries** module enables testing and querying viewport values or user-agent features, to conditionally apply CSS styles based on the current user environment. Media queries are used in the CSS `@media` rule and in other contexts and languages, such as HTML and JavaScript.

Media queries are a key component of [responsive design](/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design). They enable applying CSS styles depending on the presence or value of device characteristics. It's common to apply a media query based on the {{Glossary("viewport")}} size so that layout choices can be made for devices with different screen sizes. For example, you may increase the font sizes when printing a page, the padding between paragraphs when a page is viewed in portrait mode, or the size of buttons on touchscreens.

In [CSS](/en-US/docs/Web/CSS), use the {{cssxref("@media")}} [at-rule](/en-US/docs/Web/CSS/At-rule) to conditionally apply part of a style sheet based on the result of a media query. To conditionally apply an entire style sheet, use {{cssxref("@import")}}.

When designing reusable HTML components, you may also use [container queries](/en-US/docs/Web/CSS/CSS_container_queries), which allow you to apply styles based on the size of a containing element rather than the viewport or other device characteristics.

## Reference

### At-rules

- {{cssxref("@import")}}
- {{cssxref("@media")}}

### Data types

- [`<media-types>`](/en-US/docs/Web/CSS/@media#media_types)
- [`<media-features>`](/en-US/docs/Web/CSS/@media#media_features), including:

  - {{cssxref("@media/width", "width")}}
  - {{cssxref("@media/height", "height")}}
  - {{cssxref("@media/aspect-ratio", "aspect-ratio")}}
  - {{cssxref("@media/orientation", "orientation")}}

  - {{cssxref("@media/resolution", "resolution")}}
  - {{cssxref("@media/scan", "scan")}}
  - {{cssxref("@media/grid", "grid")}}
  - {{cssxref("@media/update", "update")}}
  - {{cssxref("@media/overflow-block", "overflow-block")}}
  - {{cssxref("@media/overflow-inline", "overflow-inline")}}

  - {{cssxref("@media/color", "color")}}
  - {{cssxref("@media/color-index", "color-index")}}
  - {{cssxref("@media/monochrome", "monochrome")}}
  - {{cssxref("@media/color-gamut", "color-gamut")}}

  - {{cssxref("@media/pointer", "pointer")}}
  - {{cssxref("@media/hover", "hover")}}
  - {{cssxref("@media/any-pointer", "any-pointer")}}
  - {{cssxref("@media/any-hover", "any-hover")}}

- [`<resolution>`](/en-US/docs/Web/CSS/resolution)

### Glossary terms

- [media](/en-US/docs/Glossary/Media/CSS)
- [media query](/en-US/docs/Glossary/Media_query)

## Guides

- [Using media queries](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries)

  - : Introduces media queries, their syntax, and the operators and media features used to construct media query expressions.

- [Beginner's guide to media queries](/en-US/docs/Learn/CSS/CSS_layout/Media_queries)

  - : define this

- [Testing media queries](/en-US/docs/Web/CSS/CSS_media_queries/Testing_media_queries)

  - : Describes how to use media queries in your JavaScript code to determine the state of a device, and to set up listeners that notify your code when the results of media queries change (such as when the user rotates the screen or resizes the browser).

- [Using media queries for accessibility](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries_for_accessibility)

  - : Learn how media queries can help users understand your website better.

- [Printing](/en-US/docs/Web/CSS/CSS_media_queries/Printing)

  - : Tips and techniques for helping improve web content printer output.

- [Learn: responsive design](/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)

  - : define this

## Related concepts

- HTML `media` attribute for [`<link>`](/en-US/docs/Web/HTML/Element/link#media), [`<source>`](/en-US/docs/Web/HTML/Element/source#media), and [`<style>`](/en-US/docs/Web/HTML/Element/style#media) [HTML](/en-US/docs/Web/HTML)
- [SVG `media` attribute](/en-US/docs/Web/SVG/Attribute/media)
- [Logical operators](/en-US/docs/Web/CSS/@media#logical_operators)
- [Container queries](/en-US/docs/Web/CSS/CSS_container_queries)
- [Feature queries](/en-US/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
- {{DOMxRef("MediaQueryList")}} interface and the {{DOMxRef("MediaQueryList.matches", "matches")}} and {{DOMxRef("MediaQueryList.media", "media")}} properties, and {{DOMxRef("MediaQueryList.change_event", "change")}} event.
- {{DOMxRef("MediaList")}} interface and the {{DOMxRef("MediaList.mediaText", "mediaText")}} property
- {{DOMxRef("Window.matchMedia", "matchMedia()")}} method
- {{domxref("Window.matchMedia()")}} method
- {{DOMxRef("MediaQueryListEvent")}} object
<!--{{DOMxRef("")}}
{{DOMxRef("")}}
{{DOMxRef("")}}-->
- HTML [sizes]() attribute

## Specifications

{{Specifications}}

## See also

- [Container queries](/en-US/docs/Web/CSS/CSS_container_queries)
- [CSS containment](/en-US/docs/Web/CSS/CSS_containment) module
- [CSS conditional rules](/en-US/docs/Web/CSS/CSS_container_queries) module
- [CSS paged media](/en-US/docs/Web/CSS/CSS_paged_media)
- Use {{cssxref("@supports")}} to apply styles that depend on browser support for various CSS technologies.

---
title: Media queries
slug: Web/CSS/Media_Queries
tags:
  - CSS
  - Guide
  - Media Queries
  - Overview
  - Reference
  - Responsive Design
spec-urls:
  - https://drafts.csswg.org/mediaqueries/
  - https://drafts.csswg.org/css-conditional/
---
{{CSSRef}}

**Media queries** let you adapt your site or app depending on the presence or value of various device characteristics and parameters.

They are a key component of [responsive design](/en-US/docs/Web/Progressive_web_apps). For example, a media query can shrink the font size on small devices, increase the padding between paragraphs when a page is viewed in portrait mode, or bump up the size of buttons on touchscreens.

In [CSS](/en-US/docs/Web/CSS), use the {{cssxref("@media")}} [at-rule](/en-US/docs/Web/CSS/At-rule) to conditionally apply part of a style sheet based on the result of a media query. Use {{cssxref("@import")}} to conditionally apply an entire style sheet.

### Media queries in HTML

In [HTML](/en-US/docs/Web/HTML), media queries can be applied to various elements:

- In the {{HTMLElement("link")}} element's {{htmlattrxref("media", "link")}} attribute, they define the media to which a linked resource (typically CSS) should be applied.
- In the {{HTMLElement("source")}} element's {{htmlattrxref("media", "source")}} attribute, they define the media to which that source should be applied. (This is only valid inside {{HTMLElement("picture")}} elements.)
- In the {{HTMLElement("style")}} element's {{htmlattrxref("media", "style")}} attribute, they define the media to which the style should be applied.

### Media queries in JavaScript

In [JavaScript](/en-US/docs/Web/JavaScript), you can use the {{domxref("Window.matchMedia()")}} method to test the window against a media query. You can also use {{domxref("MediaQueryList.addListener()")}} to be notified whenever the state of a query changes. With this functionality, your site or app can respond to changes in the device configuration, orientation, or state.

You can learn more about programmatically using media queries in [Testing media queries](/en-US/docs/Web/CSS/Media_Queries/Testing_media_queries).

## Reference

### At-rules

- {{cssxref("@import")}}
- {{cssxref("@media")}}

## Guides

- [Using media queries](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
  - : Introduces media queries, their syntax, and the operators and media features which are used to construct media query expressions.
- [Testing media queries programmatically](/en-US/docs/Web/CSS/Media_Queries/Testing_media_queries)
  - : Describes how to use media queries in your JavaScript code to determine the state of a device, and to set up listeners that notify your code when the results of media queries change (such as when the user rotates the screen or resizes the browser).
- [Using media queries for accessibility](/en-US/docs/Web/CSS/Media_Queries/Using_Media_Queries_for_Accessibility)
  - : Learn how Media Queries can help users understand your website better.

## Specifications

{{Specifications}}

## See also

- Use {{cssxref("@supports")}} to apply styles that depend on browser support for various CSS technologies.

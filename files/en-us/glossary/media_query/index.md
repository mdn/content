---
title: Media query
slug: Glossary/Media_query
page-type: glossary-definition
---

{{GlossarySidebar}}

A **media query** is a logical expression that is a method for CSS, JavaScript, HTML, and other web languages, to check aspects of the user agent or device that the document is being displayed in, independent of the document contents, to determine whether the associated code block or feature should be applied.

Media queries are used to conditionally apply CSS styles with the CSS {{cssxref("@media")}} and {{cssxref("@import")}} at-rules and in JavaScript to test and monitor media states such as with the {{DOMxRef("Window.matchMedia", "matchMedia()")}} method, {{DOMxRef("MediaQueryList.matches", "matches")}} property, and {{DOMxRef("MediaQueryList.change_event", "change")}} event. Media queries are used as values of the [`<link>`](/en-US/docs/Web/HTML/Element/link#media), [`<source>`](/en-US/docs/Web/HTML/Element/source#media), and [`<style>`](/en-US/docs/Web/HTML/Element/style#media) [HTML](/en-US/docs/Web/HTML) element `media` attributes, conditionally applying the link, source, or style if the media query is true. When a `media` attribute is omitted, it defaults to `true`. Media queries are also used as the value of the [`sizes`](/en-US/docs/Web/API/HTMLImageElement/sizes) attribute of the {{HTMLElement("img")}} element.

Media queries are made up of optional media query modifiers and media types, and zero or more media conditions, along with logical operators.

Media queries are re-evaluated in response to changes in the user environment, such as when a user expands a browser window or flips a mobile device onto its side changing from portrait to landscape orientation.

Multiple comma-separated media queries create a **media query list**. A media query list is true if any of its component media queries are true, and false only if all of its component media queries are false.

A media query may optionally be prefixed by a single media query modifier or `not` or `only`, which in the case of `not`, alters the meaning of the following media query.

## See also

- [Using media queries](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [CSS media queries](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries) module

---
title: '-webkit-transform-2d'
slug: Web/CSS/@media/-webkit-transform-2d
tags:
  - '@media'
  - CSS
  - Non-standard
  - Reference
  - WebKit
  - media feature
browser-compat: css.at-rules.media.-webkit-transform-2d
---
{{ Non-standard_header }}

> **Note:** All browsers support the [`transition`](/en-US/docs/Web/CSS/animation#browser_compatibility) property without vendor prefixes. Only WebKit (Safari), and not Chromium, based browsers supports the `-webkit-transition-2d` media feature. No browsers support `transition`, without the prefix or `2d` extension, as a media query. Use the [`@supports (transition)`](/en-US/docs/Web/CSS/@supports) feature query instead.

The **`-webkit-transform-2d`** Boolean [CSS](/en-US/docs/Web/CSS) [media feature](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#media_features) is a [WebKit extension](/en-US/docs/Web/CSS/WebKit_Extensions) whose value is `true` if vendor-prefixed CSS 2D {{cssxref("transform")}}s and non-standard vendor-prefixed media queries are supported.

Apple has [a description in Safari CSS Reference](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/OtherStandardCSS3Features.html#//apple_ref/doc/uid/TP40007601-SW3).

## Syntax

`-webkit-transform-2d` is a Boolean [CSS](/en-US/docs/Web/CSS) [media feature](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#media_features) whose value is `true` if the browser supports `-webkit` prefixed CSS 2D {{cssxref("transform")}}s.

### Values

- `true`
  - : The browser supports the 2D CSS transforms with the `-webkit` prefix.
- `false`
  - : The 2D CSS transforms prefixed with `-webkit` are not supported by the browser.

## Examples

### Basic example

```css
@media (-webkit-transform-2d) {
  div {
    -webkit-transform: translate(100px, 100px);
  }
}
```

This media feature is only supported by WebKit. If possible, use an {{cssxref("@supports")}} feature query instead:

```css
@supports (-webkit-transform: translate(100px, 100px)) {
  div {
    -webkit-transform: translate(100px, 100px);
  }
}
```

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("@media/-webkit-transform-3d", "-webkit-transform-3d")}}
- {{cssxref("@media/-webkit-transition", "-webkit-transition")}}
- {{cssxref("@media/-webkit-animation", "-webkit-animation")}}
- [Test page at quirksmode.org](https://www.quirksmode.org/css/tests/mediaqueries/animation.html)
- {{cssxref("transform")}} and [using CSS transforms](/en-US/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms)
- {{cssxref("@media")}} and [Using media queries](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
- {{cssxref("@supports")}} and [using feature queries](/en-US/docs/Web/CSS/CSS_Conditional_Rules/Using_Feature_Queries)

{{ CSSRef }}

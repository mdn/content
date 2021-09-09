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

The **`-webkit-transform-2d`** Boolean [CSS](/en-US/docs/Web/CSS) [media feature](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#media_features) is a [Chrome extension](/en-US/docs/Web/CSS/WebKit_Extensions) whose value is `true` if vendor-prefixed CSS 2D {{cssxref("transform")}}s are supported.

Apple has [a description in Safari CSS Reference](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariCSSRef/Articles/OtherStandardCSS3Features.html#//apple_ref/doc/uid/TP40007601-SW3).

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
- [Test page at quirksmode.org](http://www.quirksmode.org/css/tests/mediaqueries/animation.html)

{{ CSSRef }}

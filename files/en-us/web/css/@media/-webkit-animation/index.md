---
title: '-webkit-animation'
slug: Web/CSS/@media/-webkit-animation
tags:
  - '@media'
  - CSS
  - Reference
  - WebKit
  - media feature
browser-compat: css.at-rules.media.-webkit-animation
---
{{ CSSRef }} {{ Non-standard_header }}

The **`-webkit-animation`** Boolean [CSS](/en-US/docs/Web/CSS) [media feature](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#media_features) is a [Chrome extension](/en-US/docs/Web/CSS/WebKit_Extensions) whose value is `true` if vendor-prefixed CSS {{cssxref("animation")}}s are supported.

Apple has [a description in Safari CSS Reference](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariCSSRef/Articles/OtherStandardCSS3Features.html#//apple_ref/doc/uid/TP40007601-SW3).

> **Note:** This media feature is only supported by WebKit. If possible, use an {{cssxref("@supports")}} feature query instead.

## Syntax

The `-webkit-animation` media feature is a Boolean whose value is `true` if the vendor-prefixed CSS animation properties are supported.

### Values

- `true`
  - : The browser supports `-webkit` prefixed CSS {{cssxref("animation")}}s.
- `false`
  - : The browser doesn't support these prefixed CSS animations.

## Examples

### Example of -webkit-animation

```css
@media (-webkit-animation) {
  /* CSS to use if animations are supported */
}
```

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- [`-webkit-transform-3d`](/en-US/docs/Web/CSS/@media/-webkit-transform-3d)
- [`-webkit-transform-2d`](/en-US/docs/Web/CSS/@media/-webkit-transform-2d)
- [`-webkit-transition`](/en-US/docs/Web/CSS/@media/-webkit-transition)
- [Test page at quirksmode.org](http://www.quirksmode.org/css/tests/mediaqueries/animation.html)

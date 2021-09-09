---
title: '-webkit-transform-3d'
slug: Web/CSS/@media/-webkit-transform-3d
tags:
  - '-webkit-transform-3d'
  - 3D
  - '@media'
  - CSS
  - Non-standard
  - Reference
  - WebKit
  - media feature
  - transform
browser-compat: css.at-rules.media.-webkit-transform-3d
---
{{ Non-standard_header }}

The **`-webkit-transform-3d`** Boolean [CSS](/en-US/docs/Web/CSS) [media feature](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#media_features) is a [Chrome extension](/en-US/docs/Web/CSS/WebKit_Extensions) whose value is `true` if vendor-prefixed CSS 3D {{cssxref("transform")}}s are supported.

> **Note:** This media feature is only supported by WebKit and Blink. If possible, use an {{cssxref("@supports")}} feature query instead.

## Syntax

`-webkit-transform-3d` is a Boolean [CSS](/en-US/docs/Web/CSS) [media feature](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#media_features) whose value is `true` if the browser supports `-webkit` prefixed CSS 3D {{cssxref("transform")}}s.

### Values

- `true`
  - : The browser supports the 3D CSS transforms with the `-webkit` prefix.
- `false`
  - : The 3D CSS transforms prefixed with `-webkit` are not supported by the browser.

## Examples

### Examples of media queries with -webkit-transform-3d

```css
@media (-webkit-transform-3d) {
  .foo {
    transform-style: preserve-3d;
  }
}

@media (-webkit-transform-3d: 1) {
  .foo {
    transform-style: preserve-3d;
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("@media/-webkit-transform-2d", "-webkit-transform-2d")}}
- {{cssxref("@media/-webkit-transition", "-webkit-transition")}}
- {{cssxref("@media/-webkit-animation", "-webkit-animation")}}
- [Test page at quirksmode.org](http://www.quirksmode.org/css/tests/mediaqueries/animation.html)

{{ CSSRef }}

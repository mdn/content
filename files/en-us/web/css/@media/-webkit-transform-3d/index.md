---
title: -webkit-transform-3d
slug: Web/CSS/@media/-webkit-transform-3d
page-type: css-media-feature
browser-compat: css.at-rules.media.-webkit-transform-3d
---

{{CSSRef}}

The **`-webkit-transform-3d`** Boolean [CSS](/en-US/docs/Web/CSS) [media feature](/en-US/docs/Web/CSS/@media#media_features) is a [WebKit extension](/en-US/docs/Web/CSS/WebKit_Extensions) whose value is `true` if vendor-prefixed CSS 3D {{cssxref("transform")}}s are supported.

> [!NOTE]
> While this media feature is currently [supported by most browsers](#browser_compatibility). If possible, use an {{cssxref("@supports")}} feature query instead.

## Syntax

`-webkit-transform-3d` is a Boolean [CSS](/en-US/docs/Web/CSS) [media feature](/en-US/docs/Web/CSS/@media#media_features) whose value is `true` if the browser supports `-webkit` prefixed CSS 3D {{cssxref("transform")}}s.

### Values

- `true`
  - : The browser supports the 3D CSS transforms with the `-webkit` prefix and supports non-standard, prefixed media queries.
- `false`
  - : The 3D CSS transforms prefixed with `-webkit` are not supported by the browser.

## Examples

### Examples of media queries with -webkit-transform-3d

```css
@media (-webkit-transform-3d) {
  .foo {
    transform-style: preserve-3d;
  }
}
```

A better method for checking for browser support is using a feature query:

```css
@supports (transform-style) {
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
- [Test page at quirksmode.org](https://www.quirksmode.org/css/tests/mediaqueries/animation.html)
- {{cssxref("transform")}} and [using CSS transforms](/en-US/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
- {{cssxref("@media")}} and [Using media queries](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- {{cssxref("@supports")}} and [using feature queries](/en-US/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)

---
title: -webkit-animation
slug: Web/CSS/@media/-webkit-animation
page-type: css-media-feature
status:
  - deprecated
  - non-standard
browser-compat: css.at-rules.media.-webkit-animation
---

{{CSSRef}}{{Non-standard_header}}{{Deprecated_Header}}

> [!NOTE]
> All browsers support the [`animation`](/en-US/docs/Web/CSS/animation#browser_compatibility) property without vendor prefixes. Only WebKit (Safari), and not Chromium, based browsers supports the `-webkit-animation` media feature. No browsers support `animation`, without the prefix, as a media query. Use the [`@supports (animation)`](/en-US/docs/Web/CSS/@supports) feature query instead.

The **`-webkit-animation`** Boolean [CSS](/en-US/docs/Web/CSS) [media feature](/en-US/docs/Web/CSS/@media#media_features) is a [WebKit extension](/en-US/docs/Web/CSS/WebKit_Extensions) whose value is `true` if vendor-prefixed CSS {{cssxref("animation")}}s are supported.

Apple has [a description in Safari CSS Reference](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/OtherStandardCSS3Features.html#//apple_ref/doc/uid/TP40007601-SW3).

> [!NOTE]
> This media feature is only supported by WebKit. If possible, use an {{cssxref("@supports")}} feature query instead.

## Syntax

The `-webkit-animation` media feature is a Boolean whose value is `true` if the vendor-prefixed CSS animation properties are supported _and_ the browser supports prefixed property media queries.

### Values

- `true`
  - : The browser supports `-webkit` prefixed CSS {{cssxref("animation")}}.
- `false`
  - : The browser doesn't support these prefixed CSS animations.

## Examples

### Example of -webkit-animation

```css
@media (-webkit-animation) {
  /* CSS to use if -webkit- prefixed animations are supported AND the browser supports prefixed properties as media queries */
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
- [Test page at quirksmode.org](https://www.quirksmode.org/css/tests/mediaqueries/animation.html)
- {{cssxref("animation")}} and [using CSS animations](/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- {{cssxref("@media")}} and [Using media queries](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- {{cssxref("@supports")}} and [using feature queries](/en-US/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)

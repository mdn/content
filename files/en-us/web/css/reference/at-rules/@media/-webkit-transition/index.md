---
title: -webkit-transition
slug: Web/CSS/Reference/At-rules/@media/-webkit-transition
page-type: css-media-feature
status:
  - deprecated
  - non-standard
browser-compat: css.at-rules.media.-webkit-transition
sidebar: cssref
---

{{deprecated_header}} {{ Non-standard_header }}

> [!NOTE]
> All browsers support the [`transition`](/en-US/docs/Web/CSS/Reference/Properties/animation#browser_compatibility) property without vendor prefixes. Only WebKit (Safari), and not Chromium, based browsers support the `-webkit-transition` media feature. No browsers support `transition` without the prefix as a media query (though some browsers do support - {{cssxref("@media/-webkit-transform-3d", "-webkit-transform-3d")}}). Use the [`@supports (transition)`](/en-US/docs/Web/CSS/Reference/At-rules/@supports) feature query instead.

The **`-webkit-transition`** Boolean non-standard [CSS](/en-US/docs/Web/CSS) [media feature](/en-US/docs/Web/CSS/Reference/At-rules/@media#media_features) is a [WebKit extension](/en-US/docs/Web/CSS/Reference/Webkit_extensions) whose value is `true` if the browsing context supports [CSS transitions](/en-US/docs/Web/CSS/CSS_transitions).

Apple has [a description in Safari CSS Reference](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/OtherStandardCSS3Features.html#//apple_ref/doc/uid/TP40007601-SW3); this is now called `transition` there.

> [!NOTE]
> You should not use this media feature; it was never specified, has never been widely implemented, and has been [removed from most browsers](#browser_compatibility). Use a {{cssxref("@supports")}} feature query instead.

## Syntax

```css
@media (-webkit-transition) {
  /* CSS to use if this media feature and prefixed transitions are supported */
}
```

## Examples

### Use @supports instead

Do not use the `-webkit-transition` media feature. Instead, test for transition support using the CSS {{cssxref("@supports")}} [at-rule](/en-US/docs/Web/CSS/CSS_syntax/At-rules), like this:

```css
@supports (transition: initial) {
  /* CSS to use if transitions are supported */
}
```

### Obsolete example

Before this became obsolete, you could use `-webkit-transition` in your CSS like this:

```css
@media (-webkit-transition) {
  /* CSS to use if transitions are supported */
}
```

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("@media/-webkit-transform-3d", "-webkit-transform-3d")}}
- {{cssxref("@media/-webkit-transform-2d", "-webkit-transform-2d")}}
- {{cssxref("@media/-webkit-animation", "-webkit-animation")}}
- [Test page at quirksmode.org](https://www.quirksmode.org/css/tests/mediaqueries/animation.html)
- {{cssxref("transition")}} and [using CSS transitions](/en-US/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
- {{cssxref("@media")}} and [Using media queries](/en-US/docs/Web/CSS/Guides/Media_queries/Using)
- {{cssxref("@supports")}} and [using feature queries](/en-US/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)

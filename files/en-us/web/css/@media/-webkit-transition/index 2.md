---
title: '-webkit-transition'
slug: Web/CSS/@media/-webkit-transition
tags:
  - '@media'
  - Blink
  - CSS
  - Deprecated
  - Non-standard
  - Reference
  - WebKit
  - media feature
browser-compat: css.at-rules.media.-webkit-transition
---
{{ CSSRef }} {{deprecated_header}} {{ Non-standard_header }}

The **`-webkit-transition`** Boolean [CSS](/en-US/docs/Web/CSS) [media feature](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#media_features) is a [Chrome extension](/en-US/docs/Web/CSS/WebKit_Extensions) whose value is `true` if the browsing context supports [CSS transitions](/en-US/docs/Web/CSS/CSS_Transitions). It was never supported in browsers not based on WebKit or Blink.

Apple has [a description in Safari CSS Reference](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariCSSRef/Articles/OtherStandardCSS3Features.html#//apple_ref/doc/uid/TP40007601-SW3); this is now called `transition` there.

> **Note:** You should not use this media feature; it was never specified, has never been widely implemented, and has been removed from all browsers. Use an {{cssxref("@supports")}} feature query instead.

## Syntax

```css
@media (-webkit-transition) {
  /* CSS to use if transitions are supported */
}
```

## Examples

### Use @supports instead

Do not use the `-webkit-transition` media feature. Instead, test for transition support using the CSS {{cssxref("@supports")}}[ at-rule](/en-US/docs/Web/CSS/At-rule), like this:

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

- [Using media queries](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
- [Using CSS transitions](/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
- {{cssxref("@supports")}}
- {{cssxref("transition")}}

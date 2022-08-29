---
title: '-webkit-device-pixel-ratio'
slug: Web/CSS/@media/-webkit-device-pixel-ratio
tags:
  - '@media'
  - CSS
  - WebKit
  - media feature
browser-compat: css.at-rules.media.-webkit-device-pixel-ratio
---
{{CSSRef}}

The **`-webkit-device-pixel-ratio`** is a non-standard Boolean [CSS](/en-US/docs/Web/CSS) [media feature](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#media_features) which is an alternative to the standard [`resolution`](/en-US/docs/Web/CSS/@media/resolution) media feature.

> **Note:** If possible, use the [`resolution`](/en-US/docs/Web/CSS/@media/resolution) media feature query instead, which is a standard media feature. While this prefixed media feature is a WebKit feature, other browser engines may support it. See [browser compatibility](#browser-compatibility) below.

## Syntax

The `-webkit-device-pixel-ratio` feature is specified as a {{cssxref("&lt;number&gt;")}} value. It is a range feature, meaning that you can also use the prefixed **`-webkit-min-device-pixel-ratio`** and **`-webkit-max-device-pixel-ratio`** variants to query minimum and maximum values, respectively.

### Values

- {{cssxref("&lt;number&gt;")}}
  - : The number of device pixels used to represent each CSS [`px`](/en-US/docs/Web/CSS/length#absolute_length_units). Although the value is a `<number>`, and thus doesn't syntactically allow units, its implicit unit is [`dppx`](/en-US/docs/Web/CSS/resolution#units).

## Implementation

```css
/* A unit of "dppx" is implied: */
@media (-webkit-min-device-pixel-ratio: 2) { /* … */ }
/* It is equivalent to: */
@media (min-resolution: 2dppx) { /* … */ }

/* Similarly: */
@media (-webkit-max-device-pixel-ratio: 2) { /* … */ }
/* It is equivalent to: */
@media (max-resolution: 2dppx) { /* … */ }
```

## Examples

### HTML

```html
<p>This is a test of your device's pixel density.</p>
```

### CSS

```css
/* Exact resolution */
@media (-webkit-device-pixel-ratio: 1) {
  p {
    color: red;
  }
}

/* Minimum resolution */
@media (-webkit-min-device-pixel-ratio: 1.1) {
  p {
    font-size: 1.5em;
  }
}

/* Maximum resolution */
@media (-webkit-max-device-pixel-ratio: 3) {
  p {
    background: yellow;
  }
}
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using media queries](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
- {{cssxref("resolution")}}
- [`-webkit-transform-2d`](/en-US/docs/Web/CSS/@media/-webkit-transform-2d)
- [`-webkit-transform-3d`](/en-US/docs/Web/CSS/@media/-webkit-transform-3d)
- [`-webkit-transition`](/en-US/docs/Web/CSS/@media/-webkit-transition)
- [`-webkit-animation`](/en-US/docs/Web/CSS/@media/-webkit-animation)
- [W3C Suggested Method to UnPrefix](https://www.w3.org/blog/CSS/2012/06/14/unprefix-webkit-device-pixel-ratio/)

---
title: color-index
slug: Web/CSS/@media/color-index
page-type: css-media-feature
browser-compat: css.at-rules.media.color-index
---

{{CSSRef}}

The **`color-index`** [CSS](/en-US/docs/Web/CSS) [media feature](/en-US/docs/Web/CSS/@media#media_features) can be used to test the number of entries in the output device's color lookup table.

## Syntax

The `color-index` feature is specified as an {{cssxref("&lt;integer&gt;")}} value representing the number of entries in the output device's color lookup table. (This value is zero if the device does not use such a table.) It is a range feature, meaning that you can also use the prefixed **`min-color-index`** and **`max-color-index`** variants to query minimum and maximum values, respectively.

## Examples

### Basic example

#### HTML

```html
<p>This is a test.</p>
```

#### CSS

```css
p {
  color: black;
}

@media (color-index) {
  p {
    color: red;
  }
}

@media (min-color-index: 15000) {
  p {
    color: #1475ef;
  }
}
```

#### Result

{{EmbedLiveSample("Basic_example")}}

### Custom stylesheet

This HTML will apply a special stylesheet for devices that have at least 256 colors.

```html
<link rel="stylesheet" href="http://foo.bar.com/base.css" />
<link
  rel="stylesheet"
  media="all and (min-color-index: 256)"
  href="http://foo.bar.com/color-stylesheet.css" />
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Media Queries](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [@media](/en-US/docs/Web/CSS/@media)

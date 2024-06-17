---
title: resolution
slug: Web/CSS/@media/resolution
page-type: css-media-feature
browser-compat: css.at-rules.media.resolution
---

{{CSSRef}}

The **`resolution`** [CSS](/en-US/docs/Web/CSS) [media feature](/en-US/docs/Web/CSS/@media#media_features) can be used to test the pixel density of the output device.

## Syntax

The `resolution` feature is specified as a {{cssxref("&lt;resolution&gt;")}} value representing the pixel density of the output device. It is a range feature, meaning that you can also use the prefixed **`min-resolution`** and **`max-resolution`** variants to query minimum and maximum values, respectively.

## Examples

### HTML

```html
<p>This is a test of your device's pixel density.</p>
```

### CSS

```css
/* Exact resolution with unit `dpi` */
@media (resolution: 150dpi) {
  p {
    color: red;
  }
}

/* Minimum resolution synonym units: `dppx` and `x` */
@media (min-resolution: 2dppx) {
  p {
    text-decoration: underline;
  }
}

@media (min-resolution: 2x) {
  p {
    text-decoration: underline;
  }
}

/* Maximum resolution with unit `dpcm` */
@media (max-resolution: 2dpcm) {
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

- {{domxref("window.devicePixelRatio")}}
- The {{cssxref("image-resolution")}} property

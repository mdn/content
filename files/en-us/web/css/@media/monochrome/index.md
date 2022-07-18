---
title: monochrome
slug: Web/CSS/@media/monochrome
tags:
  - '@media'
  - CSS
  - Media Queries
  - Reference
  - media feature
browser-compat: css.at-rules.media.monochrome
---
{{CSSRef}}

The **`monochrome`** [CSS](/en-US/docs/Web/CSS) [media feature](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#media_features) can be used to test the number of bits per pixel in the monochrome frame buffer of the output device.

## Syntax

The `monochrome` feature is specified as an {{cssxref("&lt;integer&gt;")}} representing the number of bits per pixel in the monochrome frame buffer. If the device is not a monochrome device, the value is zero. It is a range feature, meaning that you can also use the prefixed **`min-monochrome`** and **`max-monochrome`** variants to query minimum and maximum values, respectively.

## Examples

### HTML

```html
<p class="mono">Your device supports monochrome pixels!</p>
<p class="no-mono">Your device doesn't support monochrome pixels.</p>
```

### CSS

```css
p {
  display: none;
}

/* Any monochrome device */
@media (monochrome) {
  p.mono {
    display: block;
    color: #333;
  }
}

/* Any non-monochrome device */
@media (monochrome: 0) {
  p.no-mono {
    display: block;
    color: #ee3636;
  }
}
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

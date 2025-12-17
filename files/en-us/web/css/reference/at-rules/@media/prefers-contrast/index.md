---
title: prefers-contrast
slug: Web/CSS/Reference/At-rules/@media/prefers-contrast
page-type: css-media-feature
browser-compat: css.at-rules.media.prefers-contrast
sidebar: cssref
---

The **`prefers-contrast`** [CSS](/en-US/docs/Web/CSS) [media feature](/en-US/docs/Web/CSS/Reference/At-rules/@media#media_features) is used to detect whether the user has requested the web content to be presented with a lower or higher contrast.

## Syntax

- `no-preference`
  - : Indicates that the user has made no preference known to the system. This keyword value evaluates as false in the Boolean context.
- `more`
  - : Indicates that user has notified the system that they prefer an interface that has a higher level of contrast.
- `less`
  - : Indicates that user has notified the system that they prefer an interface that has a lower level of contrast.
- `custom`
  - : Indicates that user has notified the system for using a specific set of colors, and the contrast implied by these colors matches neither `more` nor `less`. This value will match the color palette specified by users of [`forced-colors: active`](/en-US/docs/Web/CSS/Reference/At-rules/@media/forced-colors).

## User preferences

Various operating systems do support such preferences and user agents are likely to rely on the settings provided by the operating system.

## Examples

This example includes a box with a dashed {{cssxref("outline")}} set on it by default. When the `prefers-contrast: more` media query matches, the applied outline is given a higher contrast `solid` style instead.

### HTML

```html
<div class="contrast">low contrast box</div>
```

### CSS

```css
.contrast {
  margin: 5px;
  width: 100px;
  height: 100px;
  outline: 2px dashed black;
}

@media (prefers-contrast: more) {
  .contrast {
    outline: 2px solid black;
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

- CSS [forced-colors](/en-US/docs/Web/CSS/Reference/At-rules/@media/forced-colors) media query

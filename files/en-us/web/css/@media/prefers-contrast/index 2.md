---
title: prefers-contrast
slug: Web/CSS/@media/prefers-contrast
tags:
  - CSS
  - Reference
  - media feature
browser-compat: css.at-rules.media.prefers-contrast
---
{{CSSRef}}{{SeeCompatTable}}

The **`prefers-contrast`** [CSS](/en-US/docs/Web/CSS) [media feature](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#media_features) is used to detect if the user has requested that the web content is presented with a higher (or lower) contrast.

## Syntax

- `no-preference`
  - : Indicates that the user has made no preference known to the system. This keyword value evaluates as false in a Boolean context.
- `more`
  - : Indicates that user has notified the system that they prefer an interface that has a higher level of contrast.
- `less`
  - : Indicates that user has notified the system that they prefer an interface that has a lower level of contrast.

## User preferences

Various operating systems do support such preferences and user agents are likely to rely on the settings provided by the operating system.

## Examples

This example has an annoying low contrast by default.

### HTML

```html
<div class="contrast">low contrast box</div>
```

### CSS

```css
.contrast {
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

- Microsoft [-ms-high-contrast](https://msdn.microsoft.com/library/Hh771830) media feature
- CSS [forced-colors](/en-US/docs/Web/CSS/@media/forced-colors) media query

{{QuickLinksWithSubpages("/en-US/docs/Web/CSS/@media/")}}

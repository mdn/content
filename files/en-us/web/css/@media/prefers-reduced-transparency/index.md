---
title: prefers-reduced-transparency
slug: Web/CSS/@media/prefers-reduced-transparency
page-type: css-media-feature
status:
  - experimental
browser-compat: css.at-rules.media.prefers-reduced-transparency
---

{{CSSRef}}{{SeeCompatTable}}

> **Note:** This feature is not supported by any user agent and its specifics are subject to change.

The **`prefers-reduced-transparency`** [CSS](/en-US/docs/Web/CSS) [media feature](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#media_features) is used to detect if the user has requested the system minimize the amount of transparent or translucent layer effects it uses.

## Syntax

- `no-preference`
  - : Indicates that the user has made no preference known to the system. This keyword value evaluates as false in the boolean context.
- `reduce`
  - : Indicates that user has notified the system that they prefer an interface that minimizes the amount of transparent or translucent layer effects.

## User preferences

Currently no user agent implements this feature, although various operating systems do support such preferences and if this media query is ever implemented user agents will likely rely on the settings provided by the operating system.

## Examples

> **Note:** No browser currently implements this feature so the following example will not work.

This example has a translucent box by default. If Reduce Transparency is enabled in your accessibility preferences, the translucent box becomes more opaque.

### HTML

```html
<div class="translucent">translucent box</div>
```

### CSS

```css
.translucent {
  opacity: 0.4;
}

@media (prefers-reduced-transparency) {
  .translucent {
    opacity: 0.8;
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- CSS [prefers-reduced-motion](/en-US/docs/Web/CSS/@media/prefers-reduced-motion) media query

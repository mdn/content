---
title: prefers-reduced-transparency
slug: Web/CSS/@media/prefers-reduced-transparency
page-type: css-media-feature
status:
  - experimental
browser-compat: css.at-rules.media.prefers-reduced-transparency
---

{{CSSRef}}{{SeeCompatTable}}

The **`prefers-reduced-transparency`** [CSS](/en-US/docs/Web/CSS) [media feature](/en-US/docs/Web/CSS/@media#media_features) is used to detect if a user has enabled a setting on their device to reduce the transparent or translucent layer effects used on the device. Switching on such a setting can help improve contrast and readability for some users.

## Syntax

- `no-preference`
  - : Indicates that a user has made no preference known on the device. This keyword value evaluates as false in the boolean context.
- `reduce`
  - : Indicates that a user has enabled the setting on their device to minimize the amount of transparent or translucent layer effects.

## User preferences

Various operating systems provide a preference for reducing transparency, and user agents are likely to rely on these system settings.
They may also rely on less explicit signals on platforms which don't offer a specific setting.

- In Windows 10/11: Settings > Personalization > Colors > Transparency effects.
- In macOS: System Preferences > Accessibility > Display > Reduce transparency.
- In iOS: Settings > Accessibility > Display & Text Size > Reduce Transparency.

## Examples

This example has a translucent box by default. If the setting to reduce transparency is enabled in the accessibility preferences on your device, the translucent box becomes more opaque.

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
- [Using media queries](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries)

---
title: prefers-reduced-transparency
slug: Web/CSS/@media/prefers-reduced-transparency
page-type: css-media-feature
status:
  - experimental
browser-compat: css.at-rules.media.prefers-reduced-transparency
---

{{CSSRef}}{{SeeCompatTable}}

The **`prefers-reduced-transparency`** [CSS](/en-US/docs/Web/CSS) [media feature](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries#media_features) is used to detect if a user has enabled a setting on their device to reduce the transparent or translucent layer effects used on the device. Switching on such a setting can help improve contrast and readability for some users.

## Syntax

- `no-preference`
  - : Indicates that a user has made no preference known on the device. This keyword value evaluates as false in the boolean context.
- `reduce`
  - : Indicates that a user has enabled the setting on their device to minimize the amount of transparent or translucent layer effects.

## User preferences

For Firefox, the `reduce` request is honored if a dedicated system-specific setting exists, otherwise it is enabled if reduced motion is also enabled:

- In GTK/GNOME: Settings > Accessibility > Seeing > Reduced animation is turned on.

  - In older versions of GNOME, GNOME Tweaks > General tab (or Appearance, depending on version) > Animations is turned off.
  - Alternatively, add `gtk-enable-animations = false` to the `[Settings]` block of [the GTK 3 configuration file](https://wiki.archlinux.org/title/GTK#Configuration).

- In Plasma/KDE: System Settings > Workspace Behavior -> General Behavior > "Animation speed" is set all the way to right to "Instant".
- In Windows 10: Settings > Personalization > Colors > Transparency effects.
- In Windows 11: Settings > Personalization > Colors > Transparency effects.
- In macOS: System Preferences > Accessibility > Display > Reduce transparency.
- In iOS: Settings > Accessibility > Motion.
- In Android 9+: Settings > Accessibility > Remove animations.

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

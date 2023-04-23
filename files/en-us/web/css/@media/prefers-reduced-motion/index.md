---
title: prefers-reduced-motion
slug: Web/CSS/@media/prefers-reduced-motion
page-type: css-media-feature
browser-compat: css.at-rules.media.prefers-reduced-motion
---

{{CSSRef}}

> **Warning:** An embedded example at the bottom of this page has a scaling movement that may be problematic for some readers. Readers with vestibular motion disorders may wish to enable the reduce motion feature on their device before viewing the animation.

The **`prefers-reduced-motion`** [CSS](/en-US/docs/Web/CSS) [media feature](/en-US/docs/Web/CSS/@media#media_features) is used to detect if the user has requested that the system minimize the amount of non-essential motion it uses.

```css
@media (prefers-reduced-motion) {
  /* styles to apply if the user's settings are set to reduced motion */
}
```

## Syntax

- `no-preference`
  - : Indicates that the user has made no preference known to the system.
- `reduce`
  - : Indicates that user has notified the system that they prefer an interface that removes or replaces the types of motion-based animation that trigger discomfort for those with vestibular motion disorders.

## User preferences

For Firefox, the `reduce` request is honoured if:

- In GTK/GNOME: GNOME Tweaks > General tab (or Appearance, depending on version) > Animations is turned off.

  - Alternatively, add `gtk-enable-animations = false` to the `[Settings]` block of [the GTK 3 configuration file](https://wiki.archlinux.org/title/GTK#Configuration).

- In Plasma/KDE: System Settings > Workspace Behavior -> General Behavior > "Animation speed" is set all the way to right to "Instant".
- In Windows 10: Settings > Ease of Access > Display > Show animations in Windows.
- In Windows 11: Settings > Accessibility > Visual Effects > Animation Effects
- In macOS: System Preferences > Accessibility > Display > Reduce motion.
- In iOS: Settings > Accessibility > Motion.
- In Android 9+: Settings > Accessibility > Remove animations.
- In Firefox `about:config`: Add a number preference called `ui.prefersReducedMotion` and set its value to either `0` for full animation or to `1` to indicate a preference for reduced motion. Changes to this preference take effect immediately.

## Examples

This example has a scaling animation by default. If Reduce Motion is enabled in your accessibility preferences, the animation is toned down to a simple dissolve without vestibular motion triggers.

### HTML

```html
<div class="animation">animated box</div>
```

### CSS

```css
.animation {
  animation: pulse 1s linear infinite both;
}

/* Tone down the animation to avoid vestibular motion triggers like scaling or panning large objects. */
@media (prefers-reduced-motion) {
  .animation {
    animation: dissolve 2s linear infinite both;
  }
}
```

```css hidden
.animation {
  background-color: #306;
  color: #fff;
  font: 1.2em sans-serif;
  width: 10em;
  padding: 1em;
  border-radius: 1em;
  text-align: center;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(0.9);
  }
  50% {
    transform: scale(1);
  }
  75% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes dissolve {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 1;
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

- [An Introduction to the Reduced Motion Media Query (CSS Tricks)](https://css-tricks.com/introduction-reduced-motion-media-query/)
- [Responsive Design for Motion (WebKit Blog)](https://webkit.org/blog/7551/responsive-design-for-motion/) includes vestibular motion trigger examples.

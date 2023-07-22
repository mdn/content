---
title: prefers-reduced-motion
slug: Web/CSS/@media/prefers-reduced-motion
page-type: css-media-feature
browser-compat: css.at-rules.media.prefers-reduced-motion
---

{{CSSRef}}

> **Warning:** An embedded example at the bottom of this page has a scaling movement that may be problematic for some readers. Readers with vestibular motion disorders may wish to enable the reduce motion feature on their device before viewing the animation.

The **`prefers-reduced-motion`** [CSS](/en-US/docs/Web/CSS) [media feature](/en-US/docs/Web/CSS/@media#media_features) is used to detect if a user has enabled a setting on their device to minimize the amount of non-essential motion. The setting is used to convey to the browser on the device that the user prefers an interface that removes, reduces, or replaces motion-based animations.

Such animations can trigger discomfort for those with [vestibular motion disorders](https://www.a11yproject.com/posts/understanding-vestibular-disorders/). Animations such as scaling or panning large objects can be vestibular motion triggers.

```css
@media (prefers-reduced-motion) {
  /* styles to apply if a user's device settings are set to reduced motion */
}
```

## Syntax

- `no-preference`
  - : Indicates that a user has made no preference known on the device. This keyword value evaluates as false.
- `reduce`
  - : Indicates that a user has enabled the setting on their device for reduced motion. This keyword value evaluates as true.

## User preferences

For Firefox, the `reduce` request is honoured if:

- In GTK/GNOME: Settings > Accessibility > Seeing > Reduced animation is turned on.

  - In older versions of GNOME, GNOME Tweaks > General tab (or Appearance, depending on version) > Animations is turned off.
  - Alternatively, add `gtk-enable-animations = false` to the `[Settings]` block of [the GTK 3 configuration file](https://wiki.archlinux.org/title/GTK#Configuration).

- In Plasma/KDE: System Settings > Workspace Behavior -> General Behavior > "Animation speed" is set all the way to right to "Instant".
- In Windows 10: Settings > Ease of Access > Display > Show animations in Windows.
- In Windows 11: Settings > Accessibility > Visual Effects > Animation Effects
- In macOS: System Preferences > Accessibility > Display > Reduce motion.
- In iOS: Settings > Accessibility > Motion.
- In Android 9+: Settings > Accessibility > Remove animations.
- In Firefox `about:config`: Add a number preference called `ui.prefersReducedMotion` and set its value to either `0` for full animation or to `1` to indicate a preference for reduced motion. Changes to this preference take effect immediately.

## Examples

This example uses a scaling animation for the purpose of demonstrating `prefers-reduced-motion`. If you enable the setting for reducing motion in the accessibility preferences on your device, the `prefers-reduced-motion` media query will detect your preference and the CSS within the reduced motion rules, with the same [specificity](/en-US/docs/Web/CSS/Specificity) but coming later in the [CSS source order](/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#source_order), will take precedence. As a result, the [animation](/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations) on the box will tone down to the `dissolve` animation, which is a more muted animation that is not a vestibular motion trigger.

### Toning down the animation scaling

#### HTML

```html
<div class="animation">animated box</div>
```

#### CSS

```css
.animation {
  animation: pulse 1s linear infinite both;
  background-color: purple;
}

/* Tone down the animation to avoid vestibular motion triggers. */
@media (prefers-reduced-motion) {
  .animation {
    animation: dissolve 4s linear infinite both;
    background-color: green;
    text-decoration: overline;
  }
}
```

```css hidden
.animation {
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
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }
}
```

#### Result

{{EmbedLiveSample("Toning down the animation scaling")}}

You can enable the setting for reducing motion on [your device](#user_preferences) to view the change in animation scaling. This example uses the background color and the line over the text to visually highlight when the keyframe animation switches in response to the setting being enabled or disabled.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [An introduction to the reduced motion media query](https://css-tricks.com/introduction-reduced-motion-media-query/) on CSS-Tricks (2019)
- [Responsive design for motion](https://webkit.org/blog/7551/responsive-design-for-motion/) on WebKit Blog (2017)

---
title: Using media queries for accessibility
slug: Web/CSS/CSS_media_queries/Using_media_queries_for_accessibility
page-type: guide
---

{{CSSRef}}

[**CSS media queries**](/en-US/docs/Web/CSS/CSS_media_queries) can be used to help users with disabilities better experience your website.

## Reduced Motion

Blinking and flashing animation can be problematic for people with cognitive concerns such as Attention Deficit Hyperactivity Disorder (ADHD). Additionally, certain kinds of motion can be a trigger for Vestibular disorders, epilepsy, and migraine and Scotopic sensitivity. The [`prefers-reduced-motion`](/en-US/docs/Web/CSS/@media/prefers-reduced-motion) media query enables providing an experience with fewer animations and transitions to users who have set their operating system's accessibility preferences to reduce motion.

Also, this method of switching animation off according to the user's preference can also benefit users with low battery or low-end phones or computers.

### Syntax

- `no-preference`
  - : Indicates that the user has made no preference known to the system.
- `reduce`
  - : Indicates that user has notified the system that they prefer an interface that minimizes the amount of movement or animation, preferably to the point where all non-essential movement is removed.

### Example

This example has an annoying animation unless you turn on Reduce Motion in your accessibility preferences.

#### HTML

```html
<div class="animation">animated box</div>
```

#### CSS

```css
.animation {
  animation: vibrate 0.3s linear infinite both;
}

@media (prefers-reduced-motion: reduce) {
  .animation {
    animation: none;
  }
}
```

The value of `prefers-reduced-motion` is `reduce`, not "none". Users are not expecting no animation, such as could be set with `* {animation: none !important;}`. Rather, they expect motion animation triggered by interaction to be disabled, unless the animation is essential to the functionality or the information being conveyed (see [WCAG: Animation from Interactions](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions.html)).

## See also

- [`prefers-contrast`](/en-US/docs/Web/CSS/@media/prefers-contrast): to adjust page styles based on user's contrast preference
- [`prefers-reduced-transparency`](/en-US/docs/Web/CSS/@media/prefers-reduced-transparency)
- [`prefers-color-scheme`](/en-US/docs/Web/CSS/@media/prefers-color-scheme)
- [`inverted-colors`](/en-US/docs/Web/CSS/@media/inverted-colors)
- [Designing With Reduced Motion For Motion Sensitivities](https://www.smashingmagazine.com/2020/09/design-reduced-motion-sensitivities/)

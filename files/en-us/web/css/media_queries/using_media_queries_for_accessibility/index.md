---
title: Using media queries for accessibility
slug: Web/CSS/Media_Queries/Using_Media_Queries_for_Accessibility
tags:
  - '@media'
  - Accessibility
  - Animation
  - CSS
  - Guide
---
[**Media Queries**](/en-US/docs/Web/CSS/@media/) can be used to help users with disabilities better experience your website.

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

The value of `prefers-reduced-motion` is `reduce`, not "none". Users are not expecting no animation, such as could be set with  `* {animation: none !important;}`. Rather, they expect motion animation triggered by interaction to be disabled, unless the animation is essential to the functionality or the information being conveyed (see [WCAG: Animation from Interactions](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions.html)).

## High Contrast Mode

{{CSSRef}}{{Non-standard_header}}

The [`-ms-high-contrast`](/en-US/docs/Web/CSS/@media/-ms-high-contrast) CSS media feature is a [Microsoft extension](/en-US/docs/Web/CSS/Microsoft_Extensions) that describes whether the application is being displayed in high contrast mode, and with what color variation.

This will help not only users with low vision and contrast sensitivity issues but also users that are working on a computer or phone with direct sunlight.

### Syntax

The **`-ms-high-contrast`** media feature is specified as one of the following values.

### Values

- `active`
  - : Indicates that the subsequent styling rules will be applied when the system is placed in high contrast mode with any color variation.
- `black-on-white`
  - : Indicates that the subsequent styling rules will be applied when the system is placed in high contrast mode with a black-on-white color variation.
- `white-on-black`
  - : Indicates that the subsequent styling rules will be applied when the system is placed in high contrast mode with a white-on-black color variation.

### Example

The following declarations will match applications that are being displayed in high contrast mode with any color variation, a black-on-white color variation, and a white-on-black color variation, respectively.

```css
@media screen and (-ms-high-contrast: active) {
  /* All high contrast styling rules */
}
@media screen and (-ms-high-contrast: black-on-white) {
  div { background-image: url('image-bw.png'); }
}
@media screen and (-ms-high-contrast: white-on-black) {
  div { background-image: url('image-wb.png'); }
}
```

## See also

- [Designing With Reduced Motion For Motion Sensitivities](https://www.smashingmagazine.com/2020/09/design-reduced-motion-sensitivities/)

---
title: Using Media Queries for Accessibility
slug: Web/CSS/Media_Queries/Using_Media_Queries_for_Accessibility
tags:
  - '@media'
  - Accessibility
  - Animation
  - CSS
  - Guide
---
**Media Queries** can also be used to help users with disabilities understand your website better.

## Reduced Motion

Blinking and flashing animation can be problematic for people with cognitive concerns such as Attention Deficit Hyperactivity Disorder (ADHD). Additionally, certain kinds of motion can be a trigger for Vestibular disorders, epilepsy, and migraine and Scotopic sensitivity.

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
  -webkit-animation: vibrate 0.3s linear infinite both;
  animation: vibrate 0.3s linear infinite both;
}

@media (prefers-reduced-motion: reduce) {
  .animation {
    animation: none;
  }
}
```

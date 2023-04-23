---
title: ":paused"
slug: Web/CSS/:paused
page-type: css-pseudo-class
browser-compat: css.selectors.paused
---

{{CSSRef}}

The **`:paused`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) selector is a resource state pseudo-class that will match an audio, video, or similar resource that is capable of being "played" or "paused", when that element is "paused".

A resource is paused if the user explicitly paused it, or if it is in a non-activated state.

## Syntax

```css
:paused {
  /* ... */
}
```

## Examples

### CSS

```css
:paused {
  border: 5px solid orange;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref(":playing")}}

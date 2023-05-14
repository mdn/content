---
title: ":paused"
slug: Web/CSS/:paused
page-type: css-pseudo-class
browser-compat: css.selectors.paused
---

{{CSSRef}}

The **`:paused`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) represents an element that is capable of being "played" or "paused", when that element is "paused" (i.e. not "playing"). This includes both an explicit "paused" state, and other non-playing states like "loaded, hasn't been activated yet", etc.

A resource is paused if the user explicitly paused it, or if it is in a non-activated or other non-playing state, like "loaded, hasn't been activated yet."

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

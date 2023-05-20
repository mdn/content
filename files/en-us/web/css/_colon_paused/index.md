---
title: ":paused"
slug: Web/CSS/:paused
page-type: css-pseudo-class
browser-compat: css.selectors.paused
---

{{CSSRef}}

The **`:paused`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) selector represents an element that is playable, such as {{htmlelement("audio")}} or {{htmlelement("video")}}, when that element is "paused" (i.e. not "playing").

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

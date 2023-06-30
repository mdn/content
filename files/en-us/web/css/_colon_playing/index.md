---
title: ":playing"
slug: Web/CSS/:playing
page-type: css-pseudo-class
browser-compat: css.selectors.playing
---

{{CSSRef}}

The **`:playing`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) selector represents the playback state of an element that is playable, such as {{htmlelement("audio")}} or {{htmlelement("video")}}, when that element is "playing".
An element is considered to be playing if it is currently playing the media resource, or if it has temporarily stopped for reasons other than user intent (such as `:buffering` or `:stalled`).

> **Note:** The {{cssxref(":buffering")}} and {{cssxref(":stalled")}} pseudo-classes are not mutually exclusive with `:playing`.
> An element that matches `:buffering` or `:stalled` will also match `:playing`.

## Syntax

```css
:playing {
  /* ... */
}
```

## Examples

### CSS

```css
:playing {
  border: 5px solid green;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref(":buffering")}}
- {{cssxref(":muted")}}
- {{cssxref(":paused")}}
- {{cssxref(":seeking")}}
- {{cssxref(":stalled")}}
- {{cssxref(":volume-locked")}}
- [CSS selectors](/en-US/docs/Web/CSS/CSS_selectors)

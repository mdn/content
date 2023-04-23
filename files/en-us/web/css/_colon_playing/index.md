---
title: ":playing"
slug: Web/CSS/:playing
page-type: css-pseudo-class
browser-compat: css.selectors.playing
---

{{CSSRef}}

The **`:playing`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) selector is a resource state pseudo-class that will match an audio, video, or similar resource that is capable of being "played" or "paused", when that element is "playing".

A resource is playing even if in buffering state or paused for any reason other than a user interaction to cause it to be paused.

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

- {{cssxref(":paused")}}

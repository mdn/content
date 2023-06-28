---
title: ":playing"
slug: Web/CSS/:playing
page-type: css-pseudo-class
browser-compat: css.selectors.playing
---

{{CSSRef}}

The **`:playing`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) selector represents an element that is playable, such as {{htmlelement("audio")}} or {{htmlelement("video")}}, when that element is "playing".

A resource is considered to be playing if the user explicitly initiates playback. It is also considered playing when the element is explicitly in a playing state but temporarily paused due to reasons unrelated to user intent. In such cases, the playback will automatically resume once the underlying reason, such as a "buffering" or "stalled" state, is resolved.

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

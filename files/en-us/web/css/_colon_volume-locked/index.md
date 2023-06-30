---
title: ":volume-locked"
slug: Web/CSS/:volume-locked
page-type: css-pseudo-class
browser-compat: css.selectors.volume-locked
---

{{CSSRef}}

The **`:volume-locked`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) selector represents an element that is capable of making sound, such as {{htmlelement("audio")}} or {{htmlelement("video")}}, but the audio volume of the media element is currently "locked" by the user.

User agents may set media [`muted`](/en-US/docs/Web/API/HTMLMediaElement/muted) or [`volume`](/en-US/docs/Web/API/HTMLMediaElement/volume) values according to user preferences (e.g., remembering the last set value across sessions, on a per-site basis, or otherwise).
An element that is `:volume-locked` cannot be muted, un-muted, or have its volume changed via JavaScript. The locked status is an operating system or user agent preference.

## Syntax

```css
:volume-locked {
  /* ... */
}
```

## Examples

### CSS

```css
:volume-locked {
  border: 5px solid green;
}

video:volume-locked {
  border: 5px solid aqua;
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
- {{cssxref(":playing")}}
- {{cssxref(":seeking")}}
- {{cssxref(":stalled")}}
- [CSS selectors](/en-US/docs/Web/CSS/CSS_selectors)
- [`volume`](/en-US/docs/Web/API/HTMLMediaElement/volume) property of {{domxref("HTMLMediaElement")}} objects

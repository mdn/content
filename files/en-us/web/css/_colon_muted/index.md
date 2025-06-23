---
title: :muted
slug: Web/CSS/:muted
page-type: css-pseudo-class
browser-compat: css.selectors.muted
---

{{CSSRef}}

The **`:muted`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) selector represents an element that is capable of making sound, such as {{htmlelement("audio")}} or {{htmlelement("video")}}, but is muted (forced silent).

Muted is different from {{cssxref(":volume-locked")}} in that the page author has control over whether a media element can be muted or un-muted.
User agents may set media `muted` value according to use preferences (e.g., remembering the last set value across sessions, on a per-site basis, or otherwise).
An element that is `:volume-locked` cannot be muted, un-muted, or have its volume changed via JavaScript because of an operating system or user agent preference.

## Syntax

```css
:muted {
  /* ... */
}
```

## Examples

### CSS

```css
:muted {
  outline: 5px solid red;
}

video:muted {
  outline: 5px solid blue;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref(":buffering")}}
- {{cssxref(":paused")}}
- {{cssxref(":playing")}}
- {{cssxref(":seeking")}}
- {{cssxref(":stalled")}}
- {{cssxref(":volume-locked")}}
- [CSS selectors](/en-US/docs/Web/CSS/CSS_selectors)
- [`muted`](/en-US/docs/Web/API/HTMLMediaElement/muted) property of {{domxref("HTMLMediaElement")}} objects

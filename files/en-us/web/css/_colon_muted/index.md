---
title: ":muted"
slug: Web/CSS/:muted
page-type: css-pseudo-class
browser-compat: css.selectors.muted
---

{{CSSRef}}

The **`:muted`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) selector represents an element that is capable of making sound, such as {{htmlelement("audio")}} or {{htmlelement("video")}}, but is muted (forced silent).

Muted is different from {{cssxref(":volume-locked")}} in that the page author can specify whether a media element can be muted or un-muted.
Audio volume of an element that is volume-locked is set by a user agent preference, and the page author cannot override it.

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
  border: 5px solid red;
}

audio:muted {
  opacity: 0.5;
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

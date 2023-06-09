---
title: ":volume-locked"
slug: Web/CSS/:volume-locked
page-type: css-pseudo-class
browser-compat: css.selectors.volume-locked
---

{{CSSRef}}

The **`:volume-locked`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) selector represents an element that is capable of making sound, such as {{htmlelement("audio")}} or {{htmlelement("video")}}, but the audio volume of the media element is currently "locked" by the user.
Users can indicate that the user agent overrides the volume of the element and use a preferred volume instead of the volume specified by the page author.

Volume-locked is different from {{cssxref(":muted")}} in that the page author does not have control over the volume of the media element.

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

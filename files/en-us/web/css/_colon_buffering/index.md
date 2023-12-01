---
title: ":buffering"
slug: Web/CSS/:buffering
page-type: css-pseudo-class
browser-compat: css.selectors.buffering
---

{{CSSRef}}

The **`:buffering`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) selector represents an element that is playable, such as {{htmlelement("audio")}} or {{htmlelement("video")}}, when the playable element is buffering a media resource.

An element is considered as buffering when that element cannot continue playing because it is trying to load media data but does not yet have enough data to begin or continue playback.
For more information, see the [Media buffering, seeking, and time ranges](/en-US/docs/Web/Guide/Audio_and_video_delivery/buffering_seeking_time_ranges#seekable) guide.

> **Note:** An element is still considered to be {{cssxref(":playing")}} when it is "buffering".
> If `:buffering` matches an element, `:playing` will also match that element.

## Syntax

```css
:buffering {
  /* ... */
}
```

## Examples

### CSS

```css
:buffering {
  outline: 5px solid red;
}

video:buffering {
  outline: 5px solid blue;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref(":muted")}}
- {{cssxref(":paused")}}
- {{cssxref(":playing")}}
- {{cssxref(":seeking")}}
- {{cssxref(":stalled")}}
- {{cssxref(":volume-locked")}}
- [CSS selectors](/en-US/docs/Web/CSS/CSS_selectors)

---
title: :seeking
slug: Web/CSS/:seeking
page-type: css-pseudo-class
browser-compat: css.selectors.seeking
---

{{CSSRef}}

The **`:seeking`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) selector represents an element that is playable, such as {{htmlelement("audio")}} or {{htmlelement("video")}}, when the playable element is seeking a playback position in the media resource.
A resource is considered to be seeking if the user has requested playback of a specific position in the media resource, but the media element has not yet reached that position.

Seeking is different from {{cssxref(":buffering")}} in that the media element is not currently loading data, but is instead skipping to a new position in the media resource.
For more information, see the [Media buffering, seeking, and time ranges](/en-US/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges#seekable) guide.

## Syntax

```css
:seeking {
  /* ... */
}
```

## Examples

### CSS

```css
:seeking {
  outline: 5px solid red;
}

video:seeking {
  outline: 5px solid blue;
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
- {{cssxref(":stalled")}}
- {{cssxref(":volume-locked")}}
- [CSS selectors](/en-US/docs/Web/CSS/CSS_selectors)

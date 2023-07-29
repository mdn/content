---
title: ":current"
slug: Web/CSS/:current
page-type: css-pseudo-class
browser-compat: css.selectors.current
spec-urls: https://drafts.csswg.org/selectors/#the-current-pseudo
---

{{CSSRef}}

The **`:current`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) selector is a time-dimensional pseudo-class that represents an element or the ancestor of an element that is currently being displayed. For example, this pseudo-class can be used to represent a video that is being displayed with captions by [WebVTT](/en-US/docs/Web/API/WebVTT_API).

```css
:current(p, span) {
  background-color: yellow;
}
```

## Syntax

```css-nolint
:current {
  /* ... */
}

:current(<compound-selector-list>) {
  /* ... */
}
```

## Examples

### CSS

```css
:current(p, span) {
  background-color: yellow;
}
```

### HTML

```html
<video controls preload="metadata">
  <source src="video.mp4" type="video/mp4" />
  <source src="video.webm" type="video/webm" />
  <track
    label="English"
    kind="subtitles"
    srclang="en"
    src="subtitles.vtt"
    default />
</video>
```

### WebVTT

```plain
WEBVTT FILE

1
00:00:03.500 --> 00:00:05.000
This is the first caption

2
00:00:06.000 --> 00:00:09.000
This is the second caption

3
00:00:11.000 --> 00:00:19.000
This is the third caption
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Video Text Tracks Format (WebVTT)](/en-US/docs/Web/API/WebVTT_API)
- {{cssxref(":past")}}
- {{cssxref(":future")}}

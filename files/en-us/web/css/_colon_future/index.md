---
title: ":future"
slug: Web/CSS/:future
page-type: css-pseudo-class
status:
  - experimental
browser-compat: css.selectors.future
---

{{CSSRef}}{{SeeCompatTable}}

The **`:future`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) selector is a time-dimensional pseudo-class that will match for any element which appears entirely after an element that matches {{cssxref(":current")}}. For example in a video with captions which are being displayed by [WebVTT](/en-US/docs/Web/API/WebVTT_API).

```css
:future(p, span) {
  display: none;
}
```

## Syntax

```css
:future {
  /* ... */
}
```

## Examples

### CSS

```css
:future(p, span) {
  display: none;
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
- {{cssxref(":current")}}
- {{cssxref(":past")}}

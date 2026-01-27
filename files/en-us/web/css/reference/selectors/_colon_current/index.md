---
title: :current
slug: Web/CSS/Reference/Selectors/:current
page-type: css-pseudo-class
status:
  - experimental
browser-compat: css.selectors.current
sidebar: cssref
---

{{SeeCompatTable}}

The **`:current`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-classes) selector is a time-dimensional pseudo-class that represents an element or the ancestor of an element that is currently being displayed. For example, this pseudo-class can be used to represent a video that is being displayed with captions by [WebVTT](/en-US/docs/Web/API/WebVTT_API).

Note however that `:current` is also used in some cases to represent the currently-focused element in a list of selected elements. For example, `:current` can be combined with the `::search-text` [pseudo-element](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-elements) to provide specific styles to the currently-focused search result.

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

### Styling currently-shown WebVTT subtitles

#### CSS

```css
:current(p, span) {
  background-color: yellow;
}
```

#### HTML

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

#### WebVTT

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

### Styling the currently-focused browser text search result

See the [`::search-text` examples](/en-US/docs/Web/CSS/Reference/Selectors/::search-text#examples) for a full example.

#### CSS

```css
p::search-text {
  color: white;
  background-color: purple;
}

p::search-text:current {
  background-color: crimson;
  text-decoration: underline;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Video Text Tracks Format (WebVTT)](/en-US/docs/Web/API/WebVTT_API)
- {{cssxref(":past")}}
- {{cssxref(":future")}}
- [CSS selectors](/en-US/docs/Web/CSS/Guides/Selectors) module

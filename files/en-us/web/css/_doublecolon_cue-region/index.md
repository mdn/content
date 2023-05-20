---
title: "::cue-region"
slug: Web/CSS/::cue-region
page-type: css-pseudo-element
browser-compat: css.selectors.cue-region
---

{{CSSRef}}{{SeeCompatTable}}

The **`::cue-region`** [CSS](/en-US/docs/Web/CSS) [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) matches {{DOMxRef("WebVTT API", "WebVTT", "", 1)}} cues within a selected element. This can be used to [style captions and other cues](/en-US/docs/Web/API/WebVTT_API#styling_webvtt_cues) in media with VTT tracks.

```css
::cue-region {
  color: yellow;
  font-weight: bold;
}
```

The properties are applied to the entire set of cues as if they were a single unit. The only exception is that `background` and its longhand properties apply to each cue individually, to avoid creating boxes and obscuring unexpectedly large areas of the media.

## Syntax

```css-nolint
::cue-region | ::cue-region(<selector>) {
  /* ... */
}
```

## Permitted properties

Rules whose selectors include this element may only use the following CSS properties:

- [`background`](/en-US/docs/Web/CSS/background)
- [`background-attachment`](/en-US/docs/Web/CSS/background-attachment)
- [`background-clip`](/en-US/docs/Web/CSS/background-clip)
- [`background-color`](/en-US/docs/Web/CSS/background-color)
- [`background-image`](/en-US/docs/Web/CSS/background-image)
- [`background-origin`](/en-US/docs/Web/CSS/background-origin)
- [`background-position`](/en-US/docs/Web/CSS/background-position)
- [`background-repeat`](/en-US/docs/Web/CSS/background-repeat)
- [`background-size`](/en-US/docs/Web/CSS/background-size)
- [`color`](/en-US/docs/Web/CSS/color)
- [`font`](/en-US/docs/Web/CSS/font)
- [`font-family`](/en-US/docs/Web/CSS/font-family)
- [`font-size`](/en-US/docs/Web/CSS/font-size)
- [`font-stretch`](/en-US/docs/Web/CSS/font-stretch)
- [`font-style`](/en-US/docs/Web/CSS/font-style)
- [`font-variant`](/en-US/docs/Web/CSS/font-variant)
- [`font-weight`](/en-US/docs/Web/CSS/font-weight)
- [`line-height`](/en-US/docs/Web/CSS/line-height)
- [`opacity`](/en-US/docs/Web/CSS/opacity)
- [`outline`](/en-US/docs/Web/CSS/outline)
- [`outline-color`](/en-US/docs/Web/CSS/outline-color)
- [`outline-style`](/en-US/docs/Web/CSS/outline-style)
- [`outline-width`](/en-US/docs/Web/CSS/outline-width)
- [`ruby-position`](/en-US/docs/Web/CSS/ruby-position)
- [`text-combine-upright`](/en-US/docs/Web/CSS/text-combine-upright)
- [`text-decoration`](/en-US/docs/Web/CSS/text-decoration)
- [`text-decoration-color`](/en-US/docs/Web/CSS/text-decoration-color)
- [`text-decoration-line`](/en-US/docs/Web/CSS/text-decoration-line)
- [`text-decoration-style`](/en-US/docs/Web/CSS/text-decoration-style)
- [`text-decoration-thickness`](/en-US/docs/Web/CSS/text-decoration-thickness)
- [`text-shadow`](/en-US/docs/Web/CSS/text-shadow)
- [`visibility`](/en-US/docs/Web/CSS/visibility)
- [`white-space`](/en-US/docs/Web/CSS/white-space)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other {{DOMxRef("WebVTT API", "WebVTT", "", 1)}} selectors:

  - {{CSSxRef("::cue")}}
  - {{CSSxRef(":past")}}
  - {{CSSxRef(":future")}}

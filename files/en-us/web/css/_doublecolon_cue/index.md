---
title: '::cue'
slug: Web/CSS/::cue
tags:
  - '::cue'
  - CSS
  - Media
  - Pseudo-element
  - Reference
  - Selector
  - Web Video Text Tracks
  - WebVTT
  - cue
browser-compat: css.selectors.cue
---
{{CSSRef}}

The **`::cue`** [CSS](/en-US/docs/Web/CSS) [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) matches [WebVTT](/en-US/docs/Web/API/WebVTT_API) cues within a selected element. This can be used to [style captions and other cues](/en-US/docs/Web/API/WebVTT_API#styling_webtt_cues) in media with VTT tracks.

```css
::cue {
  color: yellow;
  font-weight: bold;
}
```

The properties are applied to the entire set of cues as if they were a single unit. The only exception is that `background` and its longhand properties apply to each cue individually, to avoid creating boxes and obscuring unexpectedly large areas of the media.

## Syntax

```
::cue | ::cue( <selector> )
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

## Examples

### Styling WebVTT cues as white-on-black

The following CSS sets the cue style so that the text is white and the background is a translucent black box.

```css
::cue {
  color: #fff;
  background-color: rgba(0, 0, 0, 0.6);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Video Tracks Format (WebVTT)](/en-US/docs/Web/API/WebVTT_API)
- {{HTMLElement("track")}}, {{HTMLElement("video")}}

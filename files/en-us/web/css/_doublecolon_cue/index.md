---
title: "::cue"
slug: Web/CSS/::cue
page-type: css-pseudo-element
browser-compat: css.selectors.cue
---

{{CSSRef}}

The **`::cue`** [CSS](/en-US/docs/Web/CSS) [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) matches [WebVTT](/en-US/docs/Web/API/WebVTT_API) cues within a selected element.
This can be used to [style captions and other cues](/en-US/docs/Web/API/WebVTT_API#styling_webvtt_in_html_or_a_stylesheet) in media with VTT tracks.

{{EmbedInteractiveExample("pages/tabbed/pseudo-element-cue.html", "tabbed-shorter")}}

The properties are applied to the entire set of cues as if they were a single unit. The only exception is that `background` and its longhand properties apply to each cue individually, to avoid creating boxes and obscuring unexpectedly large areas of the media.

In the example above, the `::cue(u)` selector selects all the [`<u>`](/en-US/docs/Web/HTML/Element/u) elements inside [the cue text](https://raw.githubusercontent.com/mdn/interactive-examples/main/live-examples/media/examples/friday.vtt).

## Syntax

```css-nolint
::cue | ::cue(<selector>) {
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

## Examples

### Styling WebVTT cues as white-on-black

The following CSS sets the cue style so that the text is white and the background is a translucent black box.

```css
::cue {
  color: #fff;
  background-color: rgb(0 0 0 / 60%);
}
```

### Styling WebVTT internal node objects

Cue text can include _internal node objects_ as the tags (similar to HTML elements) `<c>`, `<i>`, `<b>`, `<u>`, `<ruby>`, `<rt>`, `<v>`, and `<lang>`.
The `::cue()` selector can be used to apply styles to content inside these tags to customize how the WebVTT track is displayed.
Consider the following cue text that uses the `<u>` tag to underline some text:

```plain
00:00:01.500 --> 00:00:02.999 line:80%
Tell me, is the <u>lord of the universe</u> in?
```

The following CSS rule customizes the text inside the `<u>` tag with a color and a [text-decoration](/en-US/docs/Web/CSS/text-decoration):

```css
::cue(u) {
  color: red;
  text-decoration: wavy overline lime;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Video Tracks Format (WebVTT)](/en-US/docs/Web/API/WebVTT_API)
- {{HTMLElement("track")}}, {{HTMLElement("video")}}

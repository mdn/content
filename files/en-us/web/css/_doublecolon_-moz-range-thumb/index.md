---
title: "::-moz-range-thumb"
slug: Web/CSS/::-moz-range-thumb
page-type: css-pseudo-element
status:
  - non-standard
browser-compat: css.selectors.-moz-range-thumb
---

{{CSSRef}}{{Non-standard_header}}

The **`::-moz-range-thumb`** [CSS](/en-US/docs/Web/CSS) [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) is a [Mozilla extension](/en-US/docs/Web/CSS/Mozilla_Extensions) that represents the _thumb_ (i.e., virtual knob) of an {{HTMLElement("input")}} of `type="range"`. The user can move the thumb along the input's track to alter its numerical value.

> **Note:** Using `::-moz-range-thumb` with anything but an `<input type="range">` doesn't match anything and has no effect.

## Syntax

```css
::-moz-range-thumb {
  /* ... */
}
```

## Examples

### HTML

```html
<input type="range" min="0" max="100" step="5" value="50" />
```

### CSS

```css
input[type="range"]::-moz-range-thumb {
  background-color: green;
}
```

### Result

{{EmbedLiveSample("Examples", 300, 50)}}

A progress bar using this style might look something like this:

![The thumb of the 'input type=right' styled in green](screen_shot_2015-12-04_at_13.30.08.png)

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- The pseudo-elements used by Gecko to style other parts of a range input:

  - {{cssxref("::-moz-range-track")}} represents the groove in which the thumb slides.
  - {{cssxref("::-moz-range-progress")}} represents the lower portion of the track.

- Similar pseudo-elements used by other browsers:

  - {{cssxref("::-webkit-slider-thumb")}}, pseudo-element supported by WebKit and Blink (Safari, Chrome, and Opera)

- [CSS-Tricks: Styling Cross-Browser Compatible Range Inputs with CSS](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/)
- [QuirksMode: Styling and scripting sliders](https://www.quirksmode.org/blog/archives/2015/11/styling_and_scr.html)

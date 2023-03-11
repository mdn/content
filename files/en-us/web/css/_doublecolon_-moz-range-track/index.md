---
title: "::-moz-range-track"
slug: Web/CSS/::-moz-range-track
page-type: css-pseudo-element
status:
  - non-standard
browser-compat: css.selectors.-moz-range-track
---

{{CSSRef}}{{Non-standard_header}}

The **`::-moz-range-track`** [CSS](/en-US/docs/Web/CSS) [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) is a [Mozilla extension](/en-US/docs/Web/CSS/Mozilla_Extensions) that represents the _track_ (i.e., groove) in which the indicator slides in an {{HTMLElement("input")}} of `type="range"`.

> **Note:** Using `::-moz-range-track` with anything but an `<input type="range">` doesn't match anything and has no effect.

## Syntax

```css
::-moz-range-track {
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
input[type="range"]::-moz-range-track {
  background-color: green;
}
```

### Result

{{EmbedLiveSample("Examples", 300, 50)}}

A range slider using this style might look something like this:

![A range with the track green](screen_shot_2015-12-04_at_10.14.34.png)

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- The pseudo-elements used by Gecko to style other parts of a range input:

  - {{cssxref("::-moz-range-thumb")}} represents the indicator that slides in the groove.
  - {{cssxref("::-moz-range-progress")}} represents the lower portion of the track.

- Similar pseudo-elements used by other browsers:

  - {{cssxref("::-webkit-slider-runnable-track")}}, pseudo-element supported by WebKit and Blink (Safari, Chrome, and Opera)

- [CSS-Tricks: Styling Cross-Browser Compatible Range Inputs with CSS](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/)
- [QuirksMode: Styling and scripting sliders](https://www.quirksmode.org/blog/archives/2015/11/styling_and_scr.html)

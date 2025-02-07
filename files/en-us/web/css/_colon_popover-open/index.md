---
title: :popover-open
slug: Web/CSS/:popover-open
page-type: css-pseudo-class
browser-compat: css.selectors.popover-open
---

{{CSSRef}}

The **`:popover-open`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) represents a {{domxref("Popover API", "popover", "", "nocode")}} element (i.e. one with a [`popover` attribute](/en-US/docs/Web/HTML/Global_attributes/popover)) that is in the showing state. You can use this to apply style to popover elements only when they are shown.

## Syntax

```css
:popover-open {
  /* ... */
}
```

## Examples

By default, popovers appear in the middle of the viewport. The default styling is achieved like this in the UA stylesheet:

```css
[popover] {
  position: fixed;
  inset: 0;
  width: fit-content;
  height: fit-content;
  margin: auto;
  border: solid;
  padding: 0.25em;
  overflow: auto;
  color: CanvasText;
  background-color: Canvas;
}
```

To override the default styles and get the popover to appear somewhere else on your viewport, you could need to override the above styles with something like this:

```css
:popover-open {
  width: 200px;
  height: 100px;
  position: absolute;
  inset: unset;
  bottom: 5px;
  right: 5px;
  margin: 0;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Popover API](/en-US/docs/Web/API/Popover_API)
- [`popover`](/en-US/docs/Web/HTML/Global_attributes/popover) HTML global attribute

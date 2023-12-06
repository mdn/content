---
title: "::-webkit-progress-value"
slug: Web/CSS/::-webkit-progress-value
page-type: css-pseudo-element
status:
  - non-standard
browser-compat: css.selectors.-webkit-progress-value
---

{{CSSRef}}{{Non-standard_header}}

The **`::-webkit-progress-value`** [CSS](/en-US/docs/Web/CSS) [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) represents the filled-in portion of the bar of a {{HTMLElement("progress")}} element. It is a child of the {{cssxref("::-webkit-progress-bar")}} pseudo-element.

> **Note:** In order to let `::-webkit-progress-value` take effect, {{cssxref("appearance")}} needs to be set to `none` on the `<progress>` element.

## Syntax

```css
::-webkit-progress-value {
  /* ... */
}
```

## Examples

This example will only work in browsers based on Blink or WebKit.

### HTML

```html
<progress value="10" max="50"></progress>
```

### CSS

```css
progress {
  -webkit-appearance: none;
}

::-webkit-progress-value {
  background-color: orange;
}
```

### Result

{{EmbedLiveSample("Examples", 200, 50)}}

### Result screenshot

A progress bar using the style above would look like this:

![A long orange and grey box. The left 20% is orange. The right 80% is grey.](progress-value.png)

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- The pseudo-elements used by WebKit/Blink to style other parts of a {{HTMLElement("progress")}} element:

  - {{ cssxref("::-webkit-progress-bar") }}
  - {{ cssxref("::-webkit-progress-inner-element") }}

- {{ cssxref("::-moz-progress-bar") }}

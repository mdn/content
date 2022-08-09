---
title: '::-webkit-progress-bar'
slug: Web/CSS/::-webkit-progress-bar
tags:
  - CSS
  - Non-standard
  - Pseudo-element
  - Reference
  - Selector
browser-compat: css.selectors.-webkit-progress-bar
---
{{CSSRef}}{{Non-standard_header}}

The **`::-webkit-progress-bar`** [CSS](/en-US/docs/Web/CSS) [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) represents the entire bar of a {{HTMLElement("progress")}} element. Normally it's only visible as the unfilled portion of the bar, since by default it's rendered below the {{ cssxref("::-webkit-progress-value") }} pseudo-element. It is a child of the {{cssxref("::-webkit-progress-inner-element")}} pseudo-element and the parent of the {{cssxref("::-webkit-progress-value")}} pseudo-element.

> **Note:** For `::-webkit-progress-value` to take effect, {{cssxref("appearance")}} needs to be set to `none` on the `<progress>` element.

## Syntax

```css
::-webkit-progress-bar
```

## Examples

### CSS content

```css
progress {
  -webkit-appearance: none;
}

::-webkit-progress-bar {
  background-color: orange;
}
```

### HTML content

```html
<progress value="10" max="50">
```

### Result

{{EmbedLiveSample("Examples", 200, 50)}}

### Result screenshot

If you're not using a WebKit or Blink browser, the code above results in a progress bar that looks like this:

![The progress bar is a horizontal bar about the height of a letter. The left 20% is green. The right 80% is orange.](progress-bar.png)

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- The pseudo-elements used by WebKit/Blink to style other parts of a {{HTMLElement("progress")}} element:

  - {{ cssxref("::-webkit-progress-value") }}
  - {{ cssxref("::-webkit-progress-inner-element") }}

- {{ cssxref("::-moz-progress-bar") }}
- {{ cssxref("::-ms-fill") }}

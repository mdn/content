---
title: ::-moz-progress-bar
slug: Web/CSS/::-moz-progress-bar
page-type: css-pseudo-element
status:
  - experimental
  - non-standard
browser-compat: css.selectors.-moz-progress-bar
---

{{CSSRef}}{{Non-standard_header}}{{SeeCompatTable}}

The **`::-moz-progress-bar`** [CSS](/en-US/docs/Web/CSS) [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) is a [Mozilla extension](/en-US/docs/Web/CSS/Mozilla_Extensions) that represents the progress bar inside a {{HTMLElement("progress")}} element. (The bar represents the amount of progress that has been made.)

If you want to select the unfinished part of {{HTMLElement("progress")}} in Mozilla, please select the {{HTMLElement("progress")}} directly.

## Syntax

```css
::-moz-progress-bar {
  /* ... */
}
```

## Examples

### HTML

```html
<progress value="30" max="100">30%</progress>
<progress max="100">Indeterminate</progress>
```

### CSS

```css
::-moz-progress-bar {
  background-color: red;
}

/* Force indeterminate bars to have zero width */
:indeterminate::-moz-progress-bar {
  width: 0;
}
```

### Result

{{EmbedLiveSample('Examples')}}

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("progress")}}
- {{ cssxref("::-webkit-progress-bar") }}
- {{ cssxref("::-webkit-progress-value") }}
- {{ cssxref("::-webkit-progress-inner-element") }}

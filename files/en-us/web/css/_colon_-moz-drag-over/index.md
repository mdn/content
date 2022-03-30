---
title: ':-moz-drag-over'
slug: Web/CSS/:-moz-drag-over
tags:
  - CSS
  - CSS:Mozilla Extensions
  - Firefox
  - Mozilla
  - NeedsCompatTable
  - Non-standard
  - Pseudo-class
  - Reference
  - Selector
browser-compat: css.selectors:-moz-drag-over
---
{{CSSRef}}{{Non-standard_header}}

The **`:-moz-drag-over`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) is a [Mozilla extension](/en-US/docs/Web/CSS/Mozilla_Extensions) that matches an element when a {{domxref("HTMLElement/dragover_event", "dragover")}} event is called on it.

## Syntax

```css
:-moz-drag-over
```

## Examples

### HTML

```html
<table border="1">
  <tr>
    <td width="100px" height="100px">Drag Over</td>
  </tr>
</table>
```

### CSS

```css
td:-moz-drag-over {
  color: red;
}
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- [Mozilla CSS extensions](/en-US/docs/Web/CSS/Mozilla_Extensions)
- [HTML drag and drop](/en-US/docs/Web/API/HTML_Drag_and_Drop_API)

---
title: "<nobr>: The Non-Breaking Text element"
slug: Web/HTML/Reference/Elements/nobr
page-type: html-element
status:
  - deprecated
browser-compat: html.elements.nobr
sidebar: htmlsidebar
---

{{deprecated_header}}

The **`<nobr>`** [HTML](/en-US/docs/Web/HTML) element prevents the text it contains from automatically wrapping across multiple lines, potentially resulting in the user having to scroll horizontally to see the entire width of the text.

> [!WARNING]
> Although this element is widely supported, it was _never_ standard HTML, so you shouldn't use it. Instead, use the CSS property {{CSSxRef("white-space")}} like this:

```html
<span class="nobr">Long line with no breaks</span>
```

```css
.nobr {
  white-space: nowrap;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("white-space")}}
- {{CSSxRef("overflow")}}

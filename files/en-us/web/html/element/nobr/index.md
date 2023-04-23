---
title: "<nobr>: The Non-Breaking Text element"
slug: Web/HTML/Element/nobr
page-type: html-element
status:
  - deprecated
browser-compat: html.elements.nobr
---

{{HTMLSidebar}}{{deprecated_header}}

The **`<nobr>`** [HTML](/en-US/docs/Web/HTML) element prevents the text it contains from automatically wrapping across multiple lines, potentially resulting in the user having to scroll horizontally to see the entire width of the text.

> **Warning:** Although this element is widely supported, it was _never_ standard HTML, so you shouldn't use it. Instead, use the CSS property {{CSSxRef("white-space")}} like this:

```html
<span style="white-space: nowrap;">Long line with no breaks</span>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("white-space")}}
- {{CSSxRef("overflow")}}

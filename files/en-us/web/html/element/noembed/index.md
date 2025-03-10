---
title: "<noembed>: The Embed Fallback element"
slug: Web/HTML/Element/noembed
page-type: html-element
status:
  - deprecated
browser-compat: html.elements.noembed
---

{{HTMLSidebar}}{{deprecated_header}}

The **`<noembed>`** [HTML](/en-US/docs/Web/HTML) element is an obsolete, non-standard way to provide alternative, or "fallback", content for browsers that do not support the {{HTMLElement("embed")}} element or do not support the type of [embedded content](/en-US/docs/Web/HTML/Content_categories#embedded_content) an author wishes to use. This element was deprecated in HTML 4.01 and above in favor of placing fallback content between the opening and closing tags of an {{HTMLElement("object")}} element.

> [!NOTE]
> While this element currently still works in many browsers, it is obsolete and should not be used. Use {{HTMLElement("object")}} instead, with fallback content between the opening and closing tags of the element.

## Examples

The message inside `<noembed>` tag will appear only when your browser does not support `<embed>` tag.

### Show an alternative content

```html
<embed type="vide/webm" src="/media/examples/flower.mp4" width="200" height="200">
  <noembed>
    <h1>Alternative content</h1>
  </noembed>
</embed>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

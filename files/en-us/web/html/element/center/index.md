---
title: '<center>: The Centered Text element'
slug: Web/HTML/Element/center
tags:
  - Element
  - HTML
  - Deprecated
  - Reference
  - Text
  - Text Alignment
  - Web
  - alignment
  - center
browser-compat: html.elements.center
---

{{deprecated_header}}

The **`<center>`** [HTML](/en-US/docs/Web/HTML) element is a [block-level element](/en-US/docs/Web/HTML/Block-level_elements) that displays its block-level or inline contents centered horizontally within its containing element. The container is usually, but isn't required to be, {{HTMLElement("body")}}.

This tag has been deprecated in HTML 4 (and XHTML 1) in favor of the [CSS](/en-US/docs/Web/CSS) {{Cssxref("text-align")}} property, which can be applied to the {{HTMLElement("div")}} element or to an individual {{HTMLElement("p")}}. For centering blocks, use other CSS properties like {{Cssxref("margin-left")}} and {{Cssxref("margin-right")}} and set them to `auto` (or set {{Cssxref("margin")}} to `0 auto`).

## DOM interface

This element implements the {{domxref("HTMLElement")}} interface.

## Example 1

```html
<center>This text will be centered.
<p>So will this paragraph.</p></center>
```

## Example 2 (CSS alternative)

```html
<div style="text-align:center">This text will be centered.
<p>So will this paragraph.</p></div>
```

## Example 3 (CSS alternative)

```html
<p style="text-align:center">This line will be centered.<br>
And so will this line.</p>
```

## Note

Applying {{Cssxref("text-align")}}`:center` to a {{HTMLElement("div")}} or {{HTMLElement("p")}} element centers the _contents_ of those elements while leaving their overall dimensions unchanged.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{Cssxref("text-align")}}
- {{Cssxref("display")}}

{{HTMLRef}}

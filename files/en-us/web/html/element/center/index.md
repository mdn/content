---
title: "<center>: The Centered Text element"
slug: Web/HTML/Element/center
page-type: html-element
status:
  - deprecated
browser-compat: html.elements.center
---

{{HTMLSidebar}}{{deprecated_header}}

The **`<center>`** [HTML](/en-US/docs/Web/HTML) element is a [block-level element](/en-US/docs/Glossary/Block-level_content) that displays its block-level or inline contents centered horizontally within its containing element. The container is usually, but isn't required to be, {{HTMLElement("body")}}.

This tag has been deprecated in HTML 4 (and XHTML 1) in favor of the [CSS](/en-US/docs/Web/CSS) {{Cssxref("text-align")}} property, which can be applied to the {{HTMLElement("div")}} element or to an individual {{HTMLElement("p")}}. For centering blocks, use other CSS properties like {{Cssxref("margin-left")}} and {{Cssxref("margin-right")}} and set them to `auto` (or set {{Cssxref("margin")}} to `0 auto`).

## DOM interface

This element implements the {{domxref("HTMLElement")}} interface.

## Example 1

```html
<center>
  This text will be centered.
  <p>So will this paragraph.</p>
</center>
```

### Result

{{EmbedLiveSample("Example 1")}}

## Example 2 (CSS alternative)

```html
<div style="text-align:center">
  This text will be centered.
  <p>So will this paragraph.</p>
</div>
```

### Result

{{EmbedLiveSample("Example 2 (CSS alternative)")}}

## Example 3 (CSS alternative)

```html
<p style="text-align:center">
  This line will be centered.<br />
  And so will this line.
</p>
```

### Result

{{EmbedLiveSample("Example 3 (CSS alternative)")}}

> [!NOTE]
> Applying {{cssxref("text-align", "text-align: center")}} to a {{HTMLElement("div")}} or {{HTMLElement("p")}} element centers the _contents_ of those elements while leaving their overall dimensions unchanged.

<!-- ## Technical summary -->

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{Cssxref("text-align")}}
- {{Cssxref("display")}}

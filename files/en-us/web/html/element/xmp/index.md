---
title: <xmp>
slug: Web/HTML/Element/xmp
tags:
  - Element
  - HTML
  - Deprecated
  - Reference
  - Web
browser-compat: html.elements.xmp
---

{{deprecated_header}}

## Summary

The **`<xmp>`** [HTML](/en-US/docs/Web/HTML) element renders text between the start and end tags without interpreting the HTML in between and using a monospaced font. The HTML2 specification recommended that it should be rendered wide enough to allow 80 characters per line.

> **Note:** Do not use this element.
>
> - It has been deprecated since HTML3.2 and was not implemented in a consistent way. It was completely removed from the language in HTML5.
> - Use the {{HTMLElement("pre")}} element or, if semantically adequate, the {{HTMLElement("code")}} element instead. Note that you will need to escape the '`<`' character as '`&lt;`' to make sure it is not interpreted as markup.
> - A monospaced font can also be obtained on any element, by applying an adequate [CSS](/en-US/docs/Web/CSS) style using `monospace` as the generic-font value for the {{cssxref("font-family")}} property.

## Attributes

This element has no other attributes than the [global attributes](/en-US/docs/Web/HTML/Global_attributes "HTML/global attributes"), common to all elements.

## DOM interface

This element implements the {{domxref('HTMLElement')}} interface.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{HTMLElement("pre")}} and {{HTMLElement("code")}} elements to be used instead.
- The {{HTMLElement("plaintext")}} and {{HTMLElement("listing")}} elements, similar to {{HTMLElement("xmp")}} but also obsolete.

{{HTMLRef}}

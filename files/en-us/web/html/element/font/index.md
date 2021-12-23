---
title: <font>
slug: Web/HTML/Element/font
tags:
  - Element
  - HTML
  - Deprecated
  - Reference
  - Web
browser-compat: html.elements.font
---

{{deprecated_header}}

## Summary

The **`<font>`** [HTML](/en-US/docs/Web/HTML) element defines the font size, color and face for its content.

> **Warning:** Do not use this element. Use the CSS [Fonts](/en-US/docs/Web/CSS/CSS_Fonts) properties to style text.

## Attributes

Like all other HTML elements, this element supports the [global attributes](/en-US/docs/Web/HTML/Global_attributes "HTML/Global attributes").

- {{htmlattrdef("color")}}
  - : This attribute sets the text color using either a named color or a color specified in the hexadecimal #RRGGBB format.
- {{htmlattrdef("face")}}
  - : This attribute contains a comma-separated list of one or more font names. The document text in the default style is rendered in the first font face that the client's browser supports. If no font listed is installed on the local system, the browser typically defaults to the proportional or fixed-width font for that system.
- {{htmlattrdef("size")}}
  - : This attribute specifies the font size as either a numeric or relative value. Numeric values range from `1` to `7` with `1` being the smallest and `3` the default. It can be defined using a relative value, like `+2` or `-3`, which set it relative to the value of the {{htmlattrxref("size", "basefont")}} attribute of the {{HTMLElement("basefont")}} element, or relative to `3`, the default value, if none does exist.

## DOM interface

This element implements the {{domxref("HTMLFontElement")}} interface.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

{{HTMLRef}}

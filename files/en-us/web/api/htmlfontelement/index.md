---
title: HTMLFontElement
slug: Web/API/HTMLFontElement
tags:
  - API
  - HTML DOM
  - Interface
  - Reference
  - Deprecated
browser-compat: api.HTMLFontElement
---
{{deprecated_header}}{{APIRef("HTML DOM")}}

Implements the document object model (DOM) representation of the font element. The HTML Font Element {{HTMLElement("font")}} defines the font size, font face and color of text.

## Properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLFontElement.color")}}
  - : Is a {{domxref("DOMString")}} that reflects the {{htmlattrxref("color", "font")}} HTML attribute, containing either a named color or a color specified in the hexadecimal #RRGGBB format.
- {{domxref("HTMLFontElement.face")}}
  - : Is a {{domxref("DOMString")}} that reflects the {{htmlattrxref("face", "font")}} HTML attribute, containing a comma-separated list of one or more font names.
- {{domxref("HTMLFontElement.size")}}
  - : Is a {{domxref("DOMString")}} that reflects the {{htmlattrxref("size", "font")}} HTML attribute, containing either a font size number ranging from 1 to 7 or a relative size to the {{htmlattrxref("size", "basefont")}} attribute of the {{HTMLElement("basefont")}} element, for example -2 or +1.

## Methods

_No specific method; inherits methods from its parent, {{domxref("HTMLElement")}}._

## Specifications

The `<font>` tag is not supported in HTML5 since it is now obsolete.

## Browser compatibility

{{Compat}}

## See also

- The HTML element implementing this interface: {{HTMLElement("font")}}.

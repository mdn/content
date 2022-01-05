---
title: HTMLBaseFontElement
slug: Web/API/HTMLBaseFontElement
tags:
  - API
  - HTML DOM
  - Interface
  - Reference
  - Deprecated
browser-compat: api.HTMLBaseFontElement
---
{{APIRef("HTML DOM")}}{{deprecated_header}}

The **`HTMLBaseFontElement`** interface provides special properties (beyond the regular {{domxref("HTMLElement")}} interface it also has available to it by inheritance) for manipulating {{HTMLElement("basefont")}} elements.

The `<basefont>` element has been deprecated in HTML4 and removed in HTML5. This latest specification requires that this element implements {{domxref("HTMLUnknownElement")}} rather than `HTMLBaseFontElement`.

> **Note:** Use [CSS Fonts](/en-US/docs/Web/CSS/CSS_Fonts) features instead.

## Properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}._

- `HTMLBaseFontElement.color`
  - : Is a {{domxref("DOMString")}} representing the text color using either a named color or a color specified in the hexadecimal `#RRGGBB` format.
- `HTMLBaseFontElement.face`
  - : Is a {{domxref("DOMString")}} representing a list of one or more font names. The document text in the default style is rendered in the first font face that the client's browser supports. If no font listed is installed on the local system, the browser typically defaults to the proportional or fixed-width font for that system.
- `HTMLBaseFontElement.size`
  - : Is a {{domxref("DOMString")}} representing the font size as either a numeric or relative value. Numeric values range from `1` to `7` with `1` being the smallest and `3` the default. Relative value starts with a `'+'` or a `'-`'.

## Methods

_No specific method; inherits methods from its parent, {{domxref("HTMLElement")}}._

## Specifications

This feature was present in the HTML specification up through HTML 3.2, but was deprecated in HTML 4, and then removed — and so is not in the current HTML specification. No modern browsers support it and this feature is no longer on track to become a standard.

## Browser compatibility

{{Compat}}

## See also

- The HTML element {{HTMLElement("basefont")}} _was_ implementing this interface.

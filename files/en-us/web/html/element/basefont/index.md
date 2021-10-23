---
title: <basefont>
slug: Web/HTML/Element/basefont
tags:
  - Element
  - Fonts
  - HTML
  - Layout
  - Deprecated
  - Reference
  - Style
  - Web
  - basefont
browser-compat: html.elements.basefont
---

{{deprecated_header}}

The **`<basefont>`** [HTML](/en-US/docs/Web/HTML) element is deprecated. It sets a default font face, size, and color for the other elements which are descended from its parent element. With this set, the font's size can then be varied relative to the base size using the {{HTMLElement("font")}} element.

You should not use this element; instead, you should use CSS properties such as {{cssxref("font")}}, {{cssxref("font-family")}}, {{cssxref("font-size")}}, and {{cssxref("color")}} to change the font configuration for an element and its contents.

## Attributes

Like all other HTML elements, this element supports the [global attributes](/en-US/docs/Web/HTML/Global_attributes "HTML/Global attributes").

- {{htmlattrdef("color")}}
  - : This attribute sets the text color using either a named color or a color specified in the hexadecimal #RRGGBB format.
- {{htmlattrdef("face")}}
  - : This attribute contains a list of one or more font names. The document text in the default style is rendered in the first font face that the client's browser supports. If no font listed is installed on the local system, the browser typically defaults to the proportional or fixed-width font for that system.
- {{htmlattrdef("size")}}
  - : This attribute specifies the font size as either a numeric or relative value. Numeric values range from 1 to 7 with 1 being the smallest and 3 the default.

## Usage notes

**Do not use this element!** Though once (imprecisely) normalized in HTML 3.2, it wasn't supported in all major browsers. Further, browsers, and even successive versions of browsers, never implemented it in the same way: practically, using it has always brought _indeterminate_ results.

The `<basefont>` element was deprecated in the standard at the same time as all elements related to styling only. Starting with HTML 4, HTML does not convey styling information anymore (outside the {{HTMLElement("style")}} element or the **style** attribute of each element). In HTML5, this element has been removed completely. For any new web development, styling should be written using [CSS](/en-US/docs/Web/CSS) only.

The former behavior of the {{HTMLElement("font")}} element can be achieved, and even better controlled using the [CSS Fonts](/en-US/docs/Web/CSS/CSS_Fonts) properties.

## DOM interface

This element implements the {{domxref("HTMLBaseFontElement")}} interface.

## Example

    <basefont color="#FF0000" face="Helvetica" size="+2" />

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## Notes

- HTML 3.2 supports the basefont element but only with the size attribute.
- The strict HTML and XHTML specifications do not support this element.
- Despite being part of transitional standards, some standards-focused browsers like Mozilla and Opera do not support this element.
- This element can be imitated with a CSS rule on the {{HTMLElement("body")}} element.
- XHTML 1.0 requires a trailing slash for this element: `<basefont />`.

{{HTMLRef}}

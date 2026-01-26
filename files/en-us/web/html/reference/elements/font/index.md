---
title: <font>
slug: Web/HTML/Reference/Elements/font
page-type: html-element
status:
  - deprecated
browser-compat: html.elements.font
sidebar: htmlsidebar
---

{{Deprecated_Header}}

The **`<font>`** [HTML](/en-US/docs/Web/HTML) element defines the font size, color and face for its content.

> [!WARNING]
> Do not use this element. Use the CSS [Fonts](/en-US/docs/Web/CSS/Guides/Fonts) properties to style text.

## Attributes

Like all other HTML elements, this element supports the [global attributes](/en-US/docs/Web/HTML/Reference/Global_attributes).

- `color` {{Deprecated_Inline}}
  - : This attribute sets the text color using either a named color or a color specified in the hexadecimal #RRGGBB format.
- `face` {{Deprecated_Inline}}
  - : This attribute contains a comma-separated list of one or more font names. The document text in the default style is rendered in the first font face that the client's browser supports. If no font listed is installed on the local system, the browser typically defaults to the proportional or fixed-width font for that system.
- `size` {{Deprecated_Inline}}
  - : This attribute specifies the font size as either a numeric or relative value. Numeric values range from `1` to `7` with `1` being the smallest and `3` the default. It can be defined using a relative value, like `+2` or `-3`, which sets it relative to `3`, the default value.

## DOM interface

This element implements the {{domxref("HTMLFontElement")}} interface.

## Examples

### Using the deprecated `<font>` element

This example uses the deprecated `<font>` element to change text color, font, and size:

```html
<p><font color="red" size="5">This is red text, size 5</font></p>
<p><font face="Georgia, serif">This text uses Georgia or serif fonts</font></p>
<p><font size="+2">This is 2 sizes larger than surrounding text</font></p>
```

### Modern CSS alternatives

The `<font>` element is deprecated. Use CSS properties instead:

```html
<p style="color: red; font-size: 1.5em;">This is red text, larger size</p>
<p style="font-family: Georgia, serif;">
  This text uses Georgia or serif fonts
</p>
<p style="font-size: larger;">This is 2 sizes larger than surrounding text</p>
```

Or better yet, use an external stylesheet:

```css
.red-text {
  color: red;
  font-size: 1.5em;
}

.serif-font {
  font-family: Georgia, serif;
}

.larger-text {
  font-size: larger;
}
```

```html
<p class="red-text">This is red text, larger size</p>
<p class="serif-font">This text uses Georgia or serif fonts</p>
<p class="larger-text">This is 2 sizes larger than surrounding text</p>
```

## Migration Guide

If you have legacy code using `<font>` elements, here's how to migrate:

| Deprecated `<font>`      | Modern CSS Equivalent                                         |
| ------------------------ | ------------------------------------------------------------- |
| `<font color="#FF0000">` | `style="color: #FF0000;"` or `color: #FF0000;` in CSS         |
| `<font face="Arial">`    | `style="font-family: Arial;"` or `font-family: Arial;` in CSS |
| `<font size="7">`        | `style="font-size: larger;"` or `font-size: 2em;` in CSS      |
| `<font size="+2">`       | `style="font-size: larger;"` (use CSS relative units)         |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

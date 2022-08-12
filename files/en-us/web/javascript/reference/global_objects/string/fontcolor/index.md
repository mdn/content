---
title: String.prototype.fontcolor()
slug: Web/JavaScript/Reference/Global_Objects/String/fontcolor
tags:
  - Deprecated
  - HTML wrapper methods
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
  - Polyfill
browser-compat: javascript.builtins.String.fontcolor
---
{{JSRef}} {{deprecated_header}}

The **`fontcolor()`** method creates a {{HTMLElement("font")}}
HTML element that causes a string to be displayed in the specified font color.

> **Note:** The \<font> element has been removed in [HTML5](/en-US/docs/Glossary/HTML5) and shouldn't be used anymore.
> Instead web developers should use [CSS](/en-US/docs/Web/CSS) properties.

## Syntax

```js
fontcolor(color)
```

### Parameters

- `color`
  - : A string expressing the color as a hexadecimal RGB triplet or as a string literal.
    String literals for color names are listed in the [CSS color reference](/en-US/docs/Web/CSS/color_value).

### Return value

A string containing a {{HTMLElement("font")}} HTML element.

## Description

If you express color as a hexadecimal RGB triplet, you must use the format
`rrggbb`. For example, the hexadecimal RGB values for salmon are red=FA,
green=80, and blue=72, so the RGB triplet for salmon is `"FA8072"`.

## Examples

### Using fontcolor()

The following example uses the `fontcolor()` method to change the color of a
string by producing a string with the HTML `<font>` element.

```js
const worldString = 'Hello, world';

console.log(`${worldString.fontcolor('red')} is red in this line`);
// '<font color="red">Hello, world</font> is red in this line'

console.log(`${worldString.fontcolor('FF00')} is red in hexadecimal in this line`);
// '<font color="FF00">Hello, world</font> is red in hexadecimal in this line'
```

With the {{domxref("HTMLElement/style", "element.style")}} object you can get
the element's `style` attribute and manipulate it more generically, for
example:

```js
document.getElementById('yourElemId').style.color = 'red';
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `String.prototype.fontcolor` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.fontsize()")}}

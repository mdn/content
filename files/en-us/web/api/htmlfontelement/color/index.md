---
title: HTMLFontElement.color
slug: Web/API/HTMLFontElement/color
page-type: web-api-instance-property
tags:
  - API
  - HTML DOM
  - HTMLFontElement
  - Property
  - Reference
  - Deprecated
browser-compat: api.HTMLFontElement.color
---
{{deprecated_header}}{{APIRef("HTML DOM")}}

The obsolete
**`HTMLFontElement.color`**
property is a string that reflects the {{htmlattrxref("color",
    "font")}} HTML attribute, containing either a named color or a color specified in the
hexadecimal #RRGGBB format.

The format of the string must follow one of the following HTML microsyntaxes:

| Microsyntax              | Description                                                                      | Examples                |
| ------------------------ | -------------------------------------------------------------------------------- | ----------------------- |
| Valid name color string  | _nameOfColor (case insensitive)_                                                 | `Green` `green` `GREEN` |
| Valid hex color string   | _in_ {{cssxref("color_value", "RGB format", "#rgb")}}_: #RRGGBB_ | `#008000`               |
| RGB using decimal values | _rgb(x,x,x) (x in 0-255 range)_                                                  | `rgb(0,128,0)`          |

## Value

A string.

## Examples

```js
// Assumes there is <font id="f"> element in the HTML

const f = document.getElementById("f");
f.color = "green";
```

## Specifications

The `<font>` element has been deprecated and is no longer supported and, as a result, neither is `<font>.color`.

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("HTMLFontElement")}} interface it belongs to.

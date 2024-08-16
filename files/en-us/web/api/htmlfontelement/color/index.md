---
title: "HTMLFontElement: color property"
short-title: color
slug: Web/API/HTMLFontElement/color
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.HTMLFontElement.color
---

{{deprecated_header}}{{APIRef("HTML DOM")}}

The obsolete
**`HTMLFontElement.color`**
property is a string that reflects the [`color`](/en-US/docs/Web/HTML/Element/font#color) HTML attribute, containing either a named color or a color specified in the
hexadecimal #RRGGBB format.

The format of the string must follow one of the following HTML microsyntaxes (see [`<color>`](/en-US/docs/Web/CSS/color_value)):

| Microsyntax              | Description                      | Examples                  |
| ------------------------ | -------------------------------- | ------------------------- |
| Valid name color string  | _nameOfColor (case insensitive)_ | `Green`, `green`, `GREEN` |
| Valid hex color string   | _#RRGGBB_                        | `#008000`                 |
| RGB using decimal values | _rgb(x,x,x) (x in 0-255 range)_  | `rgb(0 128 0)`            |

## Value

A string.

When set to the `null` value, that `null` value is converted to the empty string (`""`), so `elt.color = null` is equivalent to `elt.color = ""`.

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

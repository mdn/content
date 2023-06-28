---
title: "HTMLFontElement: face property"
short-title: face
slug: Web/API/HTMLFontElement/face
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.HTMLFontElement.face
---

{{deprecated_header}}{{ APIRef("HTML DOM") }}

The obsolete
**`HTMLFontElement.face`**
property is a string that reflects the [`face`](/en-US/docs/Web/HTML/Element/font#face) HTML attribute, containing a comma-separated list of one or more font
names.

The document text, in the default style, is rendered as the first font face that the
client's browser supports. If no font listed is installed on the local system, the
browser typically defaults to the proportional or fixed-width font for that system.

The format of the string must follow one of the following HTML microsyntax:

| Microsyntax                                 | Description                                                         | Examples          |
| ------------------------------------------- | ------------------------------------------------------------------- | ----------------- |
| List of one or more valid font family names | _A list of font names, that have to be present on the local system_ | `courier,verdana` |

## Value

A string.

## Examples

```js
// Assumes there is <font id="f"> element in the HTML

const f = document.getElementById("f");
f.face = "arial";
```

## Specifications

The `<font>` element has been deprecated and is no longer supported and, as a result, neither is
`<font>.face`.

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("HTMLFontElement")}} interface it belongs to.

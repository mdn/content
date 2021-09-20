---
title: HTMLFontElement.face
slug: Web/API/HTMLFontElement/face
tags:
  - API
  - HTML DOM
  - HTMLFontElement
  - Property
  - Reference
  - Deprecated
browser-compat: api.HTMLFontElement.face
---
{{deprecated_header}}{{ APIRef("HTML DOM") }}

The obsolete
**`HTMLFontElement.face`**
property is a {{domxref("DOMString")}} that reflects the {{ htmlattrxref("face",
    "font") }} HTML attribute, containing a comma-separated list of one or more font
names.

The document text, in the default style, is rendered as the first font face that the
client's browser supports. If no font listed is installed on the local system, the
browser typically defaults to the proportional or fixed-width font for that system.

The format of the string must follow one of the following HTML microsyntax:

| Microsyntax                                 | Description                                                         | Examples          |
| ------------------------------------------- | ------------------------------------------------------------------- | ----------------- |
| List of one or more valid font family names | _A list of font names, that have to be present on the local system_ | `courier,verdana` |

## Syntax

```js
faceString = fontObj.face;
fontObj.face = faceString;
```

## Examples

```js
// Assumes there is <font id="f"> element in the HTML

var f = document.getElementById("f");
f.face = "arial";
```

## Specifications

The \<font> tag is not supported in HTML5 and as a result neither is
`<font>.face`.

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("HTMLFontElement")}} interface it belongs to.

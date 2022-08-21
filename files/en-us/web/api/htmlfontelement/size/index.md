---
title: HTMLFontElement.size
slug: Web/API/HTMLFontElement/size
page-type: web-api-instance-property
tags:
  - API
  - HTML DOM
  - HTMLFontElement
  - Property
  - Reference
  - Deprecated
browser-compat: api.HTMLFontElement.size
---
{{deprecated_header}}{{ APIRef("HTML DOM") }}

The obsolete
**`HTMLFontElement.size`** property is a
string that reflects the {{ htmlattrxref("size", "font") }} HTML
attribute. It contains either a font size ranging from 1 to 7 or a
number relative to the default value 3, for example -2 or +1.

The format of the string must follow one of the following HTML microsyntaxes:

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Microsyntax</th>
      <th scope="col">Description</th>
      <th scope="col">Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Valid size number string</td>
      <td><em>integer number in the range of 1-7</em></td>
      <td><code>6</code></td>
    </tr>
    <tr>
      <td>Relative size string</td>
      <td>
        <em>+x or -x, where x is a number relative to 3 (the result should be in the range of 1-7)</em>
      </td>
      <td>
        <code>+2<br />-1</code>
      </td>
    </tr>
  </tbody>
</table>

## Value

A string.

## Examples

```js
// Assumes there is <font id="f"> element in the HTML

const f = document.getElementById("f");
f.size = "6";
```

## Specifications

The `<font>` element has been deprecated and is no longer supported and, as a result, neither is
`<font>.size`.

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("HTMLFontElement")}} interface it belongs to.

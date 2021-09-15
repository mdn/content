---
title: HTMLAreaElement.href
slug: Web/API/HTMLAreaElement/href
tags:
  - API
  - HTMLAreaElement
  - Location
  - Property
  - Reference
browser-compat: api.HTMLAreaElement.href
---
{{ApiRef("HTML DOM")}}

The **`HTMLAreaElement.href`** property is a
stringifier that returns a {{domxref("USVString")}} containing the whole URL, and allows
the href to be updated.

## Syntax

```js
// Getter
string = area.href;
// Setter
area.href = string;
```

## Examples

```js
// An <area id="myArea" href="https://developer.mozilla.org/en-US/HTMLAreaElement"> element is in the document
const area = document.getElementById("myArea");
area.href; // returns 'https://developer.mozilla.org/en-US/HTMLAreaElement'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("HTMLAreaElement")}} interface it belongs to.

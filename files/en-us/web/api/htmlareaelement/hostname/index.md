---
title: HTMLAreaElement.hostname
slug: Web/API/HTMLAreaElement/hostname
tags:
  - API
  - HTMLAreaElement
  - Property
  - Reference
browser-compat: api.HTMLAreaElement.hostname
---
{{ApiRef("HTML DOM")}}

The **`HTMLAreaElement.hostname`** property is a
{{domxref("USVString")}} containing the domain of the URL.

## Syntax

```js
// Getter
string = area.hostname;
// Setter
area.hostname = string;
```

## Examples

```js
// An <area id="myArea" href="/en-US/docs/HTMLAreaElement"> element is in the document
const area = document.getElementById("myArea");
HTMLAreaElement.hostname; // returns 'developer.mozilla.org'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("HTMLAreaElement")}} interface it belongs to.

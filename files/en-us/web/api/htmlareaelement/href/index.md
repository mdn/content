---
title: HTMLAreaElement.href
slug: Web/API/HTMLAreaElement/href
page-type: web-api-instance-property
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
{{Glossary("stringifier")}} that returns a string containing the whole URL, and allows
the href to be updated.

## Value

A string.

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

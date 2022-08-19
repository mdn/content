---
title: HTMLAreaElement.username
slug: Web/API/HTMLAreaElement/username
page-type: web-api-instance-property
tags:
  - API
  - HTMLAreaElement
  - Property
  - Reference
browser-compat: api.HTMLAreaElement.username
---
{{ApiRef("HTML DOM")}}

The **`HTMLAreaElement.username`** property is a
string containing the username specified before the domain name.

## Value

A string.

## Examples

### Getting the username from an area link

```js
// An <area id="myArea" href="https://anonymous:flabada@developer.mozilla.org/en-US/docs/HTMLAreaElement"> element is in the document
const area = document.getElementByID("myArea");
area.username; // returns 'anonymous'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("HTMLAreaElement")}} interface it belongs to.

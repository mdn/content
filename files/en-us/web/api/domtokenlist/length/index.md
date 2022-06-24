---
title: DOMTokenList.length
slug: Web/API/DOMTokenList/length
page-type: web-api-instance-property
tags:
  - Property
  - Reference
  - Read-only
browser-compat: api.DOMTokenList.length
---
{{APIRef("DOM")}}

The read-only **`length`** property of the {{domxref("DOMTokenList")}} interface is an `integer` representing the number
of objects stored in the object.

## Value

An positive integer, or `0` if the list is empty.

## Examples

In the following example we retrieve the list of classes set on a
{{htmlelement("span")}} element as a `DOMTokenList` using
{{domxref("Element.classList")}}, then write the length of the list to the
`<span>`'s {{domxref("Node.textContent")}}.

First, the HTML:

```html
<span class="a b c"></span>
```

Now the JavaScript:

```js
const span = document.querySelector("span");
const classes = span.classList;
const length = classes.length;

span.textContent = `classList length = ${length}`;
```

The output looks like this:

{{ EmbedLiveSample('Examples', '100%', 60) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

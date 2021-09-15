---
title: DOMTokenList.item()
slug: Web/API/DOMTokenList/item
tags:
  - API
  - DOM
  - DOMTokenList
  - Method
  - Reference
  - item
browser-compat: api.DOMTokenList.item
---
{{APIRef("DOM")}}

The **`item()`** method of the {{domxref("DOMTokenList")}}
interface returns an item in the list by its index.

## Syntax

```js
tokenList.item(index)
```

### Parameters

- `index`
  - : A 32-bit unsigned integer ({{jsxref("Number")}}) representing the index of the item you want to return.

### Return value

A {{domxref("DOMString")}} representing the returned item. It returns
`null` if the number is greater than or equal to the `length` of
the list.

## Examples

In the following example we retrieve the list of classes set on a
{{htmlelement("span")}} element as a `DOMTokenList` using
{{domxref("Element.classList")}}. We then retrieve the last item in the list using
`item(tokenList.length - 1)`, and write it into the
`<span>`'s {{domxref("Node.textContent")}}.

First, the HTML:

```html
<span class="a b c"></span>
```

Now the JavaScript:

```js
let span = document.querySelector("span");
let classes = span.classList;
let item = classes.item(classes.length-1);
span.textContent = item;
```

The output looks like this:

{{ EmbedLiveSample('Examples', '100%', 60) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

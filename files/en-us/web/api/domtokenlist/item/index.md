---
title: DOMTokenList.item()
slug: Web/API/DOMTokenList/item
page-type: web-api-instance-method
tags:
  - Method
  - Reference
browser-compat: api.DOMTokenList.item
---
{{APIRef("DOM")}}

The **`item()`** method of the {{domxref("DOMTokenList")}} interface returns an item in the list,
determined by its position in the list, its index.

> **Note:** This method is equivalent as the operator `[]`.
> So `aList.item(i)` is the same as `aList[i]`, like the [operator[]](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#accessing_array_elements) of an {{jsxref("Array")}}.

## Syntax

```js
tokenList.item(index)
```

### Parameters

- `index`
  - : A number representing the index of the item you want to return. If it isn't an integer, only the integer part is considered.

### Return value

A string representing the returned item,
or `null` if the number is greater than or equal to the `length` of the list.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if the `index` cannot be converted to an integer.

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
const span = document.querySelector("span");
const classes = span.classList;
const item = classes.item(classes.length-1);
span.textContent = item;
```

The output looks like this:

{{ EmbedLiveSample('Examples', '100%', 60) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

---
title: "NamedNodeMap: item() method"
short-title: item()
slug: Web/API/NamedNodeMap/item
page-type: web-api-instance-method
browser-compat: api.NamedNodeMap.item
---

{{APIRef("DOM")}}

The **`item()`** method of the {{domxref("NamedNodeMap")}} interface
returns the item in the map matching the index.

> **Note:** This method is also called when you use the operator `[]` syntax.
> So, `myMap[i]`is equivalent to `myMap.item(i)` where `i` is a number.

## Syntax

```js-nolint
item(index)
[index]
```

### Parameters

- `index`
  - : A number representing the index of the item you want to return.

### Return value

An {{domxref("Attr")}} or `null` if the number is greater than or equal to the `length` of
the map.

## Example

```html
<pre zero="test" one="test" two="test"></pre>
```

```js
const pre = document.querySelector("pre");
const attrMap = pre.attributes;

pre.textContent = `The attribute map contains:
0: ${attrMap.item(0).name}
1: ${attrMap[1].name}
2: ${attrMap.item(2).name}`;
```

{{EmbedLiveSample("Example", "100%", 120)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

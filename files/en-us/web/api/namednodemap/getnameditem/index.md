---
title: NamedNodeMap.getNamedItem()
slug: Web/API/NamedNodeMap/getNamedItem
page-type: web-api-instance-method
tags:
  - Method
  - Reference
browser-compat: api.NamedNodeMap.getNamedItem
---

{{APIRef("DOM")}}

The **`getNamedItem()`** method of the {{domxref("NamedNodeMap")}} interface returns the {{domxref("Attr")}} corresponding to the given name, or `null` if there is no corresponding attribute.

> **Note:** This method is also called when you use the operator `[]` syntax.
> So, `myMap[str]`is equivalent to `myMap.getNamedItem(str)` where `str` is a string.

## Syntax

```js
getNamedItem(name);
[name];
```

### Parameters

- `name`
  - : A string with the name of the desired attribute.

### Return value

An {{domxref("Attr")}} corresponding to the `name` given in parameter, or `null` if none has been found.

## Example

```html
<pre test="test"></pre>
```

```js
const pre = document.querySelector("pre");
const attrMap = pre.attributes;
const value = attrMap.getNamedItem("test").value;
pre.textContent = `The 'test' attribute contains ${value}.
And 'boum' has ${attrMap["boum"] ? "been" : "not been"} found.`;
```

{{EmbedLiveSample("Example", "100%", 80)}}

## Specification

{{Specifications}}

## Browser compatibility

{{Compat}}

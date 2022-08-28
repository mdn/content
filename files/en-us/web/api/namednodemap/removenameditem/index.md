---
title: NamedNodeMap.removeNamedItem()
slug: Web/API/NamedNodeMap/removeNamedItem
page-type: web-api-instance-method
tags:
  - Method
  - Reference
browser-compat: api.NamedNodeMap.removeNamedItem
---

{{APIRef("DOM")}}

The **`removeNamedItem()`** method of the {{domxref("NamedNodeMap")}} interface
removes the {{domxref("Attr")}} corresponding to the given name from the map.

## Syntax

```js
removeNamedItem(attrName);
```

### Parameters

- `attrName`
  - : The name of the attribute to remove from the map.

### Return value

The removed {{domxref("Attr")}}.

### Exceptions

- `NotFoundError` {{domxref("DOMException")}}
  - : Thrown if there is no attribute with the given name.

## Example

```html
<pre test="testValue"></pre>
```

```js
const pre = document.querySelector("pre");
const attrMap = pre.attributes;

let result = `The 'test' attribute initially contains '${attrMap["test"].value}'.\n`;

result += "We remove it.\n\n";
attrMap.removeNamedItem("test");

result += attrMap.getNamedItem("test")
  ? "And 'test' still exists."
  : "And 'test' is no more to be found.";

pre.textContent = result;
```

{{EmbedLiveSample("Example", "100%", 120)}}

## Specification

{{Specifications}}

## Browser compatibility

{{Compat}}

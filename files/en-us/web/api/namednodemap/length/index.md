---
title: NamedNodeMap.length
slug: Web/API/NamedNodeMap/length
tags:
  - Property
  - Reference
  - Read-only
browser-compat: api.NamedNodeMap.length
---
{{APIRef("DOM")}}

The read-only **`length`** property of the {{domxref("NamedNodeMap")}} interface
is the number of objects stored in the map.

## Value

A number containing the number of objects in the map

## Example

```html
<pre zero="test" one="test" two="test"></pre>
```

```js
const pre = document.getElementsByTagName("pre")[0];
const attrMap = pre.attributes;

let result = "The `test` attribute contains " + attrMap.length + " attributes.\n";

pre.textContent = result;
```

{{EmbedLiveSample("Example", "100%", 20)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

---
title: "NamedNodeMap: length property"
short-title: length
slug: Web/API/NamedNodeMap/length
page-type: web-api-instance-property
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
const pre = document.querySelector("pre");
const attrMap = pre.attributes;
pre.textContent = `The 'test' attribute contains ${attrMap.length} attributes.\n`;
```

{{EmbedLiveSample("Example", "100%", 20)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

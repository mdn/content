---
title: "NamedNodeMap: removeNamedItemNS() method"
short-title: removeNamedItemNS()
slug: Web/API/NamedNodeMap/removeNamedItemNS
page-type: web-api-instance-method
browser-compat: api.NamedNodeMap.removeNamedItemNS
---

{{APIRef("DOM")}}

The **`removeNamedItemNS()`** method of the {{domxref("NamedNodeMap")}} interface
removes the {{domxref("Attr")}} corresponding to the given namespace and local name from the map.

## Syntax

```js-nolint
removeNamedItemNS(namespace, localName)
```

### Parameters

- `namespace`

  - : The namespace of the attribute to remove from the map
    > **Warning:** `namespace` is the URI of the namespace, not the prefix.

- `localName`
  - : The local name of the attribute to remove from the map.

### Return value

The removed {{domxref("Attr")}}.

### Exceptions

- `NotFoundError` {{domxref("DOMException")}}
  - : Thrown if there is no attribute with the given namespace and local name.

## Example

```html hidden
<pre></pre>
```

```js
const parser = new DOMParser();
const xmlString =
  '<warning ob:one="test" xmlns:ob="http://www.example.com/ob">Beware!</warning>';
const doc = parser.parseFromString(xmlString, "application/xml");

const pre = document.querySelector("pre");
const warning = doc.querySelector("warning");
const attrMap = warning.attributes;

let result = `The 'ob:one' attribute initially contains '${attrMap["ob:one"].value}'.\n`;

result += "We remove it.\n\n";
attrMap.removeNamedItemNS("http://www.example.com/ob", "one");

result += attrMap["ob:one"]
  ? "And 'ob:one' still exists."
  : "And 'ob:one' is no more to be found.";

pre.textContent = result;
```

{{EmbedLiveSample("Example", "100%", 120)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

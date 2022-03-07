---
title: NamedNodeMap.removeNamedItemNS()
slug: Web/API/NamedNodeMap/removeNamedItemNS
tags:
  - Method
  - Reference
browser-compat: api.NamedNodeMap.removeNamedItemNS
---
{{APIRef("DOM")}}

The **`removedNamedItemNS()`** method of the {{domxref("NamedNodeMap")}} interface
removes the {{domxref("Attr")}} corresponding to the given namespace and local name from the map.

## Syntax

```js
removeNamedItem(namespace, localName);
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
const xmlString = '<warning ob:one="test" xmlns:ob="http://www.example.com/ob">Beware!</warning>';
const doc = parser.parseFromString(xmlString, "application/xml");

const pre = document.getElementsByTagName("pre")[0];
const warning = doc.getElementsByTagName("warning")[0];
const attrMap = warning.attributes;

let result = "The `ob:one` attribute initially contains `" + attrMap["ob:one"].value + "`.\n";

result += "We remove it.\n\n";
attrMap.removeNamedItemNS("http://www.example.com/ob", "one");

if (attrMap["ob:one"]) {
  result += "And `ob:one` still exists.";
}
else {
  result += "And `ob:one` is no more to be found.";
}

pre.textContent = result;
```

{{EmbedLiveSample("Example", "100%", 120)}}

## Specification

{{Specifications}}

## Browser compatibility

{{Compat}}

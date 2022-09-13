---
title: NamedNodeMap.getNamedItemNS()
slug: Web/API/NamedNodeMap/getNamedItemNS
page-type: web-api-instance-method
tags:
  - Method
  - Reference
browser-compat: api.NamedNodeMap.getNamedItemNS
---

{{APIRef("DOM")}}

The **`getNamedItemNS()`** method of the {{domxref("NamedNodeMap")}} interface returns the {{domxref("Attr")}} corresponding to the given local name in the given namespace, or `null` if there is no corresponding attribute.

## Syntax

```js
getNamedItemNS(namespace, localName);
```

### Parameters

- `namespace`
  - : A string with the namespace URI of the desired attribute.
    > **Warning:** `namespace` is the URI of the namespace, not the prefix.
- `localName`
  - : A string with the localName of the desired attribute.

### Return value

An {{domxref("Attr")}} corresponding to the namespace and local name given in parameters, or `null` if none has been found.

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

const value = warning.attributes.getNamedItemNS(
  "http://www.example.com/ob",
  "one"
).value;

pre.textContent = `The 'ob:one' attribute contains: ${value}.`;
```

{{EmbedLiveSample("Example", "100%", 80)}}

## Specification

{{Specifications}}

## Browser compatibility

{{Compat}}

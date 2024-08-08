---
title: "NamedNodeMap: setNamedItemNS() method"
short-title: setNamedItemNS()
slug: Web/API/NamedNodeMap/setNamedItemNS
page-type: web-api-instance-method
browser-compat: api.NamedNodeMap.setNamedItemNS
---

{{APIRef("DOM")}}

The **`setNamedItemNS()`** method of the {{domxref("NamedNodeMap")}} interface
puts the {{domxref("Attr")}} identified by its name in the map.
If there was already an {{domxref("Attr")}} with the same name in the map,
it is _replaced_.

> [!NOTE]
> This method is an alias of `setNamedItem()` you can use them
> interchangeably.

## Syntax

```js-nolint
setNamedItemNS(attr)
```

### Parameters

- `attr`
  - : The attribute to insert in the map.

### Return value

Returns the old attribute if replaced, or `null` if the attribute is new.

### Exceptions

- `InUseAttributeError` {{domxref("DOMException")}}
  - : Thrown if the attribute is still part of another map.

## Example

```html
<span ob:one="one"></span>
<pre></pre>
```

```js
const parser = new DOMParser();
// ob:one in <span> is not in a namespace, while ob:one in <warning>, is.
const xmlString =
  '<warning ob:one="test" xmlns:ob="http://www.example.com/ob">Beware!</warning>';
const doc = parser.parseFromString(xmlString, "application/xml");

const span = document.querySelector("span");
const pre = document.querySelector("pre");
const warning = doc.querySelector("warning");
const attrMap = span.attributes;

let result = `The '<span>' element initially contains ${attrMap.length} attribute.\n\n`;

result += "We remove `one` from '<span>' and adds it to '<pre>'.\n";
const one = warning.attributes.removeNamedItemNS(
  "http://www.example.com/ob",
  "one",
);
attrMap.setNamedItemNS(one);
result += `The '<span>' element now contains ${span.attributes.length} attributes:\n\n`;
result += "Prefix\tLocal name\tQualified name\n";
result += "=========================================\n";

for (const attr of attrMap) {
  result += `${attr.prefix}\t${attr.localName}\t\t${attr.name}\n`;
}

pre.textContent = result;
```

{{EmbedLiveSample("Example", "100%", 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

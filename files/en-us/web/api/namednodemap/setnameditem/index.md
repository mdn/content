---
title: "NamedNodeMap: setNamedItem() method"
short-title: setNamedItem()
slug: Web/API/NamedNodeMap/setNamedItem
page-type: web-api-instance-method
browser-compat: api.NamedNodeMap.setNamedItem
---

{{APIRef("DOM")}}

The **`setNamedItem()`** method of the {{domxref("NamedNodeMap")}} interface
puts the {{domxref("Attr")}} identified by its name in the map.
If there is already an {{domxref("Attr")}} with the same name in the map,
it is _replaced_.

## Syntax

```js-nolint
setNamedItem(attr)
```

### Parameters

- `attr`
  - : the attribute to insert in the map.

### Return value

Returns the old attribute if replaced, or `null` if the attribute is new.

### Exceptions

- `InUseAttributeError` {{domxref("DOMException")}}
  - : Thrown if the attribute is still part of another map.

## Example

```html
<span one="one" two="two"></span>
<pre test="testValue"></pre>
```

```js
const span = document.querySelector("span");
const pre = document.querySelector("pre");
const attrMap = pre.attributes;

let result = `The '<pre>' element initially contains ${attrMap.length} attributes.\n\n`;

result += "We remove `one` from `<span>` and adds it to `<pre>`.\n";
const one = span.attributes.removeNamedItem("one");
attrMap.setNamedItem(one);
result += `The '<pre>' element now contains ${pre.attributes.length} attributes.\n\n`;

result += "We get 'two' from '<span>' and try to adds it to '<pre>'.\n";
const two = span.attributes.getNamedItem("two");
try {
  attrMap.setNamedItem(two);
} catch (error) {
  result += `An exception has been raised: ${error.name}.\n`;
}

pre.textContent = result;
```

{{EmbedLiveSample("Example", "100%", 160)}}

## Specification

{{Specifications}}

## Browser compatibility

{{Compat}}

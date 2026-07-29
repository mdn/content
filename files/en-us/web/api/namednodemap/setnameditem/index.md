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
<span class="foo" id="bar"></span>
<pre contenteditable></pre>
```

```js
const span = document.querySelector("span");
const pre = document.querySelector("pre");

let result = `The \`<pre>\` element initially contains ${pre.attributes.length} attributes.\n\n`;

result += "We remove `class` from `<span>` and add it to `<pre>`.\n";
const classAttribute = span.attributes.removeNamedItem("class");
pre.attributes.setNamedItem(classAttribute);
result += `The \`<pre>\` element now contains ${pre.attributes.length} attributes.\n\n`;

result += "We get `id` from `<span>` and try to add it to `<pre>`.\n";
const id = span.attributes.getNamedItem("id");
try {
  pre.attributes.setNamedItem(id);
} catch (error) {
  result += `An exception has been raised: ${error.name}: ${error.message}.\n`;
}

pre.textContent = result;
```

{{EmbedLiveSample("Example", "100%", 160)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

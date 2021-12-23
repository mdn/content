---
title: HTMLSelectElement.namedItem()
slug: Web/API/HTMLSelectElement/namedItem
tags:
  - API
  - HTML DOM
  - HTMLSelectElement
  - Method
  - Reference
browser-compat: api.HTMLSelectElement.namedItem
---
{{ APIRef("HTML DOM") }}

The **`HTMLSelectElement.namedItem()`** method returns the
{{domxref("HTMLOptionElement")}} corresponding to the {{domxref("HTMLOptionElement")}}
whose `name` or `id` match the specified name, or
`null` if no option matches.

In JavaScript, using the array bracket syntax with a {{jsxref("String")}}, like
`selectElt["value"]` is equivalent to
` selectElt``.namedItem("value") `.

## Syntax

```js
var item = collection.namedItem(str);
var item = collection[str];
```

### Parameters

- `str` is a {{domxref("DOMString")}}.

### Return value

- `item` is a {{domxref("HTMLOptionElement")}}.

## Example

### HTML

```html
<form>
  <select id="myFormControl">
    <option id="o1">Opt 1</option>
    <option id="o2">Opt 2</option>
  </select>
</form>
```

### JavaScript

```js
elem1 = document.forms[0]['myFormControl']['o1']; // Returns the HTMLOptionElement representing #o1
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLSelectElement")}} that implements it.

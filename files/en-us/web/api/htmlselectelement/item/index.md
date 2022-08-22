---
title: HTMLSelectElement.item()
slug: Web/API/HTMLSelectElement/item
page-type: web-api-instance-method
tags:
  - API
  - HTML DOM
  - HTMLSelectElement
  - Method
  - Reference
browser-compat: api.HTMLSelectElement.item
---
{{ APIRef("HTML DOM") }}

The **`HTMLSelectElement.item()`** method returns the
{{domxref("Element")}} corresponding to the {{domxref("HTMLOptionElement")}} whose
position in the options list corresponds to the index given in the parameter, or
`null` if there are none.

In JavaScript, using the array bracket syntax with an `unsigned long`, like
`selectElt[index]` is equivalent to
`selectElt.namedItem(index)`.

## Syntax

```js
item(index)
// or collection[index]
```

### Parameters

- `index` is an `unsigned long`.

### Return value

- `item` is a {{domxref("HTMLOptionElement")}}.

## Examples

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
// Returns the HTMLOptionElement representing #o2
elem1 = document.forms[0]["myFormControl"][1];
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLSelectElement")}} that implements it.

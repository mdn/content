---
title: "HTMLSelectElement: namedItem() method"
short-title: namedItem()
slug: Web/API/HTMLSelectElement/namedItem
page-type: web-api-instance-method
browser-compat: api.HTMLSelectElement.namedItem
---

{{ APIRef("HTML DOM") }}

The **`HTMLSelectElement.namedItem()`** method returns the
{{domxref("HTMLOptionElement")}} corresponding to the {{domxref("HTMLOptionElement")}}
whose `name` or `id` match the specified name, or
`null` if no option matches.

In JavaScript, using `selectElt.namedItem('value')` is equivalent to `selectElt.options.namedItem('value')`.

## Syntax

```js-nolint
namedItem(str)
```

### Parameters

- `str` is a string.

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
let selectElt = document.getElementById("myFormControl");
elem1 = selectElt.namedItem("o1"); // Returns the HTMLOptionElement representing #o1
```

But, you cannot write:

```js
let selectElt = document.getElementById("myFormControl");
elem1 = selectElt.o1; // Returns undefined
elem1 = selectElt["o1"]; // Returns undefined
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLSelectElement")}} that implements it.

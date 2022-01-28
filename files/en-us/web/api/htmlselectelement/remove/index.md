---
title: HTMLSelectElement.remove()
slug: Web/API/HTMLSelectElement/remove
tags:
  - API
  - HTML DOM
  - HTMLSelectElement
  - Method
  - Reference
browser-compat: api.HTMLSelectElement.remove
---
{{ APIRef("HTML DOM") }}

The **`HTMLSelectElement.remove()`** method removes the element
at the specified index from the options collection for this select element.

## Syntax

```js
collection.remove(index);
```

### Parameters

- `index` is a zero-based long for the index of the {{ domxref("HTMLOptionElement") }}
  to remove from the collection. If the index is not found the method has no effect.

## Example

```html
<select id="existingList" name="existingList">
    <option value="1">Option: Value 1</option>
    <option value="2">Option: Value 2</option>
    <option value="3">Option: Value 3</option>
</select>
```

```js
let sel = document.getElementById("existingList");
sel.remove(1);
```

HTML is now:

```html
<select id="existingList" name="existingList">
    <option value="1">Option: Value 1</option>
    <option value="3">Option: Value 3</option>
</select>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ domxref("Element.remove") }}, the method that gets called when remove is called
  without arguments on a {{ domxref("HTMLSelectElement") }}.
- {{domxref("HTMLSelectElement") }} that implements it.

---
title: HTMLFormControlsCollection.namedItem()
slug: Web/API/HTMLFormControlsCollection/namedItem
tags:
  - API
  - HTML DOM
  - HTMLFormControlsCollection
  - Method
  - Reference
browser-compat: api.HTMLFormControlsCollection.namedItem
---
{{APIRef("HTML DOM")}}

The **`HTMLFormControlsCollection.namedItem()`** method returns
the {{domxref("RadioNodeList")}} or the {{domxref("Element")}} in the collection whose
`name` or `id` match the specified name, or `null` if
no node matches.

Note that this version of `namedItem()` hides the one inherited from
{{domxref("HTMLCollection")}}. Like that one, in JavaScript, using the array bracket
syntax with a {{jsxref("String")}}, like `collection["value"]` is
equivalent to `collection.namedItem("value")`.

## Syntax

```js
var item = collection.namedItem(str);
var item = collection[str];
```

### Parameters

- `str` is a {{domxref("DOMString")}}

### Return value

- `item` is a {{domxref("RadioNodeList")}} , {{domxref("Element")}}, or
  {{jsxref("null")}}.

## Example

### HTML

```html
<form>
  <input id="my-form-control" type="textarea">
</form>
```

### JavaScript

```js
// Returns the HTMLInputElement representing #my-form-control
elem1 = document.forms[0]['my-form-control'];
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLCollection.namedItem")}} that it replaces

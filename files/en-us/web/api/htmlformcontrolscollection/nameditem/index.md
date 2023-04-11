---
title: "HTMLFormControlsCollection: namedItem() method"
short-title: namedItem()
slug: Web/API/HTMLFormControlsCollection/namedItem
page-type: web-api-instance-method
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

```js-nolint
namedItem(str)
// or collection[str]
```

### Parameters

- `str` is a string

### Return value

- `item` is a {{domxref("RadioNodeList")}}, {{domxref("Element")}}, or
  [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null).

## Examples

### HTML

```html
<form>
  <input id="my-form-control" type="textarea" />
</form>
```

### JavaScript

```js
// Returns the HTMLInputElement representing #my-form-control
elem1 = document.forms[0]["my-form-control"];
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLCollection.namedItem")}} that it replaces

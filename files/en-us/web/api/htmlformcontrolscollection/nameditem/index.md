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
namedItem(name)
[name]
```

### Parameters

- `name`
  - : A string which will be used to match against the `name` or `id` attributes of the controls in this `HTMLFormControlsCollection` object.

### Return value

- A {{domxref("RadioNodeList")}}, {{domxref("Element")}}, or [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null).

## Examples

### Using namedItem()

#### HTML

```html
<form>
  <label for="notes">Notes:</label>
  <input id="notes" name="my-form-control" type="text" />

  <label for="start">Start date:</label>
  <input id="start" name="my-form-control" type="date" />
</form>

<div id="output"></div>
```

```css hidden
div {
  margin: 1rem 0;
}
```

#### JavaScript

```js
const form = document.querySelector("form");
const items = form.elements.namedItem("my-form-control");

const output = document.querySelector("#output");
const itemIDs = Array.from(items)
  .map((item) => `"${item.id}"`)
  .join(", ");
output.textContent = `My items: ${itemIDs}`;
```

#### Result

{{EmbedLiveSample("Using namedItem()")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLCollection.namedItem")}} that it replaces

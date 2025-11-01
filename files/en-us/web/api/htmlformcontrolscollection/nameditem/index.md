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

- A {{domxref("RadioNodeList")}} if there are multiple elements with the given `name` or `id`
- An {{domxref("Element")}} if there is exactly one element with the given `name` or `id`
- [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) if no element has the given `name` or `id`

> [!NOTE]
> The returned {{domxref("RadioNodeList")}} is live, meaning that its contents automatically update if elements that match the given name are added to or removed from collection. Furthermore, it may contain non-radio input elements, despite the name of the collection.

## Examples

### Using namedItem()

#### HTML

```html
<form>
  <label for="yes">Yes</label>
  <input id="yes" name="my-radio" type="radio" />
  <label for="no">No</label>
  <input id="no" name="my-radio" type="radio" />
  <label for="maybe">Maybe</label>
  <input id="maybe" name="my-radio" type="radio" />
  <br />
  <label for="text1">Text input 1</label>
  <input id="text1" name="my-form-control" type="text" />
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
const items = form.elements.namedItem("my-radio");

const output = document.querySelector("#output");
const itemIDs = Array.from(items)
  .map((item) => `"${item.id}"`)
  .join(", ");

const item2 = form.elements.namedItem("my-form-control");
output.textContent = `My items: ${itemIDs}
My single item: "${item2.id}"`;
```

#### Result

{{EmbedLiveSample("Using namedItem()")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLCollection.namedItem")}} that it replaces

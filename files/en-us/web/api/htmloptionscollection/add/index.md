---
title: "HTMLOptionsCollection: add() method"
short-title: add()
slug: Web/API/HTMLOptionsCollection/add
page-type: web-api-instance-method
browser-compat: api.HTMLOptionsCollection.add
---

{{APIRef("HTML DOM")}}

The **`add()`** method of the {{DOMxRef("HTMLOptionsCollection")}} interface adds an {{domxref("HTMLOptionElement")}} or {{domxref("HTMLOptGroupElement")}} to this `HTMLOptionsCollection`.

## Syntax

```js-nolint
add(item)
add(item, before)
```

### Parameters

- `item`
  - : An {{domxref("HTMLOptionElement")}} or {{domxref("HTMLOptGroupElement")}}.
- `before` {{optional_inline}}
  - : An element of the collection, or a numeric 0-based index representing the element that the `item` should be inserted before. If omitted, `null`, or the index does not exist, the new element is appended to the end of the collection.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : Thrown if the `item` passed to the method is an ancestor of the element into which it is to be inserted.

## Description

By default, the `add()` appends the {{HTMLelement("option")}} or {{HTMLelement("optgroup")}} passed as the parameter to the end of the collection. You can define where the added `<option>` or `<optgroup>` should be placed by specifying the `before` parameter. The `before` is the `<option>` element or a numeric `0`-based index of the `<option>` element the added element should precede.

If the `before` parameter is null or out of range (or omitted), the `<option>` or `<optgroup>` will be appended as the last element in the collection, outside of any {{HTMLelement("optgroup")}}. If the `<option>` referenced by the `before` parameter is in an {{HTMLelement("optgroup")}}, an added `HTMLOptionElement` will be in the same group.

The `<optgroup>` element can only contain `<option>` elements as child nodes. The `add()` method will successfully add an `HTMLOptGroupElement` to the end of the `HTMLOptionsCollection` or between `<optgroup>` elements only. In other words, attempting to add an `HTMLOptGroupElement` before an `<option>` within an `<optgroup>` may silently fail if the `<option>` referenced by the `before` parameter is not the first `<option>` within its `<optgroup>`.

## Examples

```js
const optionList = document.querySelector("select").options;
const firstOption = document.createElement("option");
firstOption.text = "new item";
optionList.add(firstOption, 0); // added as the first item
optionList.add(optionList[0]); // moves the first item to the end
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("select")}}
- {{DOMxRef("HTMLOptionsCollection.remove")}}
- {{DOMxRef("HTMLOptionsCollection.length")}}
- {{DOMxRef("HTMLOptionsCollection.selectedIndex")}}

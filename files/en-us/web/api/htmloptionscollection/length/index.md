---
title: "HTMLOptionsCollection: length property"
short-title: length
slug: Web/API/HTMLOptionsCollection/length
page-type: web-api-instance-property
browser-compat: api.HTMLOptionsCollection.length
---

{{APIRef("DOM")}}

The **`length`** property of the {{DOMxRef("HTMLOptionsCollection")}} interface returns the number of {{htmlelement("option")}} elements in the collection. The property can get or set the size of the collection.

When setting `length` to a value smaller than the current, the options collection gets truncated; otherwise, new blank `<option>` elements are appended to the end of the `<select>`.

## Value

An integer value representing the number of items in this `HTMLOptionsCollection`.

## Example

```js
const optCollection = document.getElementById("fruits").options;
const origLength = optCollection.length;
optCollection.length += 50; // adds 50 blank options to the collection
optCollection.length = origLength; // truncates the list back to the original size
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("HTMLOptionsCollection.add()")}}
- {{DOMxRef("HTMLOptionsCollection.remove()")}}
- {{DOMxRef("HTMLOptionsCollection.selectedIndex")}}
- {{domxref("HTMLSelectElement") }}
- {{domxref("HTMLOptGroupElement")}}
- {{domxref("HTMLCollection.length")}}

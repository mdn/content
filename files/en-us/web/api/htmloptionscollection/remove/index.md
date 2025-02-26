---
title: "HTMLOptionsCollection: remove() method"
short-title: remove()
slug: Web/API/HTMLOptionsCollection/remove
page-type: web-api-instance-method
browser-compat: api.HTMLOptionsCollection.remove
---

{{ APIRef("HTML DOM") }}

The **`remove()`** method of the {{DOMxRef("HTMLOptionsCollection")}} interface removes the {{HTMLelement("option")}} element specified by the index from this collection.

## Syntax

```js-nolint
remove(index)
```

### Parameters

- `index`
  - : A zero-based integer for the index of the {{ domxref("HTMLOptionElement") }} in the {{DOMxRef("HTMLOptionsCollection")}}. If the index is not found the method has no effect.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
const optionList = document.querySelector("select").options;
const listLength = optionList.length;
optionList.remove(listLength - 1); // removes the last item
optionList.remove(0); // removes the first item
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("HTMLOptionsCollection.add()")}}
- {{DOMxRef("HTMLOptionsCollection.length")}}
- {{DOMxRef("HTMLOptionsCollection.selectedIndex")}}
- {{domxref("HTMLOptionsCollection")}}
- {{domxref("Element.remove")}}

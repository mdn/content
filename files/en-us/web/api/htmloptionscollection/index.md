---
title: HTMLOptionsCollection
slug: Web/API/HTMLOptionsCollection
page-type: web-api-interface
browser-compat: api.HTMLOptionsCollection
---

{{ APIRef("HTML DOM") }}

The **`HTMLOptionsCollection`** interface represents a collection of [`<option>`](/en-US/docs/Web/HTML/Element/option) HTML elements (in document order) and offers methods and properties for selecting from the list as well as optionally altering its items. This object is returned only by the `options` property of [select](/en-US/docs/Web/API/HTMLSelectElement).

{{InheritanceDiagram}}

## Instance properties

- {{domxref("HTMLOptionsCollection.length")}}
  - : Returns or sets the number of options in the collection.
- {{domxref("HTMLOptionsCollection.selectedIndex")}}
  - : The index number of the first selected {{HTMLElement("option")}} element. The value `-1` indicates no element is selected.

## Instance methods

_This interface inherits the methods of its parent, [`HTMLCollection`](/en-US/docs/Web/API/HTMLCollection)._

- {{domxref("HTMLOptionsCollection.add()")}}
  - : Appends an {{domxref("HTMLOptionElement")}} or {{domxref("HTMLOptGroupElement")}} element to the collection of `option` elements or adds it before a specified option.
- {{domxref("HTMLOptionsCollection.remove()")}}
  - : Removes the element at the specified index from the options collection.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("HTMLOptionElement")}}
- {{DOMxRef("HTMLCollection")}}
- {{DOMxRef("HTMLOptGroupElement")}}
- {{DOMxRef("HTMLSelectElement")}}
- [Indexed collections guide](/en-US/docs/Web/JavaScript/Guide/Indexed_collections)

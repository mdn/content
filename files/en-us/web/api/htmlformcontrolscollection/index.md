---
title: HTMLFormControlsCollection
slug: Web/API/HTMLFormControlsCollection
page-type: web-api-interface
browser-compat: api.HTMLFormControlsCollection
---

{{APIRef("HTML DOM")}}

The **`HTMLFormControlsCollection`** interface represents a _collection_ of HTML _form control elements_, returned by the {{domxref("HTMLFormElement")}} interface's {{domxref("HTMLFormElement.elements", "elements")}} property.

This interface replaces one method from {{domxref("HTMLCollection")}}, on which it is based.

{{InheritanceDiagram}}

## Instance properties

_This interface inherits the properties of its parent, {{domxref("HTMLCollection")}}._

## Instance methods

_This interface inherits the methods of its parent, {{domxref("HTMLCollection")}}._

- {{domxref("HTMLFormControlsCollection.namedItem()")}}
  - : Returns the {{domxref("RadioNodeList")}} or the {{domxref("Element")}} in the collection whose `name` or `id` matches the specified name, or `null` if no nodes match. Note that this version of `namedItem()` hides the one inherited from {{domxref("HTMLCollection")}}. Like that method, using the JavaScript array bracket syntax with a {{jsxref("String")}}, as in `collection["value"]`, is equivalent to `collection.namedItem("value")`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLCollection")}}, {{domxref("RadioNodeList")}}, {{domxref("HTMLOptionsCollection")}}

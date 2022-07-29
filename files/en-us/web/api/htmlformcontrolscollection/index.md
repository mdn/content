---
title: HTMLFormControlsCollection
slug: Web/API/HTMLFormControlsCollection
page-type: web-api-interface
tags:
  - API
  - Collection
  - Form Collection
  - Form List
  - Forms
  - HTML DOM
  - HTML forms
  - HTMLFormControlsCollection
  - Interface
  - NeedsHTML5Update
  - Reference
browser-compat: api.HTMLFormControlsCollection
---
{{APIRef("HTML DOM")}}

The **`HTMLFormControlsCollection`** interface represents a _collection_ of HTML _form control elements_, returned by the {{domxref("HTMLFormElement")}} interface's {{domxref("HTMLFormElement.elements", "elements")}} property.

This interface replaces one method from {{domxref("HTMLCollection")}}, on which it is based.

{{InheritanceDiagram}}

## Properties

_This interface inherits the properties of its parent, {{domxref("HTMLCollection")}}._

## Methods

_This interface inherits the methods of its parent, {{domxref("HTMLCollection")}}._

- {{domxref("HTMLFormControlsCollection.namedItem()")}}
  - : Returns the {{domxref("RadioNodeList")}} or the {{domxref("Element")}} in the collection whose `name` or `id` matches the specified name, or `null` if no nodes match. Note that this version of `namedItem()` hide the one inherited from {{domxref("HTMLCollection")}}. Like that one, in JavaScript, using the array bracket syntax with a {{jsxref("String")}}, like `collection["value"]` is equivalent to `collection.namedItem("value")`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLCollection")}}, {{domxref("RadioNodeList")}}, {{domxref("HTMLOptionsCollection")}}

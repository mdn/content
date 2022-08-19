---
title: HTMLOptionsCollection
slug: Web/API/HTMLOptionsCollection
page-type: web-api-interface
tags:
  - API
  - HTML DOM
  - Interface
  - NeedsExample
  - NeedsMarkupWork
  - NeedsSpecTable
  - Reference
browser-compat: api.HTMLOptionsCollection
---
{{ APIRef("HTML DOM") }}

The **`HTMLOptionsCollection`** interface represents a collection of [`<option>`](/en-US/docs/Web/HTML/Element/option) HTML elements (in document order) and offers methods and properties for selecting from the list as well as optionally altering its items. This object is returned only by the `options` property of [select](/en-US/docs/Web/API/HTMLSelectElement).

{{InheritanceDiagram}}

## Properties

- `length`
  - : `unsigned long`. As optionally allowed by the spec, this property isn't read-only. You can either remove options from the end by lowering the value, or add blank options at the end by raising the value. Mozilla allows this, while other implementations could potentially throw a [DOMException](/en-US/docs/Web/API/DOMException).

## Methods

_This interface inherits the methods of its parent, [`HTMLCollection`](/en-US/docs/Web/API/HTMLCollection)._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTMLCollection](/en-US/docs/Web/API/HTMLCollection)

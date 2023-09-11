---
title: "Element: id property"
short-title: id
slug: Web/API/Element/id
page-type: web-api-instance-property
browser-compat: api.Element.id
---

{{ ApiRef("DOM") }}

The **`id`** property of the {{domxref("Element")}} interface
represents the element's identifier, reflecting the
[**`id`**](/en-US/docs/Web/HTML/Global_attributes/id)
global attribute.

If the `id` value is not the empty string, it must be unique in a document.

The `id` is often used with {{domxref("Document.getElementById()",
  "getElementById()")}} to retrieve a particular element. Another common case is to use an
element's [ID as a selector](/en-US/docs/Web/CSS/ID_selectors) when styling
the document with [CSS](/en-US/docs/Web/CSS).

> **Note:** Identifiers are case-sensitive, but you should avoid creating
> IDs that differ only in the capitalization.

## Value

A string.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The DOM [**id**](/en-US/docs/Web/HTML/Global_attributes/id)
  global attribute.

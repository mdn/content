---
title: "HTMLLIElement: value property"
short-title: value
slug: Web/API/HTMLLIElement/value
page-type: web-api-instance-property
browser-compat: api.HTMLLIElement.value
---

{{APIRef("HTML DOM")}}

The **`value`** property of the {{domxref("HTMLLIElement")}} interface indicates the ordinal position of the _list element_ inside a given {{HTMLElement("ol")}}. It can be smaller than `0`. If the {{HTMLElement("li")}} element is not a child of an {{HTMLElement("ol")}} element, the property has no meaning.

It reflects the [`value`](/en-US/docs/Web/HTML/Element/li#value) attribute of the corresponding {{htmlelement("li")}} element. If the `<li>` element does not have a `value` content attribute specified, then this property returns `0` by default even when the element may have a default serially-assigned ordinal value when rendered.

## Value

An integer.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

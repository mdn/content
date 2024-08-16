---
title: "HTMLElement: autofocus property"
short-title: autofocus
slug: Web/API/HTMLElement/autofocus
page-type: web-api-instance-property
browser-compat: api.HTMLElement.autofocus
---

{{APIRef("HTML DOM")}}

The **`autofocus`** property of the {{domxref("HTMLElement")}} interface represents a boolean value reflecting the [`autofocus`](/en-US/docs/Web/HTML/Element/select#autofocus) HTML global attribute, which indicates whether the control should be focused when the page loads, or when dialog or popover become shown if specified in an element inside {{htmlelement("dialog")}} elements or elements whose popover attribute is set.

Only one form-associated element inside a document, or a {{htmlelement("dialog")}} element, or an element whose `popover` attribute is set, can have this attribute specified. If there are several, the first element with the attribute set inserted, usually the first such element on the page, gets the initial focus.

> [!NOTE]
> Setting this property doesn't set the focus to the associated element: it merely tells the browser to focus to it when _the element is inserted_ in the document. Setting it after the insertion, that is most of the time after the document load, has no visible effect.

## Value

A boolean value.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

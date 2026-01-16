---
title: "HTMLElement: autofocus property"
short-title: autofocus
slug: Web/API/HTMLElement/autofocus
page-type: web-api-instance-property
browser-compat: api.HTMLElement.autofocus
---

{{APIRef("HTML DOM")}}

The **`autofocus`** property of the {{domxref("HTMLElement")}} interface represents a boolean value reflecting the [`autofocus`](/en-US/docs/Web/HTML/Reference/Elements/select#autofocus) HTML global attribute, which indicates whether the element should be focused on page load, or when it is part of a {{htmlelement("dialog")}} or [`popover`](/en-US/docs/Web/HTML/Reference/Global_attributes/popover) element that becomes shown.

Only one element inside a document, or part of a {{htmlelement("dialog")}} or [`popover`](/en-US/docs/Web/HTML/Reference/Global_attributes/popover) element, may have this attribute specified. If applied to multiple elements the first focusable one will receive focus.

> [!NOTE]
> Setting this property doesn't set the focus to the associated element: it merely tells the browser to focus to it when _the element is inserted_ in the document. Setting it after the insertion, that is most of the time after the document load, has no visible effect.

## Value

A boolean value.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

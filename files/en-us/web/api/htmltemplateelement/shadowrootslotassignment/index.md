---
title: "HTMLTemplateElement: shadowRootSlotAssignment property"
short-title: shadowRootSlotAssignment
slug: Web/API/HTMLTemplateElement/shadowRootSlotAssignment
page-type: web-api-instance-property
browser-compat: api.HTMLTemplateElement.shadowRootSlotAssignment
---

{{APIRef("Web Components")}}

The **`shadowRootSlotAssignment`** property of the {{domxref("HTMLTemplateElement")}} interface reflects the value of the [`shadowrootslotassignment`](/en-US/docs/Web/HTML/Reference/Elements/template#shadowrootslotassignment) attribute of the associated [`<template>`](/en-US/docs/Web/HTML/Reference/Elements/template) element.

Note that this property is not useful for developers.
If a `<template>` element is used to declaratively create a [`ShadowRoot`](/en-US/docs/Web/API/ShadowRoot), then this object and property do not exist.
Otherwise, if an `HTMLTemplateElement` is created, the value of this property is irrelevant because the object is not a shadow root and cannot subsequently be changed to a shadow root. It can be used to detect support for the attribute, used declaratively.

## Value

A string that reflects the value of the [`shadowrootslotassignment`](/en-US/docs/Web/HTML/Reference/Elements/template#shadowrootslotassignment) attribute of the associated [`<template>`](/en-US/docs/Web/HTML/Reference/Elements/template) element. Possible values are `"named"` and `"manual"`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`shadowrootslotassignment`](/en-US/docs/Web/HTML/Reference/Elements/template#shadowrootslotassignment) attribute of the `<template>` element
- [`ShadowRoot.slotAssignment`](/en-US/docs/Web/API/ShadowRoot/slotAssignment)

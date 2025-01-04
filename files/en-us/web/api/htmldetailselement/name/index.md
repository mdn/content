---
title: "HTMLDetailsElement: name property"
short-title: name
slug: Web/API/HTMLDetailsElement/name
page-type: web-api-instance-property
browser-compat: api.HTMLDetailsElement.name
---

{{ APIRef("HTML DOM") }}

The **`name`** property of the {{domxref("HTMLDetailsElement")}} interface reflects the [`name`](/en-US/docs/Web/HTML/Element/details#name) attribute of {{htmlelement("details")}} elements. It enables multiple `<details>` elements to be connected together, where only one for the `<details>` elements can be open at once. This allows developers to easily create UI features such as accordions without scripting.

The name attribute specifies a group name — give multiple `<details>` elements the same name value to group them. Only one of the grouped `<details>` elements can be open at a time — opening one will cause another to close. If multiple grouped `<details>` elements are given the `open` attribute, only the first one in the source order will be rendered open.

## Value

A string. The empty string if the element is not part of any group.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{htmlelement("details")}} and {{htmlelement("summary")}} elements

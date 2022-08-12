---
title: HTMLElement.contentEditable
slug: Web/API/HTMLElement/contentEditable
page-type: web-api-instance-property
tags:
  - API
  - HTML DOM
  - HTMLElement
  - Property
  - Reference
browser-compat: api.HTMLElement.contentEditable
---
{{APIRef("HTML DOM")}}

The **`contentEditable`** property of
the {{domxref("HTMLElement")}} interface specifies whether or not the element is
editable.

This enumerated attribute can have the following values:

- '`true`' indicates that the element is `contenteditable`.
- '`false`' indicates that the element cannot be edited.
- '`inherit`' indicates that the element inherits its parent's editable
  status.

You can use the {{domxref("HTMLElement.isContentEditable")}} property to test the
computed boolean value of this property.

## Value

A string.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

In Internet Explorer, `contenteditable` cannot be applied to the
{{htmlelement("table")}}, {{htmlelement("col")}}, {{htmlelement("colgroup")}},
{{htmlelement("tbody")}}, {{htmlelement("td")}}, {{htmlelement("tfoot")}},
{{htmlelement("th")}}, {{htmlelement("thead")}}, and {{htmlelement("tr")}} elements
directly. A content editable {{htmlelement("span")}} or {{htmlelement("div")}} element
can be placed inside the individual table cells.

## See also

- [Making content editable](/en-US/docs/Web/Guide/HTML/Editable_content)
- {{domxref("HTMLElement.isContentEditable")}}
- The {{htmlattrxref("contenteditable")}} global attribute.

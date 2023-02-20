---
title: HTMLElement.contentEditable
slug: Web/API/HTMLElement/contentEditable
page-type: web-api-instance-property
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

## See also

- [Making content editable](/en-US/docs/Web/Guide/HTML/Editable_content)
- {{domxref("HTMLElement.isContentEditable")}}
- The {{htmlattrxref("contenteditable")}} global attribute.

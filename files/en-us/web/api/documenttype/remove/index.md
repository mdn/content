---
title: DocumentType.remove()
slug: Web/API/DocumentType/remove
page-type: web-api-instance-method
tags:
  - API
  - DocumentType
  - DOM
  - Method
browser-compat: api.DocumentType.remove
---
{{APIRef("DOM")}}

The **`DocumentType.remove()`** method removes a document's `doctype`.

> **Note:** Removing the document's doctype will set the rendering mode to
> [quirks mode](/en-US/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)!
> Please don't do this. Willfully designing for quirks mode is not going to help you.
> If you need to work around issues with old Internet Explorer browsers, you might want to look into using
> [conditional comments](/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#ie_conditional_comments), or other workarounds.

## Syntax

```js
remove()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Using `remove()`

```js
document.doctype; // "<!DOCTYPE html>'
document.doctype.remove();
document.doctype; // null
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document.doctype")}}

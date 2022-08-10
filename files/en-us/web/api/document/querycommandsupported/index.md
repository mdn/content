---
title: Document.queryCommandSupported()
slug: Web/API/Document/queryCommandSupported
page-type: web-api-instance-method
tags:
  - API
  - DOM
  - Document
  - Method
  - Reference
  - editor
  - Deprecated
  - Non-standard
browser-compat: api.Document.queryCommandSupported
---
{{ApiRef("DOM")}}{{deprecated_header}}{{Non-standard_header}}

The **`Document.queryCommandSupported()`** method reports
whether or not the specified editor command is supported by the browser.

## Syntax

```js
queryCommandSupported(command)
```

### Parameters

- `command`
  - : The command for which to determine support.

### Return value

Returns a boolean value which is `true` if the command is supported
and `false` if the command isn't.

## Notes

The `'paste'` command return `false` not only if the feature is
unavailable, but also if the script calling it has insufficient privileges to perform
the action.

## Examples

```js
const flg = document.queryCommandSupported("SelectAll");

if (flg) {
  // Do something…
}
```

## Specifications

This feature is not part of any current specification. It is no longer on track to become a standard.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document.execCommand()")}}
- {{domxref("Document.queryCommandEnabled()")}}

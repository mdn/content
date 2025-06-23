---
title: "Document: queryCommandEnabled() method"
short-title: queryCommandEnabled()
slug: Web/API/Document/queryCommandEnabled
page-type: web-api-instance-method
status:
  - deprecated
  - non-standard
browser-compat: api.Document.queryCommandEnabled
---

{{ApiRef("DOM")}}{{deprecated_header}}{{Non-standard_header}}

The **`Document.queryCommandEnabled()`** method reports whether
or not the specified editor command is enabled by the browser.

## Syntax

```js-nolint
queryCommandEnabled(command)
```

### Parameters

- `command`
  - : The command for which to determine support.

### Return value

Returns a boolean value which is `true` if the command is enabled
and `false` if the command isn't.

## Notes

- For `"cut"` and `"copy"` commands the method only returns true
  when called from a user-initiated thread.
- The `"paste"` command return `false` not only if the feature
  is unavailable, but also if the script calling it has insufficient privileges to
  perform the action.

## Example

```js
const flg = document.queryCommandEnabled("SelectAll");

if (flg) {
  document.execCommand("SelectAll", false, null); // command is enabled, run it
}
```

## Specifications

This feature is not part of any current specification. It is no longer on track to become a standard.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document.execCommand()")}}
- {{domxref("Document.queryCommandSupported()")}}

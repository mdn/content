---
title: "Window: name property"
short-title: name
slug: Web/API/Window/name
page-type: web-api-instance-property
browser-compat: api.Window.name
---

{{APIRef}}

The `Window.name` property
gets/sets the name of the window's browsing context.

## Value

A string.

## Description

The name of the window is used primarily for setting targets for hyperlinks and forms.
Browsing contexts do not need to have names.

Modern browsers will reset `Window.name` to an empty string if a tab loads a
page from a different domain, and restore the name if the original page is reloaded
(e.g. by selecting the "back" button). This prevents an untrusted page from accessing
any information that the previous page might have stored in the property (potentially
the new page might also modify such data, which might then be read by the original page
if it was reloaded).

`Window.name` has also been used in some frameworks for providing
cross-domain messaging
as a more secure alternative to JSONP. Modern web applications hosting sensitive data
should, however, not rely on `window.name` for cross-domain messaging — that
is not its intended purpose and there are safer/better ways of sharing information
between windows.
[`Window.postMessage()`](/en-US/docs/Web/API/Window/postMessage)
is the recommended mechanism.

> **Note:** `window.name` converts all stored values to their
> string representations using the `toString` method.

## Examples

```html
<script>
  // Open a tab with a specific browsing context name
  const otherTab = window.open("url1", "_blank");
  if (otherTab) otherTab.name = "other-tab";
</script>
<a href="url2" target="other-tab">This link will be opened in the other tab.</a>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

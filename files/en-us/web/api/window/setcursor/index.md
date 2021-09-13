---
title: Window.setCursor()
slug: Web/API/Window/setCursor
tags:
  - API
  - DOM_0
  - Method
  - Non-standard
  - Reference
  - Window
browser-compat: api.Window.setCursor
---
{{ ApiRef() }} {{Non-standard_header}}

The **`Window.setCursor()`** method sets the cursor for the current window.

## Example

```js
function setBusyCursor(enable) {
  window.setCursor(enable ? "wait" : "auto");
}
```

## Notes

The cursor isn't reset until it's set back to `auto`.

This function is a part of [ChromeWindow interface](/en-US/docs/XPCOM_Interface_Reference/nsIDOMChromeWindow). This function is unavailable to web pages, which can use the CSS {{cssxref("cursor")}} property instead.

## Specifications

This is not part of any specification.

## Browser compatibility

{{Compat}}

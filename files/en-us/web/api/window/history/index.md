---
title: Window.history
slug: Web/API/Window/history
page-type: web-api-instance-property
tags:
  - API
  - HTML DOM
  - History API
  - Property
  - Reference
  - Window
browser-compat: api.Window.history
---
{{APIRef}}

The `Window.history` read-only property returns a reference to the {{domxref("History")}} object, which provides an interface for manipulating the browser _session history_ (pages visited in the tab or frame that the current page is loaded in).

See [Manipulating the browser history](/en-US/docs/Web/API/History_API) for examples and details. In particular, that article explains security features of the {{domxref("History.pushState", "pushState()")}} and {{domxref("History.replaceState", "replaceState()")}} methods that you should be aware of before using them.

## Value

A reference to the {{domxref("History")}} object.

## Examples

```js
history.back();     // equivalent to clicking back button
history.go(-1);     // equivalent to history.back();
```

## Notes

For top-level pages you can see the list of pages in the session history, accessible via the `History` object, in the browser's dropdowns next to the back and forward buttons.

For security reasons the `History` object doesn't allow the non-privileged code to access the {{glossary("URL", "URLs")}} of other pages in the session history, but it does allow it to navigate the session history.

There is no way to clear the session history or to disable the back/forward navigation from unprivileged code. The closest available solution is the {{domxref("Location.replace", "location.replace()")}} method, which replaces the current item of the session history with the provided URL.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

---
title: Window.defaultStatus
slug: Web/API/Window/defaultStatus
page-type: web-api-instance-property
tags:
  - API
  - HTML DOM
  - NeedsCompatTable
  - NeedsExample
  - NeedsMarkupWork
  - NeedsSpecTable
  - Deprecated
  - Property
  - Reference
  - Window
---
{{APIRef()}}{{deprecated_header}}

> **Note:** This method was removed from Firefox 23 and onward.

## Summary

Gets/sets the status bar text for the given window.

## Value

A string containing the text to be displayed by default in the statusbar.

## Examples

```html
<html lang="en">
  <body onload="window.defaultStatus='hello!';"/>
  <button onclick="window.confirm('Are you sure you want to quit?');">confirm</button>
  </body>
</html>
```

## Notes

To set the status once the window has been opened, use {{domxref("window.status")}}.

## Specifications

HTML5

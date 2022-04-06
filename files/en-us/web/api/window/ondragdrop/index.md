---
title: Window.ondragdrop
slug: Web/API/Window/ondragdrop
tags:
  - API
  - HTML DOM
  - Deprecated
  - Property
  - Window
  - ondragdrop
---
{{ APIRef() }}{{deprecated_header}}{{non-standard_header}}

> **Warning:** Removed in Firefox 50, and never implemented in any other browser. Use the modern standard [HTML5 drag and drop](/en-US/docs/Web/API/HTML_Drag_and_Drop_API) feature instead.

## Summary

An event handler for drag and drop events sent to the window.

## Value

The event handler function to be registered.

The `window.ondragdrop` property and the `ondragdrop` attribute are not implemented in [Gecko](/en-US/Gecko) ({{ Bug(112288) }}), you have to use `addEventListener`. See [addEventListener](/en-US/docs/DOM/element.addEventListener) for details.

## Examples

### Fire an alert on dragdrop

In this example, an event listener is added to the window (the event target). If, from an external source, a tab, a link, marked text or a file is dragged and dropped onto this window, the alert is fired. Note how `event.stopPropagation();` prevents the browser from loading the dropped tab, link or file.

```html
<html>
<head><title>dragdroptest</title>

<script type="text/javascript">

window.addEventListener("dragdrop", testfunc, false);

function testfunc(event) {
    alert("dragdrop!");
    event.stopPropagation();
}
</script>

</head>
<body>
I am bodytext
</body>
</html>
```

## Specification

Not part of specification.

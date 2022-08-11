---
title: Window.scrollbars
slug: Web/API/Window/scrollbars
page-type: web-api-instance-property
tags:
  - API
  - HTML DOM
  - NeedsExample
  - Property
  - Reference
  - Window
browser-compat: api.Window.scrollbars
---
{{APIRef()}}

The **`Window.scrollbars`** property returns the
`scrollbars` object, whose visibility can be checked.

## Value

A `scrollbars` object.

## Examples

The following complete HTML example shows how the `visible` property of the
scrollbars object is used.

```html
<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="UTF-8">
  <title>Various DOM Tests</title>
  <script>
    let visibleScrollbars = window.scrollbars.visible;
  </script>
</head>
<body>
  <p>Various DOM Tests</p>
</body>
</html>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("window.locationbar")}}
- {{domxref("window.menubar")}}
- {{domxref("window.personalbar")}}
- {{domxref("window.statusbar")}}
- {{domxref("window.toolbar")}}

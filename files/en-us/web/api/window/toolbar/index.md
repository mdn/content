---
title: Window.toolbar
slug: Web/API/Window/toolbar
page-type: web-api-instance-property
tags:
  - API
  - HTML DOM
  - NeedsExample
  - NeedsMarkupWork
  - Property
  - Reference
  - Window
browser-compat: api.Window.toolbar
---
{{APIRef}}

The **`Window.toolbar`** property returns the toolbar object,
which can be used to check the browser toolbar visibility.

## Value

A `toolbar` object.

## Examples

The following complete HTML example demonstrates how the `visible` property
of the `toolbar` object is used.

```html
<html lang="en">
  <head>
    <title>Various DOM Tests</title>
    <script>
      const visible = window.toolbar.visible;
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

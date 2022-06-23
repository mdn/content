---
title: Window.statusbar
slug: Web/API/Window/statusbar
page-type: web-api-instance-property
tags:
  - API
  - HTML DOM
  - NeedsExample
  - NeedsMarkupWork
  - Property
  - Reference
  - Window
browser-compat: api.Window.statusbar
---
{{APIRef}}

The **`Window.statusbar`** property returns the statusbar
object, whose visibility can be toggled in the window.

## Value

A `statusbar` object.

## Examples

The following complete HTML example shows a way that the visible property of the
various "bar" objects is used, and also the change to the privileges necessary to write
to the visible property of any of the bars on an existing window.

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>Various DOM Tests</title>

<script>
// changing bar states on the existing window
netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserWrite");
window.statusbar.visible=!window.statusbar.visible;
</script>

</head>
<body>
  <p>Various DOM Tests</p>
</body>
</html>
```

## Notes

When you load the example page above, the browser displays the following dialog: ![](modify_any_open_window_dialog.png)

To toggle the visibility of these bars, you must either sign your scripts or enable the
appropriate privileges, as in the example above. Also be aware that dynamically updating
the visibility of the various toolbars can change the size of the window rather
dramatically, and may affect the layout of your page.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [window.locationbar](/en-US/docs/Web/API/Window/locationbar), [window.menubar](/en-US/docs/Web/API/Window/menubar), [window.personalbar](/en-US/docs/Web/API/Window/personalbar), [window.scrollbars](/en-US/docs/Web/API/Window/scrollbars), [window.toolbar](/en-US/docs/Web/API/Window/toolbar)

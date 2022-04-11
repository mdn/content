---
title: Window.personalbar
slug: Web/API/Window/personalbar
tags:
  - API
  - HTML DOM
  - NeedsExample
  - NeedsMarkupWork
  - Property
  - Reference
  - Window
browser-compat: api.Window.personalbar
---
{{APIRef}}

Returns the `personalbar` object, whose visibility can be toggled in the
window.

## Value

A `personalbar` object.

## Examples

{{todo('https://bugzilla.mozilla.org/show_bug.cgi?id=790023')}}

{{deprecated_inline}} The following complete HTML example shows the way that the
visible property of the various "bar" objects is used, and also the change to the
privileges necessary to write to the visible property of any of the bars on an existing
window. Due to [deprecation of
enablePrivilege](/en-US/docs/Bypassing_Security_Restrictions_and_Signing_Code) this functionality can not be used in web pages. EnablePrivilege
is disabled in Firefox 15 and will be removed in Firefox 17.

```html
<!DOCTYPE html>
<html>
<head>
<title>Various DOM Tests</title>

<script>
// changing bar states on the existing window
netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserWrite");
window.personalbar.visible = !window.personalbar.visible;
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

- {{domxref("window.locationbar")}}, {{domxref("window.menubar")}},
  {{domxref("window.scrollbars")}}, {{domxref("window.statusbar")}},
  {{domxref("window.toolbar")}}

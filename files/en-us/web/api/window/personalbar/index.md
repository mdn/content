---
title: Window.personalbar
slug: Web/API/Window/personalbar
page-type: web-api-instance-property
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

## Notes

When you load the example page above, the browser displays the following dialog: ![We see a dialog box labeled Internet Security which states: A script from file is requesting enhanced abilities that are unsafe and could be used to compromise your machine or data: Modify any open window. Allow these abilities only if you trust the source to be free of viruses or malicious programs. There is a checkbox below the statement allowing the computer to remember the user’s decision. There are two buttons labeled "allow" and "deny" below the checkbox.](modify_any_open_window_dialog.png)

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

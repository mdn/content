---
title: "Window: menubar property"
short-title: menubar
slug: Web/API/Window/menubar
page-type: web-api-instance-property
browser-compat: api.Window.menubar
---

{{APIRef}}

Returns the `menubar` object.

This is one of a group of `Window` properties that contain a boolean `visible` property, that used to represent whether or not a particular part of a web browser's user interface was visible.

For privacy and interoperability reasons, the value of the `visible` property is now `false` if this `Window` is a popup, and `true` otherwise.

## Value

An object containing a single property:

- `visible` {{ReadOnlyInline}}
  - : A boolean property, `false` if this `Window` is a popup, and `true` otherwise.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("window.locationbar")}}
- {{domxref("window.personalbar")}}
- {{domxref("window.scrollbars")}}
- {{domxref("window.statusbar")}}
- {{domxref("window.toolbar")}}

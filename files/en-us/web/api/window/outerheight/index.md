---
title: Window.outerHeight
slug: Web/API/Window/outerHeight
page-type: web-api-instance-property
tags:
  - API
  - CSSOM View
  - NeedsContent
  - Property
  - Reference
browser-compat: api.Window.outerHeight
---
{{APIRef}}

The **`Window.outerHeight`** read-only property returns the height in pixels of the whole browser window, including any sidebar, window chrome, and window-resizing borders/handles.

## Notes

To change the size of a window, see {{domxref("window.resizeBy()")}} and {{domxref("window.resizeTo()")}}.

To get the inner height of a window, i.e. the height of the page being displayed, see {{domxref("window.innerHeight")}}.

### Graphical example

The following figure shows the difference between `outerHeight` and `innerHeight`.

![innerHeight vs outerHeight illustration](firefoxinnervsouterheight2.png)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("window.innerHeight")}}
- {{domxref("window.innerWidth")}}
- {{domxref("window.outerWidth")}}
- {{domxref("window.resizeBy()")}}
- {{domxref("window.resizeTo()")}}

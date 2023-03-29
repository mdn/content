---
title: BarProp
slug: Web/API/BarProp
page-type: web-api-interface
browser-compat: api.BarProp
---

{{APIRef("DOM")}}

The **`BarProp`** interface of the {{domxref('Document Object Model')}} represents the web browser user interface elements that are exposed to scripts in web pages. Each of the following interface elements are represented by a `BarProp` object.

- {{domxref("Window.locationbar")}}
  - : The browser location bar.
- {{domxref("Window.menubar")}}
  - : The browser menu bar.
- {{domxref("Window.personalbar")}}
  - : The browser personal bar.
- {{domxref("Window.scrollbars")}}
  - : The browser scrollbars.
- {{domxref("Window.statusbar")}}
  - : The browser status bar.
- {{domxref("Window.toolbar")}}
  - : The browser toolbar.

The `BarProp` interface is not accessed directly, but via one of these elements.

## Instance properties

- {{domxref("BarProp.visible")}} {{ReadOnlyInline}}
  - : A {{jsxref("Boolean")}}, which is true if the bar represented by the used interface element is visible.

## Examples

The following example prints a `BarProp` object to the console that represents the location bar.

```js
console.log(window.locationbar);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

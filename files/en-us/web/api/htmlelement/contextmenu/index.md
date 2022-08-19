---
title: HTMLElement.contextMenu
slug: Web/API/HTMLElement/contextMenu
page-type: web-api-instance-property
tags:
  - API
  - Deprecated
  - Element
  - HTML
  - HTML DOM
  - Property
  - Reference
  - UX
  - Non-standard
browser-compat: api.HTMLElement.contextMenu
---
{{APIRef("HTML DOM")}}{{Deprecated_Header}}{{Non-standard_Header}}

The **`HTMLElement.contextMenu`** property refers to the
context menu assigned to an element using the {{htmlattrxref("contextmenu")}}
attribute. The menu itself is created using the {{HTMLElement("menu")}} element.

## Value

A {{HTMLElement("menu")}} element.

## Examples

```js
const contextMenu = document.getElementById("element").contextMenu;

// Change the label of the first menu entry
contextMenu.firstElementChild.label = "New label";
```

## Browser compatibility

{{Compat}}

## See also

- {{htmlattrxref("contextmenu")}}
- {{HTMLElement("menu")}}
- {{HTMLElement("menuitem")}}

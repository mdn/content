---
title: HTMLElement.contextMenu
slug: Web/API/HTMLElement/contextMenu
tags:
  - API
  - Deprecated
  - Element
  - HTML
  - HTML DOM
  - Property
  - Reference
  - UX
browser-compat: api.HTMLElement.contextMenu
---
{{APIRef("HTML DOM")}}{{Deprecated_Header}}

The **`HTMLElement.contextMenu`** property refers to the
context menu assigned to an element using the {{htmlattrxref("contextmenu")}}
attribute. The menu itself is created using the {{HTMLElement("menu")}} element.

## Syntax

```js
var elementContextMenu = element.contextMenu;
```

## Example

```js
var contextMenu = document.getElementById("element").contextMenu;

// Change the label of the first menu entry
contextMenu.firstElementChild.label = "New label";
```

## Browser compatibility

{{Compat}}

## See also

- {{htmlattrxref("contextmenu")}}
- {{HTMLElement("menu")}}
- {{HTMLElement("menuitem")}}

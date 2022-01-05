---
title: HTMLElement.click()
slug: Web/API/HTMLElement/click
tags:
  - API
  - HTML DOM
  - HTMLElement
  - Method
  - Reference
browser-compat: api.HTMLElement.click
---
{{ APIRef("HTML DOM") }}

The **`HTMLElement.click()`** method simulates a mouse click on
an element.

When `click()` is used with supported elements (such as an
{{HTMLElement("input")}}), it fires the element's click event. This event then bubbles
up to elements higher in the document tree (or event chain) and fires their click
events.

## Syntax

```js
element.click()
```

## Example

Simulate a mouse-click when moving the mouse pointer over a checkbox:

### HTML

```html
<form>
  <input type="checkbox" id="myCheck" onmouseover="myFunction()" onclick="alert('click event occurred')">
</form>
```

### JavaScript

```js
// On mouse-over, execute myFunction
function myFunction() {
  document.getElementById("myCheck").click();
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related event handlers

  - {{domxref("GlobalEventHandlers.onclick")}}
  - {{domxref("GlobalEventHandlers.ondblclick")}}
  - {{domxref("GlobalEventHandlers.onauxclick")}}

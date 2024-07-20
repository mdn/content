---
title: "HTMLElement: click() method"
short-title: click()
slug: Web/API/HTMLElement/click
page-type: web-api-instance-method
browser-compat: api.HTMLElement.click
---

{{ APIRef("HTML DOM") }}

The **`HTMLElement.click()`** method simulates a mouse click on an element. When called on an element, the element's {{domxref("Element/click_event", "click")}} event is fired (unless its [`disabled`](/en-US/docs/Web/HTML/Attributes/disabled) attribute is set).

## Syntax

```js-nolint
click()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

Simulate a mouse-click when moving the mouse pointer over a checkbox:

### HTML

```html
<form>
  <input
    type="checkbox"
    id="myCheck"
    onmouseover="myFunction()"
    onclick="alert('click event occurred')" />
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

  - {{domxref("Element.click_event", "Element.onclick")}}
  - {{domxref("Element.dblclick_event", "Element.ondblclick")}}
  - {{domxref("Element.auxclick_event", "Element.onauxclick")}}

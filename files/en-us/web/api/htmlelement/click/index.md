---
title: "HTMLElement: click() method"
short-title: click()
slug: Web/API/HTMLElement/click
page-type: web-api-instance-method
browser-compat: api.HTMLElement.click
---

{{ APIRef("HTML DOM") }}

The **`HTMLElement.click()`** method simulates a mouse click on an element. When called on an element, the element's {{domxref("Element/click_event", "click")}} event is fired (unless its [`disabled`](/en-US/docs/Web/HTML/Reference/Attributes/disabled) attribute is set).

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
  <input type="checkbox" id="myCheck" />
</form>
```

### JavaScript

```js
const checkbox = document.getElementById("myCheck");

// On mouse-over, execute myFunction
checkbox.addEventListener("mouseover", () => {
  // Simulate a mouse click
  checkbox.click();
});

checkbox.addEventListener("click", () => {
  console.log("click event occurred");
});
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

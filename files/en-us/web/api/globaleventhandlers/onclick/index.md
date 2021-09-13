---
title: GlobalEventHandlers.onclick
slug: Web/API/GlobalEventHandlers/onclick
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - HTML DOM
  - Property
  - Reference
browser-compat: api.GlobalEventHandlers.onclick
---
{{ ApiRef("HTML DOM") }}

The **`onclick`** property of the
{{domxref("GlobalEventHandlers")}} mixin is the [event handler](/en-US/docs/Web/Events/Event_handlers) for
processing {{domxref("Element/click_event", "click")}} events on a given element.

The `click` event is raised when the user clicks on an element. It fires
after the {{domxref("Element/mousedown_event", "mousedown")}} and
{{domxref("Element/mouseup_event", "mouseup")}} events, in that order.

> **Note:** When using the `click` event to
> trigger an action, also consider adding this same action to the
> {{domxref("Element/keydown_event", "keydown")}} event, to allow the use of that same
> action by people who don't use a mouse or a touch screen.

## Syntax

```js
target.onclick = functionRef;
```

### Value

`functionRef` is a function name or a [function
expression](/en-US/docs/Web/JavaScript/Reference/Operators/function). The function receives a {{domxref("MouseEvent")}} object as its sole
argument. Within the function, {{jsxref("Operators/this", "this")}} will be the object
that `onclick` was bound to (which will also match
`event.currentTarget`)

Only one `onclick` handler can be assigned to an object at a time. You may
prefer to use the {{domxref("EventTarget.addEventListener()")}} method instead, since
it's more flexible.

## Examples

### Detecting clicks

This example changes the color of an element when it's clicked upon.

#### HTML

```html
<div id="demo">Click here</div>
```

#### JavaScript

```js
document.getElementById('demo').onclick = function changeContent() {

   document.getElementById('demo').textContent = "Help me";
   document.getElementById('demo').style = "Color: red";

}
```

#### Result

{{EmbedLiveSample("Detecting_clicks")}}

### Getting the coordinates of clicks

This example displays the coordinates at which the most recent mouse button click
occurred.

#### HTML

```html
<p>Click anywhere in this example.</p>
<p id="log"></p>
```

#### JavaScript

```js
let log = document.getElementById('log');

document.onclick = inputChange;

function inputChange(e) {
  log.textContent = `Position: (${e.clientX}, ${e.clientY})`;
}
```

#### Result

{{EmbedLiveSample("Getting_the_coordinates_of_clicks")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element/click_event", "click")}} event
- Related event handlers

  - {{domxref("GlobalEventHandlers.onauxclick")}}
  - {{domxref("GlobalEventHandlers.ondblclick")}}

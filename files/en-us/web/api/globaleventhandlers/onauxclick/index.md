---
title: GlobalEventHandlers.onauxclick
slug: Web/API/GlobalEventHandlers/onauxclick
tags:
  - API
  - Event Handler
  - Experimental
  - GlobalEventHandlers
  - Property
  - Reference
  - auxclick
browser-compat: api.GlobalEventHandlers.onauxclick
---
{{ApiRef("HTML DOM")}} {{SeeCompatTable}}

The **`onauxclick`** property of the
{{domxref("GlobalEventHandlers")}} mixin is an [event handler](/en-US/docs/Web/Events/Event_handlers) for
processing {{event("auxclick")}} events.

The `auxclick` event is raised when a non-primary button has been pressed on
an input device (e.g., a middle mouse button). It fires after the {{event("mousedown")}}
and {{event("mouseup")}} events, in that order.

> **Note:** Browser vendors are implementing this property as part of a
> plan to improve compatibility with regards to button behaviors. Specifically, event
> behavior is being updated so that {{Event("click")}} only fires for primary button
> clicks (e.g., left mouse button), while {{Event("auxclick")}} fires for non-primary
> button clicks. Historically, {{Event("click")}} has generally fired for the click of
> _any_ device input button, although with browser behavior being somewhat
> inconsistent.

## Syntax

```js
target.onauxclick = functionRef;
```

### Value

`functionRef` is a function name or a [function
expression](/en-US/docs/Web/JavaScript/Reference/Operators/function). The function receives a {{domxref("MouseEvent")}} object as its sole
argument. Within the function,
[`this`](/en-US/docs/Web/JavaScript/Reference/Operators/this) will
be the element upon which the event was triggered.

Only one `onauxclick` handler can be assigned to an object at a time. You
may prefer to use the {{domxref("EventTarget.addEventListener()")}} method instead,
since it's more flexible.

## Example

In this example we define functions for two event handlers —
{{domxref("GlobalEventHandlers.onclick", "onclick")}} and `onauxclick`. The
former changes the color of the button background, while the latter changes the button
foreground (text) color. You can see the two functions in action by trying the demo out
with a multi-button mouse ([see it
live on GitHub](https://mdn.github.io/dom-examples/auxclick/); also [see the
source code](https://github.com/mdn/dom-examples/blob/master/auxclick/index.html)).

```js
var button = document.querySelector('button');
var html = document.querySelector('html');

function random(number) {
  return Math.floor(Math.random() * number);
}

button.onclick = function() {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  button.style.backgroundColor = rndCol;
};

button.onauxclick = function() {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  button.style.color = rndCol;
}
```

> **Note:** If you are using a three-button mouse, you'll notice that the
> `onauxclick` handler is run when either of the non-left mouse buttons are
> clicked.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{event("auxclick")}} event
- Related event handlers

  - {{domxref("GlobalEventHandlers.onclick")}}
  - {{domxref("GlobalEventHandlers.ondblclick")}}

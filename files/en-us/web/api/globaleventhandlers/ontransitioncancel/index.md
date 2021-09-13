---
title: GlobalEventHandlers.ontransitioncancel
slug: Web/API/GlobalEventHandlers/ontransitioncancel
tags:
  - API
  - CSS Transitions
  - CSS3 Transitions
  - Event Handler
  - GlobalEventHandlers
  - Property
  - Reference
  - ontransitioncancel
browser-compat: api.GlobalEventHandlers.ontransitioncancel
---
{{APIRef("CSS3 Transitions")}}

The **`ontransitioncancel`** property of the
{{domxref("GlobalEventHandlers")}} mixin is an [event handler](/en-US/docs/Web/Events/Event_handlers) that
processes {{event("transitioncancel")}} events.

The `transitioncancel` event is sent when a [CSS transition](/en-US/docs/Web/CSS/CSS_Transitions) is cancelled. The
transition is cancelled when:

- The value of the {{cssxref("transition-property")}} property that applies to the
  target is changed
- The {{cssxref("display")}} property is set to `"none"`.
- The transition is stopped before it has run to completion, e.g. by moving the mouse
  off a hover-transitioning element.

## Syntax

```js
var transitionCancelHandler = target.ontransitioncancel;

target.ontransitioncancel = {{jsxref("Function")}}
```

### Value

A {{jsxref("Function")}} to be called when a {{event("transitioncancel")}} event occurs
indicating that a CSS transition has been cancelled on the
`target`, where the target object is an HTML element
({{domxref("HTMLElement")}}), document ({{domxref("Document")}}), or window
({{domxref("Window")}}). The function receives as input a single parameter: a
{{domxref("TransitionEvent")}} object describing the event which occurred; the event's
{{domxref("TransitionEvent.elapsedTime")}} property's value should be the same as the
value of {{cssxref("transition-duration")}}.

> **Note:** `elapsedTime` does not include time prior to the
> transition effect beginning; that means that the value of
> {{cssxref("transition-delay")}} doesn't affect the value of `elapsedTime`,
> which is zero until the delay period ends and the animation begins.

## Example

In this example, we use the {{event("transitionrun")}} and {{event("transitionend")}}
events to detect when the transition begins and ends, to cause a text update to occur
during the transition. This could also be used to trigger animations or other effects,
to allow chaining of reactions.

In addition, we also use a {{event("click")}} event to make the box disappear
(`display: none;`), showing how it triggers the {{event("transitioncancel")}}
event to fire.

### HTML

This creates a {{HTMLElement("div")}} which we'll style with CSS below to make into a
box that resizes and changes color and such.

```html
<div class="box"></div>
```

### CSS

The CSS below styles the box and applies a transition effect which makes the box's
color and size change, and causes the box to rotate, while the mouse cursor hovers over
it.

```css
.box {
  margin-left: 70px;
  margin-top: 30px;
  border-style: solid;
  border-width: 1px;
  display: block;
  width: 100px;
  height: 100px;
  background-color: #0000FF;
  color: #FFFFFF;
  padding: 20px;
  font: bold 1.6em "Helvetica", "Arial", sans-serif;
  -webkit-transition: width 2s, height 2s, background-color 2s, -webkit-transform 2s, color 2s;
  transition: width 2s, height 2s, background-color 2s, transform 2s, color 2s;
}

.box:hover {
  background-color: #FFCCCC;
  color: #000000;
  width: 200px;
  height: 200px;
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}
```

### JavaScript

Next, we need to establish our event handlers to change the text content of the box
when the transition begins and ends.

```js
let box = document.querySelector(".box");
box.ontransitionrun = function(event) {
  box.textContent = "Zooming...";
}
box.ontransitionend = function(event) {
  box.textContent = "Done!";
}

box.onclick = function() {
  box.style.display = 'none';
  timeout = window.setTimeout(appear, 2000);
  function appear() {
    box.style.display = 'block';
  }
}

box.ontransitioncancel = function(event) {
  console.log('transitioncancel fired after ' + event.elapsedTime + ' seconds.');
}
```

### Result

The resulting content looks like this:

{{EmbedLiveSample('Example', 600, 280)}}

Notice what happens when you hover your mouse cursor over the box, then move it away.

Also note the log that appears in the JavaScript console when you click the box, or
move the cursor away before the transition has run to completion.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{event("transitioncancel")}} event this event handler is triggered by
- {{domxref("TransitionEvent")}}
- The {{event("transitionrun")}} event, which occurs when the transition begins

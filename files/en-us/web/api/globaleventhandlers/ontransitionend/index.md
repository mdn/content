---
title: GlobalEventHandlers.ontransitionend
slug: Web/API/GlobalEventHandlers/ontransitionend
tags:
  - API
  - CSS Transitions
  - CSS3 Transitions
  - Document
  - Element
  - Event Handler
  - GlobalEventHandlers
  - Property
  - Reference
  - Window
  - ontransitionend
browser-compat: api.GlobalEventHandlers.ontransitionend
---
{{APIRef("CSS3 Transitions")}}

The **`ontransitionend`** property of the
{{domxref("GlobalEventHandlers")}} mixin is an [event handler](/en-US/docs/Web/Events/Event_handlers) that
processes {{event("transitionend")}} events.

The `transitionend` event is sent to when a [CSS transition](/en-US/docs/Web/CSS/CSS_Transitions) completes.

> **Note:** If the transition is removed from its target node before the transition completes
> execution, the {{event("transitionend")}} event won't be generated. One way this can
> happen is by changing the value of the {{cssxref("transition-property")}} attribute
> which applies to the target. Another is if the {{cssxref("display")}} attribute is set
> to `none`.

## Syntax

```js
var transitionEndHandler = target.ontransitionend;

target.ontransitionend = {{jsxref("Function")}}
```

### Value

A {{jsxref("Function")}} to be called when a {{event("transitionend")}} event occurs
indicating that a CSS transition has completed on the `target`,
where the target object is an HTML element ({{domxref("HTMLElement")}}), document
({{domxref("Document")}}), or window ({{domxref("Window")}}). The function receives as
input a single parameter: a {{domxref("TransitionEvent")}} object describing the event
which occurred; the event's {{domxref("TransitionEvent.elapsedTime")}} property's value
should be the same as the value of {{cssxref("transition-duration")}}.

> **Note:** `elapsedTime` does not include time prior to the transition effect
> beginning; that means that the value of {{cssxref("transition-delay")}} doesn't affect
> the value of `elapsedTime`, which is zero until the delay period ends and
> the animation begins.

## Example

In this example, we use the {{event("transitionrun")}} and {{event("transitionend")}}
events to detect when the transition begins and ends, to cause a text update to occur
during the transition. This could also be used to trigger animations or other effects,
to allow chaining of reactions.

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
  transition: width 2s, height 2s, background-color 2s, transform 2s, color 2s;
}

.box:hover {
  background-color: #FFCCCC;
  color: #000000;
  width: 200px;
  height: 200px;
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
```

### Result

The resulting content looks like this:

{{EmbedLiveSample('Example', 600, 280)}}

Notice what happens when you hover your mouse cursor over the box, then move it away.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{event("transitionend")}} event this event handler is triggered by
- {{domxref("TransitionEvent")}}
- The {{event("transitionrun")}} event, which occurs when the transition begins

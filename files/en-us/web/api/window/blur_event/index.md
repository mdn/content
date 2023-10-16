---
title: "Window: blur event"
short-title: blur
slug: Web/API/Window/blur_event
page-type: web-api-event
browser-compat: api.Window.blur_event
---

{{APIRef}}

The **`blur`** event fires when an element has lost focus.

The opposite of `blur` is {{domxref("Window/focus_event", "focus")}}.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("blur", (event) => {});

onblur = (event) => {};
```

## Event type

A {{domxref("FocusEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("FocusEvent")}}

## Event properties

_This interface also inherits properties from its parent {{domxref("UIEvent")}}, and indirectly from {{domxref("Event")}}._

- {{domxref("FocusEvent.relatedTarget")}}
  - : An {{domxref("EventTarget")}} representing a secondary target for this event. In some cases (such as when tabbing in or out a page), this property may be set to `null` for security reasons.

## Examples

### Live example

This example changes the appearance of a document when it loses focus. It uses {{domxref("EventTarget.addEventListener()", "addEventListener()")}} to monitor {{domxref("Window/focus_event", "focus")}} and `blur` events.

#### HTML

```html
<p id="log">Click on this document to give it focus.</p>
```

#### CSS

```css
.paused {
  background: #ddd;
  color: #555;
}
```

#### JavaScript

```js
function pause() {
  document.body.classList.add("paused");
  log.textContent = "FOCUS LOST!";
}

function play() {
  document.body.classList.remove("paused");
  log.textContent =
    "This document has focus. Click outside the document to lose focus.";
}

const log = document.getElementById("log");

window.addEventListener("blur", pause);
window.addEventListener("focus", play);
```

#### Result

{{EmbedLiveSample("Live_example")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

The value of {{DOMxRef("Document.activeElement")}} varies across browsers while this event is being handled ([Firefox bug 452307](https://bugzil.la/452307)): IE10 sets it to the element that the focus will move to, while Firefox and Chrome often set it to the `body` of the document.

## See also

- Related event: {{domxref("Window/focus_event", "focus")}}
- This event on `Element` targets: {{domxref("Element/blur_event", "blur")}} event

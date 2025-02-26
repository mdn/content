---
title: "Window: focus event"
short-title: focus
slug: Web/API/Window/focus_event
page-type: web-api-event
browser-compat: api.Window.focus_event
---

{{APIRef}}

The **`focus`** event fires when an element has received focus.

The opposite of `focus` is {{domxref("Window/blur_event", "blur")}}.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("focus", (event) => {});

onfocus = (event) => {};
```

## Event type

A {{domxref("FocusEvent")}}. Inherits from {{domxref("UIEvent")}} and {{domxref("Event")}}.

{{InheritanceDiagram("FocusEvent")}}

## Event properties

_This interface also inherits properties from its parent {{domxref("UIEvent")}}, and indirectly from {{domxref("Event")}}._

- {{domxref("FocusEvent.relatedTarget")}}
  - : An {{domxref("EventTarget")}} representing a secondary target for this event. In some cases (such as when tabbing in or out a page), this property may be set to `null` for security reasons.

## Examples

### Live example

This example changes the appearance of a document when it loses focus. It uses {{domxref("EventTarget.addEventListener()", "addEventListener()")}} to monitor `focus` and {{domxref("Window/blur_event", "blur")}} events.

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

## See also

- Related event: {{domxref("Window/blur_event", "blur")}}
- This event on `Element` targets: {{domxref("Element/focus_event", "focus")}} event

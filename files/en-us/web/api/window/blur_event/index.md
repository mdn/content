---
title: "Window: blur event"
short-title: blur
slug: Web/API/Window/blur_event
page-type: web-api-event
browser-compat: api.Window.blur_event
---

{{APIRef("UI Events")}}

The **`blur`** event fires when the window has lost focus,, for example when the user moves focus from the page to the address bar. Focus may previously have been on the document's viewport or on an element within it.

The opposite of `blur` is {{domxref("Window/focus_event", "focus")}}.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("blur", (event) => { })

onblur = (event) => { }
```

## Event type

A {{domxref("FocusEvent")}}. Inherits from {{domxref("UIEvent")}} and {{domxref("Event")}}.

{{InheritanceDiagram("FocusEvent")}}

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
  background: #dddddd;
  color: #555555;
}
```

#### JavaScript

```js
const log = document.getElementById("log");

function pause() {
  document.body.classList.add("paused");
  log.textContent = "FOCUS LOST!";
}

function play() {
  document.body.classList.remove("paused");
  log.textContent =
    "This document has focus. Click outside the document to lose focus.";
}

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

- Related event: {{domxref("Window/focus_event", "focus")}}
- This event on `Element` targets: {{domxref("Element/blur_event", "blur")}} event

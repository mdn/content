---
title: "Element: blur event"
short-title: blur
slug: Web/API/Element/blur_event
page-type: web-api-event
browser-compat: api.Element.blur_event
---

{{APIRef}}

The **`blur`** event fires when an element has lost focus. The event does not bubble, but the related {{domxref("Element/focusout_event", "focusout")}} event that follows does bubble.

An element will lose focus if another element is selected.
An element will also lose focus if a style that does not allow focus is applied, such as `hidden`, or if the element is removed from the document — in both of these cases focus moves to the `body` element (viewport).
Note however that `blur` is not fired when a focused element is removed from the document.

<!-- Prior to FF110 elements did not lose focus if the style changed to hidden (say) -->

The opposite of `blur` is the {{domxref("Element/focus_event", "focus")}} event, which fires when the element has _received_ focus.

The `blur` event is not cancelable.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("blur", (event) => {});

onblur = (event) => {};
```

## Event type

A {{domxref("FocusEvent")}}. Inherits from {{domxref("UIEvent")}} and {{domxref("Event")}}.

{{InheritanceDiagram("FocusEvent")}}

## Event properties

_This interface also inherits properties from its parent {{domxref("UIEvent")}}, and indirectly from {{domxref("Event")}}._

- {{domxref("FocusEvent.relatedTarget")}}
  - : The element receiving focus, if any.

## Examples

### Simple example

#### HTML

```html
<form id="form">
  <label>
    Some text:
    <input type="text" placeholder="text input" />
  </label>
  <label>
    Password:
    <input type="password" placeholder="password" />
  </label>
</form>
```

#### JavaScript

```js
const password = document.querySelector('input[type="password"]');

password.addEventListener("focus", (event) => {
  event.target.style.background = "pink";
});

password.addEventListener("blur", (event) => {
  event.target.style.background = "";
});
```

#### Result

{{EmbedLiveSample("Simple_example", '100%', '50px')}}

### Event delegation

There are two ways of implementing event delegation for this event: by using the {{domxref("Element/focusout_event", "focusout")}} event, or by setting the `useCapture` parameter of {{domxref("EventTarget.addEventListener()", "addEventListener()")}} to `true`.

#### HTML

```html
<form id="form">
  <label>
    Some text:
    <input type="text" placeholder="text input" />
  </label>
  <label>
    Password:
    <input type="password" placeholder="password" />
  </label>
</form>
```

#### JavaScript

```js
const form = document.getElementById("form");

form.addEventListener(
  "focus",
  (event) => {
    event.target.style.background = "pink";
  },
  true,
);

form.addEventListener(
  "blur",
  (event) => {
    event.target.style.background = "";
  },
  true,
);
```

#### Result

{{EmbedLiveSample("Event_delegation", '100%', '50px')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

The value of {{DOMxRef("Document.activeElement")}} varies across browsers while this event is being handled ([Firefox bug 452307](https://bugzil.la/452307)): IE10 sets it to the element that the focus will move to, while Firefox and Chrome often set it to the `body` of the document.

## See also

- The {{domxref("HTMLElement.blur()")}} method
- Related events: {{domxref("Element/focus_event", "focus")}}, {{domxref("Element/focusin_event", "focusin")}}, {{domxref("Element/focusout_event", "focusout")}}
- This event on `Window` targets: {{domxref("Window/blur_event", "blur")}} event
- [Focusing: focus/blur](https://javascript.info/focus-blur)

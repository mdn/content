---
title: "Element: focus event"
short-title: focus
slug: Web/API/Element/focus_event
page-type: web-api-event
browser-compat: api.Element.focus_event
---

{{APIRef}}

The **`focus`** event fires when an element has received focus. The event does not bubble, but the related {{domxref("Element/focusin_event", "focusin")}} event that follows does bubble.

The opposite of `focus` is the {{domxref("Element/blur_event", "blur")}} event, which fires when the element has _lost_ focus.

The `focus` event is not cancelable.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("focus", (event) => {});

onfocus = (event) => {};
```

## Event type

A {{domxref("FocusEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("FocusEvent")}}

## Event properties

_This interface also inherits properties from its parent {{domxref("UIEvent")}}, and indirectly from {{domxref("Event")}}._

- {{domxref("FocusEvent.relatedTarget")}}
  - : The element losing focus, if any.

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

There are two ways of implementing event delegation for this event: by using the {{domxref("Element/focusin_event", "focusin")}} event, or by setting the `useCapture` parameter of {{domxref("EventTarget.addEventListener()", "addEventListener()")}} to `true`.

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

## See also

- The {{domxref("HTMLElement.focus()")}} method
- Related events: {{domxref("Element/blur_event", "blur")}}, {{domxref("Element/focusin_event", "focusin")}}, {{domxref("Element/focusout_event", "focusout")}}
- This event on `Window` targets: {{domxref("Window/focus_event", "focus")}} event
- [Focusing: focus/blur](https://javascript.info/focus-blur)

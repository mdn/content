---
title: "Element: focusin event"
short-title: focusin
slug: Web/API/Element/focusin_event
page-type: web-api-event
browser-compat: api.Element.focusin_event
---

{{APIRef}}

The **`focusin`** event fires when an element has received focus, after the {{domxref("Element/focus_event", "focus")}} event. The two events differ in that `focusin` bubbles, while `focus` does not.

The opposite of `focusin` is the {{domxref("Element/focusout_event", "focusout")}} event, which fires when the element has lost focus.

The `focusin` event is not cancelable.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}.

```js
addEventListener("focusin", (event) => {});
```

## Event type

A {{domxref("FocusEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("FocusEvent")}}

## Event properties

_This interface also inherits properties from its parent {{domxref("UIEvent")}}, and indirectly from {{domxref("Event")}}_.

- {{domxref("FocusEvent.relatedTarget")}}
  - : The element losing focus, if any.

## Examples

### Live example

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

form.addEventListener("focusin", (event) => {
  event.target.style.background = "pink";
});

form.addEventListener("focusout", (event) => {
  event.target.style.background = "";
});
```

#### Result

{{EmbedLiveSample("Live_example", '100%', '50px')}}

## Specifications

{{Specifications}}

**Note:** The _UI Events_ specification describes an [order of focus events](/en-US/docs/Web/API/FocusEvent#order_of_events) that's different from what current browsers implement.

## Browser compatibility

{{Compat}}

## See also

- Related events: {{domxref("Element/blur_event", "blur")}}, {{domxref("Element/focus_event", "focus")}}, {{domxref("Element/focusout_event", "focusout")}}
- [Focusing: focus/blur](https://javascript.info/focus-blur)

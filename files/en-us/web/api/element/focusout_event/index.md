---
title: "Element: focusout event"
short-title: focusout
slug: Web/API/Element/focusout_event
page-type: web-api-event
browser-compat: api.Element.focusout_event
---

{{APIRef}}

The **`focusout`** event fires when an element has lost focus, after the {{domxref("Element/blur_event", "blur")}} event. The two events differ in that `focusout` bubbles, while `blur` does not.

The opposite of `focusout` is the {{domxref("Element/focusin_event", "focusin")}} event, which fires when the element has received focus.

The `focusout` event is not cancelable.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}.

```js
addEventListener("focusout", (event) => {});
```

## Event type

A {{domxref("FocusEvent")}}. Inherits from {{domxref("UIEvent")}} and {{domxref("Event")}}.

{{InheritanceDiagram("FocusEvent")}}

## Event properties

_This interface also inherits properties from its parent {{domxref("UIEvent")}}, and indirectly from {{domxref("Event")}}_.

- {{domxref("FocusEvent.relatedTarget")}}
  - : The element receiving focus, if any.

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

> [!NOTE]
> The _UI Events_ specification describes an [order of focus events](/en-US/docs/Web/API/FocusEvent#order_of_events) that's different from what current browsers implement.

## Browser compatibility

{{Compat}}

## See also

- Related events: {{domxref("Element/blur_event", "blur")}}, {{domxref("Element/focus_event", "focus")}}, {{domxref("Element/focusin_event", "focusin")}}
- [Focusing: focus/blur](https://javascript.info/focus-blur)

---
title: 'Element: focusin event'
slug: Web/API/Element/focusin_event
page-type: web-api-event
tags:
  - API
  - DOM
  - Element
  - Event
  - FocusEvent
  - Reference
  - focusin
browser-compat: api.Element.focusin_event
---
{{APIRef}}

The **`focusin`** event fires when an element is about to receive focus. The main difference between this event and {{domxref("Element/focus_event", "focus")}} is that `focusin` bubbles while `focus` does not.

The opposite of `focusin` is {{domxref("Element/focusout_event", "focusout")}}.

This event is not cancelable.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('focusin', (event) => {});

onfocusin = (event) => { };
```

## Event type

A {{domxref("FocusEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("FocusEvent")}}

## Event properties

_This interface also inherits properties from its parent {{domxref("UIEvent")}}, and indirectly from {{domxref("Event")}}_.

- {{domxref("FocusEvent.relatedTarget")}}
  - : An {{domxref("EventTarget")}} representing a secondary target for this event. In some cases (such as when tabbing in or out a page), this property may be set to `null` for security reasons.

## Examples

### Live example

#### HTML

```html
<form id="form">
  <input type="text" placeholder="text input">
  <input type="password" placeholder="password">
</form>
```

#### JavaScript

```js
const form = document.getElementById('form');

form.addEventListener('focusin', (event) => {
  event.target.style.background = 'pink';
});

form.addEventListener('focusout', (event) => {
  event.target.style.background = '';
});
```

#### Result

{{EmbedLiveSample("Live_example", '100%', '50px')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events: {{domxref("Element/blur_event", "blur")}}, {{domxref("Element/focus_event", "focus")}}, {{domxref("Element/focusout_event", "focusout")}}
- [Focusing: focus/blur](https://javascript.info/focus-blur)

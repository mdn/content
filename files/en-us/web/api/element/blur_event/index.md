---
title: 'Element: blur event'
slug: Web/API/Element/blur_event
page-type: web-api-event
tags:
  - API
  - DOM
  - Element
  - Event
  - FocusEvent
  - Reference
  - blur
  - onblur
browser-compat: api.Element.blur_event
---
{{APIRef}}

The **`blur`** event fires when an element has lost focus. The main difference between this event and {{domxref("Element/focusout_event", "focusout")}} is that `focusout` [bubbles](/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_bubbling_and_capture) while `blur` does not.

The opposite of `blur` is {{domxref("Element/focus_event", "focus")}}.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('blur', (event) => { });

onblur = (event) => { };
```

## Event type

A {{domxref("FocusEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("FocusEvent")}}

## Event properties

_This interface also inherits properties from its parent {{domxref("UIEvent")}}, and indirectly from {{domxref("Event")}}._

- {{domxref("FocusEvent.relatedTarget")}}
  - : An {{domxref("EventTarget")}} representing a secondary target for this event. In some cases (such as when tabbing in or out a page), this property may be set to `null` for security reasons.

## Examples

### Simple example

#### HTML

```html
<form id="form">
  <input type="text" placeholder="text input">
  <input type="password" placeholder="password">
</form>
```

#### JavaScript

```js
const password = document.querySelector('input[type="password"]');

password.addEventListener('focus', (event) => {
  event.target.style.background = 'pink';
});

password.addEventListener('blur', (event) => {
  event.target.style.background = '';
});
```

#### Result

{{EmbedLiveSample("Simple_example", '100%', '50px')}}

### Event delegation

There are two ways of implementing event delegation for this event: by using the {{domxref("Element/focusout_event", "focusout")}} event, or by setting the `useCapture` parameter of {{domxref("EventTarget.addEventListener()", "addEventListener()")}} to `true`.

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

form.addEventListener('focus', (event) => {
  event.target.style.background = 'pink';
}, true);

form.addEventListener('blur', (event) => {
  event.target.style.background = '';
}, true);
```

#### Result

{{EmbedLiveSample("Event_delegation", '100%', '50px')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

The value of {{DOMxRef("Document.activeElement")}} varies across browsers while this event is being handled ({{bug(452307)}}): IE10 sets it to the element that the focus will move to, while Firefox and Chrome often set it to the `body` of the document.

## See also

- Related events: {{domxref("Element/focus_event", "focus")}}, {{domxref("Element/focusin_event", "focusin")}}, {{domxref("Element/focusout_event", "focusout")}}
- This event on `Window` targets: {{domxref("Window/blur_event", "blur")}} event
- [Focusing: focus/blur](https://javascript.info/focus-blur)

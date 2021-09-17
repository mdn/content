---
title: GlobalEventHandlers.onfocus
slug: Web/API/GlobalEventHandlers/onfocus
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - HTML DOM
  - Property
  - Reference
browser-compat: api.GlobalEventHandlers.onfocus
---
{{ApiRef("HTML DOM")}}

The **`onfocus`** property of the
{{domxref("GlobalEventHandlers")}} mixin is an [event handler](/en-US/docs/Web/Events/Event_handlers) that
processes {{event("focus")}} events on the given element.

The `focus` event is raised when the user sets focus on an element.

For `onfocus` to fire on non-input elements, they must be given the
{{htmlattrxref("tabindex")}} attribute (see [Building
keyboard accessibility back in](/en-US/docs/Learn/Accessibility/HTML#building_keyboard_accessibility_back_in) for more details).

> **Note:** The opposite of `onfocus` is
> {{domxref("GlobalEventHandlers.onblur", "onblur")}}.

## Syntax

```js
target.onfocus = functionRef;
```

### Value

`functionRef` is a function name or a [function
expression](/en-US/docs/Web/JavaScript/Reference/Operators/function). The function receives a {{domxref("FocusEvent")}} object as its sole
argument.

## Example

This example uses {{domxref("GlobalEventHandlers.onblur", "onblur")}} and
`onfocus` to change the text within an {{HtmlElement("input")}} element.

### HTML

```html
<input type="text" value="CLICK HERE">
```

### JavaScript

```js
let input = document.querySelector('input');

input.onblur = inputBlur;
input.onfocus = inputFocus;

function inputBlur() {
  input.value = 'Focus has been lost';
}

function inputFocus() {
  input.value = 'Focus is here';
}
```

### Result

Try clicking in and out of the form field, and watch its contents change accordingly.

{{EmbedLiveSample('Example')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

In contrast to IE, in which almost all kinds of elements receive the `focus`
event, almost all kinds of elements on Gecko browsers do NOT work with this event.

## See also

- {{event("focus")}} event
- Related event handler: {{domxref("GlobalEventHandlers.onblur")}}

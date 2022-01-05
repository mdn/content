---
title: GlobalEventHandlers.onblur
slug: Web/API/GlobalEventHandlers/onblur
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - HTML DOM
  - Property
  - Reference
browser-compat: api.GlobalEventHandlers.onblur
---
{{ApiRef("HTML DOM")}}

The **`onblur`** property of the
{{domxref("GlobalEventHandlers")}} mixin is the [event handler](/en-US/docs/Web/Events/Event_handlers) for
processing {{event("blur")}} events. It's available on {{domxref("Element")}},
{{domxref("Document")}}, and {{domxref("Window")}}.

The `blur` event is raised when an element loses focus.

> **Note:** The opposite of `onblur` is
> {{domxref("GlobalEventHandlers.onfocus", "onfocus")}}.

## Syntax

```js
target.onblur = functionRef;
```

### Value

`functionRef` is a function name or a [function
expression](/en-US/docs/Web/JavaScript/Reference/Operators/function). The function receives a {{domxref("FocusEvent")}} object as its sole
argument.

## Example

This example uses `onblur` and {{domxref("GlobalEventHandlers.onfocus",
  "onfocus")}} to change the text within an {{HtmlElement("input")}} element.

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

In contrast to IE, in which almost all kinds of elements receive the `blur`
event, only a few kinds of elements on Gecko browsers work with this event.

## See also

- {{event("blur")}} event
- Related event handler: {{domxref("GlobalEventHandlers.onfocus")}}

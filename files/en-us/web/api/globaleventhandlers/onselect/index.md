---
title: GlobalEventHandlers.onselect
slug: Web/API/GlobalEventHandlers/onselect
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - HTML DOM
  - Property
  - Reference
browser-compat: api.GlobalEventHandlers.onselect
---
{{ ApiRef("HTML DOM") }}

The **`onselect`** property of the
{{domxref("GlobalEventHandlers")}} mixin is an [event handler](/en-US/docs/Web/Events/Event_handlers) that
processes [`select`
events](/en-US/docs/Web/API/Element/select_event).

The `select` event only fires after text inside an
`{{HtmlElement('input/text', '&lt;input type="text"&gt;')}}` or
{{HtmlElement("textarea")}} is selected.

## Syntax

```js
target.onselect = functionRef;
```

### Value

`functionRef` is a function name or a [function
expression](/en-US/docs/Web/JavaScript/Reference/Operators/function). The function receives a {{domxref("UIEvent")}} object as its sole
argument.

## Examples

This example logs the text you select inside a {{HtmlElement("textarea")}} element.

### HTML

```html
<textarea>Try selecting some text in this element.</textarea>
<p id="log"></p>
```

### JavaScript

```js
function logSelection(event) {
  const log = document.getElementById('log');
  const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
  log.textContent = `You selected: ${selection}`;
}

const textarea = document.querySelector('textarea');
textarea.onselect = logSelection;
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`select` event](/en-US/docs/Web/API/Element/select_event)

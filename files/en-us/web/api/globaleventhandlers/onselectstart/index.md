---
title: GlobalEventHandlers.onselectstart
slug: Web/API/GlobalEventHandlers/onselectstart
tags:
  - API
  - Event Handler
  - Experimental
  - GlobalEventHandlers
  - Property
  - Reference
  - Selection
  - Selection API
  - onselectstart
browser-compat: api.GlobalEventHandlers.onselectstart
---
{{ApiRef('DOM')}}{{SeeCompatTable}}

The **`onselectstart`** property of the
{{domxref("GlobalEventHandlers")}} mixin is an [event handler](/en-US/docs/Web/Events/Event_handlers) that
processes {{event("selectstart")}} events.

The `selectstart` event fires when the user starts to make a new text
selection on a webpage.

## Syntax

```js
object.onselectstart = functionRef;
```

### Value

`functionRef` is a function name or a [function
expression](/en-US/docs/Web/JavaScript/Reference/Operators/function). The function receives a {{domxref("FocusEvent")}} object as its sole
argument.

## Examples

```js
document.onselectstart = function() {
  console.log('Selection started!');
};
```

For a full example, see our [Key
quote generator](https://github.com/chrisdavidmills/selection-api-examples/#key-quote-generator-see-it-running-live) demo.

```js
document.onselectstart = () => {
  return false; // cancel selection
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{event("selectstart")}} event
- Related event handler: {{domxref("GlobalEventHandlers.onselectionchange")}}

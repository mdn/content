---
title: EventListener
slug: Web/API/EventListener
tags:
  - API
  - DOM
  - DOM Events
  - Interface
  - events
browser-compat: api.EventListener
---
{{APIRef("DOM Events")}}

The **`EventListener`** interface represents an object that can handle an event dispatched by an {{domxref("EventTarget")}} object.

> **Note:** Due to the need for compatibility with legacy content, `EventListener` accepts both a function and an object with a `handleEvent()` property function. This is shown in the [example](#example) below.

## Properties

_This interface neither implements, nor inherits, any properties._

## Methods

_This interface doesn't inherit any methods._

- {{domxref("EventListener.handleEvent()")}}
  - : A function that is called whenever an event of the specified type occurs.

## Example

### HTML

```html
<button id="btn">Click here!</button>

<p id="funcOutput"></p>
<p id="handleEvtOutput"></p>
```

### JavaScript

```js
const buttonElement = document.getElementById('btn');
const funcOutput = document.getElementById('funcOutput');
const handleEvtOutput = document.getElementById('handleEvtOutput');

// Add a handler for the 'click' event by providing a callback function.
// When the element is clicked, the output "Element clicked through function!"
// will appear in the p tag with the id of "funcOut".
buttonElement.addEventListener('click', function (event) {
  funcOutput.textContent = 'Element clicked through function!';
});

// For compatibility, a non-function object with a `handleEvent` property is
// treated just the same as a function itself.
// The output "Element clicked through handleEvent property!" will appear
// simultaneously in the p tag with the id of "handleEvtOutput".
buttonElement.addEventListener('click', {
  handleEvent: function (event) {
    handleEvtOutput.textContent = 'Element clicked through handleEvent property!';
  }
});
```

### Result

{{EmbedLiveSample('Example')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

### See also

- [addEventListener](/en-US/docs/Web/API/EventTarget/addEventListener)

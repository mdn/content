---
title: GlobalEventHandlers.onload
slug: Web/API/GlobalEventHandlers/onload
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - HTML DOM
  - Property
  - Reference
  - onload
browser-compat: api.GlobalEventHandlers.onload
---
{{ApiRef()}}

The **`onload`** property of the
{{domxref("GlobalEventHandlers")}} mixin is an [event handler](/en-US/docs/Web/Events/Event_handlers) that
processes {{event("load")}} events on a {{domxref("Window")}},
{{domxref("XMLHttpRequest")}}, {{htmlelement("img")}} element, etc.

The `load` event fires when a given resource has loaded.

## Syntax

```js
target.onload = functionRef;
```

### Value

`functionRef` is the handler function to be called when the window’s
`load` event fires.

## Examples

```js
window.onload = function() {
  init();
  doSomethingElse();
};
```

```html
<!doctype html>
<html>
  <head>
    <title>onload test</title>
    // ES5
    <script>
      function load() {
        console.log("load event detected!");
      }
      window.onload = load;
    </script>
    // ES2015
    <script>
      const load = () => {
        console.log("load event detected!");
      }
      window.onload = load;
    </script>
  </head>
  <body>
    <p>The load event fires when the document has finished loading!</p>
  </body>
</html>
```

## Notes

The `load` event fires at the end of the document loading process. At this
point, all of the objects in the document are in the DOM, and all the images, scripts,
links and sub-frames have finished loading.

There are also [DOM Events](/en-US/docs/Web/Events) like
`DOMContentLoaded` and `DOMFrameContentLoaded` (which can be
handled using {{domxref("EventTarget.addEventListener()")}}) which are fired after the
DOM for the page has been constructed, but do not wait for other resources to finish
loading.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{Event("load")}} event
- `DOMContentLoaded` event in [Listening
  to events: Simple DOM events](/en-US/docs/Listening_to_events_in_Firefox_extensions#Simple_DOM_events)
- IIFE [Immediately-invoked function expression](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression)

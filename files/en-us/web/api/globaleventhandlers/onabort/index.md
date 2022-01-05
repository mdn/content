---
title: GlobalEventHandlers.onabort
slug: Web/API/GlobalEventHandlers/onabort
tags:
  - API
  - Event Handler
  - Experimental
  - GlobalEventHandlers
  - NeedsContent
  - NeedsHelp
  - NeedsUpdate
  - Property
  - Reference
  - Window
browser-compat: api.GlobalEventHandlers.onabort
---
{{ApiRef("HTML DOM")}} {{SeeCompatTable}} {{draft}}

The **`onabort`** property of the
{{domxref("GlobalEventHandlers")}} mixin is the [event handler](/en-US/docs/Web/Events/Event_handlers) for
processing {{event("abort")}} events sent to the window.

While the [standard
for aborting a document load](https://html.spec.whatwg.org/multipage/browsing-the-web.html#abort-a-document) is defined, [HTML issue #3525](https://github.com/whatwg/html/issues/3525) suggests that
browsers should not currently fire the `abort` event on a `Window`
that would trigger `onabort` to be called.

TODO: define what "abort" is. Closing the window via window manager? Stopping the load
of the page? By which means and reasons (user, network/server)? At which stages would it
fire / be caught? For IE, `onabort` is only available with
`<img>` tags.

## Syntax

```js
window.onabort = functionRef;
```

### Value

`functionRef` is a function name or a [function
expression](/en-US/docs/Web/JavaScript/Reference/Operators/function).

## Example

```js
window.onabort = function() {
  alert('Load aborted.');
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

This property is not available with Firefox 2 or Safari.

---
title: 'selectstart event'
slug: Web/API/GlobalEventHandlers/selectstart_event
tags:
  - API
  - Reference
  - Event
  - Selection
  - Selection API
browser-compat: api.GlobalEventHandlers.selectstart_event
---
{{ApiRef('DOM')}}

The global **`selectstart`** fires when the user starts to make a new text
selection on a webpage.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('selectstart', event => { });
onselectstart = event => { };
```

## Event type

A generic {{domxref("Event")}}.

## Event availability

 The **`selectstart`** event is a global event and available to the following interfaces:

 - {{domxref("Window")}}
 - {{domxref("Document")}}
 - {{domxref("HTMLElement")}}
 - {{domxref("SVGElement")}}
 - {{domxref("MathMLElement")}}

## Examples

```js
// addEventListener version
document.addEventListener('selectstart', () => {
  console.log('Selection started');
});

// onselectstart version
document.onselectstart = () => {
  console.log('Selection changed.');
};
```

For a full example, see our [Key
quote generator](https://github.com/chrisdavidmills/selection-api-examples/#key-quote-generator-see-it-running-live) demo.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("GlobalEventHandlers.selectionchange_event", "selectionchange")}} event

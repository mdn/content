---
title: "Document: prerenderingchange event"
short-title: prerenderingchange
slug: Web/API/Document/prerenderingchange_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.Document.prerenderingchange_event
---

{{ APIRef("Speculation Rules API") }}{{seecompattable}}

The `prerenderingchange` event is fired on a prerendered document when it is activated (i.e. the user views the page).

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("prerenderingchange", (event) => {});

prerenderingchange = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Examples

When a prerendered page is activated by the user viewing the page, the `prerenderingchange` event will fire. This can be used to enable activities that previously would be started by default on page load but which you wish to delay until the page is actually viewed by the user.

```js
document.addEventListener("prerenderingchange", initializeView);

function initializeView() {
  // Author-defined function
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Speculation Rules API](/en-US/docs/Web/API/Speculation_Rules_API)
- {{domxref("Document.prerendering", "prerendering")}} property

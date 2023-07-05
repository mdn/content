---
title: "Window: beforeprint event"
short-title: beforeprint
slug: Web/API/Window/beforeprint_event
page-type: web-api-event
browser-compat: api.Window.beforeprint_event
---

{{APIRef}}

The **`beforeprint`** event is fired when the associated document is about to be printed or previewed for printing.

The {{domxref("Window.afterprint_event", "afterprint")}} and `beforeprint` events allow pages to change their content before printing starts (perhaps to remove a banner, for example) and then revert those changes after printing has completed. In general, you should prefer the use of a [`@media print`](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries#targeting_media_types) CSS at-rule, but it may be necessary to use these events in some cases.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("beforeprint", (event) => {});
onbeforeprint = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Examples

Using `addEventListener()`:

```js
window.addEventListener("beforeprint", (event) => {
  console.log("Before print");
});
```

Using the `onbeforeprint` event handler property:

```js
window.onbeforeprint = (event) => {
  console.log("Before print");
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events: {{domxref("Window/afterprint_event", "afterprint")}}

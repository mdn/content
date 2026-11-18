---
title: "Window: beforeprint event"
short-title: beforeprint
slug: Web/API/Window/beforeprint_event
page-type: web-api-event
browser-compat: api.Window.beforeprint_event
---

{{APIRef("HTML DOM")}}

The **`beforeprint`** event is fired when the associated document is about to be printed or previewed for printing.

The {{domxref("Window.afterprint_event", "afterprint")}} and `beforeprint` events allow pages to change their content before printing starts (perhaps to remove a banner, for example) and then revert those changes after printing has completed. In general, you should prefer the use of a [`@media print`](/en-US/docs/Web/CSS/Guides/Media_queries/Using#targeting_media_types) CSS at-rule, but it may be necessary to use these events in some cases.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("beforeprint", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onbeforeprint = (event) => { }
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

Using the `onbeforeprint` event handler property (but note that this replaces other event listeners added using `onbeforeprint`, if any):

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

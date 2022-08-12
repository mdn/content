---
title: 'Window: afterprint event'
slug: Web/API/Window/afterprint_event
page-type: web-api-event
tags:
  - Event
  - Reference
browser-compat: api.Window.afterprint_event
---
{{APIRef}}

The **`afterprint`** event is fired after the associated document has started printing or the print preview has been closed.

The {{domxref("Window.beforeprint_event", "beforeprint")}} and `afterprint` events allow pages to change their content before printing starts (perhaps to remove a banner, for example) and then revert those changes after printing has completed. In general, you should prefer the use of a [`@media print`](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#targeting_media_types) CSS at-rule, but it may be necessary to use these events in some cases.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('afterprint', (event) => { });
onafterprint = (event) => { };
```

## Event type

A generic {{domxref("Event")}}.

## Examples

Using `addEventListener()`:

```js
window.addEventListener('afterprint', (event) => {
  console.log('After print');
});
```

Using the `onafterprint` event handler property:

```js
window.onafterprint = (event) => {
  console.log('After print');
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events: {{domxref("Window/beforeprint_event", "beforeprint")}}

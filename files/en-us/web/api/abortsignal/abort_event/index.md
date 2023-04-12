---
title: "AbortSignal: abort event"
short-title: abort
slug: Web/API/AbortSignal/abort_event
page-type: web-api-event
browser-compat: api.AbortSignal.abort_event
---

{{APIRef("DOM")}}

The **`abort`** event of the {{domxref("AbortSignal")}} is fired when the associated request is aborted, i.e. using {{domxref("AbortController.abort()")}}.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener('abort', (event) => { })

onabort = (event) => { }
```

## Event type

A generic {{DOMxRef("Event")}} with no added properties.

## Examples

In the following snippets, we create a new `AbortController` object, and get its {{domxref("AbortSignal")}} (available using the `signal` property). Later on we check whether or not the signal has been aborted using an event handler property,

You can detect the `abort` event using an [`addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) method:

```js
const controller = new AbortController();
const signal = controller.signal;

signal.addEventListener("abort", () => {
  console.log("Request aborted");
});
```

Or use the `onabort` event handler property:

```js
const controller = new AbortController();
const signal = controller.signal;

signal.onabort = () => {
  console.log("Request aborted");
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

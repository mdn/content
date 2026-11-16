---
title: "WorkerGlobalScope: languagechange event"
short-title: languagechange
slug: Web/API/WorkerGlobalScope/languagechange_event
page-type: web-api-event
browser-compat: api.WorkerGlobalScope.languagechange_event
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

The **`languagechange`** event is fired at the global scope object when the user's preferred language changes.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("languagechange", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onlanguagechange = (event) => { }
```

## Event type

A generic {{domxref("Event")}}.

## Examples

You can use the `languagechange` event in an {{domxref("EventTarget/addEventListener", "addEventListener")}} method:

```js
self.addEventListener("languagechange", () => {
  console.log("languagechange event detected!");
});
```

Or use the `onlanguagechange` event handler property (but note that this replaces other event listeners added using `onlanguagechange`, if any):

```js
self.onlanguagechange = (event) => {
  console.log("languagechange event detected!");
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WorkerNavigator.language", "navigator.language")}}
- {{domxref("WorkerNavigator.languages", "navigator.languages")}}
- {{domxref("Navigator")}}

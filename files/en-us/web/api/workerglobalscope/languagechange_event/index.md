---
title: 'WorkerGlobalScope: languagechange event'
slug: Web/API/WorkerGlobalScope/languagechange_event
page-type: web-api-instance-event
tags:
  - API
  - Event
  - Reference
  - WorkerGlobalScope
browser-compat: api.WorkerGlobalScope.languagechange_event
---
{{APIRef}}

The **`languagechange`** event is fired at the global scope object when the user's preferred language changes.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('languagechange', (event) => { });

onlanguagechange = (event) => { };
```

## Event type

A generic {{domxref("Event")}}.

## Examples

You can use the `languagechange` event in an {{domxref("EventTarget/addEventListener", "addEventListener")}} method:

```js
worker.addEventListener('languagechange', () => {
  console.log('languagechange event detected!');
});
```

Or use the `onlanguagechange` event handler property:

```js
worker.onlanguagechange = (event) => {
  console.log('languagechange event detected!');
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

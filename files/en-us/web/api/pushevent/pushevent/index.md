---
title: PushEvent()
slug: Web/API/PushEvent/PushEvent
page-type: web-api-constructor
tags:
  - API
  - Constructor
  - Push
  - Push API
  - PushEvent
  - Reference
  - Service Workers
browser-compat: api.PushEvent.PushEvent
---
{{APIRef("Push API")}}

The **`PushEvent()`** constructor creates a new
{{domxref("PushEvent")}} object. Note that this constructor is exposed only to a
service worker context.

## Syntax

```js
new PushEvent(type)
new PushEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers set it to `push` or `pushsubscriptionchange`.
- `options` {{optional_inline}}
  - : An object that, _in addition of the properties defined in {{domxref("ExtendableEvent/ExtendableEvent", "ExtendableEvent()")}}_, can have the following properties:
    - `data`
      - : The data you want the `PushEvent` to contain, if any.
        When the constructor is invoked, the {{domxref("PushEvent.data")}} property of the resulting object will be set
        to a new {{domxref("PushMessageData")}} object containing these bytes.

### Return value

A new {{domxref("PushEvent")}} object.

## Examples

```js
const dataInit = {
  data : 'Some sample text'
}

const myPushEvent = new PushEvent('push', dataInit);

myPushEvent.data.text(); // should return 'Some sample text'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Push API](/en-US/docs/Web/API/Push_API)
- [Service Worker API](/en-US/docs/Web/API/Service_Worker_API)

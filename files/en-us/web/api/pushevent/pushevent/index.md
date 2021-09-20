---
title: PushEvent()
slug: Web/API/PushEvent/PushEvent
tags:
  - API
  - Constructor
  - Experimental
  - Push
  - Push API
  - PushEvent
  - Reference
  - Service Workers
browser-compat: api.PushEvent.PushEvent
---
{{APIRef("Push API")}}{{SeeCompatTable()}}

The **`PushEvent()`** constructor creates a new
{{domxref("PushEvent")}} object. Note that the this constructor is exposed only to a
service worker context.

## Syntax

```js
const myPushEvent = new PushEvent(type, eventInitDict);
```

### Parameters

- _type_
  - : A {{domxref("DOMString")}} defining the type of `PushEvent`. This can
    be {{event("push")}} or {{event("pushsubscriptionchange")}}.
- _eventInitDict_ {{optional_inline}}

  - : An options object containing any initialization data you want to populate the
    `PushEvent` object with. The options are:

    - `data`: The data you want the `PushEvent` to
      contain, if any. When the constructor is invoked, the
      {{domxref("PushEvent.data")}} property of the resulting object will be set
      to a new {{domxref("PushMessageData")}} object containing bytes extracted
      from the `eventInitDict data` member.

## Example

```js
var dataInit = {
  data : 'Some sample text'
}

var myPushEvent = new PushEvent('push', dataInit);

myPushEvent.data.text(); // should return 'Some sample text'
```

## Browser compatibility

{{Compat}}

## See also

- [Push API](/en-US/docs/Web/API/Push_API)
- [Service Worker API](/en-US/docs/Web/API/Service_Worker_API)

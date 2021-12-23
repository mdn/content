---
title: SyncEvent()
slug: Web/API/SyncEvent/SyncEvent
tags:
  - API
  - Background Sync
  - Constructor
  - Experimental
  - Reference
  - ServiceWorker
  - SyncEvent
browser-compat: api.SyncEvent.SyncEvent
---
{{APIRef("Service Workers API")}}{{Non-standard_header}}

The **`SyncEvent()`** constructor creates a new
{{domxref("SyncEvent")}} object.

## Syntax

```js
var mySyncEvent = new SyncEvent(type, init)
```

### Parameters

- _type_
  - : The type of the Event.
- _init_ {{optional_inline}}

  - : An options object containing any custom settings that you want to apply to the event
    object. Options are as follows:

    - `tag`: A developer-defined unique identifier for
      this `SyncEvent`.
    - `lastChance`: A boolean value indicating that the user agent
      will not make further synchronization attempts after the current attempt.

## Browser compatibility

{{Compat}}

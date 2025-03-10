---
title: "StorageEvent: initStorageEvent() method"
short-title: initStorageEvent()
slug: Web/API/StorageEvent/initStorageEvent
page-type: web-api-instance-method
status:
  - deprecated
browser-compat: api.StorageEvent.initStorageEvent
---

{{ApiRef("Web Storage API")}}{{deprecated_header}}

The **`StorageEvent.initStorageEvent()`** method is used to initialize the value of a {{ domxref("StorageEvent") }}.

## Syntax

```js-nolint
initStorageEvent(type)
initStorageEvent(type, canBubble)
initStorageEvent(type, canBubble, cancelable)
initStorageEvent(type, canBubble, cancelable, key)
initStorageEvent(type, canBubble, cancelable, key, oldValue)
initStorageEvent(type, canBubble, cancelable, key, oldValue, newValue)
initStorageEvent(type, canBubble, cancelable, key, oldValue, newValue, url)
initStorageEvent(type, canBubble, cancelable, key, oldValue, newValue, url, storageArea)
```

### Parameters

- `typeArg`
  - : The name of the event.
- `canBubble` {{optional_inline}}
  - : A boolean indicating whether the event bubbles up through the DOM or not.
- `cancelable` {{optional_inline}}
  - : A boolean indicating whether the event is cancelable.
- `key` {{optional_inline}}
  - : The key whose value is changing as a result of this event.
- `oldValue` {{optional_inline}}
  - : The key's old value.
- `newValue` {{optional_inline}}
  - : The key's new value.
- `url` {{optional_inline}}
  - : The URL of the document initiating the change.
- `storageArea` {{optional_inline}}
  - : The {{DOMxRef("Storage")}} object representing the storage area on which this event occurred.

### Return value

None ({{jsxref("undefined")}}).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Web Storage API", "", "", "nocode")}}
- The constructor to use instead of this deprecated method: {{domxref("StorageEvent.StorageEvent", "StorageEvent()")}}.

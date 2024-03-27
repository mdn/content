---
title: "StorageEvent: StorageEvent() constructor"
short-title: StorageEvent()
slug: Web/API/StorageEvent/StorageEvent
page-type: web-api-constructor
browser-compat: api.StorageEvent.StorageEvent
---

{{ApiRef("Web Storage API")}}

The **`StorageEvent()`** constructor creates a new {{domxref("StorageEvent")}} object.

## Syntax

```js-nolint
new StorageEvent(type)
new StorageEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the type of the `StorageEvent`. It is case-sensitive and browsers set it to `storage`.
- `options` {{optional_inline}}
  - : An object that, _in addition of the properties defined in {{domxref("Event/Event", "Event()")}}_, has the following properties:
    - `key` {{optional_inline}}
      - : A string that represents the key for the storage item that changed. Defaults to `null`.
    - `oldValue` {{optional_inline}}
      - : A string containing the original value of the storage item. Defaults to `null`.
    - `newValue` {{optional_inline}}
      - : A string with the new value of the `key`. Defaults to `null`.
    - `url`
      - : A string with the URL of the document whose storage changed.
    - `storageArea` {{optional_inline}}
      - : A {{DOMxRef("Storage")}} object that represents the storage that was affected. Defaults to `null`.

### Return value

A new {{domxref("StorageEvent")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Web Storage API", "", "", "nocode")}}

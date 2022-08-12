---
title: OfflineAudioCompletionEvent()
slug: Web/API/OfflineAudioCompletionEvent/OfflineAudioCompletionEvent
page-type: web-api-constructor
tags:
  - API
  - Audio
  - Constructor
  - OfflineAudioCompletionEvent
  - Reference
  - Web Audio API
browser-compat: api.OfflineAudioCompletionEvent.OfflineAudioCompletionEvent
---
{{APIRef("Web Audio API")}}

The **`OfflineAudioCompletionEvent()`** constructor of the [Web Audio API](/en-US/docs/Web/API/Web_Audio_API) creates a new
{{domxref("OfflineAudioCompletionEvent")}} object.

> **Note:** You wouldn't generally use the constructor manually.
> `OfflineAudioCompletionEvent` events are dispatched to
> {{domxref("OfflineAudioContext")}} instances for legacy reasons.

## Syntax

```js
new OfflineAudioCompletionEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers set it to `complete`.
- `options`
  - : An object that, _in addition of the properties defined in {{domxref("Event/Event", "Event()")}}_, can have the following properties:
    - `renderedBuffer`
      - : The rendered {{domxref("AudioBuffer")}} containing the audio data.

### Return value

A new {{domxref("OfflineAudioCompletionEvent")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

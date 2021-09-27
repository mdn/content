---
title: AudioParam.cancelAndHoldAtTime()
slug: Web/API/AudioParam/cancelAndHoldAtTime
tags:
  - API
  - Audio
  - AudioParam
  - Experimental
  - Method
  - Reference
  - Web Audio API
  - cancelAndHoldAtTime
  - cancelValuesAndHoldAtTime
browser-compat: api.AudioParam.cancelAndHoldAtTime
---
{{APIRef("Web Audio API")}}

The **`cancelAndHoldAtTime()`** property of the
{{domxref("AudioParam")}} interface cancels all scheduled future changes to the
`AudioParam` but holds its value at a given time until further changes are
made using other methods.

## Syntax

```js
var audioParam = AudioParam.cancelAndHoldAtTime(cancelTime)
```

### Parameters

- cancelTime
  - : A double representing the time (in seconds) after the [`AudioContext`](/en-US/docs/Web/API/AudioContext "An AudioContext can be a target of events, therefore it implements the EventTarget interface.") was
    first created after which all scheduled changes will be cancelled.

### Return value

A reference to the {{domxref("AudioParam")}} it was called on.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

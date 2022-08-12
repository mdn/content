---
title: AudioParam.cancelScheduledValues()
slug: Web/API/AudioParam/cancelScheduledValues
page-type: web-api-instance-method
tags:
  - API
  - AudioParam
  - Method
  - Reference
  - Web Audio API
  - cancelScheduledValues
browser-compat: api.AudioParam.cancelScheduledValues
---
{{ APIRef("Web Audio API") }}

The `cancelScheduledValues()` method of the {{ domxref("AudioParam") }}
Interface cancels all scheduled future changes to the `AudioParam`.

## Syntax

```js
cancelScheduledValues(startTime)
```

### Parameters

- `startTime`
  - : A double representing the time (in seconds) after the {{ domxref("AudioContext") }}
    was first created after which all scheduled changes will be cancelled.

### Return value

A reference to this `AudioParam` object. In some older implementations this
method returns {{jsxref('undefined')}}.

## Examples

```js
const gainNode = audioCtx.createGain();
gainNode.gain.setValueCurveAtTime(waveArray, audioCtx.currentTime, 2); //'gain' is the AudioParam
gainNode.gain.cancelScheduledValues(audioCtx.currentTime);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)

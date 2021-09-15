---
title: OfflineAudioContext.suspend()
slug: Web/API/OfflineAudioContext/suspend
tags:
  - API
  - Method
  - NeedsExample
  - OfflineAudioContext
  - Reference
  - Web Audio API
  - suspend
browser-compat: api.OfflineAudioContext.suspend
---
{{ APIRef("Web Audio API") }}

The **`suspend()`** method of the {{
  domxref("OfflineAudioContext") }} interface schedules a suspension of the time
progression in the audio context at the specified time and returns a promise. This is
generally useful at the time of manipulating the audio graph synchronously on
OfflineAudioContext.

Note that the maximum precision of suspension is the size of the render quantum and the
specified suspension time will be rounded down to the nearest render quantum boundary.
For this reason, it is not allowed to schedule multiple suspends at the same quantized
frame. Also scheduling should be done while the context is not running to ensure the
precise suspension.

## Syntax

```js
OfflineAudioContext.suspend(suspendTime).then(function() { ... });
```

### Parameters

- suspendTime
  - : A {{jsxref("double")}} specifying the suspend time, in seconds.

### Returns

A {{jsxref("Promise")}} resolving to void.

### Exceptions

The promise is rejected when any exception is encountered.

{{exception("InvalidStateError")}} if the quantized frame number is one of the
following:

- a negative number
- is less than or equal to the current time
- is greater than or equal to the total render duration
- is scheduled by another suspend for the same time

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

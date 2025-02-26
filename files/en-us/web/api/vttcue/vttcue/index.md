---
title: "VTTCue: VTTCue() constructor"
short-title: VTTCue()
slug: Web/API/VTTCue/VTTCue
page-type: web-api-constructor
browser-compat: api.VTTCue.VTTCue
---

{{APIRef("WebVTT")}}

The **`VTTCue()`** constructor creates and returns a new
{{domxref("VTTCue")}} object.

## Syntax

```js-nolint
new VTTCue(startTime, endTime, text)
```

### Parameters

- `startTime`
  - : This is a `double` representing the initial text track cue start time.
    This is the time, given in seconds and fractions of a second, denoting the beginning
    of the range of the media data to which this cue applies. For example, if a cue is to
    be visible from 50 seconds to a one minute, five and a half seconds in the media's
    playback, `startTime` will be 50.0.
- `endTime`
  - : This is a `double` representing the ending time for this text track cue.
    This is the time at which the cue should stop being presented to the user, given in
    seconds and fractions thereof. Given the example cue mentioned under
    `startTime`, the value of `endTime` would be 65.5.
- `text`
  - : A string providing the text that will be shown during the time
    span indicated by `startTime` and `endTime`.

### Return value

A new {{domxref("VTTCue")}} object representing a cue which will be presented during
the time span given.

## Examples

```js
// Create a cue that is shown from 2 to 3 seconds and uses the given text.
let cue = new VTTCue(2, 3, "Cool text to be displayed");
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

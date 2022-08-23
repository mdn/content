---
title: msWriteProfilerMark
slug: Web/API/msWriteProfilerMark
page-type: web-api-global-function
tags:
  - msWriteProfilerMark
---
{{APIRef("HTML DOM")}}

{{Non-standard_header()}}

The **`msWriteProfilerMark`** method writes a profiling event.

This proprietary method is specific to Internet Explorer and Microsoft Edge.

## Syntax

```js
msWriteProfilerMark(profilerMarkName)
```

### Parameters

- `profilerMarkName`
  - : A string containing the event name. This parameter is not optional but may be `null`.

### Return value

Type: `HRESULT`. If this method succeeds, it returns `S_OK`. Otherwise, it returns an `HRESULT` error code.

### Notes

`msWriteProfilerMark` enables you to inject DOM based performance markers in addition to existing JavaScript API to learn exactly when parts of the page are being rendered, building a waterfall view for every one of our impressions showing latency per object, which can be useful for more accurately debugging real users perf issues.

Internet Explorer 10. This method is also available in the Web Worker global scope.

For Windows XP, this method sends an event to an event tracing session with `TraceEvent`; for systems after Windows XP, this method writes an event with `EventWrite`.

The event includes a pointer to a window object, current markup, and the event name passed as `bstrProfilerMarkName`.

The `bstrProfilerMarkName` property has a 32-character limit when called from script.

This method is useful to profile real website performance by using the operating system metrics as a baseline.

## Example

```js
if (msWriteProfilerMark) {
 msWriteProfilerMark("Mark1");
}
```

## See also

- [Microsoft API extensions](/en-US/docs/Web/API/Microsoft_Extensions)

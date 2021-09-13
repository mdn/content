---
title: msFirstPaint
slug: Web/API/MsFirstPaint
tags:
  - msFirstPaint
---
{{APIRef("DOM")}}

{{Non-standard_header()}}

**`msFirstPaint`** is a read-only property which gets the time
when the document loaded by the window object began to be displayed to the user.

Put another way, `msFirstPaint` utilizes the browser to measure when the
first content completes being painted in the window. It is available from javascript and
can be reported from the field.

This proprietary property is specific to Internet Explorer and Microsoft Edge.

## Syntax

```js

p = object.msFirstPaint;
```

## Value

An Integer value that represents the time when the document began to be displayed or 0
if the document could not be loaded.

The numerical value reported represents the number of milliseconds between the recorded
time and midnight January 1, 1970 (UTC).

This property is supported only for documents displayed in IE9 Standards mode.

## Example

The following example shows how to calculate the time that is required to request the
document before the document begins to display for the user.

```js
  var oTiming = window.performance.timing;
  var iTimeMS = oTiming.msFirstPaint - oTiming.navigationStart;
```

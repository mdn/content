---
title: "Range: compareBoundaryPoints() method"
short-title: compareBoundaryPoints()
slug: Web/API/Range/compareBoundaryPoints
page-type: web-api-instance-method
browser-compat: api.Range.compareBoundaryPoints
---

{{ApiRef("DOM")}}

The **`compareBoundaryPoints()`** method of the {{domxref("Range")}} interface compares the boundary points of the {{domxref("Range")}} with those of another range.

## Syntax

```js-nolint
compareBoundaryPoints(how, otherRange)
```

### Parameters

- `how`
  - : A constant describing the comparison method. Note that the constant names are backwards relative to what actually get compared: the `compareBoundaryPoints()` method compares `this` to `otherRange` (where `-1` means before and `1` means after), but the constant names are written as "`otherRange` to `this`".
    - `Range.END_TO_END` compares the end boundary-point of this `Range` to the end boundary-point of `otherRange`.
    - `Range.END_TO_START` compares the start boundary-point of this `Range` to the end boundary-point of `otherRange`.
    - `Range.START_TO_END` compares the end boundary-point of this `Range` to the start boundary-point of `otherRange`.
    - `Range.START_TO_START` compares the start boundary-point of this `Range` to the start boundary-point of `otherRange`.
- `otherRange`
  - : A {{domxref("Range")}} to compare boundary points with the range.

### Return value

A number.

- `-1` if the specified boundary-point of this `Range` is before the specified boundary-point of `otherRange`.
- `0` if the specified boundary-point of this `Range` is the same as the specified boundary-point of `otherRange`.
- `1` if the specified boundary-point of this `Range` is after the specified boundary-point of `otherRange`.

### Exceptions

- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if the value of the `how` parameter is invalid.

## Examples

Below, we create two ranges on the same text node and compare their different boundary points.

```js
const text = new Text("0123456789");

const thisRange = new Range();
thisRange.setStart(text, 1);
thisRange.setEnd(text, 6);

const otherRange = new Range();
otherRange.setStart(text, 1);
otherRange.setEnd(text, 4);

// The ranges look like this:
// thisRange start   v---------v thisRange end
//                  0 1 2 3 4 5 6 7 8 9
// otherRange start  ^-----^ otherRange end

// this start is *same as* other start
thisRange.compareBoundaryPoints(Range.START_TO_START, otherRange); // 0

// this end is *after* other start
thisRange.compareBoundaryPoints(Range.START_TO_END, otherRange); // 1

// this start is *after* other end
thisRange.compareBoundaryPoints(Range.END_TO_START, otherRange); // -1

// this end is *after* other end
thisRange.compareBoundaryPoints(Range.END_TO_END, otherRange); // 1
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The DOM interfaces index](/en-US/docs/Web/API/Document_Object_Model)

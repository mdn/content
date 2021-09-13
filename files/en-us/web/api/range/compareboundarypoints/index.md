---
title: Range.compareBoundaryPoints()
slug: Web/API/Range/compareBoundaryPoints
tags:
  - API
  - DOM
  - Method
  - Range
browser-compat: api.Range.compareBoundaryPoints
---
{{ApiRef("DOM")}}

The
**`Range.compareBoundaryPoints()`** method compares the
boundary points of the {{domxref("Range")}} with those of another range.

## Syntax

```js
compare = range.compareBoundaryPoints(how, sourceRange);
```

### Return value

- `compare`
  - : A number, `-1`, `0`, or `1`, indicating whether the
    corresponding boundary-point of the {{domxref("Range")}} is respectively before, equal
    to, or after the corresponding boundary-point of _sourceRange_.

### Parameters

- `how`

  - : A constant describing the comparison method:

    - `Range.END_TO_END` compares the end boundary-point of
      _sourceRange_ to the end boundary-point of `Range`.
    - `Range.END_TO_START` compares the end boundary-point of
      _sourceRange_ to the start boundary-point of `Range`.
    - `Range.START_TO_END` compares the start boundary-point of
      _sourceRange_ to the end boundary-point of `Range`.
    - `Range.START_TO_START` compares the start boundary-point of
      _sourceRange_ to the start boundary-point of `Range`.

    If the value of the parameter is invalid, a {{domxref("DOMException")}} with a
    `NotSupportedError` code is thrown.

- `sourceRange`
  - : A {{domxref("Range")}} to compare boundary points with the range.

## Example

```js
var range, sourceRange, compare;
range = document.createRange();
range.selectNode(document.getElementsByTagName("div")[0]);
sourceRange = document.createRange();
sourceRange.selectNode(document.getElementsByTagName("div")[1]);
compare = range.compareBoundaryPoints(Range.START_TO_END, sourceRange);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The DOM interfaces index](/en-US/docs/Web/API/Document_Object_Model)

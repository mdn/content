---
title: "SVGPathElement: getPathData() method"
short-title: getPathData()
slug: Web/API/SVGPathElement/getPathData
page-type: web-api-instance-method
browser-compat: api.SVGPathElement.getPathData
---

{{APIRef("SVG")}}

The **`SVGPathElement.getPathData()`** method returns the sequence of path segments that corresponds to the path data, optionally normalizing the values and segment types.

## Syntax

```js-nolint
getPathData()
getPathData(options)
```

### Parameters

- `options` {{optional_inline}}

  - : An optional object for controlling aspects of the path data retrieval process. This object may contain the following properties:

    - `normalize` {{optional_inline}}
      - : A boolean value indicating whether the returned sequence of path segments is converted to the base set of [absolute commands](/en-US/docs/Web/SVG/Reference/Attribute/d#path_commands) (`'M'`, `'L'`, `'C'` and `'Z'`), with the values adjusted accordingly.

### Return value

The sequence of path segments corresponding to the path data. If no valid path data exists, returns an empty sequence.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

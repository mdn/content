---
title: "SVGPathElement: getPathData() method"
short-title: getPathData()
slug: Web/API/SVGPathElement/getPathData
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.SVGPathElement.getPathData
---

{{APIRef("SVG")}}{{SeeCompatTable}}

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

An array of path segments corresponding to the path data. If no valid path data exists, returns an empty sequence.

Each path segment is an object with the following properties:

- `type`
  - : A [path commands](/en-US/docs/Web/SVG/Reference/Attribute/d#path_commands).
    If [`options.normalize`](#normalize) is true this will be one of the absolute commands: `'M'`, `'L'`, `'C'` and `'Z'`.
- `values`
  - : An array or value containing the parameters for the corresponding command.

## Examples

### Get path data

Consider the following `<path>` element, drawing a square:

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64">
  <path d="M0,0 h64 v64 h-64 z" />
</svg>
```

The `getPathData()` method will return an array with the raw path data, the same as it's set in the `d` attribute. With the `normalize: true` option set, it will return path data normalized to the base set of path commands:

```js
const path = document.querySelector("path");

console.log(path.getPathData());

// Output: raw path data:
// [
//   { type: "M", values: [0, 0] },
//   { type: "h", values: [64] },
//   { type: "v", values: [64] },
//   { type: "h", values: [-64] },
//   { type: "Z", values: [] }
// ]

console.log(path.getPathData({ normalize: true }));

// Output: normalized path data:
// [
//   { type: "M", values: [0, 0] },
//   { type: "L", values: [64, 0] },
//   { type: "L", values: [64, 64] },
//   { type: "L", values: [0, 64] },
//   { type: "Z", values: [] }
// ]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

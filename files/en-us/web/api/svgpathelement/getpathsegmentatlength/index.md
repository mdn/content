---
title: "SVGPathElement: getPathSegmentAtLength() method"
short-title: getPathSegmentAtLength()
slug: Web/API/SVGPathElement/getPathSegmentAtLength
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.SVGPathElement.getPathSegmentAtLength
---

{{APIRef("SVG")}}{{SeeCompatTable}}

The **`getPathSegmentAtLength()`** method of the {{domxref("SVGPathElement")}} interface returns the path segment at a given distance along the path.

## Syntax

```js-nolint
getPathSegmentAtLength(distance)
```

### Parameters

- `distance`

  - : A number indicating the distance along the path.

### Return value

A path segment object. If no valid segment exists, returns null.

Segment object has the following properties:

- `type`
  - : A [path commands](/en-US/docs/Web/SVG/Reference/Attribute/d#path_commands).
- `values`
  - : An array or value containing the parameters for the corresponding command.

## Examples

### Get path segment

Consider the following `<path>` element, drawing a square:

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64">
  <path d="M0,0 h64 v64 h-64 z" />
</svg>
```

The `getPathSegmentAtLength()` method will return an object that represents the `v64` segment that lays 65px along the path:

```js
const path = document.querySelector("path");

console.log(path.getPathSegmentAtLength(65));

// Output: path segment
// {
//   type: "v",
//   values: [64]
// }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

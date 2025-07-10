---
title: "SVGPathElement: setPathData() method"
short-title: setPathData()
slug: Web/API/SVGPathElement/setPathData
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.SVGPathElement.setPathData
---

{{APIRef("SVG")}}{{SeeCompatTable}}

The **`SVGPathElement.setPathData()`** method sets the sequence of path segments as the new path data.

## Syntax

```js-nolint
setPathData(pathData)
```

### Parameters

- `pathData`
  - : An array of path segments.
    Each path segment is an object with the following properties:
    - `type`
      - : A [path commands](/en-US/docs/Web/SVG/Reference/Attribute/d#path_commands).
        If [`options.normalize`](/en-US/docs/Web/API/SVGPathElement/getPathData#normalize) is true this will be one of the absolute commands: `'M'`, `'L'`, `'C'` and `'Z'`.
    - `values`
      - : An array or value containing the parameters for the corresponding command.

### Return value

None ({{jsxref('undefined')}}).

## Example

### Set path data

Consider the following `<path>` element, drawing a square:

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64">
  <path d="M0,0 h64 v64 h-64 z" />
</svg>
```

The code below uses {{domxref("SVGPathElement/getPathData", "getPathData()")}} method to return the normalized path data as [absolute commands](/en-US/docs/Web/SVG/Reference/Attribute/d#path_commands).
Setting the returned data back to the `<path>` element using the `setPathData()` method will result in the different set of path commands in the DOM:

```js
const svgPath = document.querySelector("path");
const pathData = path.getPathData({ normalize: true });

svgPath.setPathData(pathData);

// <path d="M 0 0 L 64 0 L 64 64 L 0 64 Z" />
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

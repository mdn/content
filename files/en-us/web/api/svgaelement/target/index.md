---
title: "SVGAElement: target property"
short-title: target
slug: Web/API/SVGAElement/target
page-type: web-api-instance-property
browser-compat: api.SVGAElement.target
---

{{APIRef("SVGAElement")}}

The **`SVGAElement.target`** read-only property of {{domxref("SVGAElement")}} returns an {{domxref("SVGAnimatedString")}} object that specifies the portion of a target window, frame, pane into which a document is to be opened when a link is activated.

This property is used when there are multiple possible targets for the ending resource, like when the parent document is a multi-frame HTML or XHTML document.

## Value

An {{domxref("SVGAnimatedString")}} indicating the ending resource target that opens the document when the link is activated.

Sample values can be found [here](https://www.w3.org/TR/2011/REC-SVG11-20110816/linking.html#AElementTargetAttribute)

## Examples

The code is taken from the ["SVGAElement example code"](/en-US/docs/Web/API/SVGAElement#example)

```js
// ...
const linkRef = document.querySelector("a");
linkRef.target = "_blank";
// ...
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ SVGAttr("target") }}

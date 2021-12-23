---
title: SVGAElement.target
slug: Web/API/SVGAElement/target
tags:
  - API
  - NeedsBrowserCompatibility
  - Property
  - Reference
  - SVG
browser-compat: api.SVGAElement.target
---
{{APIRef("SVGAElement")}}

{{SeeCompatTable}}

The **`SVGAElement.target`** read-only property of {{domxref("SVGAElement")}} returns an {{domxref("SVGAnimatedString")}} object that specifies the portion of a target window, frame, pane into which a document is to be opened when a link is activated.

This property is used when there are multiple possible targets for the ending resource, like when the parent document is a mlti-frame HTML or XHTML document.

## Syntax

```js
myLink.target = 'value';
```

### Value

An {{domxref("SVGAnimatedString")}} indicating the ending resource target that opens the document when the link is activated.

Sample values can be found [here](https://www.w3.org/TR/2011/REC-SVG11-20110816/linking.html#AElementTargetAttribute)

## Example

The code is taken from the ["SVGAElement example code"](/en-US/docs/Web/API/SVGAElement#Example)

```js
...
var linkRef = document.querySelector('a');
linkRef.target ='_blank';
...
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ SVGAttr("target") }}

---
title: "FencedFrameConfig: containerWidth property"
short-title: containerWidth
slug: Web/API/FencedFrameConfig/containerWidth
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.FencedFrameConfig.containerWidth
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

The **`containerWidth`** property of the {{domxref("FencedFrameConfig")}} interface reports the width of the containing {{htmlelement("fencedframe")}}, as specified by the [internal config](/en-US/docs/Web/API/FencedFrameConfig#internal_config) `containerSize.width` property.

## Value

`containerWidth` has two possible values:

- If `containerSize` is `null`, the value will be `null`.
- Otherwise, the value will be a number representing the container width, as specified in `containerSize.width`.

## Examples

```js
const frameConfig = await navigator.runAdAuction({
  // ...auction configuration
  resolveToConfig: true,
});

console.log(frameConfig.containerWidth);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Fenced frames](https://developer.chrome.com/docs/privacy-sandbox/fenced-frame/) on developer.chrome.com
- [The Privacy Sandbox](https://developer.chrome.com/docs/privacy-sandbox/) on developer.chrome.com

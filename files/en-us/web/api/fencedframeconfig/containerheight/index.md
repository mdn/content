---
title: "FencedFrameConfig: containerHeight property"
short-title: containerHeight
slug: Web/API/FencedFrameConfig/containerHeight
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.FencedFrameConfig.containerHeight
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

The **`containerHeight`** property of the {{domxref("FencedFrameConfig")}} interface reports the height of the containing {{htmlelement("fencedframe")}}, as specified by the [internal config](/en-US/docs/Web/API/FencedFrameConfig#internal_config) `containerSize.height` property.

## Value

`containerHeight` has two possible values:

- If `containerSize` is `null`, the value will be `null`.
- Otherwise, the value will be a number representing the container height, as specified in `containerSize.height`.

## Examples

```js
const frameConfig = await navigator.runAdAuction({
  // ...auction configuration
  resolveToConfig: true,
});

console.log(frameConfig.containerHeight);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Fenced frames](https://developer.chrome.com/docs/privacy-sandbox/fenced-frame/) on developer.chrome.com
- [The Privacy Sandbox](https://developer.chrome.com/docs/privacy-sandbox/) on developer.chrome.com

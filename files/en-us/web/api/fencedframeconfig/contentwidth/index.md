---
title: "FencedFrameConfig: contentWidth property"
short-title: contentWidth
slug: Web/API/FencedFrameConfig/contentWidth
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.FencedFrameConfig.contentWidth
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

The **`contentWidth`** property of the {{domxref("FencedFrameConfig")}} interface reports the width of the loaded content, as specified by the [internal config](/en-US/docs/Web/API/FencedFrameConfig#internal_config) `contentSize.size.width` property.

## Value

`contentWidth` has three possible values:

- If `contentSize.visibility` is `"transparent"`, the value will be a number representing the content width, as specified in `contentSize.size.width`.
- If `contentSize.visibility` is `"opaque"`, the value will be `"opaque"`.
- If `contentSize` is `null`, the value will be `null`.

## Examples

```js
const frameConfig = await navigator.runAdAuction({
  // ...auction configuration
  resolveToConfig: true,
});

console.log(frameConfig.contentWidth);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Fenced frames](https://developer.chrome.com/docs/privacy-sandbox/fenced-frame/) on developer.chrome.com
- [The Privacy Sandbox](https://developer.chrome.com/docs/privacy-sandbox/) on developer.chrome.com

---
title: "FencedFrameConfig: contentHeight property"
short-title: contentHeight
slug: Web/API/FencedFrameConfig/contentHeight
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.FencedFrameConfig.contentHeight
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

The **`contentHeight`** property of the {{domxref("FencedFrameConfig")}} interface reports the height of the loaded content, as specified by the [internal config](/en-US/docs/Web/API/FencedFrameConfig#internal_config) `contentSize.size.height` property.

## Value

`contentHeight` has three possible values:

- If `contentSize.visibility` is `"transparent"`, the value will be a number representing the content height, as specified in `contentSize.size.height`.
- If `contentSize.visibility` is `"opaque"`, the value will be `"opaque"`.
- If `contentSize` is `null`, the value will be `null`.

## Examples

```js
const frameConfig = await navigator.runAdAuction({
  // ...auction configuration
  resolveToConfig: true,
});

console.log(frameConfig.contentHeight);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Fenced frames](https://developer.chrome.com/docs/privacy-sandbox/fenced-frame/) on developer.chrome.com
- [The Privacy Sandbox](https://developer.chrome.com/docs/privacy-sandbox/) on developer.chrome.com

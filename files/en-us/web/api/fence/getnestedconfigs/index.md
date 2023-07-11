---
title: "Fence: getNestedConfigs() method"
short-title: getNestedConfigs()
slug: Web/API/Fence/getNestedConfigs
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Fence.getNestedConfigs
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

The **`getNestedConfigs()`** method of the
{{domxref("Fence")}} interface returns the {{domxref("FencedFrameConfig")}}s of any {{htmlelement("fencedframe")}} elements embedded inside the current `<fencedframe>`.

## Syntax

```js-nolint
getNestedConfigs()
```

### Parameters

None.

### Return value

An array of {{domxref("FencedFrameConfig")}} objects, or `null` if there are no nested `<fencedframe>` elements embedded inside the current `<fencedframe>` (or if the current `<fencedframe>`'s {{domxref("FencedFrameConfig")}} has its internal `nestedConfigs.visibility` property set to `"opaque"`).

## Examples

```js
const configs = window.fence.getNestedConfigs();
console.log(configs.length);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Fenced frames](https://developer.chrome.com/docs/privacy-sandbox/fenced-frame/) on developer.chrome.com
- [The Privacy Sandbox](https://developer.chrome.com/docs/privacy-sandbox/) on developer.chrome.com

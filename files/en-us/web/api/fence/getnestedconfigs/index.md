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
{{domxref("Fence")}} interface returns the {{domxref("FencedFrameConfig")}}s loaded into `<fencedframe>`s embedded inside the current `<fencedframe>`.

## Syntax

```js-nolint
getNestedConfigs()
```

### Parameters

None.

### Return value

`getNestedConfigs()` has two possible return values:

- An array of 20 {{domxref("FencedFrameConfig")}} objects, if the current `<fencedframe>`'s config was created using an API that supports nested configs (for example [Protected Audience](https://developer.chrome.com/docs/privacy-sandbox/protected-audience/)). Of these 20 configs, the first N configs are those registered through the API and the rest are padding configs that will navigate to `about:blank`, so that the number of configs is hidden and cannot leak any information.
- `null` if the current `<fencedframe>`'s config was created using an API that does not support nested configs (for example [Shared Storage](/docs/Web/API/Shared_Storage_API)).

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

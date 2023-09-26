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
{{domxref("Fence")}} interface returns the {{domxref("FencedFrameConfig")}}s that can be loaded into elements embedded inside the current `<fencedframe>`.

## Syntax

```js-nolint
getNestedConfigs()
```

### Parameters

None.

### Return value

`getNestedConfigs()` has three different possible return values:

- An array of {{domxref("FencedFrameConfig")}} objects, if there are nested `<fencedframe>` elements embedded inside the current `<fencedframe>`, and their configs were created using an API that supports nested configs (for example the [Protected Audience](https://developer.chrome.com/docs/privacy-sandbox/protected-audience/) API).
- `null` if there are no nested `<fencedframe>` elements embedded inside the current `<fencedframe>`.
- An empty array, if there are nested `<fencedframe>` elements embedded inside the current `<fencedframe>`, but the configs were created using an API that does not support nested configs (for example {{domxref("WindowSharedStorage.selectURL", "Window.sharedStorage.selectURL()")}}).

> **Note:** For APIs that do support nested configs, a constant number of nested configs (for example 20 in Chrome) may be returned for privacy reasons, where the first n configs are those used by the API, and the rest are padding configs that will navigate to `about:blank`.

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

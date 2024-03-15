---
title: "HTMLFencedFrameElement: config property"
short-title: config
slug: Web/API/HTMLFencedFrameElement/config
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.HTMLFencedFrameElement.config
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

The **`config`** property of the {{domxref("HTMLFencedFrameElement")}} contains a {{domxref("FencedFrameConfig")}} object, which represents the navigation of a {{htmlelement("fencedframe")}}, i.e. what content will be displayed in it. A `FencedFrameConfig` is returned from a source such as the [Protected Audience API](https://developer.chrome.com/docs/privacy-sandbox/fledge/).

## Value

The value of `config` is initially `null`.

When its value is set to a {{domxref("FencedFrameConfig")}} object instance, the `FencedFrameConfig`'s internal properties (for example `mappedURL`) determine what is loaded inside the associated `<fencedframe>`. In addition:

- The navigation type will be `"replace"` (see {{domxref("NavigateEvent.navigationType")}}), meaning that the current history entry is replaced with the new entry, rather adding a new history entry for it.
- The navigation's {{httpheader("Referrer-Policy")}} is set to `"no-referrer"`.

## Examples

To set what content will be shown in a `<fencedframe>`, a utilizing API (such as [Protected Audience](https://developer.chrome.com/docs/privacy-sandbox/fledge/) or [Shared Storage](https://developer.chrome.com/docs/privacy-sandbox/shared-storage/)) generates a {{domxref("FencedFrameConfig")}} object, which is then set as the value of the `<fencedframe>`'s `config` property.

The following example gets a `FencedFrameConfig` from a Protected Audience API's ad auction, which is then used to display the winning ad in a `<fencedframe>`:

```js
const frameConfig = await navigator.runAdAuction({
  // ...auction configuration
  resolveToConfig: true,
});

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

> **Note:** `resolveToConfig: true` must be passed in to the `runAdAuction()` call to obtain a `FencedFrameConfig` object. If it is not set, the resulting {{jsxref("Promise")}} will resolve to a URN that can only be used in an {{htmlelement("iframe")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Fenced frames](https://developer.chrome.com/docs/privacy-sandbox/fenced-frame/) on developer.chrome.com
- [The Privacy Sandbox](https://developer.chrome.com/docs/privacy-sandbox/) on developer.chrome.com

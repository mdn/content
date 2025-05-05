---
title: HTMLFencedFrameElement
slug: Web/API/HTMLFencedFrameElement
page-type: web-api-interface
status:
  - experimental
browser-compat: api.HTMLFencedFrameElement
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

The **`HTMLFencedFrameElement`** interface represents a {{htmlelement("fencedframe")}} element in JavaScript and provides configuration properties.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLFencedFrameElement.allow")}} {{experimental_inline}}
  - : Gets and sets the value of the corresponding `<fencedframe>` `allow` attribute, which represents a [Permissions Policy](/en-US/docs/Web/HTTP/Guides/Permissions_Policy) applied to the content when it is first embedded.
- {{domxref("HTMLFencedFrameElement.config")}} {{experimental_inline}}
  - : a {{domxref("FencedFrameConfig")}} object, which represents the navigation of a {{htmlelement("fencedframe")}}, i.e., what content will be displayed in it. A `FencedFrameConfig` is returned from a source such as the [Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience).
- {{domxref("HTMLFencedFrameElement.height")}} {{experimental_inline}}
  - : Gets and sets the value of the corresponding `<fencedframe>` `height` attribute, which specifies the height of the element.
- {{domxref("HTMLFencedFrameElement.width")}} {{experimental_inline}}
  - : Gets and sets the value of the corresponding `<fencedframe>` `width` attribute, which specifies the width of the element.

## Examples

To set what content will be shown in a `<fencedframe>`, a utilizing API (such as [Protected Audience](https://privacysandbox.google.com/private-advertising/protected-audience) or [Shared Storage](https://privacysandbox.google.com/private-advertising/shared-storage)) generates a {{domxref("FencedFrameConfig")}} object, which is then set as the value of the `<fencedframe>`'s `config` property.

The following example gets a `FencedFrameConfig` from a Protected Audience API's ad auction, which is then used to display the winning ad in a `<fencedframe>`:

```js
const frameConfig = await navigator.runAdAuction({
  // … auction configuration
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

- [Fenced frames](https://privacysandbox.google.com/private-advertising/fenced-frame) on privacysandbox.google.com
- [The Privacy Sandbox](https://privacysandbox.google.com/) on privacysandbox.google.com

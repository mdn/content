---
title: "HTMLIFrameElement: sandbox property"
short-title: sandbox
slug: Web/API/HTMLIFrameElement/sandbox
page-type: web-api-instance-property
browser-compat: api.HTMLIFrameElement.sandbox
---

{{APIRef("HTML DOM")}}

The **`sandbox`** property of the {{domxref("HTMLIFrameElement")}} interface indicates extra restrictions on the behavior of the nested content.

It reflects the `sandbox` attribute of the {{HTMLElement("iframe")}} element.

## Value

A {{domxref("DOMTokenList")}}. Each item must be one of the following:

- `allow-downloads`
  - : Allows downloading files through an {{HTMLElement("a")}} or {{HTMLElement("area")}} element with the [download](/en-US/docs/Web/HTML/Element/a#download) attribute, as well as through the navigation that leads to a download of a file. This works regardless of whether the user clicked on the link, or JS code initiated it without user interaction.
- `allow-downloads-without-user-activation` {{experimental_inline}}
  - : Allows for downloads to occur without a gesture from the user.
- `allow-forms`
  - : Allows the page to submit forms. If this keyword is not used, form will be displayed as normal, but submitting it will not trigger input validation, sending data to a web server or closing a dialog.
- `allow-modals`
  - : Allows the page to open modal windows by {{domxref("Window.alert()")}}, {{domxref("Window.confirm()")}}, {{domxref("Window.print()")}} and {{domxref("Window.prompt()")}}, while opening a {{HTMLElement("dialog")}} is allowed regardless of this keyword. It also allows the page to receive {{domxref("BeforeUnloadEvent")}} event.
- `allow-orientation-lock`
  - : Lets the resource [lock the screen orientation](/en-US/docs/Web/API/Screen/lockOrientation).
- `allow-pointer-lock`
  - : Allows the page to use the [Pointer Lock API](/en-US/docs/Web/API/Pointer_Lock_API).
- `allow-popups`
  - : Allows popups (like from {{domxref("Window.open()")}}, `target="_blank"`, {{domxref("Window.showModalDialog()")}}). If this keyword is not used, that functionality will silently fail.
- `allow-popups-to-escape-sandbox`
  - : Allows a sandboxed document to open a new browsing context without forcing the sandboxing flags upon it. This will allow, for example, a third-party advertisement to be safely sandboxed without forcing the same restrictions upon the page the ad links to. If this flag is not included, a redirected page, popup window, or new tab will be subject to the same sandbox restrictions as the originating `<iframe>`.
- `allow-presentation`
  - : Allows embedders to have control over whether an iframe can start a [presentation session](/en-US/docs/Web/API/PresentationRequest).
- `allow-same-origin`
  - : If this token is not used, the resource is treated as being from a special origin that always fails the {{Glossary("same-origin policy")}} (potentially preventing access to [data storage/cookies](/en-US/docs/Web/Security/Same-origin_policy#cross-origin_data_storage_access) and some JavaScript APIs).
- `allow-scripts`
  - : Allows the page to run scripts (but not create pop-up windows). If this keyword is not used, this operation is not allowed.
- `allow-storage-access-by-user-activation` {{experimental_inline}}
  - : Allows a document loaded in the `<iframe>` to use the {{domxref("Storage Access API", "Storage Access API", "", "nocode")}} to request access to unpartitioned cookies.
- `allow-top-navigation`
  - : Lets the resource navigate the top-level browsing context (the one named `_top`).
- `allow-top-navigation-by-user-activation`
  - : Lets the resource navigate the top-level browsing context, but only if initiated by a user gesture.
- `allow-top-navigation-to-custom-protocols`
  - : Allows navigations to non-`http` protocols built into browser or [registered by a website](/en-US/docs/Web/API/Navigator/registerProtocolHandler/Web-based_protocol_handlers). This feature is also activated by `allow-popups` or `allow-top-navigation` keyword.

## Examples

```html
<iframe id="el" src="https://example.com" sandbox="allow-same-origin allow-scripts"></iframe>
```

```js
const el = document.getElementById("el");
console.log(Array.from(el.sandbox)); // Output: ["allow-same-origin", "allow-scripts"]

el.sandbox = "";
console.log(Array.from(el.sandbox)); // Output: []
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

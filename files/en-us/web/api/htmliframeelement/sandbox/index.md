---
title: "HTMLIFrameElement: sandbox property"
short-title: sandbox
slug: Web/API/HTMLIFrameElement/sandbox
page-type: web-api-instance-property
browser-compat: api.HTMLIFrameElement.sandbox
---

{{APIRef("HTML DOM")}}

The **`sandbox`** read-only property of the {{domxref("HTMLIFrameElement")}} interface returns a {{domxref("DOMTokenList")}} indicating extra restrictions on the behavior of the nested content.

It reflects the `sandbox` attribute of the {{HTMLElement("iframe")}} element.

> **Note:** When the embedded document has the same origin as the embedding page, it is **strongly discouraged** to use both `allow-scripts` and `allow-same-origin`, as that lets the embedded document remove the `sandbox` attribute — making it no more secure than not using the `sandbox` attribute at all. Sandboxing is useless if the attacker can display content outside a sandboxed `iframe` — such as if the viewer opens the frame in a new tab. Such content should be also served from a _separate origin_ to limit potential damage.

> **Note:** When redirecting the user, opening a popup window, or opening a new tab from an embedded page within an `<iframe>` with the `sandbox` attribute, the new browsing context is subject to the same `sandbox` restrictions. This can create issues — for example, if a page embedded within an `<iframe>` without a `sandbox="allow-forms"` or `sandbox="allow-popups-to-escape-sandbox"` attribute set on it opens a new site in a separate tab, form submission in that new browsing context will silently fail.

> **Note:** This property only take effect when the content navigable of the `<iframe>` element is navigated. Removing them, or removing the entire `sandbox` attribute, has no effect on an already-loaded page.

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
<iframe
  id="el"
  src="https://example.com"
  sandbox="allow-same-origin allow-scripts"></iframe>
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

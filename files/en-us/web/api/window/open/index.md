---
title: Window.open()
slug: Web/API/Window/open
tags:
  - API
  - DOM
  - Method
  - NeedsMarkupWork
  - NeedsUpdate
  - Reference
  - Window
  - open
browser-compat: api.Window.open
---
{{APIRef}}

The **`open()`** method of the {{domxref('Window')}} interface loads a specified resource into a new or existing tab, window, or {{HTMLElement("iframe")}} (i.e., a new or existing browsing context) under a specified name.

## Syntax

```js
open();
open(url);
open(url, windowName);
open(url, windowName, windowFeatures);
```

### Parameters

- `url` {{optional_inline}}
  - : A string indicating the URL or path of the resource to be loaded. If an empty string (`""`) is specified as `url`, a blank page is opened into the targeted browsing context. Note that remote URLs are deferred until after the current script block finishes executing.

- `windowName` {{optional_inline}}
  - : A string, without whitespace, specifying the name of the browsing context the resource is being loaded into — not the window's {{HTMLElement("title", "", "#attr-target")}}. If the name doesn't indicate an existing context, a new context is created and given the specified name. The special `target` keywords, `_self`, `_blank`, `_parent`, and `_top`, can also be used.

    This name can be used as the `target` attribute of
    {{HTMLElement("a", "", "#attr-target")}} or {{HTMLElement("form", "",
    "#attr-target")}} elements.

- `windowFeatures` {{optional_inline}}
  - : A string containing a comma-separated list of window features in the form _name=value_ — or for boolean features, just _name_. These features include options such as the window's default size and position, whether or not to open a minimal popup window, and so forth. See {{anch("Window features")}} below for descriptions of each feature.

### Return value

A [WindowProxy](/en-US/docs/Glossary/WindowProxy) object. The returned reference can be used to access properties and methods of the new window as long as it complies with [Same-origin policy](/en-US/docs/Web/Security/Same-origin_policy) security requirements.

## Examples

The following example demonstrates how to implement the `popup` feature.

```js
let windowObjectReference;
let windowFeatures = "popup";

function openRequestedPopup() {
  windowObjectReference = window.open("http://www.mozilla.org/", "mozillaWindow", windowFeatures);
}
```

We can also control the size and position of the new window.

```js
let windowObjectReference;
let windowFeatures = "left=100,top=100,width=320,height=320";

function openRequestedPopup() {
  windowObjectReference = window.open("http://www.mozilla.org/", "mozillaWindow", windowFeatures);
}
```

Alternatively, we can open a new _tab_ by omitting window features.

```js
let windowObjectReference;

function openRequestedPopup() {
  windowObjectReference = window.open("http://www.mozilla.org/", "mozillaTab");
}
```

## Window features

`windowFeatures` is an optional comma-separated list of window features such as size, position, and UI features. Most modern browsers will ignore changes to UI features for a better user experience.

### Popup feature

- `popup`
  - : If this feature is enabled, it requests that a minimal popup window be used. The UI features included in the popup window will be automatically decided by the browser, generally including an address bar only.
  
    If `popup` is not enabled, and there are no window features declared, the new browsing context will be a tab.

> **Note:** Specifying any features in the _windowFeatures_ parameter, other than `noopener` or `noreferer`, also has the effect of requesting a popup.

### Size

- `width` or `innerWidth`
  - : Specifies the width of the content area, including scrollbars. The minimum required value is 100.

- `height` or `innerHeight`
  - : Specifies the height of the content area, including scrollbars. The minimum required value is 100.

### Position

- `left` or `screenX`
  - : Species the distance in pixels from the left side of the work area as defined by the user's operating system where the new window will be generated.

- `top` or `screenY`
  - : Specifies the distance, in pixels, the new window will be generated from the left side of the work area of the user's operating system.

> **Note:** If a popup is requested and no position features are specified, then the left and top coordinates of the new window will be offset 22 pixels from the original window. If the original window is maximized, the window will also be maximized.

### UI features

> **Warning:** These features are kept only for backward compatibility.
> In modern browsers (Firefox 76 or newer, Chrome, Safari, Edge), the
> following features are just a condition for whether `popup` is true or false.

- `menubar`
  - : Controls if the new window has a menubar.

- `toolbar`
  - : Controls if the new window has toolbar buttons (e.g., Back, Forward and Reload).

- `location`
  - : Controls if the new window has a location (address) bar.

- `status`
  - : Controls if the new window has a status bar.

- `resizable`
  - : Controls if the new window will be resizable.

- `scrollbars`
  - : Controls if the new window will have scrollbars.

### Window functionality

- `noopener`
  - : If this feature is set, the new window will not have access back to the originating window via {{domxref("Window.opener")}} and returns `null`.

    When `noopener` is used, non-empty target names, other than `_top`, `_self`, and `_parent`, are treated like `_blank` in terms of deciding whether to open a new browsing context.

- `noreferrer`
  - : If this feature is set, the browser will omit the {{HTTPHeader("Referer")}} header, as well as set `noonpener` to true. See [`rel="noreferrer"`](/en-US/docs/Web/HTML/Link_types#noreferrer) for more information.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Obsolete features](/en-US/docs/Web/API/Window/open/Obsolete_features)
- [Privileged features](/en-US/docs/Web/API/Window/open/Privileged_features)
---
title: Navigator.platform
slug: Web/API/Navigator/platform
tags:
  - API
  - Deprecated
  - HTML DOM
  - Navigator
  - Property
  - Reference
  - platform
browser-compat: api.Navigator.platform
---
{{ APIRef("HTML DOM") }} {{Deprecated_Header}}

> **Note:** The recommended alternative to this property is {{domxref("NavigatorUAData.platform")}}, which is returned from {{domxref("Navigator.userAgentData")}}.

Returns a string representing the platform of the browser.
The specification allows browsers to always return the empty string, so don't rely on this property to get a reliable answer.


## Value

A {{domxref("DOMString")}} identifying the platform on which the browser is running, or an empty string if the browser declines to (or is unable to) identify the platform.
`platform` is a string that must be an empty string or a string representing the platform on which the browser is executing.

For example: "`MacIntel`", "`Win32`", "`FreeBSD i386`", "`WebTV OS`"

## Example

```js
console.log(navigator.platform);
```

## Usage notes

Most browsers, including Chrome, Edge, and Firefox 63 and later, return `"Win32"` even if running on a 64-bit version of Windows.
Internet Explorer and versions of Firefox prior to version 63 still report `"Win64"`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

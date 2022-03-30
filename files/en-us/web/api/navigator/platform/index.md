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
{{ APIRef("HTML DOM") }}

> **Warning:** Use of this feature is discouraged. It may have known problems, or it may be a feature that works as expected now, but which in the future may change in a way that will break code that relies on it continuing to work in the same way it does now. Or it may be a feature which a specification has marked as deprecated or obsolete. Avoid using it, and update existing code if possible; see the [compatibility table](#browser_compatibility) to guide your decision.

> **Note:** An alternative to this property is {{domxref("NavigatorUAData.platform", "navigator.userAgentData.platform")}}. However, {{domxref("NavigatorUAData.platform", "navigator.userAgentData.platform")}} is not yet supported by most browsers, and the specification which defines it has not yet been adopted by any standards group (specifically, it is not part of any specification published by the W3C or WHATWG).

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

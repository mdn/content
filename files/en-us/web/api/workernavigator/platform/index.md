---
title: "WorkerNavigator: platform property"
short-title: platform
slug: Web/API/WorkerNavigator/platform
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.WorkerNavigator.platform
---

{{ APIRef("HTML DOM") }} {{Deprecated_Header}}

Returns a string representing the platform of the browser. The specification allows
browsers to always return the empty string, so don't rely on this property to get a
reliable answer.

## Value

A string identifying the platform on which the browser is running, or
an empty string if the browser declines to (or is unable to) identify the platform.
`platform` is a string that must be an empty string or a string representing
the platform on which the browser is executing.

For example: "`MacIntel`", "`Win32`", "`FreeBSD i386`", "`WebTV OS`".

## Examples

```js
console.log(navigator.platform);
```

## Usage notes

On Windows, modern browsers return `"Win32"` even if running on a 64-bit version of Windows

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

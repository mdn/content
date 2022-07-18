---
title: WorkerNavigator.platform
slug: Web/API/WorkerNavigator/platform
page-type: web-api-instance-property
tags:
  - API
  - Deprecated
  - HTML DOM
  - WorkerNavigator
  - Property
  - Reference
  - platform
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

For example: "`MacIntel`", "`Win32`", "`FreeBSD i386`", "`WebTV OS`"

## Examples

```js
console.log(navigator.platform);
```

## Usage notes

Most browsers, including Chrome, Edge, and Firefox 63 and later, return
`"Win32"` even if running on a 64-bit version of Windows. Internet Explorer
and versions of Firefox prior to version 63 still report `"Win64"`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

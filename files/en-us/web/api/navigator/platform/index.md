---
title: "Navigator: platform property"
short-title: platform
slug: Web/API/Navigator/platform
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.Navigator.platform
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}

The **`platform`** property read-only property of the {{domxref("Navigator")}} interface returns a string identifying the platform on which the user's browser is running.

> [!NOTE]
> In general, you should whenever possible avoid writing code that uses methods or properties like this one to try to find out information about the user's environment, and instead write code that does [feature detection](/en-US/docs/Learn_web_development/Extensions/Testing/Feature_detection).

## Value

A string identifying the platform on which the user's browser is running; for example: `"MacIntel"`, `"Win32"`, `"Linux x86_64"`, `"Linux armv81"`.

## Examples

`navigator.platform` should almost always be avoided in favor of [feature detection](/en-US/docs/Learn_web_development/Extensions/Testing/Feature_detection). But there is one case where, among the options you could use, `navigator.platform` may be the least-bad option: When you need to show users advice about whether the modifier key for keyboard shortcuts is the `⌘` command key (found on Apple systems) rather than the `⌃` control key (on non-Apple systems):

```js
const modifierKeyPrefix =
  navigator.platform.startsWith("Mac") || navigator.platform === "iPhone"
    ? "^" // control key
    : "⌘"; // command key
```

That is, check if `navigator.platform` starts with `"Mac"` or else is an exact match for `"iPhone"`, and then based on whether either of those is true, choose the modifier key your web application's UI will advise users to press in keyboard shortcuts.

## Usage notes

On Windows, modern browsers return `"Win32"` even if running on a 64-bit version of Windows.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`navigator.userAgentData.platform`](/en-US/docs/Web/API/NavigatorUAData/platform)

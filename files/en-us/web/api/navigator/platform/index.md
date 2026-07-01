---
title: "Navigator: platform property"
short-title: platform
slug: Web/API/Navigator/platform
page-type: web-api-instance-property
browser-compat: api.Navigator.platform
---

{{APIRef("HTML DOM")}}

The **`platform`** property read-only property of the {{domxref("Navigator")}} interface returns a string identifying the platform on which the user's browser is running.

## Value

A string indicating a platform, for example:

- `"MacIntel"`
- `"Win32"`
- `"Linux x86_64"`

> [!NOTE]
> On Windows, modern browsers return `"Win32"` even if running on a 64-bit version of Windows.

## Description

The `platform` property indicates the platform/OS the browser is running on.

Theoretically this information is useful for detecting the browser and serving code to work around browser-specific bugs or lack of feature support. However, this is **unreliable** and **is not recommended** for the reasons given in [User-Agent reduction](/en-US/docs/Web/HTTP/Guides/User-agent_reduction) and [Browser detection using the user agent](/en-US/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent).

[Feature detection](/en-US/docs/Learn_web_development/Extensions/Testing/Feature_detection) is a much more reliable strategy.

## Examples

### Determining the modifier key for the user's platform

One case where `navigator.platform` can be useful is when you need to show users advice about whether the modifier key for keyboard shortcuts is the `⌘` command key (found on Apple systems) rather than the `Ctrl` control key (on non-Apple systems):

```js
const modifierKeyPrefix =
  navigator.platform.startsWith("Mac") || navigator.platform === "iPhone"
    ? "⌘" // command key
    : "Ctrl"; // control key
```

This code checks if `navigator.platform` starts with `"Mac"` or else is an exact match for `"iPhone"`, and then based on whether either of those is `true`, sets a `modifierKeyPrefix` variable to the appropriate modifier key for the user's platform. This could be used in a web UI to tell users which modifier key they need when using keyboard shortcuts.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Navigator.userAgent")}}
- {{HTTPHeader("User-agent")}} HTTP header

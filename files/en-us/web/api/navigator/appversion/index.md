---
title: "Navigator: appVersion property"
short-title: appVersion
slug: Web/API/Navigator/appVersion
page-type: web-api-instance-property
browser-compat: api.Navigator.appVersion
---

{{APIRef("HTML DOM")}}

The **`Navigator.appVersion`** read-only property of the {{domxref("Navigator")}} interface returns a string representing version information about the browser.

## Value

A string.

## Description

The `appVersion` property returns information indicating the browser version.

Note that the information returned varies significantly by browser. In some browsers, such as Chrome, this is nearly the same as the value returned by {{domxref("Navigator.userAgent")}}, with the `Mozilla/` prefix removed. For example:

```plain
5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36
```

In other browsers, such as Firefox, this is cut down to a short string that hints at the platform/OS. For example:

```plain
5.0 (Macintosh)
```

Theoretically this information is useful for detecting the browser and serving code to work around browser-specific bugs or lack of feature support. However, this is **unreliable** and **is not recommended** for the reasons given in [User-Agent reduction](/en-US/docs/Web/HTTP/Guides/User-agent_reduction) and [Browser detection using the user agent](/en-US/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent).

[Feature detection](/en-US/docs/Learn_web_development/Extensions/Testing/Feature_detection) is a much more reliable strategy.

## Examples

```js
console.log(navigator.appVersion);
// On Chrome, logs something like "5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36" (reduced UA string)

// On Firefox, logs something like "5.0 (Macintosh)"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Navigator.userAgent")}}
- {{HTTPHeader("User-agent")}} HTTP header

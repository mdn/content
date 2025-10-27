---
title: "Navigator: userAgent property"
short-title: userAgent
slug: Web/API/Navigator/userAgent
page-type: web-api-instance-property
browser-compat: api.Navigator.userAgent
---

{{ApiRef("HTML DOM")}}

The **`Navigator.userAgent`** read-only property of the {{domxref("Navigator")}} interface returns the `User-Agent` (UA) string for the current browser.

## Value

A string specifying the browser's complete UA string.

## Description

The `userAgent` property provides the current browser's UA string. The UA string is built on a formal structure, which can be decomposed into several pieces of information.

The browser also provides the UA string via the {{HTTPHeader("User-Agent")}} HTTP header. Parts of this information are also available in {{Glossary("HTTP")}} headers such as [User-Agent client hints](/en-US/docs/Web/HTTP/Guides/Client_hints) and other related API features such as {{domxref("Navigator.appVersion")}} and {{domxref("Navigator.platform")}}.

Theoretically this information is useful for detecting the browser and serving code to work around browser-specific bugs or lack of feature support. However, this is **unreliable** and **is not recommended** for the reasons given in [User-Agent reduction](/en-US/docs/Web/HTTP/Guides/User-agent_reduction) and [Browser detection using the user agent](/en-US/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent).

[Feature detection](/en-US/docs/Learn_web_development/Extensions/Testing/Feature_detection) is a much more reliable strategy.

## Examples

```js
console.log(navigator.userAgent);
// On Chrome on macOS, logs something like "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36" (reduced UA string)

// On Firefox on Windows, logs something like "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:124.0) Gecko/20100101 Firefox/124.0"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{httpheader("User-Agent")}} HTTP header

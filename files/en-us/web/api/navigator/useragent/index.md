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

The browser also provides this via the {{HTTPHeader("User-agent")}} HTTP header. Parts of this information are also available in {{Glossary("HTTP")}} headers such as [User-Agent client hints](/en-US/docs/Web/HTTP/Guides/Client_hints) and other related API features such as {{domxref("Navigator.appVersion")}} and {{domxref("Navigator.platform")}}.

The UA string is built on a formal structure, which can be decomposed into several pieces of information. For more information about the form of the UA string, see the {{HTTPHeader("User-agent")}} HTTP header.

## Description

The `userAgent` property provides the current browser's UA string. Theoretically this is useful for detecting the browser and serving code to work around browser-specific bugs or lack of feature support. However, browser identification based on detecting the UA string is **unreliable** and **is not recommended**:

- Future browsers will fix bugs and add support for new features, so your browser detection code will need to be regularly updated to avoid locking out browsers that do actually support the features you are testing for. [Feature detection](/en-US/docs/Learn_web_development/Extensions/Testing/Feature_detection) is a much more reliable strategy.
- You really have no guarantee that the user agent advertised by this property is really the one your site is loaded in. Browser vendors can basically do what they like with the UA string, and some browsers enable users to change the value of this field if they want (**UA spoofing**).
- Even the specification asks browsers to provide as little information via this property as possible.

See [Browser detection using the user agent](/en-US/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent) for more information on why serving different content to different browsers is usually a bad idea, and recommendations for what you should do instead.

### User-Agent reduction

The information exposed in the `userAgent` property has historically raised [privacy](/en-US/docs/Web/Privacy) concerns — it can be used to identify a particular user agent, and can therefore be used for {{glossary("fingerprinting")}}. To mitigate such concerns, [supporting browsers](#browser_compatibility) provide a reduced set of information in their {{HTTPHeader("User-agent")}} header, the `userAgent` property, and other related properties. For more information, see [User-Agent reduction](/en-US/docs/Web/HTTP/Guides/User-agent_reduction).

## Examples

```js
console.log(navigator.userAgent);
// On Chrome, logs something like "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36" (reduced UA string)

// On Firefox, logs something like "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:124.0) Gecko/20100101 Firefox/124.0"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{httpheader("User-Agent")}} HTTP header

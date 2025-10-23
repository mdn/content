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

A string representing version information about the browser.

## Description

The `appVersion` property returns some information indicating the browser version.

In some browsers, such as Chrome, this is nearly the same as the value returned by {{domxref("Navigator.userAgent")}}, with the `Mozilla/` prefix removed. For example:

```plain
5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36
```

In other browsers, such as Firefox, this is cut down to a short string that hints at the platform/OS. For example:

```plain
5.0 (Macintosh)
```

### Browser detection

Theoretically this information is useful for detecting the browser and serving code to work around browser-specific bugs or lack of feature support. However, this is **unreliable** and **is not recommended**:

- Future browsers will fix bugs and add support for new features, so your browser detection code will need to be regularly updated to avoid locking out browsers that do actually support the features you are testing for. [Feature detection](/en-US/docs/Learn_web_development/Extensions/Testing/Feature_detection) is a much more reliable strategy.
- You really have no guarantee that the user agent advertised by this property is really the one your site is loaded in. Browser vendors can basically do what they like with the UA string, and some browsers enable users to change the value of this field if they want (**UA spoofing**).
- Browser detection lead to a situation where browsers had to return fake values from such properties in order not to be locked out of some websites.

See [Browser detection using the user agent](/en-US/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent) for more information on why serving different content to different browsers is usually a bad idea, and recommendations for what you should do instead.

### User-Agent reduction

The information exposed in the `appVersion` property has historically raised [privacy](/en-US/docs/Web/Privacy) concerns — it can be used to identify a particular user agent, and can therefore be used for {{glossary("fingerprinting")}}. To mitigate such concerns, [supporting browsers](#browser_compatibility) provide a reduced set of information in their {{HTTPHeader("User-agent")}} header, the {{domxref("Navigator.userAgent", "userAgent")}} property, and other related properties. For more information, see [User-Agent reduction](/en-US/docs/Web/HTTP/Guides/User-agent_reduction).

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

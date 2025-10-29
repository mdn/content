---
title: User-Agent reduction
slug: Web/HTTP/Guides/User-agent_reduction
page-type: guide
sidebar: http
---

**User-Agent reduction** is a broadly accepted browser initiative to reduce the amount of privacy-sensitive information provided in user agent (UA) strings.

This article shows the differences in UA strings as a result of User-Agent reduction, and explains how you can access both redacted and additional UA information when needed.

## Background

The user agent (UA) string — available in the {{httpheader("User-Agent")}} HTTP header and in related API features such as {{domxref("Navigator.userAgent")}}, {{domxref("Navigator.appVersion")}}, and {{domxref("Navigator.platform")}} — allows servers and network peers identify the application, operating system, vendor, and/or version of the requesting {{Glossary("user agent")}}.

### Browser detection

Theoretically the UA string is useful for detecting the browser and serving code to work around browser-specific bugs or lack of feature support. However, this is **unreliable** and **is not recommended**:

- Future browsers will fix bugs and add support for new features, so your browser detection code will need to be regularly updated to avoid locking out browsers that do actually support the features you are testing for. [Feature detection](/en-US/docs/Learn_web_development/Extensions/Testing/Feature_detection) is a much more reliable strategy.
- You really have no guarantee that the user agent advertised by this property is really the one your site is loaded in. Browser vendors can basically do what they like with the UA string, and historically would return fake values from such properties in order not to be locked out of some websites.
- Some browsers enable users to change the value of this field if they want (**UA spoofing**).

The following are much more reliable strategies for working around bugs and differing browser support:

- [Feature detection](/en-US/docs/Learn_web_development/Extensions/Testing/Feature_detection): Detecting support for a feature, rather than the browser version.
- [Progressive enhancement](/en-US/docs/Glossary/Progressive_Enhancement): Providing a baseline of essential content and functionality to as many users as possible, while delivering the best possible experience to browsers that can run all the required code.

Also see [Browser detection using the user agent](/en-US/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent) for more information on why serving different content to different browsers is usually a bad idea.

### Privacy concerns

In addition, the information exposed in the UA string has historically raised [privacy](/en-US/docs/Web/Privacy) concerns — it can be used to identify a particular user agent, and can therefore be used for {{glossary("fingerprinting")}}.

To mitigate such concerns, [supporting browsers](/en-US/docs/Web/HTTP/Reference/Headers/User-Agent#browser_compatibility) implement user-agent reduction, which updates the `User-agent` header and related API features to provide a reduced set of information.

## UA string changes after reduction

In [supporting browsers](/en-US/docs/Web/HTTP/Reference/Headers/User-Agent#browser_compatibility), User-Agent reduction removes three pieces of information from the UA string — the exact platform/OS version, device model, and minor browser version.

Let's look at an example so you can see what this looks like. Whereas previously the UA string for Chrome running on Android might have looked like this:

```plain
Mozilla/5.0 (Linux; Android 16; Pixel 9) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.12.45 Mobile Safari/537.36
```

After the User-Agent reduction update, it now looks like this:

```plain
Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Mobile Safari/537.36
```

The below sections provide more detail about each of the US string changes.

### Platform/OS version and device model

The platform version and device model are always represented by fixed values:

- `Android 10; K` on Android.
- `Macintosh; Intel Mac OS X 10_15_7` on macOS.
- `Windows NT 10.0; Win64; x64` on Windows.
- `X11; CrOS x86_64 14541.0.0` on ChromeOS.
- `X11; Linux x86_64` on Linux.

### Minor browser version

The major browser version number shows correctly, but the minor version numbers are always shown as zeros — `0.0.0`.

## Requesting UA information via client hints

You may still have code that relies on detailed UA string data, which can't be coverted to use feature detection or progressive enhancement. Examples include fine-grained logging, fraud prevention measures, or a software help site that serves different content based on the user's device type.

If this is the case, you can still access detailed UA string data via [`Sec-CH-UA-*`](/en-US/docs/Web/HTTP/Reference/Headers#user_agent_client_hints) headers (also known as **User-Agent client hints**). The headers provide a safer, more privacy-preserving way to send such information because servers have to opt in to the pieces of information they want, rather it being sent all the time through the `User-Agent` string. It also provides access to a wider selection of information.

For more information, see [User-Agent client hints](/en-US/docs/Web/HTTP/Guides/Client_hints).

## Accessing client hints via JavaScript

The [User-Agent Client Hints API](/en-US/docs/Web/API/User-Agent_Client_Hints_API) allows you to access client-hint information via JavaScript. The {{domxref("Navigator.userAgentData")}} property provides access to the {{domxref("NavigatorUAData")}} object, which contains properties representing the low-entropy client hints.

To access high-entropy hints like `Sec-CH-UA-Model` and `Sec-CH-UA-Form-Factors`, you need to use the {{domxref("NavigatorUAData.getHighEntropyValues()")}} method.

For more information, see the [User-Agent Client Hints API](/en-US/docs/Web/API/User-Agent_Client_Hints_API).

## See also

- {{httpheader("User-Agent")}}
- {{domxref("Navigator.userAgent")}}, {{domxref("Navigator.appVersion")}}, and {{domxref("Navigator.platform")}}
- [HTTP Client hints](/en-US/docs/Web/HTTP/Guides/Client_hints)
- [Implementing feature detection](/en-US/docs/Learn_web_development/Extensions/Testing/Feature_detection)
- [https://developer.chrome.com/docs/privacy-security/user-agent-client-hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) on developer.chrome.com (2020)

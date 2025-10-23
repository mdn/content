---
title: User-Agent reduction
slug: Web/HTTP/Guides/User-agent_reduction
page-type: guide
sidebar: http
---

The information exposed in the {{httpheader("User-Agent")}} HTTP header has historically raised [privacy](/en-US/docs/Web/Privacy) concerns — it can be used to identify a particular user agent, and can therefore be used for {{glossary("fingerprinting")}}. To mitigate such concerns, **User-Agent reduction** provides a reduced set of information in the browser `User-Agent` header, and in related API features such as {{domxref("Navigator.userAgent")}}, {{domxref("Navigator.appVersion")}}, and {{domxref("Navigator.platform")}}.

This article explains the differences in user agent (UA) strings as a result of User-Agent reduction, and explains modern strategies for accessing further UA information if required.

## UA string differences resulting from User-Agent reduction

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

The platform version and devce model are always represented by fixed values:

- `Android 10; K` on Android.
- `Macintosh; Intel Mac OS X 10_15_7` on macOS.
- `Windows NT 10.0; Win64; x64` on Windows.
- `X11; CrOS x86_64 14541.0.0` on ChromeOS.
- `X11; Linux x86_64` on Linux.

### Minor browser version

The major browser version number shows correctly, but the minor version numbers are always shown as zeros — `0.0.0`.

## Alternatives to UA string browser sniffing

Theoretically, the information available in the UA string is useful for detecting the browser and serving code to work around browser-specific bugs or lack of feature support. However, in addition to the privacy concerns mentioned earlier, browser identification based on detecting the UA string is **unreliable** and **is not recommended**:

- Future browsers will fix bugs and add support for new features, so your browser detection code will need to be regularly updated to avoid locking out browsers that do actually support the features you are testing for.
- You really have no guarantee that the user agent advertised by this property is really the one your site is loaded in. Browser vendors can basically do what they like with the UA string, and some browsers enable users to change the value of this field if they want (**UA spoofing**).

The following are much more reliable strategies for working around bugs and differing browser support:

- [Feature detection](/en-US/docs/Learn_web_development/Extensions/Testing/Feature_detection): Detecting support for a feature, rather than the browser version.
- [Progressive enhancement](/en-US/docs/Glossary/Progressive_Enhancement): Providing a baseline of essential content and functionality to as many users as possible, while delivering the best possible experience to browsers that can run all the required code.

Also see [Browser detection using the user agent](/en-US/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent) for more information on why serving different content to different browsers is usually a bad idea.

## Requesting detailed UA information via client hints

You may still have code that relies on detailed UA string data, which can't be coverted to use feature detection or progressive enhancement. Examples include fine-grained logging, fraud prevention measures, or a software help site that serves different content based on the user's device type.

If this is the case, you can still access detailed UA string data via [`Sec-CH-UA-*`](/en-US/docs/Web/HTTP/Reference/Headers#user_agent_client_hints) headers (aka **User-Agent client hints**) and other headers besides. The headers provide a safer, more privacy-preserving way to send such information because servers have to opt in to the pieces of information they want, rather it being sent all the time through the `User-Agent` string. It also provides access to a wider selection of information.

Client hints are used like so:

1. When the browser first makes a request to load a webpage, it will send the reduced `User-Agent` header (as detailed earlier) to the server.
2. Additionally, it will send the server a default set of `Sec-CH-UA-*` headers. The Android example we looked at earlier would send the following:

   ```http
   Sec-CH-UA: "Chrome"; v="143"
   Sec-CH-UA-Platform: "Android"
   Sec-CH-UA-Mobile: ?1
   ```

   These headers provide the following information:
   - {{httpheader("Sec-CH-UA")}}: The major browser version.
   - {{httpheader("Sec-CH-UA-Platform")}}: The platform.
   - {{httpheader("Sec-CH-UA-Mobile")}}: A boolean that indicates whether the browser is running on a mobile device (`?1`) or not (`?0`).

3. The server can request additional client hints using the {{httpheader("Accept-CH")}} response header, which contains a comma-delimited list of the headers it would like to receive in subsequent requests. For example:

   ```http
   Accept-CH: Sec-CH-UA, Sec-CH-UA-Platform, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA-Form-Factors
   ```

   Here we've requested the default set of headers. We do this because each subsequent `Accept-CH` setting overrides the previous one, and we want to continue to receive the default information _in addition_ to the newly-requested information:
   - {{httpheader("Sec-CH-UA-Model")}}: The device model the platform is running on.
   - {{httpheader("Sec-CH-UA-Form-Factors")}}: The device's form factor(s), which indicate how the user interacts with the user-agent — the screen size, controls, etc.

4. If the browser is permitted to send the server all the requested information, it will do so along with all subsequent requests until the browser or tab is closed. For example, our example Android phone might send the following updated headers with subsequent requests:

   ```http
   Sec-CH-UA: "Chrome"; v="143"
   Sec-CH-UA-Platform: "Android"
   Sec-CH-UA-Mobile: ?1
   Sec-CH-UA-Model: "Pixel 9"
   Sec-CH-UA-Form-Factors: "Mobile"
   ```

Since these are hints, the browser may choose to ignore some of all of the server's requests for more information. In addition, the browser may be blocked from sending some or all of the information by various security features such as {{httpheader("Permissions-Policy")}}.

[EDITORIAL: IS THIS TRUE? I READ THIS SOMEWHERE, BUT I CAN'T FIND ANY INFO ANYWHERE ON WHAT CAN BLOCK BROWSERS FROM SENDING CLIENT HINTS. WHAT CLIENT FEATURES CAN BLOCK SENDING CLIENT HINTS?]

For more information, see [User-Agent client hints](/en-US/docs/Web/HTTP/Guides/Client_hints).

### Critical client hints

If you need a specific set of client hints sent in your initial request for the initial page rendering to work, you can use the {{httpheader("Critical-CH")}} response header. `Critical-CH` values must be a subset of the values requested by `Accept-CH`.

For example, the initial response may include a request for {{httpheader("Device-Memory")}} and {{httpheader("Viewport-Width")}}, where `Device-Memory` is considered critical:

```http
GET / HTTP/1.1
Host: example.com

HTTP/1.1 200 OK
Content-Type: text/html
Accept-CH: Device-Memory, Viewport-Width
Vary: Device-Memory, Viewport-Width
Critical-CH: Device-Memory
```

This will cause the browser to send a new request for the page, including the critical hint.

In summary, `Accept-CH` requests all values you'd like for the page, while `Critical-CH` requests only the subset of values you must have on-load to properly load the page.

## Accessing client hints via JavaScript

The [User-Agent Client Hints API](/en-US/docs/Web/API/User-Agent_Client_Hints_API) allows you to access client-hint information via JavaScript. The {{domxref("Navigator.userAgentData")}} property provides access to the {{domxref("NavigatorUAData")}} object, which contains the client hints.

For example, if we consider our `Accept-CH` example from earlier:

```http
  Accept-CH: Sec-CH-UA, Sec-CH-UA-Platform, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA-Form-Factors
```

Once the server sends this header, provided there is nothing blocking the browser from providing this information, we can access the `Sec-CH-UA`, `Sec-CH-UA-Platform`, and `Sec-CH-UA-Mobile` values using properties on the `NavigatorUAData` object:

```js
console.log(navigator.userAgentData.brands[0].brand);
console.log(navigator.userAgentData.brands[0].version);
// The browser and version
// For example "Chrome" and "143"

console.log(navigator.userAgentData.platform);
// The platform/OS, for example "macOS"

console.log(navigator.userAgentData.mobile);
// Whether the browser is running on a mobile device: true or false
```

To access so-called [high-entropy](/en-US/docs/Web/HTTP/Guides/Client_hints#high_entropy_hints) hints like `Sec-CH-UA-Model` and `Sec-CH-UA-Form-Factors`, you need to use the {{domxref("NavigatorUAData.getHighEntropyValues()")}} method. This takes an array of the requested hints as an argument and returns a promise that fulfills with an object containing the requested hint values.

For example:

```js
navigator.userAgentData
  .getHighEntropyValues(["model", "formFactors"])
  .then((values) => {
    console.log(values.model);
    console.log(values.formFactors);
    // For example
    // "Pixel 9"
    // ["Mobile"]
  });
```

## See also

- {{httpheader("User-Agent")}}
- {{domxref("Navigator.userAgent")}}, {{domxref("Navigator.appVersion")}}, and {{domxref("Navigator.platform")}}
- [HTTP Client hints](/en-US/docs/Web/HTTP/Guides/Client_hints)
- [Implementing feature detection](/en-US/docs/Learn_web_development/Extensions/Testing/Feature_detection)
- [https://developer.chrome.com/docs/privacy-security/user-agent-client-hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) on developer.chrome.com (2020)

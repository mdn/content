---
title: User-Agent header
short-title: User-Agent
slug: Web/HTTP/Reference/Headers/User-Agent
page-type: http-header
browser-compat: http.headers.User-Agent
sidebar: http
---

The HTTP **User-Agent** {{Glossary("request header")}} is a characteristic string that lets servers and network peers identify the application, operating system, vendor, and/or version of the requesting {{Glossary("user agent")}}.

> [!WARNING]
> See [Browser detection using the user agent](/en-US/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent) for reasons why serving different content to different browsers is usually a bad idea.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header")}}</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
User-Agent: <product> / <product-version> <comment>
```

Common format for web browsers:

```http
User-Agent: Mozilla/5.0 (<system-information>) <platform> (<platform-details>) <extensions>
```

### Directives

- `<product>`
  - : A product identifier — its name or development codename.
- `<product-version>`
  - : Version number of the product.
- `<comment>`
  - : Zero or more comments containing more details. For example, sub-product information.

## User-Agent reduction

The information exposed in the `User-Agent` header has historically raised [privacy](/en-US/docs/Web/Privacy) concerns — it can be used to identify a particular user agent, and can therefore be used for {{glossary("fingerprinting")}}. To mitigate such concerns, [supporting browsers](#browser_compatibility) provide a reduced set of information in their `User-Agent` header, and in related API features such as {{domxref("Navigator.userAgent")}}, {{domxref("Navigator.appVersion")}}, and {{domxref("Navigator.platform")}}.

For example, whereas previously the `User-Agent` string for Chrome running on Android might have looked like this:

```plain
Mozilla/5.0 (Linux; Android 16; Pixel 9) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.12.45 Mobile Safari/537.36
```

After the User-Agent reduction update, it now looks like this:

```plain
Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Mobile Safari/537.36
```

- The platform version is always a fixed value, in this case, `Android 10`.
- The device model is always a fixed value, in this case, `K`.
- The Chrome major version number shows correctly, but the minor version numbers are always shown as zeros — `0.0.0`.

Servers that need more information can request it via [User-Agent client hints](/en-US/docs/Web/HTTP/Guides/Client_hints). After the initial connection, the server can send an {{httpheader("Accept-CH")}} response header detailing the data items they want, and the client can then send the data back via [`Sec-CH-UA-*`](/en-US/docs/Web/HTTP/Reference/Headers#user_agent_client_hints) headers. This information can also be accessed via the [User-Agent Client Hints API](/en-US/docs/Web/API/User-Agent_Client_Hints_API).

For more detailed information, including a guide to retrieving more information as required, see [User-Agent reduction](/en-US/docs/Web/HTTP/Guides/User-agent_reduction). You can also find examples of reduced `User-Agent` strings in the following sections.

## Firefox UA string

For more on Firefox- and Gecko-based user agent strings, see the [Firefox user agent string reference](/en-US/docs/Web/HTTP/Reference/Headers/User-Agent/Firefox). The UA string of Firefox is broken down into 4 components:

```plain
Mozilla/5.0 (platform; rv:gecko-version) Gecko/gecko-trail Firefox/firefox-version
```

1. `Mozilla/5.0` is the general token that says that the browser is Mozilla-compatible. For historical reasons, almost every browser today sends it.
2. **_platform_** describes the native platform that the browser is running on (Windows, Mac, Linux, Android, etc.) and if it is a mobile phone. Note that **_platform_** can consist of multiple `;`-separated tokens. See below for further details and examples.
3. **rv:_gecko-version_** indicates the release version of Gecko (such as "_17.0_"). In recent browsers, **_gecko-version_** is the same as **_firefox-version_**.
4. **_Gecko/gecko-trail_** indicates that the browser is based on Gecko. (On the desktop, **_gecko-trail_** is always the fixed string `20100101`.)
5. **_Firefox/firefox-version_** indicates that the browser is Firefox and provides the version (such as "_17.0_").

Desktop examples:

```plain
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0

Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0
```

## Chrome UA string

The Chrome (or Chromium/Blink-based engines) user agent string is similar to Firefox's. For compatibility, it adds strings like `KHTML, like Gecko` and `Safari`. It adds `"CriOS/<version>"` on iPhone.

Desktop examples:

```plain
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36

Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36
```

Android phone example:

```plain
Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Mobile Safari/537.36
```

## Opera UA string

The Opera browser is also based on the Blink engine, which is why it almost looks the same as the Chrome UA string, but adds `"OPR/<version>"` on desktop and Android, and `"OPT/<version>"` on iPhone. For preview versions, Opera also includes a description of the particular browser edition in parentheses, for example `(Edition developer)`.

Desktop examples:

```plain
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36 OPR/124.0.0.0 (Edition developer)

Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36 OPR/124.0.0.0 (Edition developer)
```

Android phone example:

```plain
Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Mobile Safari/537.36 OPR/92.0.0.0
```

## Microsoft Edge UA string

The Edge browser is also based on the Blink engine. It adds `"Edg/<version>"` on desktop platforms, `"EdgA/<version>"` on Android, and `"EdgiOS/<version>"` on iPhone.

Desktop examples:

```plain
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36 Edg/143.0.0.0

Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36 Edg/143.0.0.0
```

Android phone example:

```plain
Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Mobile Safari/537.36 EdgA/141.0.0.0
```

## Safari UA string

Safari is based on the WebKit engine, but its UA string is also similar to the Blink-based browsers. It tends to include a `Version/xxx` string before the actual engine build version to indicate the browser release version, which unlike Blink-based browsers is different. In the case of iPhone (Mobile) Safari, the string also includes `Mobile`.

> [!NOTE]
> At the time of writing, non-Apple iPhone browsers (such as Firefox, Chrome, and Edge) are still based on WebKit, therefore their UA strings are similar to the Safari UA string.

Desktop example:

```plain
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.0 Safari/605.1.15
```

iPhone example:

```plain
Mozilla/5.0 (iPhone; CPU iPhone OS 18_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.0 Mobile/15E148 Safari/604.1
```

## Pre-user-agent reduction examples

This section provides some examples of UA strings prior to user-agent reduction:

Google Chrome:

```plain
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36
```

Microsoft Edge:

```plain
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.59
```

Opera:

```plain
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36 OPR/38.0.2220.41
```

Older, Presto-based Opera releases used a structure like this:

```plain
Opera/9.80 (Macintosh; Intel Mac OS X; U; en) Presto/2.2.15 Version/10.00

Opera/9.60 (Windows NT 6.0; U; en) Presto/2.1.1
```

## Crawler and bot UA strings

### Examples

```plain
Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)
```

```plain
Mozilla/5.0 (compatible; YandexAccessibilityBot/3.0; +http://yandex.com/bots)
```

## Library and net tool UA strings

### Examples

```plain
curl/7.64.1
```

```plain
PostmanRuntime/7.26.5
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [User-Agent detection, history and checklist](https://hacks.mozilla.org/2013/09/user-agent-detection-history-and-checklist/)
- [Firefox user agent string reference](/en-US/docs/Web/HTTP/Reference/Headers/User-Agent/Firefox)
- [Browser detection using the user agent](/en-US/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent)
- [Client hints](/en-US/docs/Web/HTTP/Guides/Client_hints)

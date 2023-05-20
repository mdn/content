---
title: User-Agent
slug: Web/HTTP/Headers/User-Agent
page-type: http-header
browser-compat: http.headers.User-Agent
---

{{HTTPSidebar}}

The **User-Agent** {{Glossary("request header")}} is a characteristic string that lets servers and network peers identify the application, operating system, vendor, and/or version of the requesting {{Glossary("user agent")}}.

> **Warning:** Please read [Browser detection using the user agent](/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent) for why serving different Web pages or services to different browsers is usually a bad idea.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
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

- \<product>
  - : A product identifier — its name or development codename.
- \<product-version>
  - : Version number of the product.
- \<comment>
  - : Zero or more comments containing more details. For example, sub-product information.

## Firefox UA string

For more on Firefox- and Gecko-based user agent strings, see the [Firefox user agent string reference](/en-US/docs/Web/HTTP/Headers/User-Agent/Firefox). The UA string of Firefox is broken down into 4 components:

```plain
Mozilla/5.0 (platform; rv:geckoversion) Gecko/geckotrail Firefox/firefoxversion
```

1. `Mozilla/5.0` is the general token that says that the browser is Mozilla-compatible. For historical reasons, almost every browser today sends it.
2. **_platform_** describes the native platform that the browser is running on (Windows, Mac, Linux, Android, etc.) and if it is a mobile phone. {{Glossary("Firefox OS")}} phones say `Mobile` — the web is the platform. Note that **_platform_** can consist of multiple "`;`"-separated tokens. See below for further details and examples.
3. **rv:_geckoversion_** indicates the release version of Gecko (such as "_17.0_"). In recent browsers, **_geckoversion_** is the same as **_firefoxversion_**.
4. **_Gecko/geckotrail_** indicates that the browser is based on Gecko. (On the desktop, **_geckotrail_** is always the fixed string `20100101`.)
5. **_Firefox/firefoxversion_** indicates that the browser is Firefox and provides the version (such as "_17.0"_).

### Examples

```plain
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0
Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0
```

## Chrome UA string

The Chrome (or Chromium/Blink-based engines) user agent string is similar to Firefox's. For compatibility, it adds strings like `KHTML, like Gecko` and `Safari`.

### Examples

```plain
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36
```

## Opera UA string

The Opera browser is also based on the Blink engine, which is why it almost looks the same as the Chrome UA string, but adds `"OPR/<version>"`.

### Examples

```plain
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36 OPR/38.0.2220.41
```

Older, Presto-based Opera releases used:

```plain
Opera/9.80 (Macintosh; Intel Mac OS X; U; en) Presto/2.2.15 Version/10.00
Opera/9.60 (Windows NT 6.0; U; en) Presto/2.1.1
```

## Microsoft Edge UA string

The Edge browser is also based on the Blink engine. It adds `"Edg/<version>"`.

### Examples

```plain
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.59
```

## Safari UA string

In this example, the user agent string is mobile Safari's version. It contains the word `"Mobile"`.

### Examples

```plain
Mozilla/5.0 (iPhone; CPU iPhone OS 13_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Mobile/15E148 Safari/604.1
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
- [Firefox user agent string reference](/en-US/docs/Web/HTTP/Headers/User-Agent/Firefox)
- [Browser detection using the user agent](/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent)
- [Client hints](/en-US/docs/Web/HTTP/Client_hints)

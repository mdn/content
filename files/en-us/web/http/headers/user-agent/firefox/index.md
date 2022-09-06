---
title: Firefox user agent string reference
slug: Web/HTTP/Headers/User-Agent/Firefox
tags:
  - Compatibility
  - Firefox
  - Firefox 4
  - Gecko
  - Gecko 2.0
  - Guide
---
{{HTTPSidebar}}

This document describes the user agent string used in Firefox 4 and later and applications based on Gecko 2.0 and later. For a breakdown of changes to the string in Gecko 2.0, see [Final User Agent string for Firefox 4](https://hacks.mozilla.org/2010/09/final-user-agent-string-for-firefox-4/) (blog post). See also this document on [user agent sniffing](/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent) and this [Hacks blog post](https://hacks.mozilla.org/2013/09/user-agent-detection-history-and-checklist/).

## General form

The UA string of Firefox itself is broken down into four components:

`Mozilla/5.0 (platform; rv:geckoversion) Gecko/geckotrail Firefox/firefoxversion`

- `Mozilla/5.0` is the general token that says the browser is Mozilla compatible, and is common to almost every browser today.
- `platform` describes the native platform the browser is running on (e.g. Windows, Mac, Linux or Android), and whether or not it's a mobile phone. Firefox OS phones say "`Mobile`"; the web is the platform. Note that `platform` can consist of multiple "; "-separated tokens. See below for further details and examples.

  > **Note:** Though fixed in Firefox 69, previous 32-bit versions of Firefox running on 64-bit processors would report that the system is using a 32-bit CPU.

- `rv:geckoversion` indicates the release version of Gecko (such as "`17.0`"). In recent browsers, `geckoversion` is the same as `firefoxversion`.
- `Gecko/geckotrail` indicates that the browser is based on Gecko.
- On Desktop, `geckotrail` is the fixed string "`20100101`"
- `Firefox/firefoxversion` indicates the browser is Firefox, and provides the version (such as "`17.0`").
- From Firefox 10 on mobile, `geckotrail` is the same as `firefoxversion`.

> **Note:** The recommended way of sniffing for Gecko-based browsers (if you _have to_ sniff for the browser engine instead of using feature detection) is by the presence of the "`Gecko`" and "`rv:`" strings, since some other browsers include a "`like Gecko`" token.

For other products based on Gecko, the string can take one of two forms, where the tokens have the same meaning except those noted below:

`Mozilla/5.0 (platform; rv:geckoversion) Gecko/geckotrail appname/appversion`
`Mozilla/5.0 (platform; rv:geckoversion) Gecko/geckotrail Firefox/firefoxversion appname/appversion`

- `appname/appversion` indicates the application name and version. For instance, this could be "`Camino/2.1.1`", or "`SeaMonkey/2.7.1`".
- `Firefox/firefoxversion` is an optional compatibility token that some Gecko-based browsers may choose to incorporate, to achieve maximum compatibility with websites that expect Firefox. `firefoxversion` will generally represent the equivalent Firefox release corresponding to the given Gecko version. Some Gecko-based browsers may not opt into using this token; for this reason, sniffers should be looking for Gecko — not Firefox!

Prior to Firefox 4 and Gecko 2.0, it was possible for extensions and plug-ins to add user agent parts, but that has not been possible since {{ Bug(581008) }}.

## Mobile and Tablet indicators

> **Note:** Only from Firefox 11 to 68.

The `platform` part of the UA string indicates if Firefox is running on a phone-sized or tablet device. When Firefox runs on a device that has the phone form factor, there is a `Mobile;` token in the `platform` part of the UA string. When Firefox runs on a tablet device, there is a `Tablet;` token in the `platform` part of the UA string instead. For example:

```
Mozilla/5.0 (Android 4.4; Mobile; rv:41.0) Gecko/41.0 Firefox/41.0
Mozilla/5.0 (Android 4.4; Tablet; rv:41.0) Gecko/41.0 Firefox/41.0
```

> **Note:** The version numbers are not relevant. Avoid inferring materials based on these.

The preferred way to target content to a device form factor is to use CSS Media Queries. However, if you use UA sniffing to target content to a device form factor, please look for **Mobi** (to include Opera Mobile, which uses "Mobi") for the phone form factor and do **not** assume any correlation between "Android" and the device form factor. This way, your code will work if/when Firefox ships on other phone/tablet operating systems or Android is used for laptops. Also, please use touch detection to find touch devices rather than looking for "Mobi" or "Tablet", since there may be touch devices which are not tablets.

> **Note:** Firefox OS devices identify themselves without any operating system indication; for example: "Mozilla/5.0 (Mobile; rv:15.0) Gecko/15.0 Firefox/15.0". The web is the platform.

## Windows

Windows user agents have the following variations, where _x.y_ is the Windows NT version (for instance, Windows NT 6.1).

| Windows version                  | Gecko user agent string                                                           |
| -------------------------------- | --------------------------------------------------------------------------------- |
| Windows NT on x86 or aarch64 CPU | Mozilla/5.0 (Windows NT _x_._y_; rv:10.0) Gecko/20100101 Firefox/10.0             |
| Windows NT on x64 CPU            | Mozilla/5.0 (Windows NT _x_._y_; Win64; x64; rv:10.0) Gecko/20100101 Firefox/10.0 |

## Macintosh

Here, _x.y_ is the version of Mac OS X (for instance, Mac OS X 10.15). Starting in Firefox 87, Firefox caps the reported Mac OS X version number to 10.15, so macOS 11.0 Big Sur and later will be reported as "10.15" in the User-Agent string.

Note that [Firefox no longer officially supports Mac OS X on PowerPC](https://support.mozilla.org/kb/firefox-no-longer-works-mac-os-10-4-or-powerpc).

| Mac OS X version                    | Gecko user agent string                                                            |
| ----------------------------------- | ---------------------------------------------------------------------------------- |
| Mac OS X on x86, x86_64, or aarch64 | Mozilla/5.0 (Macintosh; Intel Mac OS X _x.y_; rv:10.0) Gecko/20100101 Firefox/10.0 |
| Mac OS X on PowerPC                 | Mozilla/5.0 (Macintosh; PPC Mac OS X _x.y_; rv:10.0) Gecko/20100101 Firefox/10.0   |

## Linux

Linux is a more diverse platform. Your distribution of Linux might include an extension that changes your user-agent. A few common examples are given below.

| Linux version                                  | Gecko user agent string                                                            |
| ---------------------------------------------- | ---------------------------------------------------------------------------------- |
| Linux desktop on i686 CPU                      | Mozilla/5.0 (X11; Linux i686; rv:10.0) Gecko/20100101 Firefox/10.0                 |
| Linux desktop on x86_64 CPU                    | Mozilla/5.0 (X11; Linux x86_64; rv:10.0) Gecko/20100101 Firefox/10.0               |
| Nokia N900 Linux mobile, on the Fennec browser | Mozilla/5.0 (Maemo; Linux armv7l; rv:10.0) Gecko/20100101 Firefox/10.0 Fennec/10.0 |

## Android (version 40 and below)

| Form factor | Gecko user agent string                                        |
| ----------- | -------------------------------------------------------------- |
| Phone       | Mozilla/5.0 (Android; Mobile; rv:40.0) Gecko/40.0 Firefox/40.0 |
| Tablet      | Mozilla/5.0 (Android; Tablet; rv:40.0) Gecko/40.0 Firefox/40.0 |

## Android (version 41 and above)

Beginning in version 41, Firefox for Android will contain the Android version as part of the _platform_ token. For increased interoperability, if the browser is running on a version below 4 it will report 4.4. Android versions 4 and above will report the version accurately. Note that the same Gecko—with the same capabilities—is shipped to all versions of Android.

| Form factor | Gecko user agent string                                            |
| ----------- | ------------------------------------------------------------------ |
| Phone       | Mozilla/5.0 (Android 4.4; Mobile; rv:41.0) Gecko/41.0 Firefox/41.0 |
| Tablet      | Mozilla/5.0 (Android 4.4; Tablet; rv:41.0) Gecko/41.0 Firefox/41.0 |

## Focus for Android

From version 1, Focus is powered by Android WebView and uses the following user agent string format:

```
Mozilla/5.0 (Linux; <Android Version> <Build Tag etc.>) AppleWebKit/<WebKit Rev> (KHTML, like Gecko) Version/4.0 Focus/<focusversion> Chrome/<Chrome Rev> Mobile Safari/<WebKit Rev>
```

Tablet versions on WebView mirror mobile, but do not contain a `Mobile` token.

Starting in Version 6, users can opt into using a GeckoView-based Focus for Android with a hidden preference: it uses a GeckoView UA string to advertise Gecko compatibility.

| Focus Version (Rendering Engine) | User Agent string                                                                                                                      |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| 1.0 (WebView Mobile)             | Mozilla/5.0 (Linux; Android 7.0) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/1.0 Chrome/59.0.3029.83 Mobile Safari/537.36 |
| 1.0 (WebView Tablet)             | Mozilla/5.0 (Linux; Android 7.0) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/1.0 Chrome/59.0.3029.83 Safari/537.36        |
| 6.0 (GeckoView)                  | Mozilla/5.0 (Android 7.0; Mobile; rv:62.0) Gecko/62.0 Firefox/62.0                                                                     |

## Klar for Android

Since version 4.1, Klar for Android uses the same UA string as [Focus for Android](#focus_for_android). Before version 4.1, it sent a _Klar/\<version>_ _product/version_ token.

| Klar Version (Rendering Engine) | User Agent string                                                                                                                      |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| 1.0 (WebView)                   | Mozilla/5.0 (Linux; Android 7.0) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Klar/1.0 Chrome/58.0.3029.83 Mobile Safari/537.36  |
| 4.1+ (WebView)                  | Mozilla/5.0 (Linux; Android 7.0) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/4.1 Chrome/62.0.3029.83 Mobile Safari/537.36 |
| 6.0+ (GeckoView)                | Mozilla/5.0 (Android 7.0; Mobile; rv:62.0) Gecko/62.0 Firefox/62.0                                                                     |

## Focus for iOS

Version 7 of Focus for iOS uses a user agent string with the following format:

```
Mozilla/5.0 (iPhone; CPU iPhone OS 12_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/7.0.4 Mobile/16B91 Safari/605.1.15
```

Note: this user agent was retrieved from an iPhone XR simulator and may be different on device.

## Firefox for Fire TV

Version 3 (and probably earlier) of Firefox for Fire TV use a user agent string with the following format:

```
Mozilla/5.0 (Linux; <Android version>) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/<firefoxversion> Chrome/<Chrome Rev> Safari/<WebKit Rev>
```

| Firefox TV version | User Agent string                                                                                                                  |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| v3.0               | Mozilla/5.0 (Linux; Android 7.1.2) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/3.0 Chrome/59.0.3017.125 Safari/537.36 |

## Firefox for Echo Show

From version 1.1, Firefox for Echo Show uses a user agent string with the following format:

```
Mozilla/5.0 (Linux; <Android version>) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/<firefoxversion> Chrome/<Chrome Rev> Safari/<WebKit Rev>
```

| Firefox for Echo Show version | User agent string                                                                                                                  |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| v1.1                          | Mozilla/5.0 (Linux; Android 5.1.1) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/1.1 Chrome/59.0.3017.125 Safari/537.36 |

## Firefox OS

| Form factor     | Gecko user agent string                                           |
| --------------- | ----------------------------------------------------------------- |
| Phone           | Mozilla/5.0 (Mobile; rv:26.0) Gecko/26.0 Firefox/26.0             |
| Tablet          | Mozilla/5.0 (Tablet; rv:26.0) Gecko/26.0 Firefox/26.0             |
| TV              | Mozilla/5.0 (TV; rv:44.0) Gecko/44.0 Firefox/44.0                 |
| Device-specific | Mozilla/5.0 (Mobile; **_nnnn;_** rv:26.0) Gecko/26.0 Firefox/26.0 |

### Device-specific user agent strings

Although it is **strongly discouraged** by Mozilla, some handset manufacturers unfortunately include a token in their device's UA string that represents their device id. If this is the case, the Firefox OS UA string will look like the device-specific string in the table above, where **_nnnn;_** is the manufacturer's code for the device (see [Guidelines](https://wiki.mozilla.org/B2G/User_Agent/Device_Model_Inclusion_Requirements)). Some of them we have noticed are of the form "**NexusOne;**", "**ZTEOpen;**", or "**Open C;**" (note that putting space is also discouraged). We provide this information to assist with your UA detection logic, but Mozilla discourages the detection of a device id in UA strings.

Here is a JavaScript regular expression that will detect all mobile devices, including devices with a device id in their UA string:

```js
/mobi/i
```

The `i` makes it case-insensitive, and `mobi` matches all mobile browsers.

### Firefox OS version number

While the version number for Firefox OS is not included in the UA string, it is possible to infer version information from the Gecko version number present in the UA string.

| Firefox OS version number | Gecko version number |
| ------------------------- | -------------------- |
| 1.0.1                     | 18.0                 |
| 1.1                       | 18.1                 |
| 1.2                       | 26.0                 |
| 1.3                       | 28.0                 |
| 1.4                       | 30.0                 |
| 2.0                       | 32.0                 |
| 2.1                       | 34.0                 |
| 2.2                       | 37                   |
| 2.5                       | 44                   |

> **Note:** It's easy to find the correspondences by looking at the [Mercurial repository names](https://hg.mozilla.org/releases): repositories starting by `mozilla-b2g` are the release repositories for Firefox OS, and have both Firefox OS and Gecko versions in their names.

Firefox OS has a four-digit version number: `X.X.X.Y`. The first two digits are owned by the Mozilla product team and denote versions with new features (eg: v1.1, 1.2, etc.). The third digit is incremented with regular version tags (about every 6 weeks) for security updates, and the fourth is owned by the OEM.

## Firefox for iOS

Firefox for iOS uses the default Mobile Safari UA string, with an additional **FxiOS/\<version>** token on iPod and iPhone, similar to how [Chrome for iOS identifies itself](https://developer.chrome.com/docs/multidevice/user-agent/#chrome_for_ios_user_agent).

| Form factor | Firefox for iOS user agent string                                                                                                           |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| iPod        | Mozilla/5.0 (iPod touch; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) **FxiOS/1.0** Mobile/12F69 Safari/600.1.4 |
| iPhone      | Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) **FxiOS/1.0** Mobile/12F69 Safari/600.1.4     |
| iPad        | Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1 Safari/605.1.15                       |

Regarding the deviation on iPad form factor, see this [issue](https://github.com/mozilla-mobile/firefox-ios/issues/6620).

## Other Gecko-based browsers

These are some sample UA strings from other Gecko-based browsers on various platforms. Note that many of these have not yet been released on Gecko 2.0!

| Browser                        | Gecko user agent string                                                                               |
| ------------------------------ | ----------------------------------------------------------------------------------------------------- |
| Firefox for Maemo (Nokia N900) | Mozilla/5.0 (Maemo; Linux armv7l; rv:10.0.1) Gecko/20100101 Firefox/10.0.1 Fennec/10.0.1              |
| Camino on Mac                  | Mozilla/5.0 (Macintosh; Intel Mac OS X 10.5; rv:2.0.1) Gecko/20100101 Firefox/4.0.1 Camino/2.2.1      |
| SeaMonkey on Windows           | Mozilla/5.0 (Windows NT 5.2; rv:10.0.1) Gecko/20100101 Firefox/10.0.1 SeaMonkey/2.7.1                 |
| SeaMonkey on Mac               | Mozilla/5.0 (Macintosh; Intel Mac OS X 10.5; rv:10.0.1) Gecko/20100101 Firefox/10.0.1 SeaMonkey/2.7.1 |
| SeaMonkey on Linux             | Mozilla/5.0 (X11; Linux i686; rv:10.0.1) Gecko/20100101 Firefox/10.0.1 SeaMonkey/2.7.1                |

## See also

- [Firefox OS User Agent String](https://lawrencemandel.com/2012/07/27/decision-made-firefox-os-user-agent-string/) (blog post w/[bug 777710](https://bugzilla.mozilla.org/show_bug.cgi?id=777710) reference)
- [Final User Agent string for Firefox 4](https://hacks.mozilla.org/2010/09/final-user-agent-string-for-firefox-4/) (blog post)
- Recommendations on [sniffing the UA string for cross-browser support](/en-US/docs/Browser_Detection_and_Cross_Browser_Support)
- [window.navigator.userAgent](/en-US/docs/Web/API/Window/navigator)
- [Add Android version to Fennec UA String (bug 1169772)](https://bugzilla.mozilla.org/show_bug.cgi?id=1169772)

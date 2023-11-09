---
title: Firefox 120 for developers
slug: Mozilla/Firefox/Releases/120
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 120 that affect developers. Firefox 120 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) and ships on [November 21, 2023](https://wiki.mozilla.org/RapidRelease/Calendar#Future_branch_dates).

## Changes for web developers

### Developer tools

### HTML

- Support for the `media` attribute in the [`<source>`](/en-US/docs/Web/HTML/Element/source) element has been reintroduced and expanded to include `<audio>` and `<video>` elements. This attribute was first added in Firefox 15 but was removed in Firefox 53 when its use was limited to `<source>` element within `<picture>`. With this release, the `media` attribute will be available in `<source>` elements within `<audio>`, `<video>`, and `<picture>` ([Firefox bug 1836128](https://bugzil.la/1836128)).

#### Removals

### CSS

#### Removals

### JavaScript

- {{jsxref("Date.parse()")}} now accepts several additional date formats:

  - Numeric dashed dates which do not meet the formal ISO standard are now accepted ([Firefox bug 1557650](https://bugzil.la/1557650)), including:

    - `"01-12-1999"` (month first)
    - `"1999-1-5"` (single-digit month or day)
    - `"10000-01-12"` (year > 9999)
    - `"99-01-05"` or `"01-05-99"` (2-digit year, year must be >31 if it comes first)
    - `"1999-01-05 10:00:00"` (space between date and time).

    These dates will be parsed with behavior typical of other non-ISO dates, such as local time zone and month rollover (April 31 rolls over to May 1 since April 31 doesn't exist).

  - Requirements for characters directly following numbers have been loosened to accept new formats ([Firefox bug 449921](https://bugzil.la/449921)), including:
    - `"DDMonYYYY"`
    - `"Mon.DD.YYYY"`
    - `"DD.Mon.YYYY"`
    - `"YYYY.MM.DD"`
    - `"Mon DD YYYY hh:mmXm"` (`am`/`pm` directly following time)

#### Removals

### SVG

#### Removals

### HTTP

- The [`103 Early Hints`](/en-US/docs/Web/HTTP/Status/103) HTTP [information response](/en-US/docs/Web/HTTP/Status#information_responses) status code is enabled for [preconnecting](/en-US/docs/Web/HTML/Attributes/rel/preconnect) to a particular origin (that the page is likely to need resources from).
  For more details see [Firefox bug 1858712](https://bugzil.la/1858712).
- Firefox supports the [Global Privacy Control](https://globalprivacycontrol.org/) {{HTTPHeader("Sec-GPC")}} request header, which may be sent to indicate that the user does not consent to a website or service selling or sharing their personal information with third parties.
  Users can enable the header, in both normal and private browsing modes, by setting the preference `privacy.globalprivacycontrol.enabled` to `true` (in `about:config`).
  The {{domxref("Navigator.globalPrivacyControl")}} and {{domxref("WorkerNavigator.globalPrivacyControl")}} properties allow JavaScript to check the user consent preference ([Firefox bug 1856029](https://bugzil.la/1856029)).

#### Removals

### Security

#### Removals

### APIs

- The {{domxref("PublicKeyCredential.authenticatorAttachment", "authenticatorAttachment")}} property of the {{domxref("PublicKeyCredential")}} interface is now supported.
  This allows web application client and server code to configure itself based on whether the authenticator is part of the device running web authentication, or can roam between devices (see [Firefox bug 1810851](https://bugzil.la/1810851)).
- The [Minimum PIN Length Extension (`minPinLength`)](/en-US/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#minpinlength) of the [Web Authentication API](/en-US/docs/Web/API/Web_Authentication_API) is supported, allowing a relying party server to request the authenticator's minimum PIN length during creation/registration ([Firefox bug 1844450](https://bugzil.la/1844450)).
- The {{domxref("Navigator.userActivation")}} property and {{domxref("UserActivation")}} interface are now supported.
  These can be used to check whether the user is interacting with the page, or has interacted with it since page load (see [Firefox bug 1791079](https://bugzil.la/1791079)).

#### DOM

#### Media, WebRTC, and Web Audio

#### Removals

### WebAssembly

#### Removals

### WebDriver conformance (WebDriver BiDi, Marionette)

#### General

#### WebDriver BiDi

#### Marionette

## Changes for add-on developers

### Removals

### Other

## Older versions

{{Firefox_for_developers(119)}}

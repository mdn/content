---
title: Firefox 120 for developers
slug: Mozilla/Firefox/Releases/120
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 120 that affect developers. Firefox 120 was released on [November 21, 2023](https://whattrainisitnow.com/release/?version=120).

## Changes for web developers

### HTML

- Support for the `media` attribute in the [`<source>`](/en-US/docs/Web/HTML/Element/source) element has been reintroduced and expanded to include `<audio>` and `<video>` elements. This attribute was first added in Firefox 15 but was removed in Firefox 53 when its use was limited to `<source>` element within `<picture>`. With this release, the `media` attribute will be available in `<source>` elements within `<audio>`, `<video>`, and `<picture>` ([Firefox bug 1836128](https://bugzil.la/1836128)).

### CSS

- The {{CSSXref("color_value/light-dark", "light-dark()")}} CSS Color function is now supported. This allows the setting of a colors for both light & dark without the need for `prefers-color-scheme` media feature ([Firefox bug 1856999](https://bugzil.la/1856999)).
- The [`lh` and `rlh`](/en-US/docs/Learn_web_development/Core/Styling_basics/Values_and_units#line_height_units) line height units are now supported. These allow setting properties relative to the line height of an element, for example, precisely aligning background decoration with multiline text ([Firefox bug 1310170](https://bugzil.la/1310170)).

#### Removals

- The non-standard {{cssxref("-moz-image-rect")}} CSS function for clipping background images has been removed. First introduced in Firefox 4, this function was never standardized or implemented in other browsers ([Firefox bug 1856999](https://bugzil.la/1853867)).

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

  - Timezone `'Z'` is now accepted for non-ISO formats (e.g. `Jan 1 1970 10:00Z`) ([Firefox bug 1852422](https://bugzil.la/1852422))

### HTTP

- The [`103 Early Hints`](/en-US/docs/Web/HTTP/Status/103) HTTP [informational response](/en-US/docs/Web/HTTP/Status#informational_responses) status code is enabled for [preconnecting](/en-US/docs/Web/HTML/Attributes/rel/preconnect) to a particular origin (that the page is likely to need resources from).
  For more details see [Firefox bug 1858712](https://bugzil.la/1858712).
- Firefox supports the [Global Privacy Control](https://globalprivacycontrol.org/) {{HTTPHeader("Sec-GPC")}} request header, which may be sent to indicate that the user does not consent to a website or service selling or sharing their personal information with third parties.
  Users can enable the header, in both normal and private browsing modes, by setting the preference `privacy.globalprivacycontrol.enabled` to `true` (in `about:config`).
  The {{domxref("Navigator.globalPrivacyControl")}} and {{domxref("WorkerNavigator.globalPrivacyControl")}} properties allow JavaScript to check the user consent preference ([Firefox bug 1856029](https://bugzil.la/1856029)).

### APIs

- The {{domxref("PublicKeyCredential.authenticatorAttachment", "authenticatorAttachment")}} property of the {{domxref("PublicKeyCredential")}} interface is now supported.
  This allows web application client and server code to configure itself based on whether the authenticator is part of the device running web authentication, or can roam between devices (see [Firefox bug 1810851](https://bugzil.la/1810851)).
- The [Minimum PIN Length Extension (`minPinLength`)](/en-US/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#minpinlength) of the [Web Authentication API](/en-US/docs/Web/API/Web_Authentication_API) is supported, allowing a relying party server to request the authenticator's minimum PIN length during creation/registration ([Firefox bug 1844450](https://bugzil.la/1844450)).
- The {{domxref("Navigator.userActivation")}} property and {{domxref("UserActivation")}} interface are now supported.
  These can be used to check whether the user is interacting with the page, or has interacted with it since page load (see [Firefox bug 1791079](https://bugzil.la/1791079)).
- The {{domxref("PointerEvent.getCoalescedEvents()")}} method is restricted to use in secure contexts only ([Firefox bug 1858434](https://bugzil.la/1858434)).

### WebDriver conformance (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Added serialization support for `Proxy` and `Generator` objects ([Firefox bug 1841786](https://bugzil.la/1841786)).
- Added `authChallenges` property (the list of authentication challenges present in the headers), to `responseStarted` and `responseCompleted` network events, which will be useful in order to handle the upcoming `network.authRequired` event ([Firefox bug 1855149](https://bugzil.la/1855149)).

## Changes for add-on developers

- Although {{domxref("PointerEvent.getCoalescedEvents()")}} has been restricted to secure contexts ([Firefox bug 1858434](https://bugzil.la/1858434)), content scripts can use this method in documents that aren't a secure context ([Firefox bug 1870498](https://bugzil.la/1870498)).

## Older versions

{{Firefox_for_developers}}

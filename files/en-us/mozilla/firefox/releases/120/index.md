---
title: Firefox 120 for developers
slug: Mozilla/Firefox/Releases/120
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 120 that affect developers. Firefox 120 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) and ships on [November 21, 2023](https://wiki.mozilla.org/RapidRelease/Calendar#Future_branch_dates).

## Changes for web developers

### Developer Tools

### HTML

#### Removals

### CSS

#### Removals

- The `-moz-` prefixed [CSS transform](/en-US/docs/Web/CSS/CSS_transforms) properties have been disabled via the `layout.css.prefixes.transforms` preference being set to `false` by default ([Firefox bug 1855763](https://bugzil.la/1855763)).
  Specifically, the disabled properties are:

  - `-moz-backface-visibility`
  - `-moz-perspective`
  - `-moz-perspective-origin`
  - `-moz-transform`
  - `-moz-transform-origin`
  - `-moz-transform-style`

### JavaScript

- {{jsxref("Date.parse()")}} now accepts numeric dashed dates which do not meet the formal ISO standard, e.g.

  - `"01-12-1999"` (month first)
  - `"1999-1-5"` (single-digit month or day)
  - `"10000-01-12"` (year > 9999)
  - `"99-01-05"` or `"01-05-99"` (2-digit year, year must be >31 if it comes first)
  - `"1999-01-05 10:00:00"` (space between date and time).

  These dates will be parsed with behavior typical of other non-ISO dates, such as local time zone and month rollover (April 31 rolls over to May 1 since April 31 doesn't exist).

#### Removals

### SVG

#### Removals

### HTTP

#### Removals

### Security

#### Removals

### APIs

- The {{domxref("PublicKeyCredential.authenticatorAttachment", "authenticatorAttachment")}} property of the {{domxref("PublicKeyCredential")}} interface is now supported.
  This allows web application client and server code to configure itself based on whether the authenticator is part of the device running web authentication, or can roam between devices (see [Firefox bug 1810851](https://bugzil.la/1810851)).
- The [Minimum PIN Length Extension (`minPinLength`)](/en-US/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#minpinlength) of the [Web Authentication API](/en-US/docs/Web/API/Web_Authentication_API) is supported, allowing a relying party server to request the authenticator's minimum PIN length during creation/registration ([Firefox bug 1844450](https://bugzil.la/1844450)).

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

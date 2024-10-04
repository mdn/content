---
title: Firefox 133 for developers
slug: Mozilla/Firefox/Releases/133
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 133 that affect developers. Firefox 133 is the current [Nightly version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly) and ships on [November 26, 2024](https://whattrainisitnow.com/release/?version=133).

## Changes for web developers

### Developer Tools

### HTML

#### Removals

### CSS

#### Removals

### JavaScript

#### Removals

### SVG

#### Removals

### HTTP

#### Removals

### Security

#### Removals

### APIs

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

- {{WebExtAPIRef("cookies.get")}} now orders cookies according to [RFC 6265, section 5.4](https://datatracker.ietf.org/doc/html/rfc6265#section-5.4). This impacts call results when a cookie has variants with different path components. Previously, the earliest created cookie was matched by {{WebExtAPIRef("cookies.get")}}, {{WebExtAPIRef("cookies.remove")}}, {{WebExtAPIRef("cookies.set")}}, and {{WebExtAPIRef("cookies.getAll")}}. After this change, the cookie with the longest matching path is returned. ([Firefox bug 1798655](https://bugzil.la/1798655))

### Removals

### Other

## Experimental web features

These features are newly shipped in Firefox 133 but are disabled by default. To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`. You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

## Older versions

{{Firefox_for_developers}}

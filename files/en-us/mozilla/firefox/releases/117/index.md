---
title: Firefox 117 for developers
slug: Mozilla/Firefox/Releases/117
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 117 that affect developers. Firefox 117 is the current [Nightly version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly) and ships on [August 29, 2023](https://wiki.mozilla.org/RapidRelease/Calendar#Future_branch_dates).

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

- Fixed a bug where the [Content-Security-Policy](/en-US/docs/Web/HTTP/CSP) `'strict-dynamic'` source expression was not being enforced in `default-src` directives.
  The behavior now matches the specification where `default-src` directive values are used as a fallback when `script-src` is not provided ([Firefox bug 1313937](https://bugzil.la/1313937)).

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

#### WebDriver BiDi

#### Marionette

## Changes for add-on developers

### Removals

### Other

## Older versions

{{Firefox_for_developers(116)}}

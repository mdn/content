---
title: Firefox 96 for developers
slug: Mozilla/Firefox/Releases/96
tags:
  - '96'
  - Firefox
  - Mozilla
  - Release
---
{{FirefoxSidebar}}{{draft}}

This article provides information about the changes in Firefox 96 that will affect developers. Firefox 96 is the current [Nightly version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly), and will ship on [January 11, 2022](https://wiki.mozilla.org/RapidRelease/Calendar#Future_branch_dates).

## Changes for web developers

### Developer Tools

### HTML

#### Removals

### CSS

#### Removals

### JavaScript

#### Removals

### HTTP

- Cookies sent from the same domain but using different schemes (for example http or https) are now considered to be from different sites with respect to the cookie [SameSite](/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite) directive.
  In addition, cookies are assumed to implicitly set `SameSite=Lax` if the `SameSite` attribute is not specified (previously the default was `SameSite=None`), and cookies with `SameSite=None` require a secure context. ({{bug(1617609)}}).

#### Removals

### Security

#### Removals

### APIs

#### DOM

#### Media, WebRTC, and Web Audio

#### Removals

### WebAssembly

#### Removals

### WebDriver conformance (Marionette)

#### Removals

## Changes for add-on developers

#### Removals

### Other

## Older versions

{{Firefox_for_developers(95)}}

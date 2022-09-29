---
title: Firefox 106 for developers
slug: Mozilla/Firefox/Releases/106
tags:
  - "106"
  - Firefox
  - Mozilla
  - Release
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 106 that will affect developers. Firefox 106 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) and will ship on [October 18, 2022](https://wiki.mozilla.org/RapidRelease/Calendar#Future_branch_dates).

## Changes for web developers

### HTML

#### Removals

### CSS

#### Removals

### JavaScript

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

#### Removals

## Changes for add-on developers

- The `object-src` directive in the `"content-security-policy"` manifest key is now optional. The `object-src` directive was designed to restrict obsolete [plugins](/en-US/docs/Glossary/Plugin), and support for these plugins was dropped from Firefox some time ago. See W3C WebExtensions Community Group [issue 204](https://github.com/w3c/webextensions/issues/204), Remove object-src from the CSP (at least in MV3), for more information. ({{bug(1766881)}})

### Removals

### Other

## Older versions

{{Firefox_for_developers(105)}}

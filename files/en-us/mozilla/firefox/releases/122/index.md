---
title: Firefox 122 for developers
slug: Mozilla/Firefox/Releases/122
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 122 that affect developers. Firefox 122 is the current [Nightly version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly) and ships on [January 23, 2024](https://whattrainisitnow.com/release/?version=122).

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

- Removed support for `data:` URLs in SVG `<use>` elements and via the [`SVGUseElement`](/en-US/docs/Web/API/SVGUseElement) interface to prevent [XSS](/en-US/docs/Glossary/Cross-site_scripting) attacks.
  This functionality is behind the preference `svg.use-element.data-url-href.allowed` which can be set to `true` to enable the legacy behavior ([Firefox bug 1806964](https://bugzil.la/1806964)).

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

#### WebDriver BiDi

#### Marionette

## Changes for add-on developers

### Removals

### Other

## Older versions

{{Firefox_for_developers(121)}}

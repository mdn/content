---
title: Firefox 124 for developers
slug: Mozilla/Firefox/Releases/124
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 124 that affect developers. Firefox 124 is the current [Nightly version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly) and ships on [March 19, 2024](https://whattrainisitnow.com/release/?version=124).

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

- The [Screen Wake Lock API](/en-US/docs/Web/API/Screen_Wake_Lock_API) is now supported, allowing a web application to request that the screen not be dimmed or locked while it is active. This is useful for navigation and reading applications, and other applications where the screen doesn't get regular tactile input when in use, which would otherwise keep the screen awake. The API is accessed through {{domxref("Navigator.wakeLock")}} in secure contexts, which returns a {{domxref("WakeLock")}}. This can be used to request a {{domxref("WakeLockSentinel")}} that can be used to monitor the status of the wake lock, and release it manually.
  ([Firefox bug 1874849](https://bugzil.la/1874849)).

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

## Experimental web features

These features are newly shipped in Firefox 124 but are disabled by default. To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`. You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

## Older versions

{{Firefox_for_developers(123)}}

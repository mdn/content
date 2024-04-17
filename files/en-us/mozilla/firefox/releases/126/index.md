---
title: Firefox 126 for developers
slug: Mozilla/Firefox/Releases/126
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 126 that affect developers. Firefox 126 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) and ships on [May 14, 2024](https://whattrainisitnow.com/release/?version=126).

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
  ([Firefox bug 1589554](https://bugzil.la/1589554), [Firefox bug 1874849](https://bugzil.la/1874849)).

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

- The {{WebExtAPIRef("commands.onCommand")}} event now passes the `tab` argument to the event listener. This enables extensions to apply a triggered shortcut to the page in which it was issued, without the need to call the `tabs.query()` method ([Firefox bug 1843866](https://bugzil.la/1843866)).
- The {{WebExtAPIRef("runtime.MessageSender")}} type now includes the `origin` property. This enables message or connection requests to see the page or frame that opened the connection. This is useful for identifying if the origin can be trusted if it isn't apparent from the URL ([Firefox bug 1787379](https://bugzil.la/1787379)).

### Removals

### Other

## Experimental web features

These features are newly shipped in Firefox 126 but are disabled by default. To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`. You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

## Older versions

{{Firefox_for_developers}}

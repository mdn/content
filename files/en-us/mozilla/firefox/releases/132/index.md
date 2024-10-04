---
title: Firefox 132 for developers
slug: Mozilla/Firefox/Releases/132
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 132 that affect developers. Firefox 132 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) and ships on [October 29, 2024](https://whattrainisitnow.com/release/?version=132).

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

- The {{domxref("Notification.silent")}} property is now supported, which controls whether system notifications should be silent. When `silent: true` is specified in the {{domxref("Notification.Notification", "Notification()")}} constructor, the resulting system notification is issued without accompanying sounds or vibrations, regardless of device settings ([Firefox bug 1809028](https://bugzil.la/1809028)).

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

These features are newly shipped in Firefox 132 but are disabled by default. To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`. You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

## Older versions

{{Firefox_for_developers}}

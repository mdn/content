---
title: Firefox 129 for developers
slug: Mozilla/Firefox/Releases/129
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 129 that affect developers. Firefox 129 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) and ships on [August 6, 2024](https://whattrainisitnow.com/release/?version=129).

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

- {{domxref('MediaCapabilities.decodingInfo()')}} can now get decoding information for a particular _encrypted media_ configuration as well unencrypted media, allowing applications to tell ahead of time if the configuration is supported, and whether it will play the content smoothly and be power efficient. Changes include a new property `keySystemConfiguration` on the method's `configuration` argument that defines the properties of the key system used to encrypt the media, and a new `keySystemAccess` property on the returned object, which is a {{domxref('MediaKeySystemAccess')}} object that can be used to create keys and decode the content for playback. ([Firefox bug 1898344](https://bugzil.la/1898344)).

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

These features are newly shipped in Firefox 129 but are disabled by default. To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`. You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

## Older versions

{{Firefox_for_developers}}

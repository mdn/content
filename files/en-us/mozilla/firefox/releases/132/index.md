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

#### DOM

#### Media, WebRTC, and Web Audio

- The {{domxref('HTMLVideoElement/requestVideoFrameCallback','requestVideoFrameCallback()')}} and {{domxref('HTMLVideoElement/cancelVideoFrameCallback','cancelVideoFrameCallback()')}} methods of the {{domxref('HTMLVideoElement')}} interface are now supported. The `requestVideoFrameCallback()` registers a callback function that runs when a new video frame is sent to the compositor. Developers can use this function to perform operations on each video frame, enabling more efficient painting to a canvas, video analysis, synchronization with external audio sources, and so on. The method returns a callback handle that can be passed to `cancelVideoFrameCallback()` in order to cancel the outstanding callback request. ([Firefox bug 1919367](https://bugzil.la/1919367), [Firefox bug 1800882](https://bugzil.la/1800882)).

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

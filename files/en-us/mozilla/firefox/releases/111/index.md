---
title: Firefox 111 for developers
slug: Mozilla/Firefox/Releases/111
tags:
  - "111"
  - Firefox
  - Mozilla
  - Release
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 111 that affect developers. Firefox 111 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) and ships on [March 14, 2023](https://wiki.mozilla.org/RapidRelease/Calendar#Future_branch_dates).

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

- [Origin private file system (OPFS)](/en-US/docs/Web/API/File_System_Access_API#origin_private_file_system) is now supported when using the [File System Access API](/en-US/docs/Web/API/File_System_Access_API).
  The data in this file system is origin-specific: permission prompts are not required to access files, and clearing data for the site/origin deletes the storage.
  The OPFS is accessed with the {{domxref("StorageManager.getDirectory()")}} method, by calling `navigator.storage.getDirectory()` in a worker or the main thread.
  See {{bug(1785123)}} for more details.

#### DOM

#### Media, WebRTC, and Web Audio

- [`RTCInboundRtpStreamStats.trackIdentifier`](/en-US/docs/Web/API/RTCInboundRtpStreamStats#trackidentifier) is now supported.
  This allows developers to associate `inbound-rtp` statistics with a particular track when using {{domxref("RTCPeerConnection.getStats()")}}.
  (For more information see {{bug(1680606)}}.)

#### Removals

### WebAssembly

#### Removals

### WebDriver conformance (WebDriver BiDi, Marionette)

#### WebDriver BiDi

#### Marionette

## Changes for add-on developers

- `matchDiacritics` has been added to the {{WebExtAPIRef("Find.find")}} API. This option enables searches to distinguish between accented letters and their base letters. For example, when set to `true`, searching for "résumé" does not find a match for "resume" ({{bug(1680606)}})

### Removals

### Other

## Older versions

{{Firefox_for_developers(110)}}

---
title: Firefox 102 for developers
slug: Mozilla/Firefox/Releases/102
tags:
  - '102'
  - Firefox
  - Mozilla
  - Release
---
{{FirefoxSidebar}}

This article provides information about the changes in Firefox 102 that will affect developers. Firefox 102 is the current [Nightly version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly) and will ship on [June 28, 2022](https://wiki.mozilla.org/RapidRelease/Calendar#Future_branch_dates).

## Changes for web developers

### Developer Tools

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

- The Non-standard interfaces [IDBMutableFile](/en-US/docs/Web/API/IDBMutableFile), [IDBFileHandle](/en-US/docs/Web/API/IDBFileHandle), [IDBFileRequest](/en-US/docs/Web/API/IDBFileRequest), and the method [IDBDatabase.createMutableFile()](/en-US/docs/Web/API/IDBDatabase#idbdatabase.createmutablefile), have been disabled by default, in preparation for removal in a future release ({{bug(1764771)}}).

#### DOM

- The Firefox-only property {{domxref("Window.sidebar")}} has been moved behind a preference, and is planned for removal ({{bug(1768486)}}).

#### Media, WebRTC, and Web Audio

#### Removals

### WebAssembly

#### Removals

### WebDriver conformance (WebDriver BiDi, Marionette)

#### Removals

## Changes for add-on developers

- The {{WebExtAPIRef("scripting")}} API, which provides features to execute script, insert and remove CSS, and manage the registration of content scripts is now available to Manifest V2 extensions ({{bug(1766615)}}).

#### Removals

### Other

## Older versions

{{Firefox_for_developers(101)}}

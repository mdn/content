---
title: Firefox 137 for developers
slug: Mozilla/Firefox/Releases/137
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 137 that affect developers. Firefox 137 is the current [Nightly version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly) and ships on [April 1, 2025](https://whattrainisitnow.com/release/?version=137).

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

#### Removals

### WebAssembly

#### Removals

### WebDriver conformance (WebDriver BiDi, Marionette)

#### General

#### WebDriver BiDi

#### Marionette

## Changes for add-on developers

- Adds {{WebExtAPIRef("commands.openShortcutSettings")}} that opens the Manage Extension Shortcuts page of Manage Your Extensions (`about:addons`) and, if the extension has shortcuts, scrolls to and highlights the extension's shortcut key options. ([Firefox bug 1538451](https://bugzil.la/1538451))
- The 10 MB quota for data stored by the {{WebExtAPIRef("storage.session")}} API is now enforced. ([Firefox bug 1915688](https://bugzil.la/1915688))

### Removals

### Other

## Experimental web features

These features are newly shipped in Firefox 137 but are disabled by default. To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`. You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

## Older versions

{{Firefox_for_developers}}

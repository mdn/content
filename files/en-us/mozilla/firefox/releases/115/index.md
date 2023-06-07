---
title: Firefox 115 for developers
slug: Mozilla/Firefox/Releases/115
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 115 that affect developers. Firefox 115 is the current [Nightly version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly) and ships on [July 04, 2023](https://wiki.mozilla.org/RapidRelease/Calendar#Future_branch_dates).

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

#### WebDriver BiDi

#### Marionette

## Changes for add-on developers

- To support its deprecation from Manifest V3 extensions, manifest key property [`browser_style`](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles) defaults to `false` in [`options_ui`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) and [`sidebar_action`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) for Manifest V3 extensions ([Firefox bug 1830710](https://bugzil.la/1830710)). See [Manifest v3 migration](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration) for information about transitioning from `browser_style` in Manifest V3 extensions.
- The {{WebExtAPIRef("commands.onChanged")}} event, which enables web extensions to listen for changes to command shortcuts, has been added ([Firefox bug 1801531](https://bugzil.la/1801531)).
- Support has been added for {{WebExtAPIRef("storage.session")}}, which provides the ability to store data in memory for the duration of the browser session ([Firefox bug 18237131](https://bugzil.la/1823713)).

### Removals

### Other

## Older versions

{{Firefox_for_developers(114)}}

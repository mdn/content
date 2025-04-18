---
title: Firefox 139 for developers
slug: Mozilla/Firefox/Releases/139
page-type: firefox-release-notes
sidebar: firefoxsidebar
---

This article provides information about the changes in Firefox 139 that affect developers. Firefox 139 was released on [May 27, 2025](https://whattrainisitnow.com/release/?version=139).

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

- Localized extensions now cascade through locale subtags to find translations before reverting to the extension's default language. Previously, the extension used the extension default if a translation couldn't be found for a language with subtags. See [Localized string selection](/en-US/docs/Mozilla/Add-ons/WebExtensions/Internationalization#localized_string_selection) in the Internationalization article for more details of the new behavior. ([Firefox bug 1381580](https://bugzil.la/1381580))

### Removals

### Other

## Experimental web features

These features are newly shipped in Firefox 139 but are disabled by default. To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`. You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

## Older versions

{{Firefox_for_developers}}

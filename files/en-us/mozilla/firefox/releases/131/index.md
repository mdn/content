---
title: Firefox 131 for developers
slug: Mozilla/Firefox/Releases/131
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 131 that affect developers. Firefox 131 is the current [Nightly version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly) and ships on [October 1, 2024](https://whattrainisitnow.com/release/?version=131).

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

- A {{httpheader("Set-Cookie")}} HTTP header with the attribute value of [`SameSite=None`](/en-US/docs/Web/HTTP/Headers/Set-Cookie#none) must now also include the [`Secure`](/en-US/docs/Web/HTTP/Headers/Set-Cookie#secure) attribute. This ensures that cookies set with `SameSite=None` are only ever sent over HTTPS channels. ([Firefox bug 1909673](https://bugzil.la/1909673)).

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

### Removals

### Other

## Experimental web features

These features are newly shipped in Firefox 131 but are disabled by default. To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`. You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

## Older versions

{{Firefox_for_developers}}

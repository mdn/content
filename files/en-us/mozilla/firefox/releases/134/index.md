---
title: Firefox 134 for developers
slug: Mozilla/Firefox/Releases/134
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 134 that affect developers. Firefox 134 is the current [Nightly version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly) and ships on [January 7, 2025](https://whattrainisitnow.com/release/?version=134).

## Changes for web developers

### Developer Tools

### HTML

#### Removals

### CSS

#### Removals

### JavaScript

- Support for the {{jsxref("RegExp.escape()")}} static method that can be used to escape any potential regex syntax characters in a string, returning a new string that can be safely used as a [literal](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) pattern for the {{jsxref("RegExp/RegExp", "RegExp()")}} constructor. ([Firefox bug 1918235](https://bugzil.la/1918235)).
- The {{jsxref("Promise.try()")}} convenience method is now supported.
  The method takes a callback of any kind (a function that returns or throws, synchronously or asynchronously) and wraps its result in a {{jsxref("Promise")}}.
  This allows you to use promise semantics ({{jsxref("Promise.then", ".then()")}}, {{jsxref("Promise.catch", ".catch()")}}) to handle the result from any kind of method. ([Firefox bug 1917879](https://bugzil.la/1917879) and [Firefox bug 1905364](https://bugzil.la/1905364)).

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

### Removals

### Other

## Experimental web features

These features are newly shipped in Firefox 134 but are disabled by default. To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`. You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

- **`Intl.DurationFormat`** (Nightly release): {{jsxref("Intl.DurationFormat")}} enables locale-sensitive formatting of durations. ([Firefox bug 1648139](https://bugzil.la/1648139)).

## Older versions

{{Firefox_for_developers}}

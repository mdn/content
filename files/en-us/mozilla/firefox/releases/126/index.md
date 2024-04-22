---
title: Firefox 126 for developers
slug: Mozilla/Firefox/Releases/126
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 126 that affect developers. Firefox 126 is the current [Nightly version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly) and ships on [May 14, 2024](https://whattrainisitnow.com/release/?version=126).

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

- The ability to define states for custom elements and match them using CSS selectors is now available by default.
  The custom states are represented as custom identifiers that can be added to or removed from the element's {{domxref("ElementInternals.states")}} property (a {{domxref("CustomStateSet")}}). The CSS [`:state()`](/en-US/docs/Web/CSS/:state) pseudo-class takes a custom identifier as an argument and matches custom elements if the identifier is present in their set of states. ([Firefox bug 1887543](https://bugzil.la/1887543)).

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

These features are newly shipped in Firefox 126 but are disabled by default. To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`. You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

## Older versions

{{Firefox_for_developers}}

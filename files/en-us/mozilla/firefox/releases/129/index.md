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

- The [@starting-style](/en-US/docs/Web/CSS/@starting-style) CSS at-rule is supported. This lets you define starting values for properties set on an element that you want to transition from when the element receives its first style update. Currently animating from `display: none;` is not supported ([Firefox bug 1834876](https://bugzil.la/1834876) and [Firefox bug 1834877](https://bugzil.la/1834877)).

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

- The deprecated {{domxref("TextEvent", "textInput")}} event is now supported, enabling web apps that use legacy libraries or frameworks that rely on these events.
  The [`beforeinput` event](/en-US/docs/Web/API/Element/beforeinput_event) supersedes `textInput`, and should always be used by new applications.
  ([Firefox bug 1901923](https://bugzil.la/1901923).)
- The default `.toJSON()` methods {{domxref("GeolocationCoordinates.toJSON()")}} and {{domxref("GeolocationPosition.toJSON()")}} are now supported, enabling serialization of `GeolocationCoordinates` and `GeolocationPosition` objects with {{jsxref("JSON.stringify()")}} ([Firefox bug 1890706](https://bugzil.la/1890706)).
- {{domxref("CSSPageDescriptors")}} is now supported, and is used as the type for {{domxref("CSSPageRule.style")}} instead of {{domxref("CSSStyleDeclaration")}} — matching the current specification.
  Among other fixes, this resolves an issue where setting the page [`size`](/en-US/docs/Web/CSS/@page#size) in a CSS `@page` at-rule was not reflected in `CSSPageRule.style`.
  ([Firefox bug 1890842](https://bugzil.la/1890842), [Firefox bug 1867106](https://bugzil.la/1867106).)

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

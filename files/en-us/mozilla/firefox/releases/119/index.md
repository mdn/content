---
title: Firefox 119 for developers
slug: Mozilla/Firefox/Releases/119
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 119 that affect developers. Firefox 119 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly) and ships on [October 24, 2023](https://wiki.mozilla.org/RapidRelease/Calendar#Future_branch_dates).

## Changes for web developers

### Developer Tools

### HTML

#### Removals

### CSS

#### Removals

### JavaScript

- The {{jsxref("Object.groupBy()")}} and {{jsxref("Map.groupBy()")}} static methods for grouping the elements of an iterable are now supported (See [Firefox bug 1792650](https://bugzil.la/1792650) for more details.)

#### Removals

### SVG

#### Removals

### HTTP

#### Removals

### Security

#### Removals

### APIs

#### DOM

- [ARIA](/en-US/docs/Web/Accessibility/ARIA) reflection is enabled for attributes that do not reference other elements; only non-IDREF attributes are reflected. This allows developers to get and set ARIA attributes on DOM elements directly via JavaScript APIs, rather than by using `setAttribute` and `getAttribute`. For example, `el.ariaPressed = "true";` is now supported in addition to `el.setAttribute("aria-pressed", "true");`. (See [Firefox bug 1785412](https://bugzil.la/1785412) for more details.)

#### Media, WebRTC, and Web Audio

#### Removals

### WebAssembly

#### Removals

### WebDriver conformance (WebDriver BiDi, Marionette)

#### WebDriver BiDi

#### Marionette

## Changes for add-on developers

### Removals

### Other

## Older versions

{{Firefox_for_developers(118)}}

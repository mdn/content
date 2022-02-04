---
title: Firefox 98 for developers
slug: Mozilla/Firefox/Releases/98
tags:
  - '98'
  - Firefox
  - Mozilla
  - Release
---
{{FirefoxSidebar}}{{draft}}

This article provides information about the changes in Firefox 98 that will affect developers. Firefox 98 is the current [Nightly version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly), and will ship on [March 8, 2022](https://wiki.mozilla.org/RapidRelease/Calendar#Future_branch_dates).

## Changes for web developers

### Developer Tools

### HTML

#### Removals

### CSS

#### Removals

### JavaScript

- The properties `colorSpaceConversion`, `resizeWidth` and `resizeHeight` can be passed to the method {{domxref("createImageBitmap()")}} using the `options` object ({{bug(1748868)}} and {{bug(1733559)}}).

#### Removals

### HTTP

#### Removals

### Security

#### Removals

### APIs

#### DOM

- {{domxref("ElementInternals")}} now has new form-associated custom element methods and properties that allow custom elements to interact with a form.
  These include the {{domxref("ElementInternals.form","form")}}, {{domxref("ElementInternals.labels","labels")}} and {{domxref("ElementInternals.willValidate", "willValidate")}} properties, and the {{domxref("ElementInternals.setFormValue()","setFormValue()")}} method.
  ({{bug(1556362)}}, {{bug(1556373)}}, {{bug(1556365)}}, {{bug(1556449)}}).

#### Media, WebRTC, and Web Audio

#### Removals

### WebAssembly

#### Removals

### WebDriver conformance (Marionette)

#### Removals

## Changes for add-on developers

#### Removals

### Other

## Older versions

{{Firefox_for_developers(97)}}

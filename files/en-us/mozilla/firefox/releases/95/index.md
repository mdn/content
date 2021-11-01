---
title: Firefox 95 for developers
slug: Mozilla/Firefox/Releases/95
tags:
  - '95'
  - Firefox
  - Mozilla
  - Release
---
{{FirefoxSidebar}}{{draft}}

This article provides information about the changes in Firefox 95 that will affect developers.
Firefox 95 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta), and will ship on [December 7, 2021](https://wiki.mozilla.org/RapidRelease/Calendar#Future_branch_dates).

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

- The {{domxref("Crypto.randomUUID()")}} function is now supported. This returns a cryptographically strong 36 character fixed-length UUID ({{bug(1723674)}}).

#### DOM

- Support for additional {{domxref("ElementInternals")}} properties and methods that allow a custom element to interact with a form.
  These include {{domxref("ElementInternals.form","form")}} to get the form associated with the element, {{domxref("ElementInternals.labels","labels")}} to get the list of labels ({{bug(1556373)}}), and the {{domxref("ElementInternals.setFormValue()","setFormValue()")}} method to set the sanitized value and user-entered data, if needed.
  The related bugs are: {{bug(1556362)}}, {{bug(1556373)}}, {{bug(1556449)}}.

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

{{Firefox_for_developers(94)}}

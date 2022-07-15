---
title: Firefox 104 for developers
slug: Mozilla/Firefox/Releases/104
tags:
  - '104'
  - Firefox
  - Mozilla
  - Release
---
{{FirefoxSidebar}}

This article provides information about the changes in Firefox 104 that will affect developers. Firefox 104 is the current [Nightly version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly) and will ship on [August 23, 2022](https://wiki.mozilla.org/RapidRelease/Calendar#Future_branch_dates).

## Changes for web developers

### Developer Tools

### HTML

#### Removals

### CSS

#### Removals

### JavaScript

- Native Error types can now be serialized using the [structured clone algorithm](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).
  This includes {{JSxRef("Error")}}, {{JSxRef("EvalError")}}, {{JSxRef("RangeError")}}, {{JSxRef("ReferenceError")}}, {{JSxRef("SyntaxError")}}, {{JSxRef("TypeError")}}, {{JSxRef("URIError")}} and {{JSxRef("AggregateError")}}.
  Serialized properties include the [`name`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/name), [`message`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/message), [`cause`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/cause), [`fileName`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/fileName), [`lineNumber`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/lineNumber) and [`columnNumber`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/columnNumber).
  [`stack`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/Stack) is only serialized in the nightly builds ({{bug(1774866)}}).
  For {{JSxRef("AggregateError")}} the `message`, `name`, `cause` and `errors` properties are serialized
  See {{bug(1556604)}} for more details.

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

#### Removals

## Changes for add-on developers

#### Removals

### Other

## Older versions

{{Firefox_for_developers(103)}}

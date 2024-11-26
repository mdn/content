---
title: Firefox 134 for developers
slug: Mozilla/Firefox/Releases/134
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 134 that affect developers. Firefox 134 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) and ships on [January 7, 2025](https://whattrainisitnow.com/release/?version=134).

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
- {{jsxref("Intl.DurationFormat")}} is supported, enabling locale-sensitive formatting of durations. ([Firefox bug 1648139](https://bugzil.la/1648139)).

#### Removals

### SVG

#### Removals

### HTTP

#### Removals

### Security

#### Removals

### APIs

- The [`PushManager.supportedContentEncodings`](/en-US/docs/Web/API/PushManager/supportedContentEncodings_static) static method is now supported for getting the allowed algorithms for encrypting the payload of a [push message](/en-US/docs/Web/API/Push_API). ([Firefox bug 1497430](https://bugzil.la/1497430)).
- {{domxref("AudioParam.value")}} now allows the value to be set even during the time that an automated event is scheduled: previously the operation would silently be ignored at those times. ([Firefox bug 1308435](https://bugzil.la/1308435)).

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

- **`autocorrect`**: <code>dom.forms.autocorrect</code>.
  The HTML [`autocorrect`](/en-US/docs/Web/HTML/Global_attributes/autocorrect) attribute and {{domxref("HTMLElement.autocorrect")}} property allow autocompletion in editable text elements, including: most kinds of text {{htmlelement("input")}} elements, {{htmlelement("textarea")}} elements, and elements that have the [`contenteditable`](/en-US/docs/Web/HTML/Global_attributes/contenteditable) attribute set ([Firefox bug 1725806](https://bugzil.la/1725806)).

## Older versions

{{Firefox_for_developers}}

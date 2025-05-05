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
- Content scripts and styles are now guaranteed to execute in the order of registration (i.e., their order in the [`content_scripts` manifest key array](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)). Previously, the order was only guaranteed for scripts within the same `js` array. ([Firefox bug 1792685](https://bugzil.la/1792685))

### Removals

### Other

## Experimental web features

These features are newly shipped in Firefox 139 but are disabled by default. To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`. You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

- **Support for escaping `<` and `>` in attributes when serializing HTML**: `dom.security.html_serialization_escape_lt_gt`.
  Firefox now replaces the `<` and `>` characters with `&lt;` and `&gt;`, respectively, in attributes when serializing HTML. This helps prevent certain exploits where HTML is serialized and then injected back into the DOM.
  The affected methods and properties are: {{domxref("Element.innerHTML")}}, {{domxref("Element.outerHTML")}}, {{domxref("Element.getHTML()")}}, {{domxref("ShadowRoot.innerHTML")}}, and {{domxref("ShadowRoot.getHTML()")}}. ([Firefox bug 1941347](https://bugzil.la/1941347)).

## Older versions

{{Firefox_for_developers}}

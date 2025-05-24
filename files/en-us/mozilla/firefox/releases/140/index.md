---
title: Firefox 140 for developers
slug: Mozilla/Firefox/Releases/140
page-type: firefox-release-notes
sidebar: firefoxsidebar
---

This article provides information about the changes in Firefox 140 that affect developers. Firefox 140 is the current [Nightly version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly) and ships on [June 24, 2025](https://whattrainisitnow.com/release/?version=140).

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

### Escape < and > in attributes when serializing HTML

- {{domxref("Element.innerHTML")}}, {{domxref("Element.outerHTML")}}, {{domxref("Element.getHTML()")}}, {{domxref("ShadowRoot.innerHTML")}}, and {{domxref("ShadowRoot.getHTML()")}} now replace the `<` and `>` characters with `&lt;` and `&gt;` (respectively) when serializing the HTML to a string. This prevents certain exploits where HTML is serialized and then injected back into the DOM.
  ([Firefox bug 1962084](https://bugzil.la/1962084)).

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

- Support added for `unspecified` in {{WebExtAPIRef("cookies.SameSiteStatus")}}. In addition, `unspecified` is now the default value for `sameSite` in {{WebExtAPIRef("cookies.set()")}}. ([Firefox bug 1550032](https://bugzil.la/1550032))

### Removals

### Other

## Experimental web features

These features are shipping in Firefox 140 but are disabled by default. To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`. You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

## Older versions

{{Firefox_for_developers}}

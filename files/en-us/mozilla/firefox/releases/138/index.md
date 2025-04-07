---
title: Firefox 138 for developers
slug: Mozilla/Firefox/Releases/138
page-type: firefox-release-notes
sidebar: firefoxsidebar
---

This article provides information about the changes in Firefox 138 that affect developers.
Firefox 138 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) and ships on [April 29, 2025](https://whattrainisitnow.com/release/?version=138).

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

- Support provided for `page_action` as a {{WebExtAPIRef("menus.ContextType")}} in the {{WebExtAPIRef("menus")}} API for Manifest V3 extensions. This provides Manifest V3 extensions the same ability as Manifest V2 extensions to add menu items to `page_action`. ([Firefox bug 1951166](https://bugzil.la/1951166))
- The {{WebExtAPIRef("contextualIdentities")}} API is no longer defined in Firefox for Android. Previously, it was defined but defective. ([Firefox bug 1659500](https://bugzil.la/1659500))
- The `contextualIdentities` permission is now not recognized on Firefox for Android. Previously, it enabled a broken version of the "containers" feature. ([Firefox bug 1659500](https://bugzil.la/1659500))
- The new Manifest V3 version of the {{WebExtAPIRef("userScripts")}} API is now available on Firefox for Android. ([Firefox bug 1949955](https://bugzil.la/1949955))
- The {{WebExtAPIRef("alarms.create")}} API now returns a Promise instead of undefined. ([Firefox bug 1869171](https://bugzil.la/1869171))

### Removals

### Other

## Experimental web features

These features are newly shipped in Firefox 138 but are disabled by default.
To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`.
You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

- **UA styles for `<h1>` nested into sectioning elements:** `layout.css.h1-in-section-ua-styles.enabled`.

  The `<h1>` heading doesn't decrease in font size now when nested within [sectioning elements](/en-US/docs/Web/HTML/Content_categories#sectioning_content) `<article>`, `<aside>`, `<nav>`, and `<section>`. The UA styles for `<h1>` nested within sectioning elements are no longer relevant since the outline algorithm [has been removed](https://github.com/whatwg/html/pull/7829) from the HTML specification. ([Firefox bug 1883896](https://bugzil.la/1883896)).

  As part of a staged rollout of this removal 5% of users of Firefox 138 and 50% of users of Firefox Beta 138 will have the value of `layout.css.h1-in-section-ua-styles.enabled` set to `false` ([Intent to unship: UA styles for h1 in article, aside, nav, section](https://groups.google.com/a/mozilla.org/g/dev-platform/c/CzG_pVa7pws/m/Ab3Bwsg2BQAJ)).

  > [!NOTE]
  > The preference for this feature works in reverse: it's set to `false` in the Nightly build, which removes the UA styling for headings nested in sectioning elements. It's set to `true` in all other channels, which retains the existing UA styling for the nested headings.

## Older versions

{{Firefox_for_developers}}

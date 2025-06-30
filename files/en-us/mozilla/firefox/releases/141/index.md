---
title: Firefox 141 for developers
short-title: Firefox 141 (Beta)
slug: Mozilla/Firefox/Releases/141
page-type: firefox-release-notes-active
sidebar: firefoxsidebar
---

This article provides information about the changes in Firefox 141 that affect developers.
Firefox 141 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly) and ships on [July 22, 2025](https://whattrainisitnow.com/release/?version=141).

> [!NOTE]
> The release notes for this Firefox version are still a work in progress. You can [view the project tracker for this release here](https://github.com/mdn/mdn/issues/698).

<!-- Authors: Please uncomment any headings you are writing notes for -->

## Changes for web developers

<!-- ### Developer Tools -->

### HTML

- The HTML [`webkitdirectory`](/en-US/docs/Web/HTML/Reference/Elements/input/file#webkitdirectory) attribute and the corresponding {{domxref("HTMLInputElement.webkitdirectory")}} property are now supported on Firefox Android.
  The attribute can be set to indicate that an [`<input type="file">`](/en-US/docs/Web/HTML/Reference/Elements/input/file) element should offer selection of directories instead of files. ([Firefox bug 1887878](https://bugzil.la/1887878)).

<!-- #### Removals -->

<!-- ### CSS -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### JavaScript -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### SVG -->

<!-- #### Removals -->

### HTTP

- The [`"cache"`](/en-US/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache) directive of the {{httpheader("Clear-Site-Data")}} response header now clears the {{glossary("bfcache")}} (backwards-forwards cache).
  This allows a site to ensure that if anyone navigates backward after a user has signed out, private details that were visible during the initial session will not be exposed. ([Firefox bug 1930501](https://bugzil.la/1930501)).

<!-- #### Removals -->

<!-- ### Security -->

<!-- #### Removals -->

<!-- ### APIs -->

<!-- #### DOM -->

<!-- #### Media, WebRTC, and Web Audio -->

<!-- #### Removals -->

<!-- ### WebAssembly -->

<!-- #### Removals -->

<!-- ### WebDriver conformance (WebDriver BiDi, Marionette) -->

<!-- #### General -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Changes for add-on developers

- Adds the {{WebExtAPIRef('i18n.getPreferredSystemLanguages')}} method to retrieve the preferred locales of the operating system. This complements {{WebExtAPIRef('i18n.getAcceptLanguages')}} which return details of the locales set in the browser. ([Firefox bug 1888486](https://bugzil.la/1888486))

<!-- ### Removals -->

<!-- ### Other -->

## Experimental web features

These features are shipping in Firefox 141 but are disabled by default.
To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`.
You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

## Older versions

{{Firefox_for_developers}}

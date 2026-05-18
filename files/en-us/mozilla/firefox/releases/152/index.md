---
title: Firefox 152 release notes for developers (Nightly)
short-title: Firefox 152 (Nightly)
slug: Mozilla/Firefox/Releases/152
page-type: firefox-release-notes-active
sidebar: firefox
---

This article provides information about the changes in Firefox 152 that affect developers.
Firefox 152 is the current [Nightly version of Firefox](https://www.firefox.com/en-US/channel/desktop/#nightly) and ships on [June 16, 2026](https://whattrainisitnow.com/release/?version=152).

> [!NOTE]
> The release notes for this Firefox version are still a work in progress.

<!-- Authors: Please uncomment any headings you are writing notes for -->

## Changes for web developers

<!-- ### Developer Tools -->

<!-- ### HTML -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### MathML -->

<!-- #### Removals -->

<!-- ### SVG -->

<!-- #### Removals -->

<!-- ### CSS -->

<!-- #### Removals -->

<!-- ### JavaScript -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### HTTP -->

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

- The ability of extensions to dynamically execute code in their `moz-extension:` documents with {{WebExtAPIRef("tabs.executeScript")}}, {{WebExtAPIRef("tabs.insertCSS")}}, {{WebExtAPIRef("tabs.removeCSS")}}, {{WebExtAPIRef("scripting.executeScript")}}, {{WebExtAPIRef("scripting.insertCSS")}}, and {{WebExtAPIRef("scripting.removeCSS")}} has been removed. This feature was deprecated in Firefox 149. ([Firefox bug 2015559](https://bugzil.la/2015559))

  As an alternative, an extension can run code in its documents dynamically by registering a {{WebExtAPIRef("runtime.onMessage")}} listener in the document's script, then sending a message to trigger execution of the required code.

<!-- ### Removals -->

<!-- ### Other -->

## Experimental web features

These features are shipping in Firefox 152 but are disabled by default.
To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`.
You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

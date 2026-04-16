---
title: Firefox 151 release notes for developers (Nightly)
short-title: Firefox 151 (Nightly)
slug: Mozilla/Firefox/Releases/151
page-type: firefox-release-notes-active
sidebar: firefox
---

This article provides information about the changes in Firefox 151 that affect developers.
Firefox 151 is the current [Nightly version of Firefox](https://www.firefox.com/en-US/channel/desktop/#nightly) and ships on [May 19, 2026](https://whattrainisitnow.com/release/?version=151).

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

- {{WebExtAPIRef("tab.group")}} and {{WebExtAPIRef("tab.ungroup")}} now correctly add and remove a split view when a call includes one of the split view's tabs. Previously, a call would fail or close the split view. ([Firefox bug 2029099](https://bugzil.la/2029099))
- {{WebExtAPIRef("tab.move")}} now correctly moves a split view to the right when a call includes one of the split view's tabs. Previously, a call moved a split view only to the left or to the end of the tab list. ([Firefox bug 2027855](https://bugzil.la/2027855))

<!-- ### Removals -->

<!-- ### Other -->

## Experimental web features

These features are shipping in Firefox 151 but are disabled by default.
To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`.
You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

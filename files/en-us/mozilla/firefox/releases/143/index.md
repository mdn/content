---
title: Firefox 143 for developers
short-title: Firefox 143 (Beta)
slug: Mozilla/Firefox/Releases/143
page-type: firefox-release-notes-active
sidebar: firefox
---

This article provides information about the changes in Firefox 143 that affect developers.
Firefox 143 is the current [Beta version of Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) and ships on [September 16, 2025](https://whattrainisitnow.com/release/?version=143).

> [!NOTE]
> The release notes for this Firefox version are still a work in progress.

<!-- Authors: Please uncomment any headings you are writing notes for -->

## Changes for web developers

<!-- ### Developer Tools -->

<!-- ### HTML -->

<!-- No notable changes. -->

<!-- #### Removals -->

### CSS

- The {{cssxref("::details-content")}} pseudo-element is now enabled by default. It lets you style the content of the {{htmlElement("details")}} element.
  ([Firefox bug 1941406](https://bugzil.la/1941406)).
- Multi-pass grid track sizing is now enabled by default and follows the algorithm outlined in the CSS Grid specification. In the multi-pass algorithm, columns are sized first, then rows; percentage values are resolved after the container size is known. With this default support, [percentage-based](/en-US/docs/Web/CSS/grid-template-rows#percentage) row tracks and grid items with aspect ratios will now be sized correctly in more cases.
  ([Firefox bug 1957244](https://bugzil.la/1957244)).

<!-- #### Removals -->

<!-- ### JavaScript -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### SVG -->

<!-- #### Removals -->

<!-- ### HTTP -->

<!-- #### Removals -->

<!-- ### Security -->

<!-- #### Removals -->

### APIs

<!-- #### DOM -->

<!-- #### Media, WebRTC, and Web Audio -->

#### Removals

- The deprecated {{domxref("CompositionEvent.locale")}} property is no longer supported.
  ([Firefox bug 1700969](https://bugzil.la/1700969)).

<!-- ### WebAssembly -->

<!-- #### Removals -->

<!-- ### WebDriver conformance (WebDriver BiDi, Marionette) -->

<!-- #### General -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Changes for add-on developers

- Addition of {{WebExtAPIRef("storage.StorageArea.getKeys()")}}. This method returns an array containing all of the keys in a storage area. It's available for all storage areas, that is {{WebExtAPIRef("storage.sync", "sync")}}, {{WebExtAPIRef("storage.local", "local")}}, {{WebExtAPIRef("storage.session", "session")}}, and {{WebExtAPIRef("storage.managed", "managed")}}. ([Firefox bug 1910669](https://bugzil.la/1910669))
- User selection of an extension suggestion in the address bar (omnibox), an action that fires {{WebExtAPIRef("omnibox.onInputEntered")}}, is now considered a [user action](/en-US/docs/Mozilla/Add-ons/WebExtensions/User_actions). In addition to enabling the APIs that require a user action, selecting an extension suggestion in the address bar also grants the `"activeTab"` permission.

<!-- ### Removals -->

<!-- ### Other -->

## Experimental web features

- **`text-autospace`**: `layout.css.text-autospace.enabled`

  The **`text-autospace`** CSS property allows you to specify the space applied between Chinese/Japanese/Korean (CJK) and non-CJK characters. Currently these values are only parsed and there is no effect on the output. ([Firefox bug 1869577](https://bugzil.la/1869577)).

These features are shipping in Firefox 143 but are disabled by default.
To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`.
You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

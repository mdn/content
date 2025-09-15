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

- The [`type="color"`](/en-US/docs/Web/HTML/Reference/Elements/input/color) {{HTMLElement("input")}} element now accepts not only HEX colors like `#ff6699` but also all CSS [`<color>`](/en-US/docs/Web/CSS/color_value) values, for example `oklab(50% 0.1 0.1 / 0.5)`. ([Firefox bug 1965029](https://bugzil.la/1965029)).

<!-- No notable changes. -->

<!-- #### Removals -->

### CSS

- The {{cssxref("::details-content")}} pseudo-element is now enabled by default. It lets you style the content of the {{htmlElement("details")}} element.
  ([Firefox bug 1941406](https://bugzil.la/1941406)).
- The {{cssxref("::marker")}} pseudo-element can now be used to style a list item that has been created using the {{cssxref("::before")}} or the {{cssxref("::after")}} pseudo-element. This is achieved using the [`::before::marker`](/en-US/docs/Web/CSS/::before#beforemarker_nested_pseudo-elements) and [`::after::marker`](/en-US/docs/Web/CSS/::after#aftermarker_nested_pseudo-elements) selectors.
  ([Firefox bug 1980215](https://bugzil.la/1980215)).
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

### WebDriver conformance (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Updated the `browsingContext.contextCreated` event to be emitted for all open contexts when subscribing to the event ([Firefox bug 1754273](https://bugzil.la/1754273)).
- Implemented new commands for the `network` module to enable recording network data:
  - `network.addDataCollector` adds a network data collector to `contexts`, `userContexts` or globally. The collector will record network data corresponding to the provided `dataTypes`. At the moment, only the "response" data type is supported. A `maxEncodedDataSize` must also be provided, network data exceeding this size will not be recorded ([Firefox bug 1971778](https://bugzil.la/1971778)).
  - `network.removeDataCollector` removes a previously added network data collector ([Firefox bug 1971781](https://bugzil.la/1971781)).
  - `network.getData` retrieves the data collected for a provided `request` id, `dataType` and optionally `collector` id. When providing a `collector` id, clients may also pass the `disown` flag to release the network data from the collector. Note that data is deleted when it is no longer owned by any collector ([Firefox bug 1971780](https://bugzil.la/1971780)).
  - `network.disownData` releases the data for a given `request` id and `dataType` from the provided `collector` id ([Firefox bug 1971779](https://bugzil.la/1971779)).
- Fixed a bug where `emulation.setLocaleOverride` did not apply the override to newly created cross-origin iframes ([Firefox bug 1978533](https://bugzil.la/1978533)).
- Fixed a bug where several commands such as `session.subscribe` would fail if any tab was unloaded ([Firefox bug 1949037](https://bugzil.la/1949037)).
- Fixed the `browsingContext.navigationCommitted` event so that the `url` property now includes basic auth credentials. ([Firefox bug 1980137](https://bugzil.la/1980137)).

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

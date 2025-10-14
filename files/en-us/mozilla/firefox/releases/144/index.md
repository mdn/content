---
title: Firefox 144 for developers
short-title: Firefox 144 (Beta)
slug: Mozilla/Firefox/Releases/144
page-type: firefox-release-notes-active
sidebar: firefox
---

This article provides information about the changes in Firefox 144 that affect developers.
Firefox 144 is the current [Beta version of Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) and ships on [October 14, 2025](https://whattrainisitnow.com/release/?version=144).

> [!NOTE]
> The release notes for this Firefox version are still a work in progress.

<!-- Authors: Please uncomment any headings you are writing notes for -->

## Changes for web developers

<!-- ### Developer Tools -->

### HTML

- The [`command`](/en-US/docs/Web/HTML/Reference/Elements/button#command) and [`commandfor`](/en-US/docs/Web/HTML/Reference/Elements/button#commandfor) attributes of the {{htmlelement("button")}} element are now supported. The `command` attribute lets you define the action to perform, and the `commandfor` attribute lets you associate the button with another element that the command acts on. The command can be a predefined value such as `close` or a [custom value](/en-US/docs/Web/HTML/Reference/Elements/button#custom_values) defined by you. ([Firefox bug 1983523](https://bugzil.la/1983523)).

<!-- No notable changes. -->

<!-- #### Removals -->

### MathML

#### Removals

- Support for the deprecated MathML STIXGeneral font has now been removed. The setting `mathml.stixgeneral_operator_stretching.disabled` has also been removed. ([Firefox bug 1336058](https://bugzil.la/1336058)).

### CSS

- [CSS features](/en-US/docs/Web/API/View_Transition_API#css_additions) for view transitions in single-page applications ([SPAs](/en-US/docs/Glossary/SPA)) are now supported. This provides a way to style the parts of a view transition animation. ([Firefox bug 1985809](https://bugzil.la/1985809)). These include:
  - {{CSSXRef(":active-view-transition")}} pseudo-class
  - {{CSSXRef("view-transition-class")}} property
  - {{CSSXRef("view-transition-name")}} property
  - {{CSSXRef("::view-transition")}} pseudo-element
  - {{CSSXRef("::view-transition-group()")}} pseudo-element
  - {{CSSXRef("::view-transition-image-pair()")}} pseudo-element
  - {{CSSXRef("::view-transition-new()")}} pseudo-element
  - {{CSSXRef("::view-transition-old()")}} pseudo-element

<!-- ### SVG -->

<!-- #### Removals -->

<!-- ### CSS -->

<!-- No notable changes. -->

<!-- #### Removals -->

### JavaScript

- The {{jsxref("Map.prototype.getOrInsert()")}}, {{jsxref("Map.prototype.getOrInsertComputed()")}}, {{jsxref("WeakMap.prototype.getOrInsert()")}}, and {{jsxref("WeakMap.prototype.getOrInsertComputed()")}} instance methods are now supported.
  All the methods return the value corresponding to a specified key if the key is present.
  If the key is not present, `getOrInsert()` inserts and returns an element for the key and a given default value, while `getOrInsertComputed()` inserts and returns a value computed in a supplied callback function. ([Firefox bug 1979917](https://bugzil.la/1979917)).

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### HTTP -->

<!-- #### Removals -->

<!-- ### Security -->

<!-- #### Removals -->

### APIs

- The [`lock()`](/en-US/docs/Web/API/ScreenOrientation/lock) and [`unlock()`](/en-US/docs/Web/API/ScreenOrientation/unlock) methods of the {{domxref("ScreenOrientation")}} interface are now supported for Android and for Windows tablets. ([Firefox bug 1983483](https://bugzil.la/1983483))

- The [View Transition API](/en-US/docs/Web/API/View_Transition_API) is now supported for [SPAs (single-page applications)](/en-US/docs/Glossary/SPA). This provides a mechanism for easily creating animated transitions between different website views. ([Firefox bug 1985809](https://bugzil.la/1985809)).
- The {{domxref("CSSStyleProperties")}} interface of the [CSS Object Model (CSSOM)](/en-US/docs/Web/API/CSS_Object_Model) is now implemented (this was renamed from a non-standard interface `CSS2Properties`). The new interface is present but not yet used. ([Firefox bug 1919582](https://bugzil.la/1919582)).

- The {{domxref("PerformanceEventTiming.interactionId", "interactionId")}} property of the {{domxref("PerformanceEventTiming")}} interface is a unique identifier that associates related events belonging to a single user interaction. This can be used to calculate the {{glossary("Interaction to next paint")}} metric, which helps analyze responsiveness to user interaction over the lifetime of a page. ([Firefox bug 1956809](https://bugzil.la/1956809)).

#### DOM

- The `moveBefore()` method is now supported on the {{domxref("Element.moveBefore()","Element")}}, {{domxref("DocumentFragment.moveBefore()","DocumentFragment")}} and {{domxref("Document.moveBefore()","Document")}} interfaces. This allows moving of an immediate child element of the object, before another of its child elements. Unlike with {{domxref("Node.insertBefore()")}}, moved elements retain their state. ([Firefox bug 1983688](https://bugzil.la/1983688)).

#### Media, WebRTC, and Web Audio

- Cross-origin {{htmlelement("iframe")}}s now require either user interaction ({{glossary("sticky activation")}}) or explicit permission to redirect the top-level page using `window.top.location`.
  See [Top navigation in cross-origin frames](/en-US/docs/Web/HTML/Reference/Elements/iframe#top_navigation_in_cross-origin_frames) for more information. ([Firefox bug 1419501](https://bugzil.la/1419501)).
- {{domxref("RTCDataChannel")}} instances are now [transferrable objects](/en-US/docs/Web/API/Web_Workers_API/Transferable_objects), and hence can be passed to [workers](/en-US/docs/Web/API/Worker). ([Firefox bug 1209163](https://bugzil.la/1209163)).
- The [`closing` event](/en-US/docs/Web/API/RTCDataChannel/closing_event) and the `onclosing()` event handler are now supported on the {{domxref("RTCDataChannel")}} interface. ([Firefox bug 1611953](https://bugzil.la/1611953)).
- The {{domxref("MediaDevices/getUserMedia","getUserMedia()")}} and {{domxref("MediaDevices/getDisplayMedia","getDisplayMedia()")}} methods of the {{domxref("MediaDevices")}} interface now support the [`resizeMode`](/en-US/docs/Web/API/MediaTrackConstraints#resizemode) constraint.
  This constraint allows developers to request video that matches other constraints, such as resolution and frame rate, even if the requested constraints are not supported by the underlying hardware.
  The browser may then crop, downscale, or reduce the frame rate of the video captured from a camera, or downscale (but not crop) the video captured from a screen or window. ([Firefox bug 1286945](https://bugzil.la/1286945)).

#### Removals

- The following deprecated and non-standard events have been removed: [`afterscriptexecute` event](/en-US/docs/Web/API/Document/afterscriptexecute_event) and [`beforescriptexecute` event](/en-US/docs/Web/API/Document/beforescriptexecute_event) of the `Document` interface, and the [`afterscriptexecute` event](/en-US/docs/Web/API/Element/afterscriptexecute_event) and [`beforescriptexecute` event](/en-US/docs/Web/API/Element/beforescriptexecute_event) of the `Element` interface. ([Firefox bug 1584269](https://bugzil.la/1584269)).

<!-- ### WebAssembly -->

<!-- #### Removals -->

### WebDriver conformance (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Implemented the new `browsingContext.downloadWillBegin` event, which is emitted when a new download is initiated, either by clicking a link with the `download` attribute, or in response to a network request with a `Content-Disposition` header indicating a file attachment ([Firefox bug 1874365](https://bugzil.la/1874365)).

- Implemented the new `emulation.setScreenOrientationOverride` command, which allows clients to emulate different screen orientations. This command is not limited to mobile devices, but also works for desktop applications ([Firefox bug 1974167](https://bugzil.la/1974167)).

- Implemented the new `emulation.setTimezoneOverride` command, which allows clients to simulate a specific timezone setting ([Firefox bug 1978027](https://bugzil.la/1978027)).

- Enhanced the `emulation.setLocaleOverride` command to also apply the specified settings to sandboxes previously created via WebDriver BiDi ([Firefox bug 1983807](https://bugzil.la/1983807)).

- Fixed a bug where the locale override set via `emulation.setLocaleOverride` was sometimes incorrectly shared between different browsing contexts within the same process ([Firefox bug 1980211](https://bugzil.la/1980211)).

- Enhanced the `browsingContext.navigate` command to avoid `NS_BINDING_ABORTED` errors caused by redirects or interruptions occurring after the navigation was already committed ([Firefox bug 1914407](https://bugzil.la/1914407)).

#### Marionette

- Reverted the [`Scroll Into View` WebDriver algorithm](https://w3c.github.io/webdriver/#dfn-scrolls-into-view) as used by several WebDriver classic commands in Marionette to always use the `instant` scroll behavior. This undoes the change introduced in Firefox 97, which had switched the behavior to `auto`. The reversion addresses potential race conditions when scrolling elements that use `smooth` behavior ([Firefox bug 1986238](https://bugzil.la/1986238)).

## Changes for add-on developers

- Adds the ability to specify the style origin for CSS injections from [`"content_scripts"` manifest key](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts), in {{WebExtAPIRef("scripting.registerContentScripts()")}} with the `cssOrigin` property on {{WebExtAPIRef("scripting.RegisteredContentScript")}}, and the `cssOrigin` property in {{WebExtAPIRef("contentScripts.register")}}. The style origin can be `"user"`, to add the CSS as a user stylesheet, or `"author"`, to add it as an author stylesheet. Default, to the `"author"` origin. These properties are case-insensitive. In addition, the value of the [`origin`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/scripting/insertCSS#origin) property of {{WebExtAPIRef("scripting.insertCSS()")}} is now case insensitive. ([Firefox bug 1679997](https://bugzil.la/1679997))
- Adds support for {{WebExtAPIRef("storage.StorageArea.getBytesInUse()","getBytesInUse()")}} to {{WebExtAPIRef("storage.local")}} and {{WebExtAPIRef("storage.managed")}}. ([Firefox bug 1385832](https://bugzil.la/1385832))

<!-- ### Removals -->

<!-- ### Other -->

## Experimental web features

These features are shipping in Firefox 144 but are disabled by default.
To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`.
You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

- **datetime-local time picker:** `dom.forms.datetime.timepicker`.

  HTML datetime-local input elements ([`<input type="datetime-local">`](/en-US/docs/Web/HTML/Reference/Elements/input/datetime-local)) now includes a time picker ([Firefox bug 1726108](https://bugzil.la/1726108)).

---
title: Firefox 151 release notes for developers (Beta)
short-title: Firefox 151 (Beta)
slug: Mozilla/Firefox/Releases/151
page-type: firefox-release-notes-active
sidebar: firefox
---

This article provides information about the changes in Firefox 151 that affect developers.
Firefox 151 is the current [Beta version of Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) and ships on [May 19, 2026](https://whattrainisitnow.com/release/?version=151).

> [!NOTE]
> The release notes for this Firefox version are still a work in progress.

<!-- Authors: Please uncomment any headings you are writing notes for -->

## Changes for web developers

<!-- ### Developer Tools -->

### HTML

- The [`shadowrootslotassignment` attribute](/en-US/docs/Web/HTML/Reference/Elements/template#shadowrootslotassignment) is now supported on {{htmlelement("template")}} elements, allowing declarative definition of slot assignment behavior for shadow roots.
  The attribute is reflected in JavaScript by {{domxref("ShadowRoot.slotAssignment")}} or {{domxref("HTMLTemplateElement.shadowRootSlotAssignment")}}
  ([Firefox bug 2031295](https://bugzil.la/2031295), [Firefox bug 2023824](https://bugzil.la/2023824)).

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### MathML -->

<!-- #### Removals -->

<!-- ### SVG -->

<!-- #### Removals -->

### CSS

- The [`@container`](/en-US/docs/Web/CSS/Reference/At-rules/@container) CSS at-rule supports [`style()`](/en-US/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries) queries. This allows you to check if a container has a valid CSS declaration, a CSS property, or a custom property, and apply styles to its children accordingly. ([Firefox bug 2016929](https://bugzil.la/2016929), ([Firefox bug 2019254](https://bugzil.la/2019254)), ([Firefox bug 2024601](https://bugzil.la/2024601)), [Firefox bug 2030645](https://bugzil.la/2030645)).

- The {{cssxref("position-anchor")}} CSS property now supports the `normal` (default) value. This allows the matching of the {{cssxref("position-area")}} property, so if the `position-area` property updates the `position-anchor` property will also. ([Firefox bug 2030351](https://bugzil.la/2030351)).

<!-- #### Removals -->

<!-- ### JavaScript -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### HTTP -->

<!-- #### Removals -->

<!-- ### Security -->

<!-- #### Removals -->

### APIs

- The {{domxref("Sanitizer.replaceElementWithChildren()")}} method now returns `false` if the element to be replaced is {{svgelement("svg")}} in the SVG [namespace](/en-US/docs/Web/API/Sanitizer/replaceElementWithChildren#namespace) or {{mathmlelement("math")}} in the MathML namespace (joining {{htmlelement("html")}}, which was disallowed in [Firefox 150](/en-US/docs/Mozilla/Firefox/Releases/150#apis)).
  ([Firefox bug 2032359](https://bugzil.la/2032359)).
- The [Document Picture-in-Picture API](/en-US/docs/Web/API/Document_Picture-in-Picture_API) is now supported on desktop platforms.
  This makes it possible to open an [always-on-top window](/en-US/docs/Web/API/Document_Picture-in-Picture_API#how_does_it_work) that can be populated with arbitrary HTML content.
  It can be used to display any content that a user might want to view separate from the launching page (or even the browser), such as a set of streams showing the participants of a video conference call, a stock ticker, or a countdown timer.
  ([Firefox bug 2006594](https://bugzil.la/2006594)).
- The {{domxref("CanvasRenderingContext2D.lang")}} property is supported for setting the language of the canvas drawing context.
  While a DOM canvas can inherit this context from the `lang` attribute of its associated {{htmlelement("canvas")}} element, this is useful for setting the context for an offscreen canvas, which may be rendered before being associated with a `<canvas>`.
  ([Firefox bug 1943070](https://bugzil.la/1943070)).
- The [`options.keyboardLock`](/en-US/docs/Web/API/Element/requestFullscreen#keyboardlock) property can now be passed as an option to {{domxref("Element.requestFullscreen()")}}, allowing websites to request keyboard lock when the element is displayed in fullscreen mode.
  This stops the <kbd>Esc</kbd> key from causing the element to leave fullscreen (a long-press is required instead), and some formerly-reserved browser hotkeys can now be intercepted and their default action prevented.
  ([Firefox bug 2032302](https://bugzil.la/2032302)).
- The {{domxref("CanvasRenderingContext2D.lang")}} property is now supported, allowing the rendering language of an offscreen canvas to be explicitly specified and changed after the rendering context is created.
  ([Firefox bug 1943070](https://bugzil.la/1943070)).
- The `maxStorageBuffersInFragmentStage`, `maxStorageBuffersInVertexStage`, `maxStorageTexturesInFragmentStage`, and `maxStorageTexturesInVertexStage` properties are now supported on {{domxref("GPUSupportedLimits")}}, defining the maximum number of storage buffers and textures allowed in the fragment and vertex shader stages.
  ([Firefox bug 2006720](https://bugzil.la/2006720)).
- The {{domxref("CSSContainerRule.conditions")}} property is now supported, mirroring [`@container`](/en-US/docs/Web/CSS/Reference/At-rules/@container) at-rule support for multiple comma-separated container conditions.
  The `condition` property reflects a corresponding `@container` as an array of objects, where each object represents a single container condition.
  ([Firefox bug 2022827](https://bugzil.la/2022827)).
- The [Web Serial API](/en-US/docs/Web/API/Web_Serial_API) is supported on desktop platforms, allowing the control of microcontrollers that support serial communications.
  This lets you, for example, program microcontrollers and development boards, such as ESP devices, BBCmicro:bit, and Raspberry Pi Picos, 3D printers and CNC machines, and other supported devices.
  Use of the API will require that website users install a [synthetically generated site permission add-on](https://support.mozilla.org/en-US/kb/site-permission-add-ons) — this is the same approach used to safely manage access to WebMIDI.
  ([Firefox bug 2029625](https://bugzil.la/2029625)).

<!-- #### DOM -->

<!-- #### Media, WebRTC, and Web Audio -->

<!-- #### Removals -->

<!-- ### WebAssembly -->

<!-- #### Removals -->

### WebDriver conformance (WebDriver BiDi, Marionette)

#### General

- Added support for `altitudeAngle` and `azimuthAngle` to pointer actions of subtype `touch`. These properties allow simulating touch interactions with precise angular orientation data, specifying the angle at which a pointer contacts a surface and its rotational direction. ([Firefox bug 2022644](https://bugzil.la/2022644)).
- Fixed a bug where `UnknownError` DOM exceptions originating from content pages were incorrectly treated as internal WebDriver errors. ([Firefox bug 2032387](https://bugzil.la/2032387)).

#### WebDriver BiDi

- Implemented the `browser.setClientWindowState` command. This command allows clients to change the OS-level window state of a browser window, such as maximized, minimized, fullscreen, or normal. It also allows repositioning and resizing the window. ([Firefox bug 1855028](https://bugzil.la/1855028)).
- Added support for worker realms (for dedicated, shared and service workers) in the `script.getRealms` command. The command now returns realm information for worker scripts in addition to window contexts. ([Firefox bug 2016097](https://bugzil.la/2016097)).
- Included the top-most stack frame in `log.entryAdded` events for all Console API messages. ([Firefox bug 1941813](https://bugzil.la/1941813)).
- Improved the `text` field of the `log.entryAdded` event to better align with Firefox DevTools behavior and Google Chrome WebDriver BiDi implementation. ([Firefox bug 2005054](https://bugzil.la/2005054)).
- Fixed network event cookies to include all properties, not just `name` and `value`. ([Firefox bug 1887118](https://bugzil.la/1887118)).
- Fixed the `network.getData` command timing out for redirects. ([Firefox bug 2009916](https://bugzil.la/2009916)).
- Fixed the `browsingContext.reload` command not resetting the location of a navigated iframe. ([Firefox bug 2023917](https://bugzil.la/2023917)).
- Removed the empty `proxy` capability from the `session.new` command response when no proxy is specified. ([Firefox bug 1916463](https://bugzil.la/1916463)).

#### Marionette

- Enabled browser window repositioning on Linux Wayland in headless mode. ([Firefox bug 2023978](https://bugzil.la/2023978)).

## Changes for add-on developers

- The {{WebExtAPIRef("webRequest.onErrorOccurred")}} event now falls back to `NS_ERROR_NET_ON_RECEIVING_FROM` instead of a string starting with `NS_ERROR_NET_ON_` or `NS_ERROR_NET_UNKNOWN_`. This change is part of performance and reliability improvements to the `onErrorOccurred` event. ([Firefox bug 1881986](https://bugzil.la/1881986))
- {{WebExtAPIRef("tabs.group()")}} and {{WebExtAPIRef("tabs.ungroup()")}} now correctly add and remove a split view when a call includes one of the split view's tabs. Previously, a call would fail or separate the split view. ([Firefox bug 2029099](https://bugzil.la/2029099))
- {{WebExtAPIRef("tabs.move()")}} now correctly moves a split view to the right when a call includes one of the split view's tabs. Previously, a call moved a split view only to the left or to the end of the tab list. ([Firefox bug 2027855](https://bugzil.la/2027855))

<!-- ### Removals -->

<!-- ### Other -->

## Experimental web features

These features are shipping in Firefox 151 but are disabled by default.
To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`.
You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

- **`@container style()` range syntax queries**: `layout.css.attr.enabled`

  The [`@container`](/en-US/docs/Web/CSS/Reference/At-rules/@container) CSS at-rule [`style()`](/en-US/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries) queries now supports the _range syntax_. This allows you to check if a container has a valid CSS custom property and compare its value with comparison operators like `>`, `<`, `>=`, and `<=` and apply styles to its children accordingly. ([Firefox bug 2024601](https://bugzil.la/2024601)).

- **`field-sizing` property**: `layout.css.field-sizing.enabled`

  The {{cssxref("field-sizing")}} CSS property lets you control the sizing behavior of form control elements. This property has two values: `content` allows elements to adjust in size to fit their content, and `fixed` sets a fixed size on elements. ([Firefox bug 1977176](https://bugzil.la/1977176)).

- **Disable MathML `href` on non-`<a>` elements**: `mathml.href_link_on_non_anchor_element.disabled`

  When enabled, the [`href`](/en-US/docs/Web/MathML/Reference/Global_attributes/href) global attribute no longer creates a hyperlink on MathML elements other than `<a>`, matching the [MathML Core specification](https://w3c.github.io/mathml-core/#the-a-element). ([Firefox bug 2026848](https://bugzil.la/2026848)).

- **Fix for nested scrollable areas**: `layout.css.fake-webkit-scrollbar.enabled`

  This implementation has been added in order to fix an issue where scrollable content was unreachable. If a scrollbar is set to `display: none;` or `width: 0;` then the scrollbars of nested scrollable areas would be stacked on top of each other meaning that some of the content may well be unreachable. ([Firefox bug 1977511](https://bugzil.la/1977511)).

- **`<timeline-range-name>` values**: `layout.css.scroll-driven-animations.enabled`

  The {{cssxref("animation-range-start")}}, {{cssxref("animation-range-end")}} CSS properties and {{cssxref("animation-range")}} shorthand property now support [`<timeline-range-name>`](/en-US/docs/Web/CSS/Reference/Values/timeline-range-name) values. These [`<timeline-range-name>`](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names#timeline_range_names) values allow you to precisely state which segment that a scroll driven animation will take place within. ([Firefox bug 1804775](https://bugzil.la/1804775)).

- **GeometryUtils methods: `convertPointFromNode()`, `convertRectFromNode()`, and `convertQuadFromNode()`**: `layout.css.convertFromNode.enabled`

  The GeometryUtils methods: `convertPointFromNode()`, `convertRectFromNode()`, and `convertQuadFromNode()` are no longer enabled by default in Firefox Nightly. ([Firefox bug 2026051](https://bugzil.la/2026051)).

- **GeometryUtils methods: `getBoxQuads()`**: `layout.css.getBoxQuads.enabled`

  The GeometryUtils methods: `getBoxQuads()` is no longer enabled by default in Firefox Nightly. ([Firefox bug 2026051](https://bugzil.la/2026051)).

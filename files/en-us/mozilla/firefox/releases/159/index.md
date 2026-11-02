---
title: Firefox 159 release notes for developers (Stable)
short-title: Firefox 159 (Stable)
slug: Mozilla/Firefox/Releases/159
page-type: firefox-release-notes-active
sidebar: firefox
---

This article provides information about the changes in Firefox 159 that affect developers.
Firefox 159 was released on [October 27, 2026](https://whattrainisitnow.com/release/?version=159).

## Changes for web developers

### HTML

No notable changes.

### CSS

- [Scroll-driven animations](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations) are now enabled by default. They allow you to animate property values along a scroll-based timeline (that is, by scrolling a scroll container) rather than along the default time-based document timeline.
  ([Firefox bug 1324602](https://bugzil.la/1324602)).

#### Removals

- The legacy masonry layout syntax has been removed: the `masonry` value of the {{cssxref("grid-template-columns")}} and {{cssxref("grid-template-rows")}} properties, and the `masonry-auto-flow` property. This syntax was only enabled by default in Nightly, behind the `layout.css.grid-template-masonry-value.enabled` preference. It's superseded by [grid lanes layout](/en-US/docs/Web/CSS/Guides/Grid_layout/Grid_lanes), which uses the `grid-lanes` and `inline-grid-lanes` values of the {{cssxref("display")}} property. ([Firefox bug 2077170](https://bugzil.la/2077170)).

### JavaScript

No notable changes.

### APIs

- Methods that sanitize HTML with the [HTML Sanitizer API](/en-US/docs/Web/API/HTML_Sanitizer_API), such as {{domxref("Element.setHTML()")}}, now remove unwanted elements and attributes as the markup is parsed, instead of parsing all of the markup first and then cleaning up resulting DOM tree afterwards. The result is the same, except that neighboring text now lands in a single text node instead of being split across several. ([Firefox bug 2070498](https://bugzil.la/2070498)).
- The [WebGL](/en-US/docs/Web/API/WebGL_API) {{domxref("EXT_clip_control")}} extension is now available on devices whose graphics driver supports it. Its {{domxref("EXT_clip_control.clipControlEXT()", "clipControlEXT()")}} method changes how clip-space coordinates map to window coordinates: it can move the clip origin to the upper-left corner, and set the depth range in normalized device coordinates to 0 to 1 instead of the default -1 to 1, matching the conventions of Direct3D and WebGPU. The 0 to 1 depth range also makes the reversed-Z technique effective, which improves depth precision with a floating-point depth buffer. ([Firefox bug 1885031](https://bugzil.la/1885031)).
- The [WebGL](/en-US/docs/Web/API/WebGL_API) {{domxref("EXT_texture_mirror_clamp_to_edge")}} extension is now available on devices whose graphics driver supports it. It adds the `MIRROR_CLAMP_TO_EDGE_EXT` texture wrapping mode: texture coordinates from -1 to 0 sample a mirror image of the texture, and coordinates below -1 or above 1 clamp to its edge. This allows a symmetric image, such as a glow, to be stored as a texture containing only half of it. ([Firefox bug 1908749](https://bugzil.la/1908749)).
- The [WebGL 2](/en-US/docs/Web/API/WebGL2RenderingContext) {{domxref("EXT_texture_norm16")}} extension is now enabled by default on devices whose graphics driver supports 16-bit normalized formats. It adds 16-bit normalized texture and renderbuffer formats, which store data such as elevation maps and medical images with more precision than 8-bit formats. ([Firefox bug 1735401](https://bugzil.la/1735401)).

#### DOM

- [Scoped custom element registries](/en-US/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries) are now supported, this allows a shadow tree to create an independent {{domxref("CustomElementRegistry")}} whose definitions only apply to that specific DOM subtree. This can be used to avoid collisions where multiple web components declare elements with the same name. The `customElementRegistry` property can be used on {{domxref("Document")}}, {{domxref("Element")}}, and {{domxref("ShadowRoot")}}. The [`CustomElementRegistry()` constructor](/en-US/docs/Web/API/CustomElementRegistry/CustomElementRegistry) creates a new `CustomElementRegistry` object for scoped usage. ([Firefox bug 2070506](https://bugzil.la/2070506))

### WebDriver conformance (WebDriver BiDi, Marionette)

#### General

- Recommended preferences are now set as default values instead of user values, so they no longer remain in `prefs.js` after an unclean shutdown. ([Firefox bug 2074275](https://bugzil.la/2074275)).
- Removed the `--remote-allow-system-access` command line argument. To enable system access, set the `MOZ_REMOTE_ALLOW_SYSTEM_ACCESS` environment variable to `1` instead. ([Firefox bug 2054896](https://bugzil.la/2054896)).
- Fixed a memory leak where internal polling operations kept running until shutdown after timing out with an error. This could affect a variety of commands (e.g., WebDriver BiDi's `browsingContext.traverseHistory`). ([Firefox bug 2079758](https://bugzil.la/2079758)).

#### WebDriver BiDi

- Implemented the `emulation.setMediaFeaturesOverride` command, which allows clients to override the values of CSS media features. Currently only [`prefers-color-scheme`](/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme) is supported. ([Firefox bug 2064354](https://bugzil.la/2064354)).
- Added a [machine-readable CDDL (Concise Data Definition Language) file](https://searchfox.org/firefox-main/rev/2d5c2a4eb5d99a92249ec13370b1de9c1a77c0f8/remote/webdriver-bidi/cddl/Fields.cddl) for the Firefox-specific extensions to WebDriver BiDi. ([Firefox bug 2057588](https://bugzil.la/2057588)).

## Experimental web features

These features are shipping in Firefox 159 but are disabled by default.
To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`.
You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

- **CSS numeric factory functions exposed in workers and worklets**: `layout.css.namespace.exposed-in-workers-and-worklets`

  The [numeric factory functions](/en-US/docs/Web/API/CSS/factory_functions_static) of the {{domxref("CSS")}} namespace, such as `CSS.px()`, are now exposed in workers and paint worklets, not only on `Window`. They're part of the [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API), so outside Nightly they also need the `layout.css.typed-om.enabled` preference set to `true`. ([Firefox bug 2079188](https://bugzil.la/2079188)).

- **New `MathMLAnchorElement` properties**: `mathml.a.element.enabled`

  The {{domxref("MathMLAnchorElement")}} interface now supports the {{domxref("MathMLAnchorElement.download", "download")}}, {{domxref("MathMLAnchorElement.ping", "ping")}}, {{domxref("MathMLAnchorElement.rel", "rel")}}, {{domxref("MathMLAnchorElement.relList", "relList")}}, and {{domxref("MathMLAnchorElement.referrerPolicy", "referrerPolicy")}} properties. ([Firefox bug 2064612](https://bugzil.la/2064612)).

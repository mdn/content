---
title: Firefox 155 release notes for developers (Beta)
short-title: Firefox 155 (Beta)
slug: Mozilla/Firefox/Releases/155
page-type: firefox-release-notes-active
sidebar: firefox
---

This article provides information about the changes in Firefox 155 that affect developers.
Firefox 155 is the current [Beta version of Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) and ships on [September 1, 2026](https://whattrainisitnow.com/release/?version=155).

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

### JavaScript

- The {{jsxref("Promise.allKeyed()")}} and {{jsxref("Promise.allSettledKeyed()")}} static methods are now supported.
  These behave like {{jsxref("Promise.all()")}} and {{jsxref("Promise.allSettled()")}}, respectively, but take an object of promises instead of an iterable, and fulfill with an object that has results in matching properties.
  This allows you to associate results with semantically meaningful keys, instead of relying on array ordering.
  ([Firefox bug 2057270](https://bugzil.la/2057270)).

<!-- #### Removals -->

<!-- ### HTTP -->

<!-- #### Removals -->

<!-- ### Security -->

<!-- #### Removals -->

### APIs

#### DOM

- The {{domxref("SVGAElement")}} interface now implements the [`HyperlinkElementUtils`](https://html.spec.whatwg.org/multipage/links.html#hyperlinkelementutils) mixin. As a result, SVG {{SVGElement("a")}} elements expose the same URL component properties as HTML {{HTMLElement("a")}} elements: {{domxref("SVGAElement.protocol", "protocol")}}, {{domxref("SVGAElement.username", "username")}}, {{domxref("SVGAElement.password", "password")}}, {{domxref("SVGAElement.host", "host")}}, {{domxref("SVGAElement.hostname", "hostname")}}, {{domxref("SVGAElement.port", "port")}}, {{domxref("SVGAElement.pathname", "pathname")}}, {{domxref("SVGAElement.search", "search")}}, and {{domxref("SVGAElement.hash", "hash")}}. The read-only {{domxref("SVGAElement.origin", "origin")}} property is also exposed.
  ([Firefox bug 2058578](https://bugzil.la/2058578)).
- The {{domxref("SVGNumberList")}}, {{domxref("SVGPointList")}}, {{domxref("SVGStringList")}}, and {{domxref("SVGTransformList")}} interfaces now support indexed setters. This means you can replace an item in the list using bracket notation, such as `transformList[0] = newTransform`, instead of calling {{domxref("SVGTransformList.replaceItem", "replaceItem()")}}.
  The {{domxref("SVGLengthList")}} interface already supports indexed setters.
  ([Firefox bug 2059426](https://bugzil.la/2059426)).

#### Media, WebRTC, and Web Audio

- The [`error` event](/en-US/docs/Web/API/RTCDataChannel/error_event) fired on an {{domxref("RTCDataChannel")}} object may now report [`sctp-failure`](/en-US/docs/Web/API/RTCError/errorDetail#sctp-failure) in its {{domxref("RTCError.errorDetail", "error.errorDetail")}} property if the transport is closed due to an error.
  In addition, {{domxref("RTCError")}} and {{domxref("RTCErrorEvent")}} are now available in dedicated workers (this exposure is not yet in the specification).
  ([Firefox bug 1814460](https://bugzil.la/1814460)).

<!-- #### Removals -->

<!-- ### WebAssembly -->

<!-- #### Removals -->

<!-- ### WebDriver conformance (WebDriver BiDi, Marionette) -->

<!-- #### General -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Changes for add-on developers

<!-- ### Removals -->

<!-- ### Other -->

## Experimental web features

These features are shipping in Firefox 155 but are disabled by default.
To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`.
You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

---
title: "Window: opener property"
short-title: opener
slug: Web/API/Window/opener
page-type: web-api-instance-property
browser-compat: api.Window.opener
---

{{APIRef("HTML DOM")}}

The {{domxref("Window")}} interface's
**`opener`** property returns a reference to the window that
opened the window, either with {{domxref("Window.open", "open()")}}, or by navigating
a link with a [`target`](/en-US/docs/Web/HTML/Element/a#target) attribute.

In other words, if window `A` opens window `B`,
`B.opener` returns `A`.

## Value

A {{domxref("Window")}}-like object referring to the window that opened the current
window (using {{domxref("window.open()")}}, or by a link with [`target`](/en-US/docs/Web/HTML/Element/a#target) attribute set). If this window was not opened by being linked to or created by
another, returns [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null).

If the opener is not on the same origin as the current page, functionality of the
opener object is limited. For example, variables and functions on the window object are
not accessible. However, navigation of the opener window is possible, which means that
the opened page can open a URL in the original tab or window. In some cases, this makes
phishing attacks possible, where a trusted page that is opened in the original window is
replaced by a phishing page by the newly opened page.

To be exact, for cross-origin opener objects, the following properties are available:

- {{domxref("Window.window", "window")}}
- {{domxref("Window.self", "self")}}
- {{domxref("Window.location", "location")}}: with only the {{domxref("Location.replace")}} and {{domxref("Location.href")}} properties available
- {{domxref("Window.close", "close")}}
- {{domxref("Window.closed", "closed")}}
- {{domxref("Window.focus", "focus")}}
- {{domxref("Window.blur", "blur")}}
- {{domxref("Window.frames", "frames")}}
- {{domxref("Window.length", "length")}}
- {{domxref("Window.top", "top")}}
- `opener`
- {{domxref("Window.parent", "parent")}}
- {{domxref("Window.postMessage", "postMessage")}}
- `window[0]`, `window[1]`, etc.

In addition, there are a few properties: [`then`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables), {{jsxref("Symbol/toStringTag", "[Symbol.toStringTag]")}}, {{jsxref("Symbol/hasInstance", "[Symbol.hasInstance]")}}, {{jsxref("Symbol/isConcatSpreadable", "[Symbol.isConcatSpreadable]")}}, which are used by various JavaScript operations. These properties have values `undefined`. All other properties generate a `SecurityError` {{domxref("DOMException")}} when accessed.

In the following cases, the browser does not populate `window.opener`, but
leaves it [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null):

- The opener can be omitted by specifying
  [`rel=noopener`](/en-US/docs/Web/HTML/Attributes/rel#noopener) on a link, or passing
  `noopener` in the {{domxref("Window.open", "windowFeatures")}} parameter.
- Windows opened because of links with a [`target`](/en-US/docs/Web/HTML/Element/a#target) of `_blank` don't get an `opener`, unless explicitly
  requested with [`rel=opener`](/en-US/docs/Web/HTML/Attributes/rel#opener).
- Having a {{HTTPHeader("Cross-Origin-Opener-Policy")}} header with a value of
  `same-origin` prevents setting `opener`. Since the new window is
  loaded in a different browsing context, it won't have a reference to the opening
  window.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

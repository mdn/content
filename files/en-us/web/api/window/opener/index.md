---
title: Window.opener
slug: Web/API/Window/opener
tags:
  - API
  - HTML DOM
  - NeedsExample
  - Property
  - Reference
  - Window
  - opener
browser-compat: api.Window.opener
---
{{APIRef("HTML DOM")}}

The {{domxref("Window")}} interface's
**`opener`** property returns a reference to the window that
opened the window, either with {{domxref("Window.open", "open()")}}, or by navigating
a link with a {{htmlattrxref("target", "a")}} attribute.

In other words, if window `A` opens window `B`,
`B.opener` returns `A`.

## Syntax

```js
const openerWindow = window.opener
```

### Value

A {{domxref("Window")}}-like object referring to the window that opened the current
window (using {{domxref("window.open()")}}, or by a link with {{htmlattrxref("target",
  "a")}} attribute set). If this window was not opened by being linked to or created by
another, returns {{jsxref("null")}}.

If the opener is not on the same origin as the current page, functionality of the
opener object is limited. For example, variables and functions on the window object are
not accessible. However, navigation of the opener window is possible, which means that
the opened page can open an URL in the original tab or window. In some cases, this makes
phishing attacks possible, where a trusted page that is opened in the original window is
replaced by a phishing page by the newly opened page.

In the following cases, the browser does not populate `window.opener`, but
leaves it {{jsxref("null")}}:

- The opener can be omitted by specifying
  `{{htmlattrxref("rel", "a")}}=noopener` on a link, or passing
  `noopener` in the {{domxref("Window.open", "windowFeatures")}} parameter.
- Windows opened because of links with a {{htmlattrxref("target",
    "a")}} of `_blank` don't get an `opener`, unless explicitly
  requested with `{{htmlattrxref("rel", "a")}}=opener`.
- Having a {{HTTPHeader("Cross-Origin-Opener-Policy")}} header with a value of
  `same-origin` prevents setting `opener`. Since the new window is
  loaded in a different browsing context, it won't have a reference to the opening
  window.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

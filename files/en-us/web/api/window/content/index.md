---
title: Window.content
slug: Web/API/Window/content
page-type: web-api-instance-property
---

{{APIRef}}{{non-standard_header}}

> **Note:** Since Firefox 57 (initially Nightly-only), both the `content` and `_content` variants are only available to chrome (privileged) code, and not available to the web anymore.

Returns a [Window object](/en-US/docs/Web/API/Window) for the primary content window. This is useful in XUL windows that have a `<browser>` (or `tabbrowser` or `<iframe>`) with `type="content-primary"` attribute on it — the most famous example is Firefox main window, `browser.xul`. In such cases, `content` returns a reference to the `Window` object for the document currently displayed in the browser. It is a shortcut for `browserRef.contentWindow`.

In unprivileged content (webpages), `content` is normally equivalent to [top](/en-US/docs/Web/API/Window/top) (except in the case of a webpage loaded in a sidebar, `content` still refers to the `Window` of the currently selected tab).

> **Note:** Some examples use `_content` instead of `content`. The former has been deprecated for a long time, and you should use `content` in any new code.

### Syntax

```js
const windowObject = window.content;
```

### Example

Executing the following code in a chrome XUL window with a `<browser type="content-primary"/>` element in it draws a red border around the first div on the page currently displayed in the browser:

```js
content.document.querySelector("div").style.border = "solid red 1px";
```

### Specifications

None.

### See also

- [Working with windows in chrome code](/en-US/docs/Working_with_windows_in_chrome_code)
- When accessing content documents from privileged code, be aware of [XPCNativeWrappers](/en-US/XPCNativeWrapper).

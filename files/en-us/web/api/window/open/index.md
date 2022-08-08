---
title: Window.open()
slug: Web/API/Window/open
page-type: web-api-instance-method
tags:
  - API
  - DOM
  - Method
  - Reference
  - Window
  - open
browser-compat: api.Window.open
---
{{APIRef}}

The **`open()`** method of the [`Window`](/en-US/docs/Web/API/Window) interface loads a specified resource into a new or existing browsing context (that is, a tab, a window, or an [iframe](/en-US/docs/Web/HTML/Element/iframe)) under a specified name.

## Syntax

```js
open()
open(url)
open(url, target)
open(url, target, windowFeatures)
```

### Parameters

- `url` {{optional_inline}}
  - : A string indicating the URL or path of the resource to be loaded. If an empty string (`""`) is specified or this parameter is omitted, a blank page is opened into the targeted browsing context.

- `target` {{optional_inline}}
  - : A string, without whitespace, specifying the [name](/en-US/docs/Web/API/Window/name) of the browsing context the resource is being loaded into. If the name doesn't identify an existing context, a new context is created and given the specified name. The special [`target` keywords](/en-US/docs/Web/HTML/Element/a#attr-target), `_self`, `_blank`, `_parent`, and `_top`, can also be used.

    This name can be used as the `target` attribute of [`<a>`](/en-US/docs/Web/HTML/Element/a#attr-target) or [`<form>`](/en-US/docs/Web/HTML/Element/form#attr-target) elements.

- `windowFeatures` {{optional_inline}}
  - : A string containing a comma-separated list of window features in the form `name=value` — or for boolean features, just `name`. These features include options such as the window's default size and position, whether or not to open a minimal popup window, and so forth. The following options are supported:
    - `popup`
      - : If this feature is enabled, it requests that a minimal popup window be used. The UI features included in the popup window will be automatically decided by the browser, generally including an address bar only.

        If `popup` is not enabled, and there are no window features declared, the new browsing context will be a tab.

        > **Note:** Specifying any features in the `windowFeatures` parameter, other than `noopener` or `noreferrer`, also has the effect of requesting a popup.

        To enable the feature, specify `popup` either with no value at all, or else set it to `yes`, `1`, or `true`.

        Example: `popup=yes`, `popup=1`, `popup=true`, and `popup` all have identical results.

    - `width` or `innerWidth`
      - : Specifies the width of the content area, including scrollbars. The minimum required value is 100.

    - `height` or `innerHeight`
      - : Specifies the height of the content area, including scrollbars. The minimum required value is 100.

    - `left` or `screenX`
      - : Specifies the distance in pixels from the left side of the work area as defined by the user's operating system where the new window will be generated.

    - `top` or `screenY`
      - : Specifies the distance in pixels from the top side of the work area as defined by the user's operating system where the new window will be generated.

    - `noopener`
      - : If this feature is set, the new window will not have access to the originating window via [`Window.opener`](/en-US/docs/Web/API/Window/opener) and returns `null`.

        When `noopener` is used, non-empty target names, other than `_top`, `_self`, and `_parent`, are treated like `_blank` in terms of deciding whether to open a new browsing context.

    - `noreferrer`
      - : If this feature is set, the browser will omit the [`Referer`](/en-US/docs/Web/HTTP/Headers/Referer) header, as well as set `noopener` to true. See [`rel="noreferrer"`](/en-US/docs/Web/HTML/Link_types/noreferrer) for more information.

> **Note:** Requested position (`top`, `left`), and requested dimension (`width`, `height`) values in `windowFeatures` **will be corrected** if any of such requested value does not allow the entire browser popup to be rendered within the work area for applications of the user's operating system. In other words, no part of the new popup can be initially positioned offscreen.

### Return value

A [`WindowProxy`](/en-US/docs/Glossary/WindowProxy) object. The returned reference can be used to access properties and methods of the new window as long as it complies with [the same-origin policy](/en-US/docs/Web/Security/Same-origin_policy) security requirements.

## Description

The [`Window`](/en-US/docs/Web/API/Window) interface's `open()` method takes a URL as a parameter, and loads the resource it identifies into a new or existing tab or window. The `target` parameter determines which window or tab to load the resource into, and the `windowFeatures` parameter can be used to control to open a new popup with minimal UI features and control its size and position.

Note that remote URLs won't load immediately. When `window.open()` returns, the window always contains `about:blank`. The actual fetching of the URL is deferred and starts after the current script block finishes executing. The window creation and the loading of the referenced resource are done asynchronously.

## Examples

### Opening a new tab

```js
window.open("https://www.mozilla.org/", "mozillaTab");
```

### Opening a popup

Alternatively, the following example demonstrates how to open a popup, using the `popup` feature.

> **Warning:** Modern browsers have built-in popup blockers, preventing the opening of such popups. Users must have changed their browser settings to enable popups or enable them on a site-per-site basis from the browser's user interface (a notification may appear when the site attempts to open a popup for the first time, giving the option to enable or discard them).

```js
window.open("https://www.mozilla.org/", "mozillaWindow", "popup");
```

It is possible to control the size and position of the new popup:

```js
const windowFeatures = "left=100,top=100,width=320,height=320";
const handle = window.open("https://www.mozilla.org/", "mozillaWindow", windowFeatures);
if (!handle) {
  // The window wasn't allowed to open
  // This is likely caused by built-in popup blockers.

  // …
}
```

## Progressive enhancement

In some cases, JavaScript is disabled or unavailable and `window.open()` will not work. Instead of solely relying on the presence of this feature, we can provide an alternative solution so that the site or application still functions.

### Provide alternative ways when JavaScript is disabled

If JavaScript support is disabled or non-existent, then the user agent will create a secondary window accordingly or will render the referenced resource according to its handling of the `target` attribute. The goal and the idea are to provide (and _not impose_) to the user a way to open the referenced resource.

#### HTML

```html
<a href="https://www.wikipedia.org/" target="OpenWikipediaWindow">
  Wikipedia, a free encyclopedia (opens in another, possibly already existing, tab)
</a>
```

#### JavaScript

```js
let windowObjectReference = null; // global variable
function openRequestedTab(url, windowName) {
  if (windowObjectReference === null || windowObjectReference.closed) {
    windowObjectReference = window.open(url, windowName);
  } else {
    windowObjectReference.focus();
  };
}

const link = document.querySelector("a[target='OpenWikipediaWindow']");
link.addEventListener("click", (event) => {
  openRequestedTab(link.href);
  event.preventDefault();
  }, false);
```

The above code solves a few usability problems related to links opening popups. The purpose of the `event.preventDefault()` in the code is to cancel the default action of the link: if the event listener for `click` is executed, then there is no need to execute the default action of the link. But if JavaScript support is disabled or non-existent on the user's browser, then the event listener for `click` is ignored, and the browser loads the referenced resource in the target frame or window that has the name `"WikipediaWindowName"`. If no frame nor window has the name `"WikipediaWindowName"`, then the browser will create a new window and name it `"WikipediaWindowName"`.

> **Note:** For more details about the `target` attribute, see [`<a>`](/en-US/docs/Web/HTML/Element/a#attr-target) or [`<form>`](/en-US/docs/Web/HTML/Element/form#attr-target).

### Reuse existing windows and avoid `target="_blank"`

Using `"_blank"` as the target attribute value will create several new and unnamed windows on the user's desktop that cannot be recycled or reused. Try to provide a meaningful name to your `target` attribute and reuse such `target` attribute on your page so that a click on another link may load the referenced resource in an already created and rendered window (therefore speeding up the process for the user) and therefore justifying the reason (and user system resources, time spent) for creating a secondary window in the first place. Using a single `target` attribute value and reusing it in links is much more user resources friendly as it only creates one single secondary window, which is recycled.

Here is an example where a secondary window can be opened and reused for other links:

#### HTML

```html
<p>
  <a href="https://www.wikipedia.org/" target="SingleSecondaryWindowName">
    Wikipedia, a free encyclopedia (opens in another, possibly already existing, tab)
  </a>
</p>
<p>
  <a href="https://support.mozilla.org/products/firefox" target="SingleSecondaryWindowName">
    Firefox FAQ (opens in another, possibly already existing, tab)
  </a>
</p>
```

#### JavaScript

```js
let windowObjectReference = null; // global variable
let previousURL; /* global variable that will store the
                    url currently in the secondary window */
function openRequestedSingleTab(url) {
  if (windowObjectReference === null || windowObjectReference.closed) {
    windowObjectReference = window.open(url, "SingleSecondaryWindowName");
  } else if (previousURL !== url) {
    windowObjectReference = window.open(url, "SingleSecondaryWindowName");
    /* if the resource to load is different,
       then we load it in the already opened secondary window and then
       we bring such window back on top/in front of its parent window. */
    windowObjectReference.focus();
  } else {
    windowObjectReference.focus();
  };
  previousURL = url;
  /* explanation: we store the current url in order to compare url
     in the event of another call of this function. */
}

const links = document.querySelectorAll("a[target='SingleSecondaryWindowName']");
for (const link of links) {
  link.addEventListener("click", (event) => {
    openRequestedSingleTab(link.href);
    event.preventDefault();
  }, false);
}
```

## Same-origin policy

If the newly opened browsing context does not share the same [origin](/en-US/docs/Glossary/Origin), the opening script will not be able to interact (reading or writing) with the browsing context's content.

```js example-bad
// Script from example.com
const otherOriginContext = window.open("https://example.org");
// example.com and example.org are not the same origin

console.log(otherOriginContext.origin);
// DOMException: Permission denied to access property "origin" on cross-origin object
```

```js example-good
// Script from example.com
const sameOriginContext = window.open("https://example.com");
// This time, the new browsing context has the same origin

console.log(sameOriginContext.origin);
// https://example.com
```

For more information, refer to the [Same-origin policy](/en-US/docs/Web/Security/Same-origin_policy) article.

## Accessibility

### Avoid resorting to window.open()

It is preferable to avoid resorting to `window.open()`, for several reasons:

- Modern browsers offer a popup-blocking feature.
- Modern browsers offer tab-browsing, and tab-capable browser users prefer opening new tabs to opening new windows in most situations.
- Users may use browser built-in features or extensions to choose whether to open a link in a new window, in the same window, in a new tab, the same tab, or in the background. Forcing the opening to happen in a specific way, using `window.open()`, will confuse them and disregard their habits.
- Popups don't have a menu toolbar, whereas new tabs use the user interface of the browser window; therefore, many users prefer tab-browsing because the interface remains stable.

### Never use window.open() inline in HTML

Avoid `<a href="#" onclick="window.open(…);">` or `<a href="javascript:window\.open(…)" …>`.

These bogus `href` values cause unexpected behavior when copying/dragging links, opening links in a new tab/window, bookmarking, or when JavaScript is loading, errors, or is disabled. They also convey incorrect semantics to assistive technologies, like screen readers.

If necessary, use a [`<button>`](/en-US/docs/Web/HTML/Element/button) element instead. In general, _you should only use a link for navigation to a real URL_.

### Always identify links leading to a secondary window

Identify links that will open new windows in a way that helps navigation for users.

```html
<a target="WikipediaWindow" href="https://www.wikipedia.org">
  Wikipedia (opens in new tab)
</a>
```

The purpose is to warn users of context changes to minimize confusion on the user's part: changing the current window or popping up new windows can be very disorienting to users (in the case of a popup, no toolbar provides a "Previous" button to get back to the previous window).

When extreme changes in context are explicitly identified before they occur, then the users can determine if they wish to proceed or so they can be prepared for the change: not only they will not be confused or feel disoriented, but more experienced users can better decide how to open such links (in a new window or not, in the same window, in a new tab or not, in "background" or not).

- [WebAIM: Links and Hypertext - Hypertext Links](https://webaim.org/techniques/hypertext/hypertext_links)
- [MDN / Understanding WCAG, Guideline 3.2](/en-US/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200: Opening new windows and tabs from a link only when necessary](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Giving users advanced warning when opening a new window](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- `target` attribute documentation:
  - [`<a>`](/en-US/docs/Web/HTML/Element/a#attr-target)
  - [`<form>`](/en-US/docs/Web/HTML/Element/form#attr-target)
- [`window.close()`](/en-US/docs/Web/API/Window/close)
- [`window.closed`](/en-US/docs/Web/API/Window/closed)
- [`window.focus()`](/en-US/docs/Web/API/Window/focus)
- [`window.opener`](/en-US/docs/Web/API/Window/opener)
- [`rel="opener"`](/en-US/docs/Web/HTML/Attributes/rel#opener) and [`rel="noopener"`](/en-US/docs/Web/HTML/Attributes/rel#noopener)
- [Same-origin policy](/en-US/docs/Web/Security/Same-origin_policy)

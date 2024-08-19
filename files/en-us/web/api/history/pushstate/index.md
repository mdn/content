---
title: "History: pushState() method"
short-title: pushState()
slug: Web/API/History/pushState
page-type: web-api-instance-method
browser-compat: api.History.pushState
---

{{APIRef("History API")}}

The **`pushState()`** method of the {{domxref("History")}} interface adds an entry to the browser's
session history stack.

## Syntax

```js-nolint
pushState(state, unused)
pushState(state, unused, url)
```

### Parameters

- `state`

  - : The `state` object is a JavaScript object which is associated with the
    new history entry created by `pushState()`. Whenever the user navigates to
    the new `state`, a {{domxref("Window/popstate_event", "popstate")}} event is fired, and
    the `state` property of the event contains a copy of the history entry's
    `state` object.

    The `state` object can be anything that can be serialized.

    > [!NOTE]
    > Some browsers save `state` objects to the user's disk so they can be restored after the user restarts the browser, and impose a size limit on the serialized representation of a `state` object, and will throw an exception if you pass a `state` object whose serialized representation is larger than that size limit. So in cases where you want to ensure you have more space than what some browsers might impose, you're encouraged to use {{domxref("Window.sessionStorage", "sessionStorage")}} and/or {{domxref("Window.localStorage", "localStorage")}}.

- `unused`

  - : This parameter exists for historical reasons, and cannot be omitted; passing an empty string is safe against future changes to the method.

- `url` {{optional_inline}}
  - : The new history entry's URL. Note that the browser won't
    attempt to load this URL after a call to `pushState()`, but it may
    attempt to load the URL later, for instance, after the user restarts the browser. The
    new URL does not need to be absolute; if it's relative, it's resolved relative to the
    current URL. The new URL must be of the same {{glossary("origin")}} as the current
    URL; otherwise, `pushState()` will throw an exception. If this parameter
    isn't specified, it's set to the document's current URL.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `SecurityError` {{domxref("DOMException")}}
  - : Thrown if the associated document is not fully active, or if the provided `url` parameter is not a valid URL. Browsers also throttle navigations and may throw this error, generate a warning, or ignore the call if it's called too frequently.
- `DataCloneError` {{domxref("DOMException")}}
  - : Thrown if the provided `state` parameter is not serializable.

## Description

In a sense, calling `pushState()` is similar to
setting `window.location = "#foo"`, in that both will also create and
activate another history entry associated with the current document.
But `pushState()` has a few advantages:

- The new URL can be any URL in the same origin as the current URL. In contrast,
  setting {{domxref("window.location")}} keeps you at the same document only if you
  modify only the hash.
- Changing the page's URL is optional. In contrast,
  setting `window.location = "#foo";` only creates a new history entry if the
  current hash isn't `#foo`.
- You can associate arbitrary data with your new history entry. With the hash-based
  approach, you need to encode all of the relevant data into a short string.

Note that `pushState()` never causes a {{domxref("Window/hashchange_event", "hashchange")}} event to be
fired, even if the new URL differs from the old URL only in its hash.

## Examples

This creates a new browser history entry setting the _state_ and _url_.

### JavaScript

```js
const state = { page_id: 1, user_id: 5 };
const url = "hello-world.html";

history.pushState(state, "", url);
```

### Change a query parameter

```js
const url = new URL(location);
url.searchParams.set("foo", "bar");
history.pushState({}, "", url);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Working with the History API](/en-US/docs/Web/API/History_API/Working_with_the_History_API)
- [Window: popstate event](/en-US/docs/Web/API/Window/popstate_event)

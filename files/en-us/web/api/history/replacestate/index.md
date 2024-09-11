---
title: "History: replaceState() method"
short-title: replaceState()
slug: Web/API/History/replaceState
page-type: web-api-instance-method
browser-compat: api.History.replaceState
---

{{APIRef("History API")}}

The **`replaceState()`** method of the {{domxref("History")}} interface modifies the current
history entry, replacing it with the state object and
URL passed in the method parameters. This method is particularly useful
when you want to update the state object or URL of the current history entry in response
to some user action.

## Syntax

```js-nolint
replaceState(state, unused)
replaceState(state, unused, url)
```

### Parameters

- `state`
  - : An object which is associated with the history entry
    passed to the `replaceState()` method. The state object can be
    `null`.
- `unused`
  - : This parameter exists for historical reasons, and cannot be omitted; passing the empty string is traditional, and safe against future changes to the method.
- `url` {{optional_inline}}
  - : The URL of the history entry. The new URL must be of the same origin as the current
    URL; otherwise the `replaceState()` method throws an exception.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `SecurityError` {{domxref("DOMException")}}
  - : Thrown if the associated document is not fully active, or if the provided `url` parameter is not a valid URL. Browsers also throttle navigations and may throw this error, generate a warning, or ignore the call if it's called too frequently.
- `DataCloneError` {{domxref("DOMException")}}
  - : Thrown if the provided `state` parameter is not serializable.

## Examples

Suppose `https://www.mozilla.org/foo.html` executes the following JavaScript:

```js
const stateObj = { foo: "bar" };
history.pushState(stateObj, "", "bar.html");
```

On the next page you could then use `history.state` to access the `stateObj` that was just added.

The explanation of these two lines above can be found in the [Working with the History API](/en-US/docs/Web/API/History_API/Working_with_the_History_API#using_pushstate) article. Then suppose
`https://www.mozilla.org/bar.html` executes the following
JavaScript:

```js
history.replaceState(stateObj, "", "bar2.html");
```

This will cause the URL bar to display
`https://www.mozilla.org/bar2.html`, but won't cause the browser
to load `bar2.html` or even check that `bar2.html` exists.

Suppose now that the user navigates to
`https://www.microsoft.com`, then clicks the Back button. At this
point, the URL bar will display `https://www.mozilla.org/bar2.html`.
If the user now clicks Back again, the URL bar will
display `https://www.mozilla.org/foo.html`, and totally bypass bar.html.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

---
title: History.replaceState()
slug: Web/API/History/replaceState
tags:
  - API
  - HTML DOM
  - History
  - History API
  - Method
  - Reference
browser-compat: api.History.replaceState
---
{{APIRef("History API")}}

The **`History.replaceState()`** method modifies the current
history entry, replacing it with the `stateObj`, `title`, and
`URL` passed in the method parameters. This method is particularly useful
when you want to update the state object or URL of the current history entry in response
to some user action.

## Syntax

```js
history.replaceState(stateObj, title, [url])
```

### Parameters

- `stateObj`
  - : The state object is a JavaScript object which is associated with the history entry
    passed to the `replaceState` method. The state object can be
    `null`.
- `title`
  - : [Most browsers currently ignore
    this parameter](https://github.com/whatwg/html/issues/2174), although they may use it in the future. Passing the empty string
    here should be safe against future changes to the method. Alternatively, you could
    pass a short title for the state.
- `url` {{optional_inline}}
  - : The URL of the history entry. The new URL must be of the same origin as the current
    URL; otherwise replaceState throws an exception.

## Examples

Suppose https\://www\.mozilla.org/foo.html executes the following JavaScript:

```js
const stateObj = { foo: 'bar' };
history.pushState(stateObj, '', 'bar.html');
```

The explanation of these two lines above can be found in the [Example
of `pushState()` method](/en-US/docs/Web/API/History_API/Working_with_the_History_API#example_of_pushstate_method) section of the [Working with the
History API](/en-US/docs/Web/API/History_API/Working_with_the_History_API) article. Then suppose
`https://www.mozilla.org/bar.html` executes the following
JavaScript:

```js
history.replaceState(stateObj, '', 'bar2.html');
```

This will cause the URL bar to display
`https://www.mozilla.org/bar2.html`, but won't cause the browser
to load `bar2.html` or even check that `bar2.html` exists.

Suppose now that the user navigates to
`https://www.microsoft.com`, then clicks the Back button. At this
point, the URL bar will display `https://www.mozilla.org/bar2.html`.
If the user now clicks Back again, the URL bar will
display https\://www\.mozilla.org/foo.html, and totally bypass bar.html.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

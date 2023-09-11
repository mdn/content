---
title: Working with the History API
slug: Web/API/History_API/Working_with_the_History_API
page-type: guide
---

{{DefaultAPISidebar("History API")}}

The {{DOMxRef("History.pushState","pushState()")}} and {{DOMxRef("History.replaceState","replaceState()")}} methods add and modify history entries, respectively. These methods work in conjunction with the {{domxref("Window/popstate_event", "popstate")}} event.

## Adding and modifying history entries

Using {{DOMxRef("History.pushState","pushState()")}} changes the referrer that gets used in the HTTP header for {{domxref("XMLHttpRequest")}} objects created after you change the state. The referrer will be the URL of the document whose window is `this` at the time of creation of the {{domxref("XMLHttpRequest")}} object.

### Example of pushState() method

Suppose `https://mozilla.org/foo.html` executes the following JavaScript:

```js
const stateObj = {
  foo: "bar",
};

history.pushState(stateObj, "page 2", "bar.html");
```

This will cause the URL bar to display `https://mozilla.org/bar.html`, but won't cause the browser to load `bar.html` or even check that `bar.html` exists.

Suppose now that the user navigates to `https://google.com`, then clicks the **Back** button. At this point, the URL bar will display `https://mozilla.org/bar.html` and `history.state` will contain the `stateObj`. The `popstate` event won't be fired because the page has been reloaded. The page itself will look like `bar.html`.

If the user clicks **Back** once again, the URL will change to `https://mozilla.org/foo.html`, and the document will get a `popstate` event, this time with a `null` state object. Here too, going back doesn't change the document's contents from what they were in the previous step, although the document might update its contents manually upon receiving the `popstate` event.

### The pushState() method

`pushState()` takes three parameters: a **state object**; a **title** (currently ignored); and (optionally), a **URL**.

Let's examine each of these three parameters in more detail.

- **state object**
  - : The state object is a JavaScript object which is associated with the new history entry created by `pushState()`. Whenever the user navigates to the new state, a `popstate` event is fired, and the `state` property of the event contains a copy of the history entry's state object.
    The state object can be anything that can be serialized. Because Firefox saves state objects to the user's disk so they can be restored after the user restarts the browser, we impose a size limit of 640k characters on the serialized representation of a state object. If you pass a state object whose serialized representation is larger than this to `pushState()`, the method will throw an exception. If you need more space than this, you're encouraged to use `sessionStorage` and/or `localStorage`.
- **title**
  - : [All browsers but Safari currently ignore this parameter](https://github.com/whatwg/html/issues/2174), although they may use it in the future. Passing the empty string here should be safe against future changes to the method. Alternatively, you could pass a short title for the state to which you're moving.
- **URL**
  - : The new history entry's URL is given by this parameter. Note that the browser won't attempt to load this URL after a call to `pushState()`, but it might attempt to load the URL later, for instance after the user restarts the browser. The new URL does not need to be absolute; if it's relative, it's resolved relative to the current URL. The new URL must be of the same origin as the current URL; otherwise, `pushState()` will throw an exception. This parameter is optional; if it isn't specified, it's set to the document's current URL.

In a sense, calling `pushState()` is similar to setting `window.location = "#foo"`, in that both will also create and activate another history entry associated with the current document.

But `pushState()` has a few advantages:

- The new URL can be any URL in the same origin as the current URL. In contrast, setting `window.location` keeps you at the same {{ domxref("document") }} only if you modify only the hash.
- You don't have to change the URL if you don't want to. In contrast, setting `window.location = "#foo";` creates a new history entry only if the current hash isn't `#foo`.
- You can associate arbitrary data with your new history entry. With the hash-based approach, you need to encode all of the relevant data into a short string.
- If `title` is subsequently used by browsers, this data can be utilized (independent of, say, the hash).

Note that `pushState()` never causes a `hashchange` event to be fired, even if the new URL differs from the old URL only in its hash.

In other documents, it creates an element with a `null` namespace URI.

### The replaceState() method

`history.replaceState()` operates exactly like `history.pushState()`, except that `replaceState()` modifies the current history entry instead of creating a new one. Note that this doesn't prevent the creation of a new entry in the global browser history.

`replaceState()` is particularly useful when you want to update the state object or URL of the current history entry in response to some user action.

### Example of replaceState() method

Suppose `https://mozilla.org/foo.html` executes the following JavaScript:

```js
const stateObj = {
  foo: "bar",
};
history.pushState(stateObj, "page 2", "bar.html");
```

The explanation of these two lines above can be found at the above section _[Example of pushState() method](#example_of_pushstate_method)_ section.

Next, suppose `https://mozilla.org/bar.html` executes the following JavaScript:

```js
history.replaceState(stateObj, "page 3", "bar2.html");
```

This will cause the URL bar to display `https://mozilla.org/bar2.html`, but won't cause the browser to load `bar2.html` or even check that `bar2.html` exists.

Suppose now that the user navigates to `https://www.microsoft.com`, then clicks the **Back** button. At this point, the URL bar will display `https://mozilla.org/bar2.html`. If the user now clicks **Back** again, the URL bar will display `https://mozilla.org/foo.html`, and totally bypass `bar.html`.

### The popstate event

A `popstate` event is dispatched to the window every time the active history entry changes. If the history entry being activated was created by a call to {{DOMxRef("History.pushState","pushState")}} or affected by a call to {{DOMxRef("History.replaceState","replaceState")}}, the `popstate` event's `state` property contains a copy of the history entry's state object.

See {{domxref("Window/popstate_event", "popstate")}} for sample usage.

### Reading the current state

When your page loads, it might have a non-null state object. This can happen, for example, if the page sets a state object (using {{DOMxRef("History.pushState","pushState()")}} or {{DOMxRef("History.replaceState","replaceState()")}}) and then the user restarts their browser. When the page reloads, the page will receive an `onload` event, but no `popstate` event. However, if you read the {{DOMxRef("History.state","history.state")}} property, you'll get back the state object you would have gotten if a `popstate` had fired.

You can read the state of the current history entry without waiting for a `popstate` event using the {{DOMxRef("History.state","history.state")}} property like this:

```js
const currentState = history.state;
```

## See also

- [History API](/en-US/docs/Web/API/History_API)
- [History navigation example](/en-US/docs/Web/API/History_API/Example)
- {{domxref("window.history", "history")}} global object

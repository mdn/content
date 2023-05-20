---
title: Cross-global fetch usage
slug: Web/API/Fetch_API/Cross-global_fetch_usage
page-type: guide
---

{{DefaultAPISidebar("Fetch API")}}

This article explains an edge case that occurs with fetch (and potentially other APIs exhibiting the same kind of resource retrieval behavior). When a cross-origin fetch involving a relative URL is initiated from an {{htmlelement("iframe")}}, the relative URL used to be resolved against the current global location, rather than the iframe's location.

## The edge case

Many sites will never come up against this edge case. To see it:

- You need a same-origin iframe
- That same-origin iframe needs to have a location with a different base URL
- You have to use the fetch function cross-global, e.g. `frame.contentWindow.fetch()`
- The URL passed to fetch needs to be relative

## The problem

In the past we would resolve the relative URL against the current global, for example:

```js
let absolute = new URL(relative, window.location.href);
```

This is not a problem as such. It is just that different APIs that exhibit this kind of behavior were doing it inconsistently with the behavior defined in the spec, which could lead to problems further down the line.

## The solution

In Firefox 60 onwards, Mozilla resolves the relative URL against the global that owns the `fetch()` function being used (see [Firefox bug 1432272](https://bugzil.la/1432272)). So in the case described above, it is resolved against the iframe's location:

```js
let absolute = new URL(relative, frame.contentWindow.location.href);
```

There is a lot of discussion in progress about getting new specs to align with this behavior change, to mitigate potential problems going forward.

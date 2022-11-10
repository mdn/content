---
title: NavigateEvent.scroll()
slug: Web/API/NavigateEvent/scroll
page-type: web-api-instance-method
tags:
  - API
  - Experimental
  - History
  - Method
  - NavigateEvent
  - Navigation
  - Navigation API
  - Reference
  - Scroll
  - transition
  - Traversal
browser-compat: api.NavigateEvent.scroll
---

{{APIRef("Navigation API")}}{{seecompattable}}

The **`scroll()`** method of the
{{domxref("NavigateEvent")}} interface can be called to manually trigger the browser-driven scrolling behavior that occurs in response to the navigation, if you want it to happen before the navigation handling has completed.

## Syntax

```js-nolint
scroll()
```

### Parameters

None.

### Return value

`undefined`.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the current {{domxref("Document")}} is not yet active, if the navigation was not intercepted using {{domxref("NavigateEvent.intercept", "intercept()")}}, or if the default scroll behavior has already ocurred.

## Examples

### Handling scrolling using `scroll()`

```js
navigation.addEventListener('navigate', (event) => {
  if (shouldNotIntercept(navigateEvent)) {
    return;
  } 
  const url = new URL(event.destination.url);

  if (url.pathname.startsWith('/articles/')) {
    event.intercept({
      async handler() {
        const articleContent = await getArticleContent(url.pathname);
        renderArticlePage(articleContent);
        event.scroll();

        const secondaryContent = await getSecondaryContent(url.pathname);
        addSecondaryContent(secondaryContent);
      },
    });
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Modern client-side routing: the Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API explainer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicola's [Navigation API live demo](https://gigantic-honored-octagon.glitch.me/)

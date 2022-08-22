---
title: MediaQueryList.removeListener()
slug: Web/API/MediaQueryList/removeListener
page-type: web-api-instance-method
tags:
  - API
  - CSSOM View
  - Media Queries
  - MediaQueryList
  - Method
  - Reference
  - removeListener
  - Deprecated
browser-compat: api.MediaQueryList.removeListener
---
{{APIRef("CSSOM")}}{{Deprecated_Header}}

The **`removeListener()`** method of the
{{DOMxRef("MediaQueryList")}} interface removes a listener from the
`MediaQueryListener`.

In older browsers `MediaQueryList` did not yet inherit from {{DOMxRef("EventTarget")}},
so this method was provided as an alias of {{DOMxRef("EventTarget.removeEventListener()")}}.
Use `removeEventListener()` instead of `removeListener()` if it is
available in the browsers you need to support.

## Syntax

```js
removeListener(func)
```

### Parameters

- `func`
  - : A function or function reference representing the callback function you want to
    remove.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
const paragraph = document.querySelector('p');
const mediaQueryList = window.matchMedia('(max-width: 600px)');

function screenTest(e) {
  if (e.matches) {
    /* the viewport is 600 pixels wide or less */
    paragraph.textContent = 'This is a narrow screen — 600px wide or less.';
    document.body.style.backgroundColor = 'pink';
  } else {
    /* the viewport is more than 600 pixels wide */
    paragraph.textContent = 'This is a wide screen — more than 600px wide.';
    document.body.style.backgroundColor = 'aquamarine';
  }
}

mediaQueryList.addListener(screenTest);

// Later on, when it is no longer needed
mediaQueryList.removeListener(screenTest);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Media queries](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
- [Using media queries from code](/en-US/docs/Web/CSS/Media_Queries/Testing_media_queries)
- {{DOMxRef("window.matchMedia()")}}
- {{DOMxRef("MediaQueryList")}}
- {{DOMxRef("MediaQueryListEvent")}}

---
title: "ContentIndex: add() method"
short-title: add()
slug: Web/API/ContentIndex/add
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.ContentIndex.add
---

{{APIRef("Content Index API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

The **`add()`** method of the
{{domxref("ContentIndex")}} interface registers an item with the [content index](/en-US/docs/Web/API/Content_Index_API).

## Syntax

```js-nolint
add(contentDescription)
```

### Parameters

- `contentDescription`

  - : An {{jsxref('Object')}} containing the following data:

    - `id`
      - : A unique {{jsxref('String')}} identifier.
    - `title`
      - : A {{jsxref('String')}} title for the item. Used in
        user-visible lists of content.
    - `description`
      - : A {{jsxref('String')}} description of the item. Used
        in user-visible lists of content.
    - `url`
      - : A {{jsxref('String')}} containing the URL of the corresponding
        HTML document. Needs to be under the scope of the current
        [service worker](/en-US/docs/Web/API/ServiceWorker).
    - `category` {{Optional_Inline}}

      - : A {{jsxref('String')}} defining the
        category of content. Can be:

        - `''` An empty {{jsxref('String')}}, this is the default.
        - `homepage`
        - `article`
        - `video`
        - `audio`

    - `icons` {{Optional_Inline}}

      - : An {{jsxref('Array')}} of image
        resources, defined as an {{jsxref('Object')}} with the following data:

        - `src`
          - : A URL {{jsxref('String')}} of the source image.
        - `sizes` {{Optional_Inline}}
          - : A {{jsxref('String')}} representation of the image size.
        - `type` {{Optional_Inline}}
          - : The {{Glossary("MIME type")}} of the image.
        - `label` {{Optional_Inline}}
          - : A string representing the accessible name of the icon.

### Return value

Returns a {{jsxref("Promise")}} that resolves with `undefined`.

### Exceptions

- {{jsxref("TypeError")}}

  - : This exception is thrown in the following conditions:

    - The service worker's registration is not present or the service worker does not contain a {{domxref('FetchEvent')}}.
    - One of `id`, `title`, `description` or `url` parameter are missing, not of type {{jsxref('String')}}, or an empty {{jsxref('String')}}.
    - The `url` parameter is not {{glossary("same-origin policy")}} with the {{domxref("ServiceWorker", "service worker", "", "nocode")}}.
    - One of the items in `icons` are not an image type, or fetching one of the items in `icons` failed with a network error or decode error.

## Examples

Here we're declaring an item in the correct format and creating an asynchronous
function which uses the `add` method to register it with the
[content index](/en-US/docs/Web/API/Content_Index_API).

```js
// our content
const item = {
  id: "post-1",
  url: "/posts/amet.html",
  title: "Amet consectetur adipisicing",
  description:
    "Repellat et quia iste possimus ducimus aliquid a aut eaque nostrum.",
  icons: [
    {
      src: "/media/dark.png",
      sizes: "128x128",
      type: "image/png",
    },
  ],
  category: "article",
};

// our asynchronous function to add indexed content
async function registerContent(data) {
  const registration = await navigator.serviceWorker.ready;

  // feature detect Content Index
  if (!registration.index) {
    return;
  }

  // register content
  try {
    await registration.index.add(data);
  } catch (e) {
    console.log("Failed to register content: ", e.message);
  }
}
```

The `add` method can also be used within the
[service worker](/en-US/docs/Web/API/ServiceWorker) scope.

```js
// our content
const item = {
  id: "post-1",
  url: "/posts/amet.html",
  title: "Amet consectetur adipisicing",
  description:
    "Repellat et quia iste possimus ducimus aliquid a aut eaque nostrum.",
  icons: [
    {
      src: "/media/dark.png",
      sizes: "128x128",
      type: "image/png",
    },
  ],
  category: "article",
};

self.registration.index.add(item);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [An introductory article on the Content Index API](https://developer.chrome.com/docs/capabilities/web-apis/content-indexing-api)
- [Service Worker API, along with information about Cache and CacheStorage](/en-US/docs/Web/API/Service_Worker_API)

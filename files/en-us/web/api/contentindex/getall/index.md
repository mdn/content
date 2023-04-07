---
title: "ContentIndex: getAll() method"
short-title: getAll()
slug: Web/API/ContentIndex/getAll
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.ContentIndex.getAll
---

{{APIRef("Content Index API")}}{{SeeCompatTable}}

The **`getAll()`** method of the
{{domxref("ContentIndex")}} interface returns a {{jsxref('Promise')}} that resolves with
an iterable list of content index entries.

## Syntax

```js-nolint
getAll()
```

### Parameters

This method receives no parameters.

### Return value

Returns a {{jsxref("Promise")}} that resolves with an {{jsxref('Array')}} of
`contentDescription` items.

- `contentDescription`

  - : Each item returned is an {{jsxref('Object')}} containing the following data:

    - `id`: A unique {{jsxref('String')}} identifier.
    - `title`: A {{jsxref('String')}} title for the item. Used in
      user-visible lists of content.
    - `title`: A {{jsxref('String')}} title of the item. Used in
      user-visible lists of content.
    - `description`: A {{jsxref('String')}} description of the item. Used
      in user-visible lists of content.
    - `url`: A {{jsxref('String')}} containing the URL of the corresponding
      HTML document. Needs to be under the scope of the current
      {{domxref('ServiceWorker','service worker')}}.
    - `category` {{Optional_Inline}}: A {{jsxref('String')}} defining the
      category of content. Can be:

      - `''` An empty {{jsxref('String')}}, this is the default.
      - `homepage`
      - `article`
      - `video`
      - `audio`

    - `icons` {{Optional_Inline}}: An {{jsxref('Array')}} of image
      resources, defined as an {{jsxref('Object')}} with the following data:

      - `src`
        - : A URL {{jsxref('String')}} of the source image.
      - `sizes` {{Optional_Inline}}
        - : A {{jsxref('String')}}
          representation of the image size.
      - `type` {{Optional_Inline}}
        - : The {{Glossary("MIME type")}} of the
          image.

### Exceptions

No exceptions are thrown. If there are no items in the Content Index, an empty
{{jsxref('Array')}} is returned.

## Examples

The below example shows an asynchronous function that retrieves items within the
[content index](/en-US/docs/Web/API/Content_Index_API) and iterates over each entry, building
a list for the interface.

```js
async function createReadingList() {
  // access our service worker registration
  const registration = await navigator.serviceWorker.ready;

  // get our index entries
  const entries = await registration.index.getAll();

  // create a containing element
  const readingListElem = document.createElement("div");

  // test for entries
  if (!Array.length) {
    // if there are no entries, display a message
    const message = document.createElement("p");
    message.innerText =
      "You currently have no articles saved for offline reading.";

    readingListElem.append(message);
  } else {
    // if entries are present, display in a list of links to the content
    const listElem = document.createElement("ul");

    for (const entry of entries) {
      const listItem = document.createElement("li");

      const anchorElem = document.createElement("a");
      anchorElem.innerText = entry.title;
      anchorElem.setAttribute("href", entry.url);

      listElem.append(listItem);
    }

    readingListElem.append(listElem);
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [An introductory article on the Content Index API](https://web.dev/content-indexing-api/)
- [An app which uses the Content Index API to list and remove 'save for later' content](https://contentindex.dev/)
- [Service Worker API, along with information about Cache and CacheStorage](/en-US/docs/Web/API/Service_Worker_API)

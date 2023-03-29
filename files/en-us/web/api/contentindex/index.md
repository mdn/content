---
title: ContentIndex
slug: Web/API/ContentIndex
page-type: web-api-interface
status:
  - experimental
browser-compat: api.ContentIndex
---

{{APIRef("Content Index API")}}{{SeeCompatTable}}

The **`ContentIndex`** interface of the [Content Index API](/en-US/docs/Web/API/Content_Index_API) allows developers to register their offline enabled content with the browser.

## Instance properties

There are no properties of this interface.

## Instance methods

- {{domxref('ContentIndex.add()')}} {{Experimental_Inline}}
  - : Registers an item with the [content index](/en-US/docs/Web/API/Content_Index_API).
- {{domxref('ContentIndex.delete()')}} {{Experimental_Inline}}
  - : Unregisters an item from the currently indexed content.
- {{domxref('ContentIndex.getAll()')}} {{Experimental_Inline}}
  - : Returns a {{jsxref('Promise')}} that resolves with an iterable list of content index entries.

## Examples

### Feature detection and interface access

Here we get a reference to the {{domxref('ServiceWorkerRegistration')}}, then check for the `index` property, which gives us access to the content index interface.

```js
// reference registration
const registration = await navigator.serviceWorker.ready;

// feature detection
if ("index" in registration) {
  // Content Index API functionality
  const contentIndex = registration.index;
}
```

### Adding to the content index

Here we're declaring an item in the correct format and creating an asynchronous function which uses the {{domxref('ContentIndex.add','add()')}} method to register it with the [content index](/en-US/docs/Web/API/Content_Index_API).

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

### Retrieving items within the current index

The below example shows an asynchronous function that retrieves items within the [content index](/en-US/docs/Web/API/Content_Index_API) and iterates over each entry, building a list for the interface.

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

### Unregistering indexed content

Below is an asynchronous function, that removes an item from the [content index](/en-US/docs/Web/API/Content_Index_API).

```js
async function unregisterContent(article) {
  // reference registration
  const registration = await navigator.serviceWorker.ready;

  // feature detect Content Index
  if (!registration.index) return;

  // unregister content from index
  await registration.index.delete(article.id);
}
```

All the above methods are available within the scope of the [service worker](/en-US/docs/Web/API/ServiceWorker). They are accessible from the {{domxref('WorkerGlobalScope.self')}} property:

```js
// service worker script

self.registration.index.add(item);

self.registration.index.delete(item.id);

const contentIndexItems = self.registration.index.getAll();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [An introductory article on the Content Index API](https://web.dev/content-indexing-api/)
- [An app which uses the Content Index API to list and remove 'save for later' content](https://contentindex.dev/)
- [Service Worker API, along with information about Cache and CacheStorage](/en-US/docs/Web/API/Service_Worker_API)

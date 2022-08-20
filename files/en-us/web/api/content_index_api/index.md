---
title: Content Index API
slug: Web/API/Content_Index_API
page-type: web-api-overview
tags:
  - API
  - Content
  - Content Index API
  - Indexing
  - Landing
  - PWA
  - content indexing
  - Experimental
browser-compat: api.ContentIndex
---
{{DefaultAPISidebar("Content Index API")}}{{SeeCompatTable}}

The **Content Index API** allows developers to register their offline enabled content with the browser.

## Concepts and usage

As it stands, offline web content is not easily discoverable by users. Content indexing allows developers to tell the browser about their specific offline content. This allows users to discover and view what is available, whilst giving developers the ability to add and manage this content. Examples could be a news website prefetching the latest articles in the background, or a content streaming app registering downloaded content.

The Content Index API is an extension to [service workers](/en-US/docs/Web/API/Service_Worker_API), which allows developers to add URLs and metadata of already cached pages, under the scope of the current service worker. The browser can then use these entries to display offline reading to a user. As a developer you can also display these entries within your application.

Indexed entries do not automatically expire. It's good practice to present an interface for clearing out entries, or periodically remove older entries.

> **Note:** The API supports indexing URLs corresponding to HTML documents. A URL for a cached media file, for example, can't be indexed directly. Instead, you need to provide a URL for a page that displays media, and which works offline.

## Interfaces

- {{domxref("ContentIndex")}}
  - : The **`ContentIndex`** interface provides functionality to register content available offline.
- {{domxref("ContentIndexEvent")}}
  - : The **`ContentIndexEvent`** interface of the {{domxref('Content Index API')}} defines the object used to represent the {{domxref("ServiceWorkerGlobalScope.contentdelete_event", "contentdelete")}} event.

## Service worker additions

The following additions to the {{domxref('ServiceWorker')}} have been specified in the Content Index API spec to provide an entry point for using content indexing.

- {{domxref("ServiceWorkerRegistration.index")}} {{ReadOnlyInline}}
  - : Returns a reference to the {{domxref("ContentIndex")}} interface for indexing cached pages.
- {{domxref("ServiceWorkerGlobalScope.contentdelete_event", "contentdelete")}} event {{Experimental_Inline}}
  - : An event fired when content is removed by the user agent.

## Examples

All the following examples assume a service worker has been registered. For more information see the [Service Worker API](/en-US/docs/Web/API/Service_Worker_API).

### Feature detection and interface access

Here we get a reference to the {{domxref('ServiceWorkerRegistration')}}, then check for the `index` property, which gives us access to the content index interface.

```js
// reference registration
const registration = await navigator.serviceWorker.ready;

// feature detection
if ('index' in registration) {

  // Content Index API functionality
  const contentIndex = registration.index;

}
```

### Adding to the content index

Here we're declaring an item in the correct format and creating an asynchronous function which uses the {{domxref('ContentIndex.add','add()')}} method to register it with the {{domxref('Content Index API','content index')}}.

```js
// our content
const item = {
  id: 'post-1',
  url: '/posts/amet.html',
  title: 'Amet consectetur adipisicing',
  description: 'Repellat et quia iste possimus ducimus aliquid a aut eaque nostrum.',
  icons: [{
    src: '/media/dark.png',
    sizes: '128x128',
    type: 'image/png',
  }],
  category: 'article'
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
    console.log('Failed to register content: ', e.message);
  }
}
```

### Retrieving items within the current index

The below example shows an asynchronous function that retrieves items within the content index and iterates over each entry, building a list for the interface.

```js
async function createReadingList() {
  // access our service worker registration
  const registration = await navigator.serviceWorker.ready;

  // get our index entries
  const entries = await registration.index.getAll();

  // create a containing element
  const readingListElem = document.createElement('div');

  // test for entries
  if (!Array.length) {

    // if there are no entries, display a message
    const message = document.createElement('p');
    message.innerText = 'You currently have no articles saved for offline reading.'

    readingListElem.append(message);

  } else {

    // if entries are present, display in a list of links to the content
    const listElem = document.createElement('ul');

    for (const entry of entries) {
      const listItem = document.createElement('li');

      const anchorElem = document.createElement('a');
      anchorElem.innerText = entry.title;
      anchorElem.setAttribute('href', entry.url);

      listElem.append(listItem);

    }

    readingListElem.append(listElem);
  }

}
```

### Unregistering indexed content

Below is an asynchronous function, that removes an item from the content index.

```js
async function unregisterContent(article) {

  // reference registration
  const registration = await navigator.serviceWorker.ready;

  // feature detect Content Index
  if (!registration.index)
    return;

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

### The contentdelete event

When an item is removed from the user agent interface, a `contentdelete` event is received by the service worker.

```js
self.addEventListener('contentdelete', (event) => {
  console.log(event.id);

  // logs content index id, which can then be used to determine what content to delete from your cache

});
```

The {{domxref('ServiceWorkerGlobalScope.contentdelete_event', "contentdelete")}} event is only fired when the deletion happens due to interaction with the browser's built-in user interface. It is not fired when the {{domxref('ContentIndex.delete()')}} method is called.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [An introductory article on the Content Index API](https://web.dev/content-indexing-api/)
- [An app which uses the Content Index API to list and remove 'save for later' content](https://contentindex.dev/)
- [Service Worker API, along with information about Cache and CacheStorage](/en-US/docs/Web/API/Service_Worker_API)

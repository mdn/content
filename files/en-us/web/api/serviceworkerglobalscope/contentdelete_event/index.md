---
title: 'ServiceWorkerGlobalScope: contentdelete event'
slug: Web/API/ServiceWorkerGlobalScope/contentdelete_event
tags:
  - Content Index API
  - ServiceWorkerGlobalScope
  - content indexing
  - contentdelete
  - delete
  - event
browser-compat: api.ServiceWorkerGlobalScope.contentdelete_event
---
{{draft}}{{APIRef("Service Workers API")}}

The **`contentdelete`** event of the {{domxref("ServiceWorkerGlobalScope")}} interface is fired when an item is removed from the indexed content via the user agent.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("ContentIndexEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        {{domxref("ServiceWorkerGlobalScope.oncontentdelete")}}
      </td>
    </tr>
  </tbody>
</table>

## Examples

The following example uses a `contentdelete` event handler to remove cached content related to the deleted index item.

```js
self.addEventListener('contentdelete', event => {
  event.waitUntil(
    caches.open('cache-name').then(cache => {
      return Promise.all([
        cache.delete(`/icon/${event.id}`),
        cache.delete(`/content/${event.id}`)
      ])
    })
  );
});
```

You can also set up the event handler using the ServiceWorkerGlobalScope.ondelete property:

```js
self.oncontentdelete = (event) => {
  ...
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Content Index API")}}
- [An introductory article on the Content Index API](https://web.dev/content-indexing-api/)
- [An app which uses the Content Index API to list and remove 'save for later' content](https://contentindex.dev/)

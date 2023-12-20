---
title: share_target
slug: Web/Manifest/share_target
page-type: web-manifest-member
status:
  - experimental
browser-compat: html.manifest.share_target
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Manifest")}}{{SeeCompatTable}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>Object</code></td>
    </tr>
  </tbody>
</table>

The `share_target` manifest member allows installed {{Glossary("Progressive Web Apps")}} (PWAs) to be registered as a share target in the system's share dialog.

Once registered and installed, a PWA that uses the Web Share Target API acts as a content sharing target, along with typical system share targets like email, messengers, and other native apps that can receive shared content.

> **Note:** If you want to share data using the Web Share API, see [Web Share API](/en-US/docs/Web/API/Web_Share_API) and [`navigator.share()`](/en-US/docs/Web/API/Navigator/share).

## Properties

To define how an application can receive share data, a `share_target` object in the manifest may contain the following properties (`action` and `params` are required):

- `action`
  - : The URL for the web share target.
- `enctype` {{Optional_Inline}}
  - : The encoding of the share data when a [`POST`](/en-US/docs/Web/HTTP/Methods/POST) request is used. Ignored with [`GET`](/en-US/docs/Web/HTTP/Methods/GET) requests.
- `method` {{Optional_Inline}}
  - : The [HTTP request method](/en-US/docs/Web/HTTP/Methods) to use. Either [`GET`](/en-US/docs/Web/HTTP/Methods/GET) or [`POST`](/en-US/docs/Web/HTTP/Methods/POST). Use `POST` if the shared data includes binary data like image(s), or if it changes the target app, for example, if it creates a data point like a bookmark.
- `params`
  - : An object to configure the share parameters. The object keys correspond to the [`data` object in `navigator.share()`](/en-US/docs/Web/API/Navigator/share#parameters). The object values can be specified and will be used as query parameters:
    - `title` {{Optional_Inline}}: Name of the query parameter to use for the title of the document being shared.
    - `text` {{Optional_Inline}}: Name of the query parameter for the text (or body) of the message being shared.
    - `url` {{Optional_Inline}}: Name of the query parameter for the URL to the resource being shared.
    - `files` {{Optional_Inline}}: An object (or an array of objects) defining which files are accepted by the share target. The object requires the following properties:
      - `name`: Name of the form field used to share files.
      - `accept`: A string (or an array of strings) of accepted MIME types or file extensions.

## Examples

### Receiving share data using GET

A share target can be registered using the following `share_target` manifest member:

```json
{
  "share_target": {
    "action": "/shared-content-receiver/",
    "method": "GET",
    "params": {
      "title": "name",
      "text": "description",
      "url": "link"
    }
  }
}
```

When a user selects your app in the system's share dialog, your PWA is launched, and a `GET` HTTP request is made to the provided URL including the specified query parameters. It will look like this: `/shared-content-receiver/?name=a+shared+name&description=a+shared+description&link=https%3A%2F%2Fexample.com%2F`.

The [URLSearchParams](/en-US/docs/Web/API/URLSearchParams) interface can be useful to handle the shared data in your application and do something with it.

```js
const sharedName = url.searchParams.get("name");
const sharedDescription = url.searchParams.get("description");
const sharedLink = url.searchParams.get("link");
```

### Receiving share data using POST

If the share request includes one or multiple files or causes a side effect in your application, the HTTP [`POST`](/en-US/docs/Web/HTTP/Methods/POST) method should be used. For example, if your application receives images for further processing or wants to save a shared link as a bookmark in your database.

```json
{
  "share_target": {
    "action": "/save-bookmark/",
    "method": "POST",
    "enctype": "multipart/form-data",
    "params": {
      "url": "link"
    }
  }
}
```

You can either handle `POST` share data using server-side code, or, to provide a better experience for offline users, a `fetch` event listener can be used to intercept the HTTP request which allows to access the data in a [service worker](/en-US/docs/Web/API/Service_Worker_API).

```js
self.addEventListener("fetch", (event) => {
  // Regular requests not related to Web Share Target.
  if (event.request.method !== "POST") {
    event.respondWith(fetch(event.request));
    return;
  }

  // Requests related to Web Share Target.
  event.respondWith(
    (async () => {
      const formData = await event.request.formData();
      const link = formData.get("link") || "";
      // Instead of the original URL `/save-bookmark/`, redirect
      // the user to a URL returned by the `saveBookmark()`
      // function, for example, `/`.
      const responseUrl = await saveBookmark(link);
      return Response.redirect(responseUrl, 303);
    })(),
  );
});
```

The `POST` request is then ideally replied with an HTTP [303 See Other](/en-US/docs/Web/HTTP/Status/303) redirect to avoid multiple `POST` requests from being submitted if a page refresh was initiated by the user, for example.

### Receiving shared files

To accept shared files, the HTTP method must be `POST`, the `enctype` must be `multipart/form-data`, and a `files` entry defining the types of accepted files must be provided.

Files must have a `name` property, and the `accept` property must specify accepted MIME types or file extensions. It's probably a good idea to define both, since operating systems might differ in which they prefer.

```json
{
  "share_target": {
    "action": "/file-collector",
    "method": "POST",
    "enctype": "multipart/form-data",
    "params": {
      "title": "name",
      "text": "description",
      "url": "link",
      "files": [
        {
          "name": "lists",
          "accept": ["text/csv", ".csv"]
        },
        {
          "name": "photos",
          "accept": ["image/svg+xml", ".svg"]
        }
      ]
    }
  }
}
```

To handle shared file data, see the `POST` example above and the [`FileReader`](/en-US/docs/Web/API/FileReader) API to read the files. In order to get the files from the service worker context over to client contexts, one solution is to temporarily write the files to the [`Cache`](/en-US/docs/Web/API/Cache) or [IndexedDB](/en-US/docs/Web/API/IndexedDB_API) and then notify its clients using [`Client.postMessage()`](/en-US/docs/Web/API/Client/postMessage).

## Security & Privacy

Your PWA can only act as a web share target if it has been installed. See also [How to make PWAs installable](/en-US/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs).

Similar to HTML form submissions, you should be cautious about data that is sent to your application via the share target. Be sure to validate incoming data before using it.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

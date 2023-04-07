---
title: Share data between apps
slug: Web/Progressive_web_apps/How_to/Share_data_between_apps
---

Application sharing is the ability for one application to pass information or data to another application on a mobile or desktop device. This feature is useful for users as it allows them to share information between two applications without the need for these applications to have prior knowledge of each other.

For example, on your mobile device, you can share photos or videos from your photo app with another application that accepts images, such as an email application. This sharing pattern is orchestrated by the operating system (OS) where the two applications are installed:

1. When the photo sharing is initiated by the user, the photo application prepares the data for the selected image, and hands it over to the operating system.
2. The operating system selects the list of applications that are able to handle the shared image data and displays them to the user.
3. Once the user selects one of the target applications, the operating system launches it with the shared image.

[Progressive Web Apps](/en-US/docs/Web/Progressive_web_apps) (PWAs) also have the ability to share information using the same OS-orchestrated pattern. PWAs can both share data and accept shared data.

When building a PWA, accepting shared data can make your PWA feel more familiar and naturally integrated into your user's devices.

## Sharing data with other apps

To make it possible for users to share data with other apps from your PWA, use the [Web Share API](/en-US/docs/Web/API/Web_Share_API). The Web Share API allows your app to share text, links, or files with other apps via the underlying operating system share mechanism.

To share data, use the {{domxref("navigator.share()")}} method in response to a user action, such as a button click. You can also use the {{domxref("navigator.canShare()")}} method to first validate whether the data you intend to share is, indeed, shareable from the browser that's running your app, and on the current operating system.

### Sharing simple text data

The following example demonstrates how to share a link when a button in the app is clicked:

```js
const button = document.querySelector("#share");

button.addEventListener("click", async () => {
  try {
    await navigator.share({
      title: "Share data between apps",
      text: "An MDN article to learn how to share data between apps",
      url: "https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/How_to/Share_data_between_apps",
    });

    console.log("The URL was successfully shared");
  } catch (err) {
    console.log("The URL could not be shared");
    console.error(err);
  }
});
```

### Sharing files

While sharing simple text information is well supported, sharing files doesn't work in all browsers. Use the {{domxref("navigator.canShare()")}} method to first validate that the data you want to share is, indeed, shareable.

It's a good practice to call this method before displaying a button used to share files in your application.

In the following code example, a file sharing button is hidden if file sharing isn't supported; otherwise, an event listener is attached and used to share a file:

```js
const button = document.querySelector("#share");

function checkForFileSharingSupport() {
  // Instantiate a dummy file just to test for file sharing support.
  const file = new File(["foo"], "foo.txt", { type: "text/plain" });

  // Return true if navigator.canShare is supported, and if it returns true.
  return navigator.canShare && navigator.canShare({ files: [file] });
}

if (!checkForFileSharingSupport()) {
  // Hide the button since file sharing isn't supported.
  button.hidden = true;
} else {
  // Listen for clicks on the button and share a file.
  button.addEventListener("click", async () => {
    try {
      const file = getTheFileToShare();

      await navigator.share({
        title: "My shared file",
        files: [file],
      });

      console.log("The file was successfully shared");
    } catch (err) {
      console.log("The file could not be shared");
      console.error(err);
    }
  });
}
```

See [the Sharing files example](/en-US/docs/Web/API/Navigator/share#sharing_files) on the `navigator.share()` method page for more information.

## Handling shared data from other apps

To register your PWA as a target of other apps' shared data, use the [Web Share Target API](https://developer.chrome.com/en/articles/web-share-target/) and, in particular, the [`share_target`](/en-US/docs/Web/Manifest/share_target) web app manifest member.

The `share_target` manifest member allows an installed PWA to be registered, at the operating system level, as a potential target for content shared by other apps. This means that when a user shares some data that's compatible with your PWA, from another app, the operating system will list your PWA alongside other typical share targets like email or messaging apps.

The information you provide with the `share_target` member, in your manifest file, defines which data your app can be a target for, and how the operating system should launch your app when the user selects it as the target.

### Handling simple text data

Here is a web app manifest example using the `share_target` member:

```json
{
  "name": "ChattyBox",
  "start_url": "/",
  "display": "standalone",
  "icons": [
    {
      "src": "images/icon-256.png",
      "sizes": "256x256",
      "type": "image/png"
    }
  ],
  "share_target": {
    "action": "/share-handler",
    "method": "GET",
    "params": {
      "text": "description",
      "url": "link"
    }
  }
}
```

When your app is selected by the user to handle an other app's shared content, it is launched and the shared content is passed to it similar to how {{htmlelement("form")}} elements are submitted.

In the above code example, when the ChattyBox app is selected as a target, it is launched with an HTTP [`GET`](/en-US/docs/Web/HTTP/Methods/GET) request on the `/share-handler` URL with the shared data passed as request parameters named `description` and `link`.

The `GET` request will look like this: `/shared-handler?description=...&link=...`.

For more information, see the [Receive share data using GET](/en-US/docs/Web/Manifest/share_target#receiving_share_data_using_get) example on the the `share_target` web app manifest member page.

### Handling shared files

In the previous example, simple text data was handled as a `GET` request. However, handling files requires the use of a [`POST`](/en-US/docs/Web/HTTP/Methods/POST) request with a `multipart/form-data` [encoding type](/en-US/docs/Web/API/HTMLFormElement/enctype).

The following code snippet shows how a PWA can be configured to accept different types of shared files:

```json
{
  "name": "ChattyBox",
  "start_url": "/",
  "display": "standalone",
  "icons": [
    {
      "src": "images/icon-256.png",
      "sizes": "256x256",
      "type": "image/png"
    }
  ],
  "share_target": {
    "action": "/share-file-handler",
    "method": "POST",
    "enctype": "multipart/form-data",
    "params": {
      "files": [
        {
          "name": "textFiles",
          "accept": ["text/plain", ".txt"]
        },
        {
          "name": "htmlFiles",
          "accept": ["text/html", ".html"]
        },
        {
          "name": "images",
          "accept": ["image/jpeg", "image/png", "image/webp", "image/gif"]
        }
      ]
    }
  }
}
```

As this example shows, each file object in the `files` property must have a `name` property and an `accept` property. The `accept` property must specify the accepted [MIME types](/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) or file extensions.

When the app is selected by the user to handle a shared file (or files), the app is launched with a `POST` request to the `/share-file-handler` URL, with encoded form data.

Because this is a `POST` request, your app's main JavaScript code can't access the form data directly. You can handle the submitted files in your server-side code, by receiving them at the `/share-file-handler` URL end point. However, for a better user experience that works offline, you can handle the files in your service worker code with a {{domxref("FetchEvent", "fetch")}} event listener, as demonstrated below:

```js
self.addEventListener("fetch", (event) => {
  // Only use this event listener for POST requests sent to /share-file-handler.
  const url = new URL(event.request.url);
  if (
    event.request.method !== "POST" ||
    url.pathname !== "/share-file-handler"
  ) {
    return;
  }

  event.respondWith(
    (async () => {
      // Get the data from the submitted form.
      const formData = await event.request.formData();

      // Get the submitted files.
      const textFiles = formData.getAll("textFiles");
      const htmlFiles = formData.getAll("htmlFiles");
      const imageFiles = formData.getAll("images");

      // Send the files to the frontend app.
      sendFilesToFrontend(textFiles, htmlFiles, imageFiles);

      // Redirect the user to a URL that shows the imported files.
      return Response.redirect("/display-new-files", 303);
    })()
  );
});
```

In the above code example, the shared files are extracted from the form data, and the user is redirected to a different page. It's up to you, using the code in your service worker, to handle the extracted files as you want. For example, you can send them to your app's main JavaScript code using the {{domxref("Worker.postMessage()")}} method, or store them in an {{domxref("IndexedDB")}} database which can be accessed both by your service worker and app's main JavaScript code.

For more information, see the [Receiving shared files](/en-US/docs/Web/Manifest/share_target#receiving_shared_files) example on the the `share_target` web app manifest member page.

## See also

- [Web Share API](/en-US/docs/Web/API/Web_Share_API)
- [`share_target` manifest member](/en-US/docs/Web/Manifest/share_target)
- [Integrate with the OS sharing UI with the Web Share API](https://web.dev/web-share/) on web.dev
- [Receiving shared data with the Web Share Target API](https://developer.chrome.com/articles/web-share-target/) on chrome.com
- [Share content with other apps](https://learn.microsoft.com/microsoft-edge/progressive-web-apps-chromium/how-to/share) on microsoft.com

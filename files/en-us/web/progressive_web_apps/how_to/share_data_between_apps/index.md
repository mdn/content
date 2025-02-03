---
title: Share data between apps
slug: Web/Progressive_web_apps/How_to/Share_data_between_apps
page-type: how-to
---

{{PWASidebar}}

Application sharing is the ability of one application to pass information or data to another application on the same device. This feature is useful for users as it allows them to share information between two applications without the need for these applications to have prior knowledge of each other.

For example, on your mobile device, you can share photos or videos from your photo app with another application that accepts images, such as an email application. This sharing pattern is orchestrated by the operating system (OS) where the two applications are installed:

1. When the photo sharing is initiated by the user, the photo application prepares the data for the selected image, and hands it over to the operating system.
2. The operating system selects the list of applications that are able to handle the shared image data and displays them to the user.
3. Once the user selects one of the target applications, the operating system launches it with the shared image.

[Progressive Web Apps](/en-US/docs/Web/Progressive_web_apps) (PWAs) also have the ability to share information using the same OS-orchestrated pattern. PWAs can both share data and accept shared data.

When building a PWA, accepting shared data can make your PWA feel more familiar and naturally integrated into your user's devices.

## Sharing data with other apps

To make it possible for users to share data with other apps from your PWA, use the [Web Share API](/en-US/docs/Web/API/Web_Share_API). The Web Share API allows your app to share text, links, or files with other apps via the underlying operating system share mechanism.

To share data, use the {{domxref("navigator.share()")}} method in response to a user action, such as a button click.

### Checking for support

Before displaying content-sharing UI in your application, check to ensure the Web Share API feature is supported. Even the browsers that support the Web Share API don't all support sharing all types of data. Therefore, it's a good practice to use the {{domxref("navigator.canShare()")}} method first to validate whether the data you intend to share is, indeed, shareable from the browser that's running your app.

This example shows how to check if the Web Share API is supported and if the data can be shared:

```js
function canBrowserShareData(data) {
  if (!navigator.share || !navigator.canShare) {
    return false;
  }

  return navigator.canShare(data);
}

const sharedDataSample = {
  title: "Some text title",
  text: "More text",
  url: "A url we want to share",
};

if (canBrowserShareData(sharedDataSample)) {
  // Enable the share button in the UI.
  renderAppSharingUI();
} else {
  // We can't share on this browser/operating system.
}
```

### Handling exceptions

The {{domxref("navigator.share()")}} method returns a {{jsxref("Promise")}} that may be rejected in cases such as when the shared data is incorrect, when the user aborts the share operation, or when the data transmission failed.

It's therefore important to catch the promise rejection in order to avoid errors in your app's JavaScript code.

```js
async function shareData(data) {
  try {
    await navigator.share(data);
    // The data was shared successfully.
  } catch (e) {
    // The data could not be shared.
    console.error(`Error: ${e}`);
  }
}
```

### Sharing text data

The following example demonstrates how to share a link and some text when a button in the app is clicked. The `canBrowserShareData` function used in the example is described in [Checking for support](#checking_for_support) and not repeated here.

```js
// Retrieve the button from the DOM. The button is hidden for now.
const button = document.querySelector("#share");

if (canBrowserShareData({ text: "text", url: "https://example.com" })) {
  // Show the button.
  button.style.display = "inline";

  // Listen for click events on the button to share data.
  button.addEventListener("click", async () => {
    try {
      await navigator.share({
        text: "An MDN article to learn how to share data between apps",
        url: "https://developer.mozilla.org/docs/Web/Progressive_web_apps/How_to/Share_data_between_apps",
      });

      console.log("The URL was successfully shared");
    } catch (err) {
      console.error(`The URL could not be shared: ${err}`);
    }
  });
}
```

### Sharing files

The following code example demonstrates how to share a file when a button in the app is clicked. The `canBrowserShareFiles` function is used to display the share button only if the browser supports sharing files.

```js
function canBrowserShareFiles() {
  if (!navigator.share || !navigator.canShare) {
    return false;
  }

  // Create some test data with a file, to check if the browser supports
  // sharing it.
  const testFile = new File(["foo"], "foo.txt", { type: "text/plain" });
  const data = { files: [testFile] };

  return navigator.canShare(data);
}

// Retrieve the button from the DOM. The button is hidden for now.
const button = document.querySelector("#share");

if (canBrowserShareFiles()) {
  // The browser supports sharing files. Show the button.
  button.style.display = "inline";

  // Listen for clicks on the button and share a file.
  button.addEventListener("click", async () => {
    try {
      // Get the file to be shared. This function should return a File
      // object, perhaps by creating it dynamically, or retrieving it
      // from IndexedDB.
      const file = await getTheFileToShare();

      await navigator.share({
        title: "My shared file",
        files: [file],
      });

      console.log("The file was successfully shared");
    } catch (err) {
      console.error(`The file could not be shared: ${err}`);
    }
  });
}
```

For more information, see the [sharing files example](/en-US/docs/Web/API/Navigator/share#sharing_files) on the `navigator.share()` method page.

## Handling shared data from other apps

To register your PWA as a target of other apps' shared data, use the [Web Share Target API](https://developer.chrome.com/docs/capabilities/web-apis/web-share-target) and, in particular, the [`share_target`](/en-US/docs/Web/Manifest/Reference/share_target) web app manifest member.

The `share_target` manifest member allows an installed PWA to be registered, at the operating system level, as a potential target for content shared by other apps. This means that when a user shares some data that's compatible with your PWA, from another app, the operating system will list your PWA alongside other typical share targets like email or messaging apps. Note that the PWA must be installed to be displayed as a potential target for receiving shared data.

The information you provide with the `share_target` member, in your manifest file, defines which data your app can be a target for, and how the operating system should launch your app when the user selects it as the target.

### Handling text data

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

When your app is selected by the user to handle another apps' shared content, your app is launched and the shared content is passed to it in a similar way to that in which {{htmlelement("form")}} elements are submitted.

In the previous web app manifest code example, when the ChattyBox app is selected as a target, it is launched by making an HTTP [`GET`](/en-US/docs/Web/HTTP/Methods/GET) request at the `/share-handler` URL, with the shared data passed as request parameters named `description` and `link`.

The `GET` request will look like this: `/shared-handler?description=...&link=...`.

Your app's main JavaScript code can then retrieve the shared data by using the [URLSearchParams](/en-US/docs/Web/API/URLSearchParams) interface:

```js
const url = new URL(document.location);
const sharedDescription = url.searchParams.get("description");
const sharedLink = url.searchParams.get("link");
```

For more information, see the example [Receive share data using GET](/en-US/docs/Web/Manifest/Reference/share_target#receiving_share_data_using_get) on the `share_target` web app manifest member page.

### Handling shared files

In the previous example, text data was handled as a `GET` request. However, handling files requires the use of a [`POST`](/en-US/docs/Web/HTTP/Methods/POST) request with a `multipart/form-data` [encoding type](/en-US/docs/Web/API/HTMLFormElement/enctype).

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

As this example shows, each file object in the `files` property must have a `name` property and an `accept` property. The `accept` property must specify the accepted [MIME types](/en-US/docs/Web/HTTP/MIME_types) or file extensions.

When the app is selected by the user to handle a shared file (or files), the app is launched with a `POST` request at the `/share-file-handler` URL, with encoded form data.

Because this is a `POST` request, your app's main JavaScript code can't access the form data directly. You can handle the submitted files in your server-side code, by receiving them at the `/share-file-handler` URL end point. However, for a better user experience that works offline, you can handle the files in your service worker code with a [`fetch` event handler](/en-US/docs/Web/API/ServiceWorkerGlobalScope/fetch_event), as shown here:

```js
// service-worker.js

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
    })(),
  );
});
```

In this code example, the shared files are extracted from the form data and the user is redirected to a different page. It's up to you, using the code in your service worker, to handle the extracted files as you want. For example, you can send them to your app's main JavaScript code using the {{domxref("Worker.postMessage()")}} method or store them in an [Indexed DB](/en-US/docs/Web/API/IndexedDB_API) database which can be accessed both by your service worker and app's main JavaScript code.

For more information, see the [receiving shared files](/en-US/docs/Web/Manifest/Reference/share_target#receiving_shared_files) example on the `share_target` web app manifest member page.

## See also

- [Web Share API](/en-US/docs/Web/API/Web_Share_API)
- [`share_target` manifest member](/en-US/docs/Web/Manifest/Reference/share_target)
- [Integrate with the OS sharing UI with the Web Share API](https://web.dev/articles/web-share) on web.dev
- [Receiving shared data with the Web Share Target API](https://developer.chrome.com/docs/capabilities/web-apis/web-share-target) on developer.chrome.com
- [Share content with other apps](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/share) on microsoft.com

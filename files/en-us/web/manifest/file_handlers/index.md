---
title: file_handlers
slug: Web/Manifest/file_handlers
status:
  - experimental
browser-compat: html.manifest.file_handlers
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Manifest")}}{{SeeCompatTable}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>Array</code></td>
    </tr>
    <tr>
      <th scope="row">Mandatory</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

The `file_handlers` member specifies an array of objects that represent types of files that an installed [progressive web app (PWA)](/en-US/docs/Web/Progressive_web_apps) can handle.

The `file_handlers` member is used by the browser when the PWA is installed to register the application in the operating system's file association registry.

For example, a PWA can register to handle files that match the `text/plain` [MIME type](/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types). Once installed, the operating system will use the PWA to handle text files.

Note that the way operating systems manage and let users select an application to handle a given file varies.

## Values

Each file handler object contains the following values:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Member</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>action</code></td>
      <td>
        A required string containing the URL to navigate to when a file is handled. This URL should be within the <a href="/en-US/docs/Web/Manifest/scope">scope</a> of the PWA.
      </td>
    </tr>
    <tr>
      <td><code>accept</code></td>
      <td>
        A required, non-empty, array of objects that map MIME types to file extensions that the PWA handles. For example: <code>{ "audio/wav": [".wav"] }</code> defines that the PWA should handle files that have the <code>audio/wave</code> MIME type and a <code>.wav</code> file extension.
      </td>
    </tr>
  </tbody>
</table>

## Example

In this example, a web app manifest declares one file handler that registers the app to handle audio files. Other manifest members such as `name`, or `icons` are not included in this example for brevity:

```json
{
  "file_handlers": [
    {
      "action": "/handle-audio-file",
      "accept": {
        "audio/wav": [".wav"],
        "audio/x-wav": [".wav"],
        "audio/mpeg": [".mp3"],
        "audio/mp4": [".mp4"],
        "audio/aac": [".adts"],
        "audio/ogg": [".ogg"],
        "application/ogg": [".ogg"],
        "audio/webm": [".webm"],
        "audio/flac": [".flac"]
      }
    }
  ]
}
```

To actually implement file handling in a PWA, web developers also need to use {{domxref("window.launchQueue")}} to handle the incoming file.

In this example, {{domxref("LaunchQueue.setConsumer", "window.launchQueue.setConsumer()")}} is used to specify a callback function that plays the handled audio file:

```js
async function playSong(handledFile) {
  const blob = await file.getFile();
  const url = window.URL.createObjectURL(blob);
  const audio = new Audio(url);
  audio.play();
}

if ("launchQueue" in window) {
  window.launchQueue.setConsumer((launchParams) => {
    if (launchParams.files && launchParams.files.length === 1) {
      playSong(launchParams.files[0]);
    }
  });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Handle files in Progressive Web Apps on learn.microsoft.com](https://learn.microsoft.com/microsoft-edge/progressive-web-apps-chromium/how-to/handle-files)
- [Let installed web applications be file handlers on developer.chrome.com](https://developer.chrome.com/articles/file-handling/)

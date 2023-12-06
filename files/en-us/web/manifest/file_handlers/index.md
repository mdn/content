---
title: file_handlers
slug: Web/Manifest/file_handlers
page-type: web-manifest-member
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
  </tbody>
</table>

The `file_handlers` member specifies an array of objects representing the types of files an installed [progressive web app (PWA)](/en-US/docs/Web/Progressive_web_apps) can handle.

The `file_handlers` member is read by the browser when the PWA is installed and used to associate the application with a given set of file types at the operating system level.

For example, a PWA can be registered to handle files that match the `text/plain` [MIME type](/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types). Once this PWA is installed, the operating system is able to use it to handle text files, opening the PWA when the user opens a file of this type. Note that other applications may also be registered as text file handlers, and the way operating systems manage the association between file types and applications, and the way they let users choose an application to handle a given file can vary from one device to another.

> **Note:** While the `file_handlers` member is used to register a PWA with a given set of file types, this only results in the operating system launching the PWA when a matching file is opened. The PWA then needs to actually handle the file using JavaScript code. See [Handling the files](#handling_the_files) for more information.

## Values

An array of objects. Each object in the array must contain the following values (`action` and `accept` are required):

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
        A string containing the URL to navigate to when a file is handled.<br>
        This URL must be within the navigation scope of the PWA, which is the set of URLs that the PWA can navigate to. The navigation scope of a PWA defaults to its <a href="/en-US/docs/Web/Manifest/start_url"><code>start_url</code></a> member, but can also be defined by using the <a href="/en-US/docs/Web/Manifest/scope"><code>scope</code></a> member.
      </td>
    </tr>
    <tr>
      <td><code>accept</code></td>
      <td>
        An object. For each property in the object:
        <ul>
          <li>The property key is a MIME type.</li>
          <li>The property value is an array of strings representing file extensions associated with that MIME type.</li>
        </ul>
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
        "audio/flac": [".flac"],
        "audio/mid": [".rmi", ".mid"]
      }
    }
  ]
}
```

### Handling the files

To actually implement file handling in a PWA, web developers also need to use {{domxref("window.launchQueue")}} to handle the incoming files in their application JavaScript code.

Handling files is done in the application code that runs on the {{Glossary("main thread")}}, not in the application's [service worker](/en-US/docs/Web/API/Service_Worker_API).

In the following example, {{domxref("LaunchQueue.setConsumer", "window.launchQueue.setConsumer()")}} is used to specify a callback function that receives incoming audio files and plays the first one using an {{domxref("HTMLAudioElement.Audio", "Audio")}} element:

```js
async function playSong(handledFile) {
  const blob = await file.getFile();
  const url = window.URL.createObjectURL(blob);
  const audio = new Audio(url);
  audio.play();
}

if ("launchQueue" in window) {
  window.launchQueue.setConsumer((launchParams) => {
    if (launchParams.files && launchParams.files.length) {
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

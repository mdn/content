---
title: XMLHttpRequestUpload
slug: Web/API/XMLHttpRequestUpload
page-type: web-api-interface
browser-compat: api.XMLHttpRequestUpload
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

The **`XMLHttpRequestUpload`** interface represents the upload process for a specific {{domxref("XMLHttpRequest")}}. It is an _opaque_ object that represents the underlying, browser-dependent, upload process. It is an {{domxref("XMLHttpRequestEventTarget")}} and can be obtained by calling {{domxref("XMLHttpRequest.upload")}}.

{{InheritanceDiagram}}

## Instance properties

_This interface has no specific property, but inherits the properties of {{domxref("XMLHttpRequestEventTarget")}} and of {{domxref("EventTarget")}}._

## Instance methods

_This interface has no specific method, but inherits the methods of {{domxref("XMLHttpRequestEventTarget")}} and of {{domxref("EventTarget")}}._

## Events

- {{domxref("XMLHttpRequestUpload/abort_event", "abort")}}
  - : Fired when a request has been aborted, for example because the program called {{domxref("XMLHttpRequest.abort()")}}.
    Also available via the `onabort` event handler property.
- {{domxref("XMLHttpRequestUpload/error_event", "error")}}
  - : Fired when the request encountered an error.
    Also available via the `onerror` event handler property.
- {{domxref("XMLHttpRequestUpload/load_event", "load")}}
  - : Fired when a request transaction completes successfully.
    Also available via the `onload` event handler property.
- {{domxref("XMLHttpRequestUpload/loadend_event", "loadend")}}
  - : Fired when a request has completed, whether successfully (after {{domxref("XMLHttpRequest/load_event", "load")}}) or unsuccessfully (after {{domxref("XMLHttpRequestUpload/abort_event", "abort")}} or {{domxref("XMLHttpRequest/error_event", "error")}}).
    Also available via the `onloadend` event handler property.
- {{domxref("XMLHttpRequestUpload/loadstart_event", "loadstart")}}
  - : Fired when a request has started to load data.
    Also available via the `onloadstart` event handler property.
- {{domxref("XMLHttpRequestUpload/progress_event", "progress")}}
  - : Fired periodically when a request receives more data.
    Also available via the `onprogress` event handler property.
- {{domxref("XMLHttpRequestUpload/timeout_event", "timeout")}}
  - : Fired when progress is terminated due to preset time expiring.
    Also available via the `ontimeout` event handler property.

## Examples

### Uploading a file with a timeout

This allows you to upload a file to a server; it displays a progress bar while the upload is happening as well as a message with the progress and the results, success or failure. An abort button allows to stop an upload.

#### HTML

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>XMLHttpRequestUpload test</title>
    <link rel="stylesheet" href="xhrupload_test.css" />
    <script src="xhrupload_test.js"></script>
  </head>
  <body>
    <main>
      <h1>Upload a file</h1>
      <p>
        <label for="file">File to upload</label><input type="file" id="file" />
      </p>
      <p>
        <progress />
      </p>
      <p>
        <output></output>
      </p>
      <p>
        <button disabled id="abort">Abort</button>
      </p>
    </main>
  </body>
</html>
```

#### CSS

```css
body {
  background-color: lightblue;
}

main {
  margin: 50px auto;
  text-align: center;
}

#file {
  display: none;
}

label[for="file"] {
  background-color: lightgrey;
  padding: 10px 10px;
}

progress {
  display: none;
}

progress.visible {
  display: inline;
}
```

#### JavaScript

```js
addEventListener("DOMContentLoaded", () => {
  const fileInput = document.getElementById("file");
  const progressBar = document.querySelector("progress");
  const log = document.querySelector("output");
  const abortButton = document.getElementById("abort");

  fileInput.addEventListener("change", () => {
    const xhr = new XMLHttpRequest();
    xhr.timeout = 2000; // 2 seconds

    // Link abort button
    abortButton.addEventListener(
      "click",
      () => {
        xhr.abort();
      },
      { once: true },
    );

    // When the upload starts, we display the progress bar
    xhr.upload.addEventListener("loadstart", (event) => {
      progressBar.classList.add("visible");
      progressBar.value = 0;
      progressBar.max = event.total;
      log.textContent = "Uploading (0%)…";
      abortButton.disabled = false;
    });

    // Each time a progress event is received, we update the bar
    xhr.upload.addEventListener("progress", (event) => {
      progressBar.value = event.loaded;
      log.textContent = `Uploading (${(
        (event.loaded / event.total) *
        100
      ).toFixed(2)}%)…`;
    });

    // When the upload is finished, we hide the progress bar.
    xhr.upload.addEventListener("loadend", (event) => {
      progressBar.classList.remove("visible");
      if (event.loaded !== 0) {
        log.textContent = "Upload finished.";
      }
      abortButton.disabled = true;
    });

    // In case of an error, an abort, or a timeout, we hide the progress bar
    // Note that these events can be listened to on the xhr object too
    function errorAction(event) {
      progressBar.classList.remove("visible");
      log.textContent = `Upload failed: ${event.type}`;
    }
    xhr.upload.addEventListener("error", errorAction);
    xhr.upload.addEventListener("abort", errorAction);
    xhr.upload.addEventListener("timeout", errorAction);

    // Build the payload
    const fileData = new FormData();
    fileData.append("file", fileInput.files[0]);

    // Theoretically, event listeners could be set after the open() call
    // but browsers are buggy here
    xhr.open("POST", "upload_test.php", true);

    // Note that the event listener must be set before sending (as it is a preflighted request)
    xhr.send(fileData);
  });
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XMLHttpRequest")}}

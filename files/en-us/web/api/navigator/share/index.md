---
title: "Navigator: share() method"
short-title: share()
slug: Web/API/Navigator/share
page-type: web-api-instance-method
browser-compat: api.Navigator.share
---

{{APIRef("Web Share API")}}{{securecontext_header}}

The **`navigator.share()`** method of the [Web Share API](/en-US/docs/Web/API/Web_Share_API) invokes the native sharing mechanism of the device to share data such as text, URLs, or files. The available _share targets_ depend on the device, but might include the clipboard, contacts and email applications, websites, Bluetooth, etc.

The method resolves a {{jsxref("Promise")}} with `undefined`.
On Windows this happens when the share popup is launched, while on Android the promise resolves once the data has successfully been passed to the _share target_.

## Syntax

```js-nolint
navigator.share(data)
```

### Parameters

- `data`

  - : An object containing data to share.

    Properties that are unknown to the user agent are ignored; share data is only assessed on properties understood by the user agent.
    All properties are optional but at least one known data property must be specified.

    Possible values are:

    - `url`: A string representing a URL to be shared.
    - `text`: A string representing text to be shared.
    - `title`: A string representing a title to be shared. May be ignored by the target.
    - `files`: An array of {{domxref("File")}} objects representing files to be shared. See [below](#shareable_file_types) for shareable file types.

### Return value

A {{jsxref("Promise")}} that resolves with `undefined`, or rejected with one of the [Exceptions](#exceptions) given below.

### Exceptions

The {{jsxref("Promise")}} may be rejected with one of the following `DOMException` values:

- `NotAllowedError` {{domxref("DOMException")}}
  - : A `web-share` [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy) has been used to block the use of this feature, the window does not have {{Glossary("transient activation")}}, or a file share is being blocked due to security considerations.
- {{jsxref("TypeError")}}

  - : The specified share data cannot be validated. Possible reasons include:

    - The `data` parameter was omitted completely or only contains properties with unknown values. Note that any properties that are not recognized by the user agent are ignored.
    - A URL is badly formatted.
    - Files are specified but the implementation does not support file sharing.
    - Sharing the specified data would be considered a "hostile share" by the user-agent.

- `AbortError` {{domxref("DOMException")}}
  - : The user canceled the share operation or there are no share targets available.
- `DataError` {{domxref("DOMException")}}
  - : There was a problem starting the share target or transmitting the data.

## Shareable file types

The following is a list of usually shareable file types. However, you should always test with {{domxref("navigator.canShare()")}} if sharing would succeed.

- Application
  - `.pdf` - `application/pdf`
- Audio
  - `.flac` - `audio/flac`
  - `.m4a` - `audio/x-m4a`
  - `.mp3` - `audio/mpeg` (also accepts `audio/mp3`)
  - `.oga` - `audio/ogg`
  - `.ogg` - `audio/ogg`
  - `.opus` - `audio/ogg`
  - `.wav` - `audio/wav`
  - `.weba` - `audio/webm`
- Image
  - `.avif` - `image/avif`
  - `.bmp` - `image/bmp`
  - `.gif` - `image/gif`
  - `.ico` - `image/x-icon`
  - `.jfif` - `image/jpeg`
  - `.jpeg` - `image/jpeg`
  - `.jpg` - `image/jpeg`
  - `.pjp` - `image/jpeg`
  - `.pjpeg` - `image/jpeg`
  - `.png` - `image/png`
  - `.svg` - `image/svg+xml`
  - `.svgz` - `image/svg+xml`
  - `.tif` - `image/tiff`
  - `.tiff` - `image/tiff`
  - `.webp` - `image/webp`
  - `.xbm` - `image/x-xbitmap`
- Text
  - `.css` - `text/css`
  - `.csv` - `text/csv`
  - `.ehtml` - `text/html`
  - `.htm` - `text/html`
  - `.html` - `text/html`
  - `.shtm` - `text/html`
  - `.shtml` - `text/html`
  - `.text` - `text/plain`
  - `.txt` - `text/plain`
- Video
  - `.m4v` - `video/mp4`
  - `.mp4` - `video/mp4`
  - `.mpeg` - `video/mpeg`
  - `.mpg` - `video/mpeg`
  - `.ogm` - `video/ogg`
  - `.ogv` - `video/ogg`
  - `.webm` - `video/webm`

## Security

This method requires that the current document have the [web-share](/en-US/docs/Web/HTTP/Headers/Permissions-Policy/web-share) Permissions Policy and {{Glossary("transient activation")}}. (It must be triggered off a UI event like a button click and cannot be launched at arbitrary points by a script.) Further, the method must specify valid data that is supported for sharing by the native implementation.

## Examples

### Sharing a URL

The example below shows a button click invoking the Web Share API to share MDN's URL.
This is taken from our [Web share test](https://mdn.github.io/dom-examples/web-share/) ([see the source code](https://github.com/mdn/dom-examples/blob/main/web-share/index.html)).

#### HTML

The HTML just creates a button to trigger the share, and a paragraph in which to display the result of the test.

```html
<p><button>Share MDN!</button></p>
<p class="result"></p>
```

#### JavaScript

```js
const shareData = {
  title: "MDN",
  text: "Learn web development on MDN!",
  url: "https://developer.mozilla.org",
};

const btn = document.querySelector("button");
const resultPara = document.querySelector(".result");

// Share must be triggered by "user activation"
btn.addEventListener("click", async () => {
  try {
    await navigator.share(shareData);
    resultPara.textContent = "MDN shared successfully";
  } catch (err) {
    resultPara.textContent = `Error: ${err}`;
  }
});
```

#### Result

Click the button to launch the share dialog on your platform. Text will appear below the button to indicate whether the share was successful or provide an error code.

{{EmbedLiveSample('Sharing a URL')}}

### Sharing files

To share files, first test for and call {{domxref("navigator.canShare()")}}. Then include the list of files in the call to `navigator.share()`.

#### HTML

```html
<div>
  <label for="files">Select images to share:</label>
  <input id="files" type="file" accept="image/*" multiple />
</div>
<button id="share" type="button">Share your images!</button>
<output id="output"></output>
```

#### JavaScript

Note that the data object passed to the `navigator.canShare()` only includes the `files` property, as the `title` and `text` shouldn't matter.

```js
const input = document.getElementById("files");
const output = document.getElementById("output");

document.getElementById("share").addEventListener("click", async () => {
  const files = input.files;

  if (files.length === 0) {
    output.textContent = "No files selected.";
    return;
  }

  // feature detecting navigator.canShare() also implies
  // the same for the navigator.share()
  if (!navigator.canShare) {
    output.textContent = `Your browser doesn't support the Web Share API.`;
    return;
  }

  if (navigator.canShare({ files })) {
    try {
      await navigator.share({
        files,
        title: "Images",
        text: "Beautiful images",
      });
      output.textContent = "Shared!";
    } catch (error) {
      output.textContent = `Error: ${error.message}`;
    }
  } else {
    output.textContent = `Your system doesn't support sharing these files.`;
  }
});
```

#### Result

{{EmbedLiveSample('Sharing files')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("navigator.canShare()")}}
- <https://wpt.live/web-share/> (web platform tests)

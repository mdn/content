---
title: Navigator.share()
slug: Web/API/Navigator/share
tags:
  - Method
  - Navigator
  - Reference
  - Share
  - Web
browser-compat: api.Navigator.share
---
{{APIRef("Web Share API")}}{{securecontext_header}}

The **`navigator.share()`** method of the [Web Share API](/en-US/docs/Web/API/Web_Share_API) invokes the native sharing mechanism of the device to share data such as text, URLs, or files. The available _share targets_ depend on the device, but might include the clipboard, contacts and email applications, websites, bluetooth, etc.

This method requires that the current document have the [web-share](/en-US/docs/Web/HTTP/Headers/Feature-Policy/web-share) permission policy and {{Glossary("transient activation")}}. (It must be triggered off a UI event like a button click and cannot be launched at arbitrary points by a script.) Further, the method must specify valid data that is supported for sharing by the native implementation.

The method resolves a {{jsxref("Promise")}} with `undefined`.
On Windows this happens when the share popup is launched, while on Android the promise resolves once the data has successfully been passed to the _share target_.

## Syntax

```js
navigator.share(data)
```

### Parameters

- `data`

  - : An object containing data to share.

    Properties that are unknown to the user agent are ignored; share data is only assessed on properties understood by the user agent.
    All properties are optional but at least one known data property must be specified.

    Possible values are:

    - `url`: A {{domxref("USVString")}} representing a URL to be shared.
    - `text`: A {{domxref("USVString")}} representing text to be shared.
    - `title`: A {{domxref("USVString")}} representing a title to be shared. May be ignored by the target.
    - `files`: An array of {{domxref("File")}} objects representing files to be shared. See [below](#shareable_file_types) for shareable file types.

### Return value

A {{jsxref("Promise")}} that resolves with `undefined`, or rejected with one of the [Exceptions](#exceptions) given below.

### Exceptions

The {{jsxref("Promise")}} may be rejected with one of the following `DOMException` values:

- `NotAllowedError`
  - : The [web-share](/en-US/docs/Web/HTTP/Headers/Feature-Policy/web-share) permission has not been granted, or the window does not have {{Glossary("transient activation")}}, or a file share is being blocked due to security considerations.
- `TypeError`

  - : The specified share data cannot be validated. Possible reasons include:

    - The `data` parameter was omitted completely or only contains properties with unknown values. Note that any properties that are not recognized by the user agent are ignored.
    - A URL is badly formatted.
    - Files are specified but the implementation does not support file sharing.
    - Sharing the specified data would be considered a "hostile share" by the user-agent.

- `AbortError`
  - : The user canceled the share operation or there are no share targets available.
- `DataError`
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

## Examples

The example below shows a button click invoking the Web Share API to share MDN's URL.
This is taken from our [Web share test](https://mdn.github.io/dom-examples/web-share/) ([see the source code](https://github.com/mdn/dom-examples/blob/master/web-share/index.html)).

### HTML

The HTML just creates a button to trigger the share, and a paragraph in which to display the result of the test.

```html
<p><button>Share MDN!</button></p>
<p class="result"></p>
```

### JavaScript

```js
const shareData = {
    title: 'MDN',
    text: 'Learn web development on MDN!',
    url: 'https://developer.mozilla.org'
  }

  const btn = document.querySelector('button');
  const resultPara = document.querySelector('.result');

  // Share must be triggered by "user activation"
  btn.addEventListener('click', async () => {
    try {
      await navigator.share(shareData)
      resultPara.textContent = 'MDN shared successfully'
    } catch(err) {
      resultPara.textContent = 'Error: ' + err
    }
  });
```

### Result

Click the button to launch the share dialog on your platform.
Text will appear below the button to indicate whether the share was successful or provide an error code.

{{EmbedLiveSample('Examples')}}

#### **Sharing Files**

To share files, first test for and call {{domxref("navigator.canShare()")}}. Then include an array of files in the call to `navigator.share()`:

> **Note:** This sample feature detects by testing for `navigator.canShare()` rather than for `navigator.share()`.
> The data object passed to `canShare()` only includes the `files` property. Image, video, audio, and text files can be shared.

```js
if (navigator.canShare && navigator.canShare({ files: filesArray })) {
  navigator.share({
    files: filesArray,
    title: 'Pictures',
    text: 'Our Pictures.',
  })
  .then(() => console.log('Share was successful.'))
  .catch((error) => console.log('Sharing failed', error));
} else {
  console.log(`Your system doesn't support sharing files.`);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("navigator.canShare()")}}
- <https://wpt.live/web-share/> (web platform tests)

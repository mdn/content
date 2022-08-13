---
title: MediaError.code
slug: Web/API/MediaError/code
page-type: web-api-instance-property
tags:
  - API
  - Audio
  - Code
  - Errors
  - HTML DOM
  - Media
  - MediaError
  - Property
  - Read-only
  - Reference
  - Video
browser-compat: api.MediaError.code
---
{{APIRef("HTML DOM")}}

The read-only property **`MediaError.code`** returns a numeric
value which represents the kind of error that occurred on a media element. To get a text
string with specific diagnostic information, see {{domxref("MediaError.message")}}.

## Value

A numeric value indicating the general type of error which occurred. The possible
values are described below, in [Media error code constants](#media_error_code_constants).

#### Media error code constants

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Value</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>MEDIA_ERR_ABORTED</code></td>
      <td><code>1</code></td>
      <td>
        The fetching of the associated resource was aborted by the user's
        request.
      </td>
    </tr>
    <tr>
      <td><code>MEDIA_ERR_NETWORK</code></td>
      <td><code>2</code></td>
      <td>
        Some kind of network error occurred which prevented the media from being
        successfully fetched, despite having previously been available.
      </td>
    </tr>
    <tr>
      <td><code>MEDIA_ERR_DECODE</code></td>
      <td><code>3</code></td>
      <td>
        Despite having previously been determined to be usable, an error
        occurred while trying to decode the media resource, resulting in an
        error.
      </td>
    </tr>
    <tr>
      <td><code>MEDIA_ERR_SRC_NOT_SUPPORTED</code></td>
      <td><code>4</code></td>
      <td>
        The associated resource or media provider object (such as a
        {{domxref("MediaStream")}}) has been found to be unsuitable.
      </td>
    </tr>
  </tbody>
</table>

## Examples

This example creates a {{HTMLElement("video")}} element, establishes an error handler
for it, and then sets the element's {{htmlattrxref("src", "video")}} attribute to the
video resource to present in the element. The error handler outputs a message

```js
const obj = document.createElement('video');
obj.onerror = () => {console.error(`Error with media: ${obj.error.code}`);}
obj.src="https://example.com/blahblah.mp4";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining it, {{domxref("MediaError")}}.

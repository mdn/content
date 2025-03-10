---
title: "HTML attribute: capture"
short-title: capture
slug: Web/HTML/Attributes/capture
page-type: html-attribute
browser-compat: html.elements.input.capture
---

{{HTMLSidebar}}

The **`capture`** attribute specifies that, optionally, a new file should be captured, and which device should be used to capture that new media of a type defined by the [`accept`](/en-US/docs/Web/HTML/Attributes/accept) attribute.

Values include `user` and `environment`. The capture attribute is supported on the {{HTMLElement("input/file", "file")}} input type.

The `capture` attribute takes as its value a string that specifies which camera to use for capture of image or video data, if the [accept](/en-US/docs/Web/HTML/Attributes/accept) attribute indicates that the input should be of one of those types.

| Value         | Description                                                |
| ------------- | ---------------------------------------------------------- |
| `user`        | The user-facing camera and/or microphone should be used.   |
| `environment` | The outward-facing camera and/or microphone should be used |

> [!NOTE]
> Capture was previously a Boolean attribute which, if present, requested that the device's media capture device(s) such as camera or microphone be used instead of requesting a file input.

{{InteractiveExample("HTML Demo: capture", "tabbed-standard")}}

```html interactive-example
<label for="selfie">Take a picture of your face:</label>

<input type="file" id="selfie" name="selfie" accept="image/*" capture="user" />

<label for="picture">Take a picture using back facing camera:</label>

<input
  type="file"
  id="picture"
  name="picture"
  accept="image/*"
  capture="environment" />
```

```css interactive-example
label {
  display: block;
  margin-top: 1rem;
}

input {
  margin-bottom: 1rem;
}
```

## Examples

When set on a file input type, operating systems with microphones and cameras will display a user interface allowing the selection from an existing file or the creating of a new one.

```html
<p>
  <label for="soundFile">What does your voice sound like?:</label>
  <input type="file" id="soundFile" capture="user" accept="audio/*" />
</p>
<p>
  <label for="videoFile">Upload a video:</label>
  <input type="file" id="videoFile" capture="environment" accept="video/*" />
</p>
<p>
  <label for="imageFile">Upload a photo of yourself:</label>
  <input type="file" id="imageFile" capture="user" accept="image/*" />
</p>
```

{{EmbedLiveSample('Examples', '100%', 200)}}

Note these work better on mobile devices; if your device is a desktop computer, you'll likely get a typical file picker.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using files from web applications](/en-US/docs/Web/API/File_API/Using_files_from_web_applications)
- [File API](/en-US/docs/Web/API/File)
- {{domxref('HTMLInputElement.files')}}

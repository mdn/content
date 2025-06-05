---
title: "HTML attribute: content"
short-title: content
slug: Web/HTML/Reference/Attributes/content
page-type: html-attribute
browser-compat: html.elements.meta.content
---

{{HTMLSidebar}}

The **`content`** attribute specifies the value of a metadata name defined by the [`<meta> name`](/en-US/docs/Web/HTML/Reference/Attributes/name) attribute.

The `content` attribute takes as its value a string

{{InteractiveExample("HTML Demo: content", "tabbed-standard")}}

```html interactive-example
<label for="selfie">Take a picture of your face:</label>

<input type="file" id="selfie" name="selfie" accept="image/*" content="user" />

<label for="picture">Take a picture using back facing camera:</label>

<input
  type="file"
  id="picture"
  name="picture"
  accept="image/*"
  content="environment" />
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
  <input type="file" id="soundFile" content="user" accept="audio/*" />
</p>
<p>
  <label for="videoFile">Upload a video:</label>
  <input type="file" id="videoFile" content="environment" accept="video/*" />
</p>
<p>
  <label for="imageFile">Upload a photo of yourself:</label>
  <input type="file" id="imageFile" content="user" accept="image/*" />
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

---
title: "HTML attribute: accept"
short-title: accept
slug: Web/HTML/Attributes/accept
page-type: html-attribute
browser-compat: html.elements.input.accept
---

{{HTMLSidebar}}

The **`accept`** attribute takes as its value a comma-separated list of one or more file types, or [unique file type specifiers](#unique_file_type_specifiers), describing which file types to allow.

{{EmbedInteractiveExample("pages/tabbed/attribute-accept.html", "tabbed-shorter")}}

## Overview

The accept property is an attribute of the {{HTMLElement("input/file", "file")}} {{htmlelement("input")}} type. It was supported on the {{htmlelement("form")}} element, but was removed in favor of {{HTMLElement("input/file", "file")}}.

Because a given file type may be identified in more than one manner, it's useful to provide a thorough set of type specifiers when you need files of specific type, or use the wild card to denote a type of any format is acceptable.

For instance, there are a number of ways Microsoft Word files can be identified, so a site that accepts Word files might use an `<input>` like this:

```html
<input
  type="file"
  id="docpicker"
  accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
```

Whereas if you're accepting a media file, you may want to be include any format of that media type:

```html
<input type="file" id="soundFile" accept="audio/*" />
<input type="file" id="videoFile" accept="video/*" />
<input type="file" id="imageFile" accept="image/*" />
```

The `accept` attribute doesn't validate the types of the selected files; it provides hints for browsers to guide users towards selecting the correct file types. It is still possible (in most cases) for users to toggle an option in the file chooser that makes it possible to override this and select any file they wish, and then choose incorrect file types.

Because of this, you should make sure that expected requirement is validated server-side.

## Examples

When set on a file input type, the native file picker that opens up should only enable selecting files of the correct file type. Most operating systems lighten the files that don't match the criteria and aren't selectable.

```html
<p>
  <label for="soundFile">Select an audio file:</label>
  <input type="file" id="soundFile" accept="audio/*" />
</p>
<p>
  <label for="videoFile">Select a video file:</label>
  <input type="file" id="videoFile" accept="video/*" />
</p>
<p>
  <label for="imageFile">Select some images:</label>
  <input type="file" id="imageFile" accept="image/*" multiple />
</p>
```

{{EmbedLiveSample('Examples', '100%', 200)}}

Note the last example allows you to select multiple images. See the [`multiple`](/en-US/docs/Web/HTML/Element/input#multiple) attribute for more information.

## Unique file type specifiers

A **unique file type specifier** is a string that describes a type of file that may be selected by the user in an {{HTMLElement("input")}} element of type `file`. Each unique file type specifier may take one of the following forms:

- A valid case-insensitive filename extension, starting with a period (".") character. For example: `.jpg`, `.pdf`, or `.doc`.
- A valid MIME type string, with no extensions.
- The string `audio/*` meaning "any audio file".
- The string `video/*` meaning "any video file".
- The string `image/*` meaning "any image file".

The `accept` attribute takes as its value a string containing one or more of these unique file type specifiers, separated by commas. For example, a file picker that needs content that can be presented as an image, including both standard image formats and PDF files, might look like this:

```html
<input type="file" accept="image/*,.pdf" />
```

## Using file inputs

### A basic example

```html
<form method="post" enctype="multipart/form-data">
  <div>
    <label for="file">Choose file to upload</label>
    <input type="file" id="file" name="file" multiple />
  </div>
  <div>
    <button>Submit</button>
  </div>
</form>
```

```css hidden
div {
  margin-bottom: 10px;
}
```

This produces the following output:

{{EmbedLiveSample('A_basic_example', 650, 60)}}

> [!NOTE]
> You can find this example on GitHub too — see the [source code](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/simple-file.html), and also [see it running live](https://mdn.github.io/learning-area/html/forms/file-examples/simple-file.html).

Regardless of the user's device or operating system, the file input provides a button that opens up a file picker dialog that allows the user to choose a file.

Including the [`multiple`](/en-US/docs/Web/HTML/Element/input#multiple) attribute, as shown above, specifies that multiple files can be chosen at once. The user can choose multiple files from the file picker in any way that their chosen platform allows (e.g. by holding down <kbd>Shift</kbd> or <kbd>Control</kbd>, and then clicking). If you only want the user to choose a single file per `<input>`, omit the `multiple` attribute.

### Limiting accepted file types

Often you won't want the user to be able to pick any arbitrary type of file; instead, you often want them to select files of a specific type or types. For example, if your file input lets users upload a profile picture, you probably want them to select web-compatible image formats, such as {{Glossary("JPEG")}} or {{Glossary("PNG")}}.

Acceptable file types can be specified with the [`accept`](/en-US/docs/Web/HTML/Element/input/file#accept) attribute, which takes a comma-separated list of allowed file extensions or MIME types. Some examples:

- `accept="image/png"` or `accept=".png"` — Accepts PNG files.
- `accept="image/png, image/jpeg"` or `accept=".png, .jpg, .jpeg"` — Accept PNG or JPEG files.
- `accept="image/*"` — Accept any file with an `image/*` MIME type. (Many mobile devices also let the user take a picture with the camera when this is used.)
- `accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"` — accept anything that smells like an MS Word document.

Let's look at a more complete example:

```html
<form method="post" enctype="multipart/form-data">
  <div>
    <label for="profile_pic">Choose file to upload</label>
    <input
      type="file"
      id="profile_pic"
      name="profile_pic"
      accept=".jpg, .jpeg, .png" />
  </div>
  <div>
    <button>Submit</button>
  </div>
</form>
```

```css hidden
div {
  margin-bottom: 10px;
}
```

{{EmbedLiveSample('Limiting_accepted_file_types', 650, 60)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using files from web applications](/en-US/docs/Web/API/File_API/Using_files_from_web_applications)
- [File API](/en-US/docs/Web/API/File)

---
title: <input type="file">
slug: Web/HTML/Element/input/file
page-type: html-element
browser-compat: html.elements.input.type_file
---

{{HTMLSidebar}}

{{HTMLElement("input")}} elements with **`type="file"`** let the user choose one or more files from their device storage. Once chosen, the files can be uploaded to a server using [form submission](/en-US/docs/Learn/Forms), or manipulated using JavaScript code and [the File API](/en-US/docs/Web/API/File_API/Using_files_from_web_applications).

{{EmbedInteractiveExample("pages/tabbed/input-file.html", "tabbed-shorter")}}

## Value

A file input's [`value`](/en-US/docs/Web/HTML/Element/input#value) attribute contains a string that represents the path to the selected file(s). If no file is selected yet, the value is an empty string (`""`). When the user selected multiple files, the `value` represents the first file in the list of files they selected. The other files can be identified using the [input's `HTMLInputElement.files` property](/en-US/docs/Web/API/File_API/Using_files_from_web_applications#getting_information_about_selected_files).

> **Note:** The value is [always the file's name prefixed with `C:\fakepath\`](https://html.spec.whatwg.org/multipage/input.html#fakepath-srsly), which isn't the real path of the file. This is to prevent malicious software from guessing the user's file structure.

## Additional attributes

In addition to the common attributes shared by all {{HTMLElement("input")}} elements, inputs of type `file` also support the following attributes.

### accept

The [`accept`](/en-US/docs/Web/HTML/Attributes/accept) attribute value is a string that defines the file types the file input should accept. This string is a comma-separated list of **[unique file type specifiers](#unique_file_type_specifiers)**. Because a given file type may be identified in more than one manner, it's useful to provide a thorough set of type specifiers when you need files of a given format.

For instance, there are a number of ways Microsoft Word files can be identified, so a site that accepts Word files might use an `<input>` like this:

```html
<input
  type="file"
  id="docpicker"
  accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
```

### capture

The [`capture`](/en-US/docs/Web/HTML/Attributes/capture) attribute value is a string that specifies which camera to use for capture of image or video data, if the [`accept`](/en-US/docs/Web/HTML/Attributes/accept) attribute indicates that the input should be of one of those types. A value of `user` indicates that the user-facing camera and/or microphone should be used. A value of `environment` specifies that the outward-facing camera and/or microphone should be used. If this attribute is missing, the {{Glossary("user agent")}} is free to decide on its own what to do. If the requested facing mode isn't available, the user agent may fall back to its preferred default mode.

> **Note:** `capture` was previously a Boolean attribute which, if present, requested that the device's media capture device(s) such as camera or microphone be used instead of requesting a file input.

### multiple

When the [`multiple`](/en-US/docs/Web/HTML/Attributes/multiple) Boolean attribute is specified, the file input allows the user to select more than one file.

## Non-standard attributes

In addition to the attributes listed above, the following non-standard attributes are available on some browsers. You should try to avoid using them when possible, since doing so will limit the ability of your code to function in browsers that don't implement them.

### `webkitdirectory`

The Boolean `webkitdirectory` attribute, if present, indicates that only directories should be available to be selected by the user in the file picker interface. See {{domxref("HTMLInputElement.webkitdirectory")}} for additional details and examples.

Though originally implemented only for WebKit-based browsers, `webkitdirectory` is also usable in Microsoft Edge as well as Firefox 50 and later. However, even though it has relatively broad support, it is still not standard and should not be used unless you have no alternative.

## Unique file type specifiers

A **unique file type specifier** is a string that describes a type of file that may be selected by the user in an {{HTMLElement("input")}} element of type `file`. Each unique file type specifier may take one of the following forms:

- A valid case-insensitive filename extension, starting with a period (".") character. For example: `.jpg`, `.pdf`, or `.doc`.
- A valid MIME type string, with no extensions.
- The string `audio/*` meaning "any audio file".
- The string `video/*` meaning "any video file".
- The string `image/*` meaning "any image file".

The `accept` attribute takes a string containing one or more of these unique file type specifiers as its value, separated by commas. For example, a file picker that needs content that can be presented as an image, including both standard image formats and PDF files, might look like this:

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

{{EmbedLiveSample('A_basic_example', 650, 90)}}

> **Note:** You can find this example on GitHub too — see the [source code](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/simple-file.html), and also [see it running live](https://mdn.github.io/learning-area/html/forms/file-examples/simple-file.html).

Regardless of the user's device or operating system, the file input provides a button that opens up a file picker dialog that allows the user to choose a file.

Including the [`multiple`](#multiple) attribute, as shown above, specifies that multiple files can be chosen at once. The user can choose multiple files from the file picker in any way that their chosen platform allows (e.g. by holding down <kbd>Shift</kbd> or <kbd>Control</kbd> and then clicking). If you only want the user to choose a single file per `<input>`, omit the `multiple` attribute.

### Getting information on selected files

The selected files' are returned by the element's `HTMLInputElement.files` property, which is a {{domxref("FileList")}} object containing a list of {{domxref("File")}} objects. The `FileList` behaves like an array, so you can check its `length` property to get the number of selected files.

Each `File` object contains the following information:

- `name`
  - : The file's name.
- `lastModified`
  - : A number specifying the date and time at which the file was last modified, in milliseconds since the UNIX epoch (January 1, 1970 at midnight).
- `lastModifiedDate` {{deprecated_inline}}
  - : A {{jsxref("Date")}} object representing the date and time at which the file was last modified. _This is deprecated and should not be used. Use `lastModified` instead._
- `size`
  - : The size of the file in bytes.
- `type`
  - : The file's [MIME type](/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types).
- `webkitRelativePath` {{non-standard_inline}}
  - : A string specifying the file's path relative to the base directory selected in a directory picker (that is, a `file` picker in which the [`webkitdirectory`](#webkitdirectory) attribute is set). _This is non-standard and should be used with caution._

> **Note:** You can set as well as get the value of `HTMLInputElement.files` in all modern browsers; this was most recently added to Firefox, in version 57 (see [Firefox bug 1384030](https://bugzil.la/1384030)).

### Limiting accepted file types

Often you won't want the user to be able to pick any arbitrary type of file; instead, you often want them to select files of a specific type or types. For example, if your file input lets users upload a profile picture, you probably want them to select web-compatible image formats, such as {{Glossary("JPEG")}} or {{Glossary("PNG")}}.

Acceptable file types can be specified with the [`accept`](#accept) attribute, which takes a comma-separated list of allowed file extensions or MIME types. Some examples:

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

This produces a similar-looking output to the previous example:

{{EmbedLiveSample('Limiting_accepted_file_types', 650, 90)}}

> **Note:** You can find this example on GitHub too — see the [source code](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/file-with-accept.html), and also [see it running live](https://mdn.github.io/learning-area/html/forms/file-examples/file-with-accept.html).

It may look similar, but if you try selecting a file with this input, you'll see that the file picker only lets you select the file types specified in the `accept` value (the exact interface differs across browsers and operating systems).

The `accept` attribute doesn't validate the types of the selected files; it provides hints for browsers to guide users towards selecting the correct file types. It is still possible (in most cases) for users to toggle an option in the file chooser that makes it possible to override this and select any file they wish, and then choose incorrect file types.

Because of this, you should make sure that the `accept` attribute is backed up by appropriate server-side validation.

### Notes

1. You cannot set the value of a file picker from a script — doing something like the following has no effect:

   ```js
   const input = document.querySelector("input[type=file]");
   input.value = "foo";
   ```

2. When a file is chosen using an `<input type="file">`, the real path to the source file is not shown in the input's `value` attribute for obvious security reasons. Instead, the filename is shown, with `C:\fakepath\` prepended to it. There are some historical reasons for this quirk, but it is supported across all modern browsers, and in fact is [defined in the spec](https://html.spec.whatwg.org/multipage/forms.html#fakepath-srsly).

## Examples

In this example, we'll present a slightly more advanced file chooser that takes advantage of the file information available in the `HTMLInputElement.files` property, as well as showing off a few clever tricks.

> **Note:** You can see the complete source code for this example on GitHub — [file-example.html](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/file-example.html) ([see it live also](https://mdn.github.io/learning-area/html/forms/file-examples/file-example.html)). We won't explain the CSS; the JavaScript is the main focus.

First of all, let's look at the HTML:

```html
<form method="post" enctype="multipart/form-data">
  <div>
    <label for="image_uploads">Choose images to upload (PNG, JPG)</label>
    <input
      type="file"
      id="image_uploads"
      name="image_uploads"
      accept=".jpg, .jpeg, .png"
      multiple />
  </div>
  <div class="preview">
    <p>No files currently selected for upload</p>
  </div>
  <div>
    <button>Submit</button>
  </div>
</form>
```

```css hidden
html {
  font-family: sans-serif;
}

form {
  width: 580px;
  background: #ccc;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid black;
}

form ol {
  padding-left: 0;
}

form li,
div > p {
  background: #eee;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  list-style-type: none;
  border: 1px solid black;
}

form img {
  height: 64px;
  order: 1;
}

form p {
  line-height: 32px;
  padding-left: 10px;
}

form label,
form button {
  background-color: #7f9ccb;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px ridge black;
  font-size: 0.8rem;
  height: auto;
}

form label:hover,
form button:hover {
  background-color: #2d5ba3;
  color: white;
}

form label:active,
form button:active {
  background-color: #0d3f8f;
  color: white;
}
```

This is similar to what we've seen before — nothing special to comment on.

Next, let's walk through the JavaScript.

In the first lines of script, we get references to the form input itself, and the {{htmlelement("div")}} element with the class of `.preview`. Next, we hide the {{htmlelement("input")}} element — we do this because file inputs tend to be ugly, difficult to style, and inconsistent in their design across browsers. You can activate the `input` element by clicking its {{htmlelement("label")}}, so it is better to visually hide the `input` and style the label like a button, so the user will know to interact with it if they want to upload files.

```js
const input = document.querySelector("input");
const preview = document.querySelector(".preview");

input.style.opacity = 0;
```

> **Note:** {{cssxref("opacity")}} is used to hide the file input instead of {{cssxref("visibility", "visibility: hidden")}} or {{cssxref("display", "display: none")}}, because assistive technology interprets the latter two styles to mean the file input isn't interactive.

Next, we add an [event listener](/en-US/docs/Web/API/EventTarget/addEventListener) to the input to listen for changes to its selected value (in this case, when files are selected). The event listener invokes our custom `updateImageDisplay()` function.

```js
input.addEventListener("change", updateImageDisplay);
```

Whenever the `updateImageDisplay()` function is invoked, we:

- Use a {{jsxref("Statements/while", "while")}} loop to empty the previous contents of the preview `<div>`.
- Grab the {{domxref("FileList")}} object that contains the information on all the selected files, and store it in a variable called `curFiles`.
- Check to see if no files were selected, by checking if `curFiles.length` is equal to 0. If so, print a message into the preview `<div>` stating that no files have been selected.
- If files _have_ been selected, we loop through each one, printing information about it into the preview `<div>`. Things to note here:
- We use the custom `validFileType()` function to check whether the file is of the correct type (e.g. the image types specified in the `accept` attribute).
- If it is, we:

  - Print out its name and file size into a list item inside the previous `<div>` (obtained from `file.name` and `file.size`). The custom `returnFileSize()` function returns a nicely-formatted version of the size in bytes/KB/MB (by default the browser reports the size in absolute bytes).
  - Generate a thumbnail preview of the image by calling {{domxref("URL/createObjectURL_static", "URL.createObjectURL(curFiles[i])")}}. Then, insert the image into the list item too by creating a new {{htmlelement("img")}} and setting its [`src`](/en-US/docs/Web/HTML/Element/img#src) to the thumbnail.

- If the file type is invalid, we display a message inside a list item telling the user that they need to select a different file type.

```js
function updateImageDisplay() {
  while (preview.firstChild) {
    preview.removeChild(preview.firstChild);
  }

  const curFiles = input.files;
  if (curFiles.length === 0) {
    const para = document.createElement("p");
    para.textContent = "No files currently selected for upload";
    preview.appendChild(para);
  } else {
    const list = document.createElement("ol");
    preview.appendChild(list);

    for (const file of curFiles) {
      const listItem = document.createElement("li");
      const para = document.createElement("p");
      if (validFileType(file)) {
        para.textContent = `File name ${file.name}, file size ${returnFileSize(
          file.size,
        )}.`;
        const image = document.createElement("img");
        image.src = URL.createObjectURL(file);

        listItem.appendChild(image);
        listItem.appendChild(para);
      } else {
        para.textContent = `File name ${file.name}: Not a valid file type. Update your selection.`;
        listItem.appendChild(para);
      }

      list.appendChild(listItem);
    }
  }
}
```

The custom `validFileType()` function takes a {{domxref("File")}} object as a parameter, then uses {{jsxref("Array.prototype.includes()")}} to check if any value in the `fileTypes` matches the file's `type` property. If a match is found, the function returns `true`. If no match is found, it returns `false`.

```js
// https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types
const fileTypes = [
  "image/apng",
  "image/bmp",
  "image/gif",
  "image/jpeg",
  "image/pjpeg",
  "image/png",
  "image/svg+xml",
  "image/tiff",
  "image/webp",
  "image/x-icon",
];

function validFileType(file) {
  return fileTypes.includes(file.type);
}
```

The `returnFileSize()` function takes a number (of bytes, taken from the current file's `size` property), and turns it into a nicely formatted size in bytes/KB/MB.

```js
function returnFileSize(number) {
  if (number < 1024) {
    return `${number} bytes`;
  } else if (number >= 1024 && number < 1048576) {
    return `${(number / 1024).toFixed(1)} KB`;
  } else if (number >= 1048576) {
    return `${(number / 1048576).toFixed(1)} MB`;
  }
}
```

The example looks like this; have a play:

{{EmbedLiveSample('Examples', '100%', 200)}}

## Technical summary

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Value</a></strong></td>
      <td>
        A string representing the path to the selected
        file.
      </td>
    </tr>
    <tr>
      <td><strong>Events</strong></td>
      <td>
        {{domxref("HTMLElement/change_event", "change")}} and
        {{domxref("HTMLElement/input_event", "input")}}
      </td>
    </tr>
    <tr>
      <td><strong>Supported common attributes</strong></td>
      <td><a href="/en-US/docs/Web/HTML/Element/input#required"><code>required</code></a></td>
    </tr>
    <tr>
      <td><strong>Additional Attributes</strong></td>
      <td>
        <a href="#accept" aria-current="page"><code>accept</code></a>,
        <a href="#capture" aria-current="page"><code>capture</code></a>,
        <a href="#multiple" aria-current="page"><code>multiple</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>IDL attributes</strong></td>
      <td><code>files</code> and <code>value</code></td>
    </tr>
    <tr>
      <td><strong>DOM interface</strong></td>
      <td><p>{{domxref("HTMLInputElement")}}</p></td>
    </tr>
    <tr>
      <td><strong>Methods</strong></td>
      <td>
        {{domxref("HTMLInputElement.select", "select()")}}
      </td>
    </tr>
    <tr>
      <td><strong>Implicit ARIA Role</strong></td>
      <td><a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"><code>no corresponding role</code></a></td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using files from web applications](/en-US/docs/Web/API/File_API/Using_files_from_web_applications) — contains a number of other useful examples related to `<input type="file">` and the [File API](/en-US/docs/Web/API/File).
- [Compatibility of CSS properties](/en-US/docs/Learn/Forms/Property_compatibility_table_for_form_controls)

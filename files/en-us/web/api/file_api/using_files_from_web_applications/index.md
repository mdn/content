---
title: Using files from web applications
slug: Web/API/File_API/Using_files_from_web_applications
page-type: guide
tags:
  - File API
---
{{APIRef("File API")}}

Using the File API, web content can ask the user to select local files and then read the contents of those files. This selection can be done by either using an HTML `{{HTMLElement("input/file", '&lt;input type="file"&gt;')}}` element or by drag and drop.

## Accessing selected file(s)

Consider this HTML:

```html
<input type="file" id="input" multiple>
```

The File API makes it possible to access a {{DOMxRef("FileList")}} containing {{DOMxRef("File")}} objects representing the files selected by the user.

The `multiple` attribute on the `input` element allows the user to select multiple files.

Accessing the first selected file using a classical DOM selector:

```js
const selectedFile = document.getElementById('input').files[0];
```

### Accessing selected file(s) on a change event

It is also possible (but not mandatory) to access the {{DOMxRef("FileList")}} through the `change` event. You need to use {{DOMxRef("EventTarget.addEventListener()")}} to add the `change` event listener, like this:

```js
const inputElement = document.getElementById("input");
inputElement.addEventListener("change", handleFiles, false);
function handleFiles() {
  const fileList = this.files; /* now you can work with the file list */
}
```

## Getting information about selected file(s)

The {{DOMxRef("FileList")}} object provided by the DOM lists all of the files selected by the user, each specified as a {{DOMxRef("File")}} object. You can determine how many files the user selected by checking the value of the file list's `length` attribute:

```js
const numFiles = fileList.length;
```

Individual {{DOMxRef("File")}} objects can be retrieved by accessing the list as an array:

```js
for (let i = 0, numFiles = fileList.length; i < numFiles; i++) {
  const file = fileList[i];
  // …
}
```

This loop iterates over all the files in the file list.

There are three attributes provided by the {{DOMxRef("File")}} object that contain useful information about the file.

- `name`
  - : The file's name as a read-only string. This is just the file name, and does not include any path information.
- `size`
  - : The size of the file in bytes as a read-only 64-bit integer.
- `type`
  - : The MIME type of the file as a read-only string or `""` if the type couldn't be determined.

### Example: Showing file(s) size

The following example shows a possible use of the `size` property:

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8">
    <title>File(s) size</title>
  </head>

  <body>
    <form name="uploadForm">
      <div>
        <input id="uploadInput" type="file" multiple>
        selected files: <output id="fileNum">0</output>;
        total size: <output id="fileSize">0</output>
      </div>
      <div><input type="submit" value="Send file"></div>
    </form>

    <script>
      const uploadInput = document.getElementById("uploadInput");
      uploadInput.addEventListener("change", () => {
        // Calculate total size
        let numberOfBytes = 0;
        for (const file of uploadInput.files) {
          numberOfBytes += file.size;
        }

        // Approximate to the closest prefixed unit
        const units = ["B", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];
        const exponent = Math.min(
          Math.floor(Math.log(numberOfBytes) / Math.log(1024)),
          units.length - 1,
        );
        const approx = numberOfBytes / 1024 ** exponent;
        const output = exponent === 0 
          ? `${numberOfBytes} bytes` 
          : `${approx.toFixed(3)} ${units[exponent]} (${numberOfBytes} bytes)`;

        document.getElementById("fileNum").textContent = fileList.length;
        document.getElementById("fileSize").textContent = output;
      }, false);
    </script>
  </body>
</html>
```

## Using hidden file input elements using the click() method

You can hide the admittedly ugly file {{HTMLElement("input")}} element and present your own interface for opening the file picker and displaying which file or files the user has selected. You can do this by styling the input element with `display:none` and calling the {{DOMxRef("HTMLElement.click","click()")}} method on the {{HTMLElement("input")}} element.

Consider this HTML:

```html
<input type="file" id="fileElem" multiple accept="image/*" style="display:none">
<button id="fileSelect">Select some files</button>
```

The code that handles the `click` event can look like this:

```js
const fileSelect = document.getElementById("fileSelect");
const fileElem = document.getElementById("fileElem");

fileSelect.addEventListener("click", (e) => {
  if (fileElem) {
    fileElem.click();
  }
}, false);
```

You can style the new button for opening the file picker as you wish.

## Using a label element to trigger a hidden file input element

To allow opening the file picker without using JavaScript (the click() method), a {{HTMLElement("label")}} element can be used. Note that in this case the input element must not be hidden using `display: none` (nor `visibility: hidden`), otherwise the label would not be keyboard-accessible. Use the [visually-hidden technique](https://www.a11yproject.com/posts/how-to-hide-content/) instead.

Consider this HTML:

```html
<input type="file" id="fileElem" multiple accept="image/*" class="visually-hidden">
<label for="fileElem">Select some files</label>
```

and this CSS:

```css
.visually-hidden {
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
}

input.visually-hidden:is(:focus, :focus-within) + label {
  outline: thin dotted;
}
```

There is no need to add JavaScript code to call `fileElem.click()`. Also in this case you can style the label element as you wish. You need to provide a visual cue for the focus status of the hidden input field on its label, be it an outline as shown above, or background-color or box-shadow. (As of time of writing, Firefox doesn't show this visual cue for `<input type="file">` elements.)

## Selecting files using drag and drop

You can also let the user drag and drop files into your web application.

The first step is to establish a drop zone. Exactly what part of your content will accept drops may vary depending on the design of your application, but making an element receive drop events is easy:

```js
let dropbox;

dropbox = document.getElementById("dropbox");
dropbox.addEventListener("dragenter", dragenter, false);
dropbox.addEventListener("dragover", dragover, false);
dropbox.addEventListener("drop", drop, false);
```

In this example, we're turning the element with the ID `dropbox` into our drop zone. This is done by adding listeners for the {{domxref("HTMLElement/dragenter_event", "dragenter")}}, {{domxref("HTMLElement/dragover_event", "dragover")}}, and {{domxref("HTMLElement/drop_event", "drop")}} events.

We don't actually need to do anything with the `dragenter` and `dragover` events in our case, so these functions are both simple. They just stop propagation of the event and prevent the default action from occurring:

```js
function dragenter(e) {
  e.stopPropagation();
  e.preventDefault();
}

function dragover(e) {
  e.stopPropagation();
  e.preventDefault();
}
```

The real magic happens in the `drop()` function:

```js
function drop(e) {
  e.stopPropagation();
  e.preventDefault();

  const dt = e.dataTransfer;
  const files = dt.files;

  handleFiles(files);
}
```

Here, we retrieve the `dataTransfer` field from the event, pull the file list out of it, and then pass that to `handleFiles()`. From this point on, handling the files is the same whether the user used the `input` element or drag and drop.

## Example: Showing thumbnails of user-selected images

Let's say you're developing the next great photo-sharing website and want to use HTML to display thumbnail previews of images before the user actually uploads them. You can establish your input element or drop zone as discussed previously and have them call a function such as the `handleFiles()` function below.

```js
function handleFiles(files) {
  for (let i = 0; i < files.length; i++) {
    const file = files[i];

    if (!file.type.startsWith('image/')){ continue }

    const img = document.createElement("img");
    img.classList.add("obj");
    img.file = file;
    preview.appendChild(img); // Assuming that "preview" is the div output where the content will be displayed.

    const reader = new FileReader();
    reader.onload = (e) => { aImg.src = e.target.result; };
    reader.readAsDataURL(file);
  }
}
```

Here our loop handling the user-selected files looks at each file's `type` attribute to see if its MIME type begins with the string "`image/`"). For each file that is an image, we create a new `img` element. CSS can be used to establish any pretty borders or shadows and to specify the size of the image, so that doesn't need to be done here.

Each image has the CSS class `obj` added to it, making it easy to find in the DOM tree. We also add a `file` attribute to each image specifying the {{DOMxRef("File")}} for the image; this will let us fetch the images for actual upload later. We use {{DOMxRef("Node.appendChild()")}} to add the new thumbnail to the preview area of our document.

Next, we establish the {{DOMxRef("FileReader")}} to handle asynchronously loading the image and attaching it to the `img` element. After creating the new `FileReader` object, we set up its `onload` function and then call `readAsDataURL()` to start the read operation in the background. When the entire contents of the image file are loaded, they are converted into a `data:` URL which is passed to the `onload` callback. Our implementation of this routine sets the `img` element's `src` attribute to the loaded image which results in the image appearing in the thumbnail on the user's screen.

## Using object URLs

The DOM {{DOMxRef("URL.createObjectURL()")}} and {{DOMxRef("URL.revokeObjectURL()")}} methods let you create simple URL strings that can be used to reference any data that can be referred to using a DOM {{DOMxRef("File")}} object, including local files on the user's computer.

When you have a {{DOMxRef("File")}} object you'd like to reference by URL from HTML, you can create an object URL for it like this:

```js
const objectURL = window.URL.createObjectURL(fileObj);
```

The object URL is a string identifying the {{DOMxRef("File")}} object. Each time you call {{DOMxRef("URL.createObjectURL()")}}, a unique object URL is created even if you've created an object URL for that file already. Each of these must be released. While they are released automatically when the document is unloaded, if your page uses them dynamically you should release them explicitly by calling {{DOMxRef("URL.revokeObjectURL()")}}:

```js
URL.revokeObjectURL(objectURL);
```

## Example: Using object URLs to display images

This example uses object URLs to display image thumbnails. In addition, it displays other file information including their names and sizes.

The HTML that presents the interface looks like this:

```html
<input type="file" id="fileElem" multiple accept="image/*" style="display:none">
<a href="#" id="fileSelect">Select some files</a>
<div id="fileList">
  <p>No files selected!</p>
</div>
```

This establishes our file {{HTMLElement("input")}} element as well as a link that invokes the file picker (since we keep the file input hidden to prevent that less-than-attractive user interface from being displayed). This is explained in the section [Using hidden file input elements using the click() method](#using_hidden_file_input_elements_using_the_click_method), as is the method that invokes the file picker.

The `handleFiles()` method follows:

```js
const fileSelect = document.getElementById("fileSelect"),
    fileElem = document.getElementById("fileElem"),
    fileList = document.getElementById("fileList");

fileSelect.addEventListener("click", (e) => {
  if (fileElem) {
    fileElem.click();
  }
  e.preventDefault(); // prevent navigation to "#"
}, false);

fileElem.addEventListener("change", handleFiles, false);

function handleFiles() {
  if (!this.files.length) {
    fileList.innerHTML = "<p>No files selected!</p>";
  } else {
    fileList.innerHTML = "";
    const list = document.createElement("ul");
    fileList.appendChild(list);
    for (let i = 0; i < this.files.length; i++) {
      const li = document.createElement("li");
      list.appendChild(li);

      const img = document.createElement("img");
      img.src = URL.createObjectURL(this.files[i]);
      img.height = 60;
      img.onload = () => {
        URL.revokeObjectURL(this.src);
      }
      li.appendChild(img);
      const info = document.createElement("span");
      info.innerHTML = `${this.files[i].name}: ${this.files[i].size} bytes`;
      li.appendChild(info);
    }
  }
}
```

This starts by fetching the URL of the {{HTMLElement("div")}} with the ID `fileList`. This is the block into which we'll insert our file list, including thumbnails.

If the {{DOMxRef("FileList")}} object passed to `handleFiles()` is `null`, we set the inner HTML of the block to display "No files selected!". Otherwise, we start building our file list, as follows:

1. A new unordered list ({{HTMLElement("ul")}}) element is created.
2. The new list element is inserted into the {{HTMLElement("div")}} block by calling its {{DOMxRef("Node.appendChild()")}} method.
3. For each {{DOMxRef("File")}} in the {{DOMxRef("FileList")}} represented by `files`:

    1. Create a new list item ({{HTMLElement("li")}}) element and insert it into the list.
    2. Create a new image ({{HTMLElement("img")}}) element.
    3. Set the image's source to a new object URL representing the file, using {{DOMxRef("URL.createObjectURL()")}} to create the blob URL.
    4. Set the image's height to 60 pixels.
    5. Set up the image's load event handler to release the object URL since it's no longer needed once the image has been loaded. This is done by calling the {{DOMxRef("URL.revokeObjectURL()")}} method and passing in the object URL string as specified by `img.src`.
    6. Append the new list item to the list.

Here is a live demo of the code above:

{{EmbedLiveSample('Example_Using_object_URLs_to_display_images', '100%', '300px')}}

## Example: Uploading a user-selected file

Another thing you might want to do is let the user upload the selected file or files (such as the images selected using the previous example) to a server. This can be done asynchronously very easily.

### Creating the upload tasks

Continuing with the code that built the thumbnails in the previous example, recall that every thumbnail image is in the CSS class `obj` with the corresponding {{DOMxRef("File")}} attached in a `file` attribute. This allows us to select all of the images the user has chosen for uploading using {{DOMxRef("Document.querySelectorAll()")}}, like this:

```js
function sendFiles() {
  const imgs = document.querySelectorAll(".obj");

  for (let i = 0; i < imgs.length; i++) {
    new FileUpload(imgs[i], imgs[i].file);
  }
}
```

Line 2 fetches a {{DOMxRef("NodeList")}}, called `imgs`, of all the elements in the document with the CSS class `obj`. In our case, these will be all of the image thumbnails. Once we have that list, it's trivial to go through it and create a new `FileUpload` instance for each. Each of these handles uploading the corresponding file.

### Handling the upload process for a file

The `FileUpload` function accepts two inputs: an image element and a file from which to read the image data.

```js
function FileUpload(img, file) {
  const reader = new FileReader();
  this.ctrl = createThrobber(img);
  const xhr = new XMLHttpRequest();
  this.xhr = xhr;

  const self = this;
  this.xhr.upload.addEventListener("progress", (e) => {
        if (e.lengthComputable) {
          const percentage = Math.round((e.loaded * 100) / e.total);
          self.ctrl.update(percentage);
        }
      }, false);

  xhr.upload.addEventListener("load", (e) => {
          self.ctrl.update(100);
          const canvas = self.ctrl.ctx.canvas;
          canvas.parentNode.removeChild(canvas);
      }, false);
  xhr.open("POST", "http://demos.hacks.mozilla.org/paul/demos/resources/webservices/devnull.php");
  xhr.overrideMimeType('text/plain; charset=x-user-defined-binary');
  reader.onload = (evt) => {
    xhr.send(evt.target.result);
  };
  reader.readAsBinaryString(file);
}

function createThrobber(img) {
  const throbberWidth = 64;
  const throbberHeight = 6;
  const throbber = document.createElement('canvas');
  throbber.classList.add('upload-progress');
  throbber.setAttribute('width', throbberWidth);
  throbber.setAttribute('height', throbberHeight);
  img.parentNode.appendChild(throbber);
  throbber.ctx = throbber.getContext('2d');
  throbber.ctx.fillStyle = 'orange';
  throbber.update = (percent) => {
    throbber.ctx.fillRect(0, 0, throbberWidth * percent / 100, throbberHeight);
    if (percent === 100) {
      throbber.ctx.fillStyle = 'green';
    }
  }
  throbber.update(0);
  return throbber;
}
```

The `FileUpload()` function shown above creates a throbber, which is used to display progress information, and then creates an {{DOMxRef("XMLHttpRequest")}} to handle uploading the data.

Before actually transferring the data, several preparatory steps are taken:

1. The `XMLHttpRequest`'s upload `progress` listener is set to update the throbber with new percentage information so that as the upload progresses the throbber will be updated based on the latest information.
2. The `XMLHttpRequest`'s upload `load` event handler is set to update the throbber progress information to 100% to ensure the progress indicator actually reaches 100% (in case of granularity quirks during the process). It then removes the throbber since it's no longer needed. This causes the throbber to disappear once the upload is complete.
3. The request to upload the image file is opened by calling `XMLHttpRequest`'s `open()` method to start generating a POST request.
4. The MIME type for the upload is set by calling the `XMLHttpRequest` function `overrideMimeType()`. In this case, we're using a generic MIME type; you may or may not need to set the MIME type at all depending on your use case.
5. The `FileReader` object is used to convert the file to a binary string.
6. Finally, when the content is loaded the `XMLHttpRequest` function `send()` is called to upload the file's content.

### Asynchronously handling the file upload process

This example, which uses PHP on the server side and JavaScript on the client side, demonstrates asynchronous uploading of a file.

```php
<?php
if (isset($_FILES['myFile'])) {
    // Example:
    move_uploaded_file($_FILES['myFile']['tmp_name'], "uploads/" . $_FILES['myFile']['name']);
    exit;
}
?><!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="UTF-8">
  <title>dnd binary upload</title>
    <script type="application/javascript">
        function sendFile(file) {
            const uri = "/index.php";
            const xhr = new XMLHttpRequest();
            const fd = new FormData();

            xhr.open("POST", uri, true);
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    alert(xhr.responseText); // handle response.
                }
            };
            fd.append('myFile', file);
            // Initiate a multipart/form-data upload
            xhr.send(fd);
        }

        window.onload = () => {
            const dropzone = document.getElementById("dropzone");
            dropzone.ondragover = dropzone.ondragenter = (event) => {
                event.stopPropagation();
                event.preventDefault();
            }

            dropzone.ondrop = (event) => {
                event.stopPropagation();
                event.preventDefault();

                const filesArray = event.dataTransfer.files;
                for (let i=0; i<filesArray.length; i++) {
                    sendFile(filesArray[i]);
                }
            }
        }
    </script>
</head>
<body>
    <div>
        <div id="dropzone" style="margin:30px; width:500px; height:300px; border:1px dotted grey;">Drag & drop your file here</div>
    </div>
</body>
</html>
```

## Example: Using object URLs to display PDF

Object URLs can be used for other things than just images! They can be used to display embedded PDF files or any other resources that can be displayed by the browser.

In Firefox, to have the PDF appear embedded in the iframe (rather than proposed as a downloaded file), the preference `pdfjs.disabled` must be set to `false` {{non-standard_inline()}}.

```html
<iframe id="viewer">
```

And here is the change of the `src` attribute:

```js
const obj_url = URL.createObjectURL(blob);
const iframe = document.getElementById('viewer');
iframe.setAttribute('src', obj_url);
URL.revokeObjectURL(obj_url);
```

## Example: Using object URLs with other file types

You can manipulate files of other formats the same way. Here is how to preview uploaded video:

```js
const video = document.getElementById('video');
const obj_url = URL.createObjectURL(blob);
video.src = obj_url;
video.play();
URL.revokeObjectURL(obj_url);
```

## See also

- {{DOMxRef("File")}}
- {{DOMxRef("FileList")}}
- {{DOMxRef("FileReader")}}
- {{DOMxRef("URL")}}
- {{DOMxRef("XMLHttpRequest")}}
- [Using XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)

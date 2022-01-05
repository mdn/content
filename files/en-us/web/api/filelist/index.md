---
title: FileList
slug: Web/API/FileList
tags:
  - API
  - File API
  - Files
browser-compat: api.FileList
---
{{APIRef("File API")}}

An object of this type is returned by the `files` property of the HTML {{HTMLElement("input")}} element; this lets you access the list of files selected with the `<input type="file">` element. It's also used for a list of files dropped into web content when using the drag and drop API; see the [`DataTransfer`](/en-US/docs/Web/API/DataTransfer) object for details on this usage.

> **Note:** Prior to {{Gecko("1.9.2")}}, the input element only supported a single file being selected at a time, meaning that the FileList would contain only one file. Starting with {{Gecko("1.9.2")}}, if the input element's multiple attribute is true, the FileList may contain multiple files.

## Using the file list

All `<input>` element nodes have a `files` attribute of type `FileList` on them which allows access to the items in this list. For example, if the HTML includes the following file input:

    <input id="fileItem" type="file">

The following line of code fetches the first file in the node's file list as a [`File`](/en-US/docs/Web/API/File) object:

```js
var file = document.getElementById('fileItem').files[0];
```

## Method overview

<table class="standard-table">
  <tbody>
    <tr>
      <td>
        <code>File <a href="#item">item</a>(index);</code>
      </td>
    </tr>
  </tbody>
</table>

## Properties

<table class="standard-table">
  <tbody>
    <tr>
      <td class="header">Attribute</td>
      <td class="header">Type</td>
      <td class="header">Description</td>
    </tr>
    <tr>
      <td><code>length</code></td>
      <td><code>integer</code></td>
      <td>A read-only value indicating the number of files in the list.</td>
    </tr>
  </tbody>
</table>

## Methods

### item()

Returns a [`File`](/en-US/docs/Web/API/File) object representing the file at the specified index in the file list.

     File item(
       index
     );

#### Parameters

- `index`
  - : The zero-based index of the file to retrieve from the list.

#### Return value

The [`File`](/en-US/docs/Web/API/File) representing the requested file.

## Example

This example iterates over all the files selected by the user using an `input` element:

```js
// fileInput is an HTML input element: <input type="file" id="myfileinput" multiple>
var fileInput = document.getElementById("myfileinput");

// files is a FileList object (similar to NodeList)
var files = fileInput.files;
var file;

// loop through files
for (var i = 0; i < files.length; i++) {

    // get item
    file = files.item(i);
    //or
    file = files[i];

    alert(file.name);
}
```

Here is a complete example.

```html
<!DOCTYPE HTML>
<html>
<head>
</head>
<body>
<!--multiple is set to allow multiple files to be selected-->

<input id="myfiles" multiple type="file">

</body>

<script>

var pullfiles=function(){
    // love the query selector
    var fileInput = document.querySelector("#myfiles");
    var files = fileInput.files;
    // cache files.length
    var fl = files.length;
    var i = 0;

    while ( i < fl) {
        // localize file var in the loop
        var file = files[i];
        alert(file.name);
        i++;
    }
}

// set the input element onchange to call pullfiles
document.querySelector("#myfiles").onchange=pullfiles;

//a.t
</script>

</html>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using files from web applications](/en-US/docs/Web/API/File/Using_files_from_web_applications "Using files from web applications")
- [`File`](/en-US/docs/Web/API/File)
- [`FileReader`](/en-US/docs/Web/API/FileReader)

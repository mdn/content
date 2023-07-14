---
title: Using FormData Objects
slug: Web/API/FormData/Using_FormData_Objects
page-type: guide
---

{{APIRef("XMLHttpRequest")}}

The [`FormData`](/en-US/docs/Web/API/FormData) object lets you compile a set of key/value pairs to send using [`XMLHttpRequest`](/en-US/docs/Web/API/XMLHttpRequest). It is primarily intended for use in sending form data, but can be used independently from forms in order to transmit keyed data. The transmitted data is in the same format that the form's {{domxref("HTMLFormElement.submit","submit()")}} method would use to send the data if the form's encoding type were set to `multipart/form-data`.

## Creating a FormData object from scratch

You can build a `FormData` object yourself, instantiating it then appending fields to it by calling its {{domxref("FormData.append","append()")}} method, like this:

```js
const formData = new FormData();

formData.append("username", "Groucho");
formData.append("accountnum", 123456); // number 123456 is immediately converted to a string "123456"

// HTML file input, chosen by user
formData.append("userfile", fileInputElement.files[0]);

// JavaScript file-like object
const content = '<q id="a"><span id="b">hey!</span></q>'; // the body of the new file…
const blob = new Blob([content], { type: "text/xml" });

formData.append("webmasterfile", blob);

const request = new XMLHttpRequest();
request.open("POST", "http://foo.com/submitform.php");
request.send(formData);
```

> **Note:** The fields "userfile" and "webmasterfile" both contain a file. The number assigned to the field "accountnum" is immediately converted into a string by the [`FormData.append()`](/en-US/docs/Web/API/FormData/append) method (the field's value can be a {{ domxref("Blob") }}, {{ domxref("File") }}, or a string: **if the value is neither a Blob nor a File, the value is converted to a string**).

This example builds a `FormData` instance containing values for fields named "username", "accountnum", "userfile" and "webmasterfile", then uses the `XMLHttpRequest` method [`send()`](/en-US/docs/Web/API/XMLHttpRequest/send) to send the form's data. The field "webmasterfile" is a {{domxref("Blob")}}. A `Blob` object represents a file-like object of immutable, raw data. Blobs represent data that isn't necessarily in a JavaScript-native format. The {{ domxref("File") }} interface is based on `Blob`, inheriting blob functionality and expanding it to support files on the user's system. In order to build a `Blob` you can invoke the {{domxref("Blob.Blob","Blob() constructor")}}.

## Retrieving a FormData object from an HTML form

To construct a `FormData` object that contains the data from an existing {{ HTMLElement("form") }}, specify that form element when creating the `FormData` object:

> **Note:** FormData will only use input fields that use the name attribute.

```js
const formData = new FormData(someFormElement);
```

For example:

```js
const formElement = document.querySelector("form");
const request = new XMLHttpRequest();
request.open("POST", "submitform.php");
request.send(new FormData(formElement));
```

You can also append additional data to the `FormData` object between retrieving it from a form and sending it, like this:

```js
const formElement = document.querySelector("form");
const formData = new FormData(formElement);
const request = new XMLHttpRequest();
request.open("POST", "submitform.php");
formData.append("serialnumber", serialNumber++);
request.send(formData);
```

This lets you augment the form's data before sending it along, to include additional information that's not necessarily user-editable.

## Sending files using a FormData object

You can also send files using `FormData`. Include an {{ HTMLElement("input") }} element of type `file` in your {{htmlelement("form")}}:

```html
<form enctype="multipart/form-data" method="post" name="fileinfo">
  <p>
    <label
      >Your email address:
      <input
        type="email"
        autocomplete="on"
        name="userid"
        placeholder="email"
        required
        size="32"
        maxlength="64" />
    </label>
  </p>
  <p>
    <label
      >Custom file label:
      <input type="text" name="filelabel" size="12" maxlength="32" />
    </label>
  </p>
  <p>
    <label
      >File to stash:
      <input type="file" name="file" required />
    </label>
  </p>
  <p>
    <input type="submit" value="Stash the file!" />
  </p>
</form>
<div id="output"></div>
```

Then you can send it using code like the following:

```js
const form = document.forms.namedItem("fileinfo");
form.addEventListener(
  "submit",
  (event) => {
    const output = document.querySelector("#output");
    const formData = new FormData(form);

    formData.append("CustomField", "This is some extra data");

    const request = new XMLHttpRequest();
    request.open("POST", "stash.php", true);
    request.onload = (progress) => {
      output.innerHTML =
        request.status === 200
          ? "Uploaded!"
          : `Error ${request.status} occurred when trying to upload your file.<br />`;
    };

    request.send(formData);
    event.preventDefault();
  },
  false,
);
```

> **Note:** If you pass in a reference to the form, the [request method](/en-US/docs/Web/HTTP/Methods) specified in the form will be used over the method specified in the open() call.

> **Warning:** When using FormData to submit POST requests using {{ domxref("XMLHttpRequest") }} or the {{ domxref("Fetch_API") }} with the `multipart/form-data` Content-Type (e.g. when uploading Files and Blobs to the server), _do not_ explicitly set the [`Content-Type`](/en-US/docs/Web/HTTP/Headers/Content-Type) header on the request. Doing so will prevent the browser from being able to set the Content-Type header with the boundary expression it will use to delimit form fields in the request body.

You can also append a {{ domxref("File") }} or {{ domxref("Blob") }} directly to the {{ domxref("FormData") }} object, like this:

```js
data.append("myfile", myBlob, "filename.txt");
```

When using the {{domxref("FormData.append","append()")}} method it is possible to use the third optional parameter to pass a filename inside the `Content-Disposition` header that is sent to the server. When no filename is specified (or the parameter isn't supported), the name "blob" is used.

## Using a formdata event

A more recent addition to the platform than the {{domxref("FormData")}} object is the [`formdata` event](/en-US/docs/Web/API/HTMLFormElement/formdata_event) — this is fired on an {{domxref("HTMLFormElement")}} object after the entry list representing the form's data is constructed. This happens when the form is submitted, but can also be triggered by the invocation of a {{domxref("FormData.FormData", "FormData()")}} constructor.

This allows a {{domxref("FormData")}} object to be quickly obtained in response to a `formdata` event firing, rather than needing to put it together yourself.

Typically this is used as shown in our [simple formdata event demo](https://long-impatiens.glitch.me/) — in the JavaScript we reference a form:

```js
const formElem = document.querySelector("form");
```

In our [`submit` event](/en-US/docs/Web/API/HTMLFormElement/submit_event) handler we use [`preventDefault`](/en-US/docs/Web/API/Event/preventDefault) to stop the default form submission, then invoke a {{domxref("FormData")}} constructor to trigger the `formdata` event:

```js
formElem.addEventListener("submit", (e) => {
  // on form submission, prevent default
  e.preventDefault();

  // construct a FormData object, which fires the formdata event
  new FormData(formElem);
});
```

When the `formdata` event fires we can access the {{domxref("FormData")}} object using {{domxref("FormDataEvent.formData")}}, then do what we like with it (below we post it to the server using {{domxref("XMLHttpRequest")}}).

```js
formElem.addEventListener("formdata", (e) => {
  console.log("formdata fired");

  // Get the form data from the event object
  const data = e.formData;
  for (const value of data.values()) {
    console.log(value);
  }

  // submit the data via XHR
  const request = new XMLHttpRequest();
  request.open("POST", "/formHandler");
  request.send(data);
});
```

> **Note:** The `formdata` event and {{domxref("FormDataEvent")}} object are available in Chrome from version 77 (and other equivalent Chromiums), and Firefox 72 (first available behind the `dom.formdata.event.enabled` pref in Firefox 71).

## Submitting forms and uploading files via AJAX without `FormData` objects

If you want to know how to serialize and submit a form via [AJAX](/en-US/docs/Web/Guide/AJAX) _without_ using FormData objects, please read [this paragraph](/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#submitting_forms_and_uploading_files).

## Gotchas

The `FormData` object doesn't include data from the fields that are disabled or the fieldsets that are disabled.

## See also

- [Using XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
- {{domxref("HTMLFormElement")}}
- {{domxref("Blob")}}
- [Typed Arrays](/en-US/docs/Web/JavaScript/Typed_arrays)

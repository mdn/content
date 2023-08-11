---
title: Sending forms through JavaScript
slug: Learn/Forms/Sending_forms_through_JavaScript
page-type: learn-module-chapter
---

{{LearnSidebar}}

HTML forms can send an [HTTP](/en-US/docs/Web/HTTP) request declaratively. But forms can also prepare an HTTP request to send via JavaScript, for example via `XMLHttpRequest`. This article explores such approaches.

## A form is not always a form

With progressive web apps, single page apps, and framework-based apps, it's common to use [HTML forms](/en-US/docs/Learn/Forms) to send data without loading a new document when response data is received. Let's first talk about why this requires a different approach.

### Gaining control of the global interface

Standard HTML form submission, as described in the previous article, loads the URL where the data was sent, which means the browser window navigates with a full page load. Avoiding a full page load can provide a smoother experience by avoiding network lag, and possible visual issues like flickering.

Many modern UIs only use HTML forms to collect input from the user, and not for data submission. When the user tries to send the data, the application takes control and transmits the data asynchronously in the background, updating only the parts of the UI that require changes.

Sending arbitrary data asynchronously is generally called [AJAX](/en-US/docs/Web/Guide/AJAX), which stands for **"Asynchronous JavaScript And XML"**.

### How is it different?

The {{domxref("XMLHttpRequest")}} (XHR) DOM object can build HTTP requests, send them, and retrieve their results. Historically, {{domxref("XMLHttpRequest")}} was designed to fetch and send [XML](/en-US/docs/Web/XML) as an exchange format, which has since been superseded by [JSON](/en-US/docs/Glossary/JSON). But neither XML nor JSON fits into form data request encoding. Form data (`application/x-www-form-urlencoded`) is made of URL-encoded lists of key/value pairs. For transmitting binary data, the HTTP request is reshaped into `multipart/form-data`.

> **Note:** The [Fetch API](/en-US/docs/Web/API/Fetch_API) is often used in place of XHR these days — it is a modern, updated version of XHR, which works similarly but has some advantages. Most of the XHR code you'll see in this article could be swapped out for Fetch.

If you control the front-end (the code that's executed in the browser) and the back-end (the code which is executed on the server), you can send JSON/XML and process them however you want.

But if you want to use a third-party service, you need to send the data in the format the services require.

So how should we send such data? The different techniques you'll require are done below.

## Sending form data

There are 3 ways to send form data:

- Building an `XMLHttpRequest` manually.
- Using a standalone `FormData` object.
- Using `FormData` bound to a `<form>` element.

Let's look at them in detail.

### Building an XMLHttpRequest manually

{{domxref("XMLHttpRequest")}} is the safest and most reliable way to make HTTP requests. To send form data with {{domxref("XMLHttpRequest")}}, prepare the data by URL-encoding it, and obey the specifics of form data requests.

Let's look at an example:

```html
<button>Click Me!</button>
```

And now the JavaScript:

```js
const btn = document.querySelector("button");

function sendData(data) {
  console.log("Sending data");

  const XHR = new XMLHttpRequest();

  const urlEncodedDataPairs = [];

  // Turn the data object into an array of URL-encoded key/value pairs.
  for (const [name, value] of Object.entries(data)) {
    urlEncodedDataPairs.push(
      `${encodeURIComponent(name)}=${encodeURIComponent(value)}`,
    );
  }

  // Combine the pairs into a single string and replace all %-encoded spaces to
  // the '+' character; matches the behavior of browser form submissions.
  const urlEncodedData = urlEncodedDataPairs.join("&").replace(/%20/g, "+");

  // Define what happens on successful data submission
  XHR.addEventListener("load", (event) => {
    alert("Yeah! Data sent and response loaded.");
  });

  // Define what happens in case of an error
  XHR.addEventListener("error", (event) => {
    alert("Oops! Something went wrong.");
  });

  // Set up our request
  XHR.open("POST", "https://example.com/cors.php");

  // Add the required HTTP header for form data POST requests
  XHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  // Finally, send our data.
  XHR.send(urlEncodedData);
}

btn.addEventListener("click", () => {
  sendData({ test: "ok" });
});
```

Here's the live result:

{{EmbedLiveSample("Building_an_XMLHttpRequest_manually", "100%", 50)}}

> **Note:** This use of {{domxref("XMLHttpRequest")}} is subject to the {{glossary('same-origin policy')}} if you want to send data to a third-party website. For cross-origin requests, you'll need [CORS and HTTP access control](/en-US/docs/Web/HTTP/CORS).

### Using XMLHttpRequest and the FormData object

Building an HTTP request by hand can be overwhelming. Fortunately, the [XMLHttpRequest specification](https://www.w3.org/TR/XMLHttpRequest/) provides a newer, simpler way to handle form data requests with the {{domxref("FormData","FormData")}} object.

The {{domxref("FormData","FormData")}} object can be used to build form data for transmission, or to get the data within a form element to manage how it's sent.

Using this object is detailed in [Using FormData Objects](/en-US/docs/Web/API/FormData/Using_FormData_Objects), but here are two examples:

#### Using a standalone FormData object

```html
<button>Click Me!</button>
```

You should be familiar with that HTML sample. Now for the JavaScript:

```js
const btn = document.querySelector("button");

function sendData(data) {
  const XHR = new XMLHttpRequest();
  const FD = new FormData();

  // Push our data into our FormData object
  for (const [name, value] of Object.entries(data)) {
    FD.append(name, value);
  }

  // Define what happens on successful data submission
  XHR.addEventListener("load", (event) => {
    alert("Yeah! Data sent and response loaded.");
  });

  // Define what happens in case of an error
  XHR.addEventListener("error", (event) => {
    alert("Oops! Something went wrong.");
  });

  // Set up our request
  XHR.open("POST", "https://example.com/cors.php");

  // Send our FormData object; HTTP headers are set automatically
  XHR.send(FD);
}

btn.addEventListener("click", () => {
  sendData({ test: "ok" });
});
```

Here's the live result:

{{EmbedLiveSample("Using_a_standalone_FormData_object", "100%", 50)}}

#### Using FormData bound to a form element

You can also bind a `FormData` object to an {{HTMLElement("form")}} element. This creates a `FormData` object that represents the data contained in the form.

The HTML is typical:

```html
<form id="myForm">
  <label for="myName">Send me your name:</label>
  <input id="myName" name="name" value="Dominic" />
  <input type="submit" value="Send Me!" />
</form>
```

But JavaScript takes over the form:

```js
window.addEventListener("load", () => {
  function sendData() {
    const XHR = new XMLHttpRequest();

    // Bind the FormData object and the form element
    const FD = new FormData(form);

    // Define what happens on successful data submission
    XHR.addEventListener("load", (event) => {
      alert(event.target.responseText);
    });

    // Define what happens in case of error
    XHR.addEventListener("error", (event) => {
      alert("Oops! Something went wrong.");
    });

    // Set up our request
    XHR.open("POST", "https://example.com/cors.php");

    // The data sent is what the user provided in the form
    XHR.send(FD);
  }

  // Get the form element
  const form = document.getElementById("myForm");

  // Add 'submit' event handler
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    sendData();
  });
});
```

Here's the live result:

{{EmbedLiveSample("Using_FormData_bound_to_a_form_element", "100%", 50)}}

You can even get more involved with the process by using the form's {{domxref("HTMLFormElement.elements", "elements")}} property to get a list of all of the data elements in the form and manually manage them one at a time. To learn more about that, see the [Accessing form controls](/en-US/docs/Web/API/HTMLFormElement/elements#accessing_form_controls) example.

## Dealing with binary data

If you use a {{domxref("FormData","FormData")}} object with a form that includes `<input type="file">` widgets, the data will be processed automatically. But to send binary data by hand, there's extra work to do.

There are many sources for binary data, including {{domxref("FileReader")}}, {{domxref("HTMLCanvasElement","Canvas")}}, and [WebRTC](/en-US/docs/Web/API/Navigator/getUserMedia). Unfortunately, some legacy browsers can't access binary data or require complicated workarounds. To learn more about the `FileReader` API, see [Using files from web applications](/en-US/docs/Web/API/File_API/Using_files_from_web_applications).

The least complicated way of sending binary data is by using {{domxref("FormData","FormData")}}'s `append()` method, demonstrated above. If you have to do it by hand, it's trickier.

In the following example, we use the {{domxref("FileReader")}} API to access binary data and then build the multi-part form data request by hand:

```html
<form id="theForm">
  <p>
    <label for="theText">text data:</label>
    <input id="theText" name="myText" value="Some text data" type="text" />
  </p>
  <p>
    <label for="theFile">file data:</label>
    <input id="theFile" name="myFile" type="file" />
  </p>
  <button>Send Me!</button>
</form>
```

As you see, the HTML is a standard `<form>`. There's nothing magical going on. The "magic" is in the JavaScript:

```js
// Because we want to access DOM nodes,
// we initialize our script at page load.
window.addEventListener("load", () => {
  // These variables are used to store the form data
  const text = document.getElementById("theText");
  const file = {
    dom: document.getElementById("theFile"),
    binary: null,
  };

  // Use the FileReader API to access file content
  const reader = new FileReader();

  // Because FileReader is asynchronous, store its
  // result when it finishes reading the file
  reader.addEventListener("load", () => {
    file.binary = reader.result;
  });

  // At page load, if a file is already selected, read it.
  if (file.dom.files[0]) {
    reader.readAsBinaryString(file.dom.files[0]);
  }

  // If not, read the file once the user selects it.
  file.dom.addEventListener("change", () => {
    if (reader.readyState === FileReader.LOADING) {
      reader.abort();
    }

    reader.readAsBinaryString(file.dom.files[0]);
  });

  // sendData is our main function
  function sendData() {
    // If there is a selected file, wait until it is read
    // If there is not, delay the execution of the function
    if (!file.binary && file.dom.files.length > 0) {
      setTimeout(sendData, 10);
      return;
    }

    // To construct our multipart form data request,
    // We need an XMLHttpRequest instance
    const XHR = new XMLHttpRequest();

    // We need a separator to define each part of the request
    const boundary = "blob";

    // Store our body request in a string.
    let data = "";

    // So, if the user has selected a file
    if (file.dom.files[0]) {
      // Start a new part in our body's request
      data += `--${boundary}\r\n`;

      // Describe it as form data
      data +=
        "content-disposition: form-data; " +
        // Define the name of the form data
        `name="${file.dom.name}"; ` +
        // Provide the real name of the file
        `filename="${file.dom.files[0].name}"\r\n`;
      // And the MIME type of the file
      data += `Content-Type: ${file.dom.files[0].type}\r\n`;

      // There's a blank line between the metadata and the data
      data += "\r\n";

      // Append the binary data to our body's request
      data += file.binary + "\r\n";
    }

    // Text data is simpler
    // Start a new part in our body's request
    data += `--${boundary}\r\n`;

    // Say it's form data, and name it
    data += `content-disposition: form-data; name="${text.name}"\r\n`;
    // There's a blank line between the metadata and the data
    data += "\r\n";

    // Append the text data to our body's request
    data += text.value + "\r\n";

    // Once we are done, "close" the body's request
    data += `--${boundary}--`;

    // Define what happens on successful data submission
    XHR.addEventListener("load", (event) => {
      alert("Yeah! Data sent and response loaded.");
    });

    // Define what happens in case of an error
    XHR.addEventListener("error", (event) => {
      alert("Oops! Something went wrong.");
    });

    // Set up our request
    XHR.open("POST", "https://example.com/cors.php");

    // Add the required HTTP header to handle a multipart form data POST request
    XHR.setRequestHeader(
      "Content-Type",
      `multipart/form-data; boundary=${boundary}`,
    );

    // Send the data
    XHR.send(data);
  }

  // Get the form element
  const form = document.getElementById("theForm");

  // Add 'submit' event handler
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    sendData();
  });
});
```

Here's the live result:

{{EmbedLiveSample("Dealing_with_binary_data", "100%", 150)}}

## Conclusion

Depending on the browser and the type of data you are dealing with, sending form data through JavaScript can be easy or difficult. The {{domxref("FormData","FormData")}} object is generally the answer, and you can use a [polyfill](https://github.com/jimmywarting/FormData) for it on legacy browsers.

## See also

### Learning path

- [Your first HTML form](/en-US/docs/Learn/Forms/Your_first_form)
- [How to structure an HTML form](/en-US/docs/Learn/Forms/How_to_structure_a_web_form)
- [The native form widgets](/en-US/docs/Learn/Forms/Basic_native_form_controls)
- [HTML5 input types](/en-US/docs/Learn/Forms/HTML5_input_types)
- [Additional form controls](/en-US/docs/Learn/Forms/Other_form_controls)
- [UI pseudo-classes](/en-US/docs/Learn/Forms/UI_pseudo-classes)
- [Styling HTML forms](/en-US/docs/Learn/Forms/Styling_web_forms)
- [Form data validation](/en-US/docs/Learn/Forms/Form_validation)
- [Sending form data](/en-US/docs/Learn/Forms/Sending_and_retrieving_form_data)

### Advanced Topics

- **Sending forms through JavaScript**
- [How to build custom form widgets](/en-US/docs/Learn/Forms/How_to_build_custom_form_controls)
- [HTML forms in legacy browsers](/en-US/docs/Learn/Forms/HTML_forms_in_legacy_browsers)
- [Advanced styling for HTML forms](/en-US/docs/Learn/Forms/Advanced_form_styling)
- [Property compatibility table for form widgets](/en-US/docs/Learn/Forms/Property_compatibility_table_for_form_controls)

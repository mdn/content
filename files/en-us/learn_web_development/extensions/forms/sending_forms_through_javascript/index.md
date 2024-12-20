---
title: Sending forms through JavaScript
slug: Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript
page-type: learn-module-chapter
---

{{LearnSidebar}}

When a user submits an HTML form, for example by clicking the {{glossary("Submit_button", "submit button")}}, the browser makes an [HTTP](/en-US/docs/Web/HTTP) request to send the data in the form. But instead of this declarative approach, web apps sometimes use JavaScript APIs such as {{domxref("Window/fetch", "fetch()")}} to send data programmatically to an endpoint that expects a form submission. This article explains why this is an important use case and how to do it.

## Why use JavaScript to submit form data?

Standard HTML form submission, as described in our article on [sending form data](/en-US/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data), loads the URL where the data was sent, which means the browser window navigates with a full page load.

However, many web apps, especially {{glossary("progressive web apps")}} and {{glossary("SPA", "single-page apps")}}, use JavaScript APIs to request data from the server and update the relevant parts of the page, avoiding the overhead of a full page load.

For this reason, when these web apps want to submit form data, they use HTML forms only to collect input from the user, but not for data submission. When the user tries to send the data, the application takes control and sends the data using a JavaScript API such as {{domxref("Window/fetch", "fetch()")}}.

## The problem with JavaScript form submission

If the server endpoint to which the web app sends the form data is under the web app developer's control, then they can send the form data in any way they choose: for example, as a JSON object.

However, if the server endpoint is expecting a form submission, the web app must encode the data in a particular way. For example, if the data is just textual, it is made of URL-encoded lists of key/value pairs and sent with a {{httpheader("Content-Type")}} of `application/x-www-form-urlencoded`. If the form includes binary data, it must be sent using the `multipart/form-data` content type.

The {{domxref("FormData")}} interface takes care of the process of encoding data in this way, and in the rest of this article we'll provide a quick introduction to `FormData`. For more details, see our guide to [Using FormData objects](/en-US/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects).

## Building a `FormData` object manually

You can populate a `FormData` object by calling the object's {{domxref("FormData.append()", "append()")}} method for each field you want to add, passing in the field's name and value. The value can be a string, for text fields, or a {{domxref("Blob")}}, for binary fields, including {{domxref("File")}} objects.

In the following example we send data as a form submission when the user clicks a button:

```js
async function sendData(data) {
  // Construct a FormData instance
  const formData = new FormData();

  // Add a text field
  formData.append("name", "Pomegranate");

  // Add a file
  const selection = await window.showOpenFilePicker();
  if (selection.length > 0) {
    const file = await selection[0].getFile();
    formData.append("file", file);
  }

  try {
    const response = await fetch("https://example.org/post", {
      method: "POST",
      // Set the FormData instance as the request body
      body: formData,
    });
    console.log(await response.json());
  } catch (e) {
    console.error(e);
  }
}

const send = document.querySelector("#send");
send.addEventListener("click", sendData);
```

1. We first construct a new, empty, `FormData` object.

2. Next, we call `append()` twice, to add two items to the `FormData` object: a text field and a file.

3. Finally, we make a {{httpmethod("POST")}} request using the `fetch()` API, setting the `FormData` object as the request body.

Note that we don't have to set the {{httpheader("Content-Type")}} header: the correct header is automatically set when we pass a `FormData` object into `fetch()`.

## Associating a `FormData` object and a `<form>`

If the data you're submitting is really coming from a {{htmlelement("form")}}, you can populate the `FormData` instance by passing the form into the `FormData` constructor.

Suppose our HTML declares a `<form>` element:

```html
<form id="userinfo">
  <p>
    <label for="username">Enter your name:</label>
    <input type="text" id="username" name="username" value="Dominic" />
  </p>
  <p>
    <label for="avatar">Select an avatar</label>
    <input type="file" id="avatar" name="avatar" required />
  </p>
  <input type="submit" value="Submit" />
</form>
```

The form includes a text input, a file input, and a submit button.

The JavaScript is as follows:

```js
const form = document.querySelector("#userinfo");

async function sendData() {
  // Associate the FormData object with the form element
  const formData = new FormData(form);

  try {
    const response = await fetch("https://example.org/post", {
      method: "POST",
      // Set the FormData instance as the request body
      body: formData,
    });
    console.log(await response.json());
  } catch (e) {
    console.error(e);
  }
}

// Take over form submission
form.addEventListener("submit", (event) => {
  event.preventDefault();
  sendData();
});
```

We add a submit event handler for the form element. This first calls {{domxref("Event.preventDefault()", "preventDefault()")}} to prevent the browser's built-in form submission, so we can take over. Then we call `sendData()`, which retrieves the form element and passes it into the `FormData` constructor.

After that, we send the `FormData` instance as an HTTP `POST` request, using `fetch()`.

## See also

### Learning path

- [Your first HTML form](/en-US/docs/Learn_web_development/Extensions/Forms/Your_first_form)
- [How to structure an HTML form](/en-US/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form)
- [The native form widgets](/en-US/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)
- [HTML5 input types](/en-US/docs/Learn_web_development/Extensions/Forms/HTML5_input_types)
- [Additional form controls](/en-US/docs/Learn_web_development/Extensions/Forms/Other_form_controls)
- [UI pseudo-classes](/en-US/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes)
- [Styling HTML forms](/en-US/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Form data validation](/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Sending form data](/en-US/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)

### Advanced Topics

- **Sending forms through JavaScript**
- [How to build custom form widgets](/en-US/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)
- [HTML forms in legacy browsers](/en-US/docs/Learn_web_development/Extensions/Forms/HTML_forms_in_legacy_browsers)
- [Advanced styling for HTML forms](/en-US/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)

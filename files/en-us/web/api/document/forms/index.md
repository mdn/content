---
title: "Document: forms property"
short-title: forms
slug: Web/API/Document/forms
page-type: web-api-instance-property
browser-compat: api.Document.forms
---

{{APIRef("DOM")}}

The **`forms`** read-only property of the {{domxref("Document")}} interface returns an {{domxref("HTMLCollection")}} listing all the {{HTMLElement("form")}} elements contained in the document.

> [!NOTE]
> Similarly, you can access a list of a form's component user input elements using the {{domxref("HTMLFormElement.elements")}} property.

You can also access named `<form>` elements as properties of the `document` object.
For example, `document["login-form"]` and `document.forms["login-form"]` can both be used to access the form named `login-form`.

> [!WARNING]
> Relying on the `document["form-name"]` pattern is dangerous and discouraged because it can lead to unexpected conflicts with existing or future APIs in the browser.
> For example, if a browser introduces a built-in `document["login-form"]` property in the future, your code may no longer be able to access the form element.
> To avoid such conflicts, always use `document.forms` to access named forms.

## Value

An {{domxref("HTMLCollection")}} object listing all of the document's forms.
Each item in the collection is a {{domxref("HTMLFormElement")}} representing a single `<form>` element.

If the document has no forms, the returned collection is empty, with a length of zero.

## Examples

### Getting form information

```html
<form id="robby">
  <input type="button" value="robby's form" />
</form>

<form id="dave">
  <input type="button" value="dave's form" />
</form>

<form id="paul">
  <input type="button" value="paul's form" />
</form>
```

```js
document.querySelectorAll("input[type=button]").forEach((button, i) => {
  button.addEventListener("click", (event) => {
    console.log(document.forms[i].id);
  });
});
```

### Getting an element from within a form

```js
const selectForm = document.forms[index];
const selectFormElement = document.forms[index].elements[index];
```

### Named form access

```html
<form name="login">
  <input name="email" type="email" />
  <input name="password" type="password" />
  <button type="submit">Log in</button>
</form>
```

```js
const loginForm = document.forms.login; // Or document.forms['login']
loginForm.elements.email.placeholder = "test@example.com";
loginForm.elements.password.placeholder = "password";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTML forms](/en-US/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("form")}} and the {{domxref("HTMLFormElement")}} interface

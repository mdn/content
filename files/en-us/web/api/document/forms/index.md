---
title: Document.forms
slug: Web/API/Document/forms
tags:
  - API
  - DOM
  - Document
  - Forms
  - HTML DOM
  - HTML forms
  - Property
  - Reference
browser-compat: api.Document.forms
---
The **`forms`** read-only property of
the {{domxref("Document")}} interface returns an {{domxref("HTMLCollection")}} listing
all the {{HTMLElement("form")}} elements contained in the document.

> **Note:** Similarly, you can access a list of a form's component user
> input elements using the {{domxref("HTMLFormElement.elements")}} property.

## Syntax

```js
collection = document.forms;
```

### Value

An {{domxref("HTMLCollection")}} object listing all of the document's forms. Each item
in the collection is a {{domxref("HTMLFormElement")}} representing a single
`<form>` element.

If the document has no forms, the returned collection is empty, with a length of zero.

## Examples

### Getting form information

```html
<!DOCTYPE html>
<html lang="en">

<head>
<title>document.forms example</title>
</head>

<body>

<form id="robby">
  <input type="button" onclick="alert(document.forms[0].id);" value="robby's form" />
</form>

<form id="dave">
  <input type="button" onclick="alert(document.forms[1].id);" value="dave's form" />
</form>

<form id="paul">
  <input type="button" onclick="alert(document.forms[2].id);" value="paul's form" />
</form>

</body>
</html>
```

### Getting an element from within a form

```js
var selectForm = document.forms[index];
var selectFormElement = document.forms[index].elements[index];
```

### Named form access

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>document.forms example</title>
</head>

<body>

<form name="login">
  <input name="email" type="email">
  <input name="password" type="password">
  <button type="submit">Log in</button>
</form>

<script>
  var loginForm = document.forms.login; // Or document.forms['login']
  loginForm.elements.email.placeholder = 'test@example.com';
  loginForm.elements.password.placeholder = 'password';
</script>
</body>
</html>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTML forms](/en-US/docs/Learn/Forms)
- {{HTMLElement("form")}} and the {{domxref("HTMLFormElement")}} interface

{{APIRef("DOM")}}

---
title: PasswordCredentialInit
slug: Web/API/PasswordCredentialInit
page-type: web-api-interface
spec-urls: https://w3c.github.io/webappsec-credential-management/#typedefdef-passwordcredentialinit
---

{{APIRef("Credential Management API")}}

The **`PasswordCredentialInit`** dictionary represents the object passed to {{domxref("CredentialsContainer.create()")}} as the value of the `password` option, when creating a password credential.

## Initialization from a form

Instead of passing this dictionary directly, a website can pass an {{domxref("HTMLFormElement")}}, and the implementation of `create()` will populate the credential's data from the values of the form's submittable elements, based on the value of the element's [`autocomplete`](/en-US/docs/Web/HTML/Attributes/autocomplete) attribute.

| `autocomplete` value                     | Credential property targeted |
| ---------------------------------------- | ---------------------------- |
| `"username"`                             | `id`                         |
| `"name"` or `"nickname"`                 | `name`                       |
| `"new-password"` or `"current-password"` | `password`                   |
| `"photo"`                                | `iconURL`                    |

If the form contains both `"new-password"` and `"current-password"` elements, the value for `"new-password"` will be used.

The `origin` property is set to the origin of the document the {{domxref("HTMLFormElement")}} is contained within.

## Instance properties

- `iconURL` {{optional_inline}}
  - : A string representing the URL of an icon or avatar to be associated with the credential.
- `id`
  - : A string representing a unique ID for the credential.
- `name` {{optional_inline}}
  - : A string representing the credential username.
- `origin`
  - : A string representing the credential's origin. {{domxref("PasswordCredential")}} objects are origin-bound, which means that they will only be usable on the specified origin they were intended to be used on.
- `password`
  - : A string representing the credential password.

## Examples

### Creating a password credential from an object literal

This example constructs an object literal to initialize a password credential.

```js
const credInit = {
  id: "1234",
  name: "Serpentina",
  origin: "https://example.org",
  password: "the last visible dog",
};

const makeCredential = document.querySelector("#make-credential");

makeCredential.addEventListener("click", async () => {
  const cred = await navigator.credentials.create({
    password: credInit,
  });
  console.log(cred.name);
  // Serpentina
  console.log(cred.password);
  // the last visible dog
});
```

### Creating a password credential from a form

This example uses a form to initialize a password credential.

#### HTML

The HTML declares a {{HTMLElement("form")}} containing three submittable elements, representing the user ID, user's display name, and password.

```html
<form>
  <div>
    <label for="userid">Enter your user ID: </label>
    <input type="text" name="userid" id="userid" autocomplete="username" />
  </div>
  <div>
    <label for="username">Enter your username: </label>
    <input type="text" name="username" id="username" autocomplete="name" />
  </div>
  <div>
    <label for="password">Enter your password: </label>
    <input
      type="password"
      name="password"
      id="password"
      autocomplete="new-password" />
  </div>
</form>

<button id="make-credential">Make credential</button>

<pre id="log"></pre>
```

```css hidden
form {
  display: table;
}

div {
  display: table-row;
}

label,
input {
  display: table-cell;
  margin-bottom: 10px;
}

label {
  padding-right: 10px;
}

#log {
  height: 60px;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

The JavaScript passes the form into `create()`, and logs some of the values of the resulting credential.

The promise returned by `create()` will reject if the form does not contain values for the mandatory credential properties.

```js
const makeCredential = document.querySelector("#make-credential");
const formCreds = document.querySelector("form");

makeCredential.addEventListener("click", async () => {
  try {
    const credential = await navigator.credentials.create({
      password: formCreds,
    });
    log(
      `New credential:\nname: ${credential.name}, password: ${credential.password}`,
    );
  } catch (e) {
    if (e.name === "TypeError") {
      log("Error creating credential\nMake sure you filled in all the fields");
    }
  }
});

const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = text;
}
```

#### Result

{{EmbedLiveSample("Creating a password credential from a form", "", "260")}}

## Specifications

{{Specifications}}

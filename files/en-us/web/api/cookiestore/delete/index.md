---
title: "CookieStore: delete() method"
short-title: delete()
slug: Web/API/CookieStore/delete
page-type: web-api-instance-method
browser-compat: api.CookieStore.delete
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

The **`delete()`** method of the {{domxref("CookieStore")}} interface deletes a cookie that matches with the given `name` or `options` object.
The method expires the cookie by changing its date to one in the past.

## Syntax

```js-nolint
delete(name)
delete(options)
```

### Parameters

This method requires one of the following:

- `name` {{optional_inline}}
  - : A string with the name of a cookie.

Or

- `options` {{optional_inline}}

  - : An object containing:

    - `name`
      - : A string with the name of a cookie.
    - `domain` {{Optional_Inline}}
      - : A string with the domain of a cookie. Defaults to `null`.
    - `path` {{Optional_Inline}}
      - : A string containing a path. Defaults to `/`.
    - `partitioned` {{Optional_Inline}}
      - : A boolean value that defaults to `false`. Setting it to `true` specifies that the cookie to delete will be a partitioned cookie. See [Cookies Having Independent Partitioned State (CHIPS)](/en-US/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies) for more information.

### Return value

A {{jsxref("Promise")}} that resolves with {{jsxref("undefined")}} when deletion completes.

### Exceptions

- `SecurityError` {{domxref("DOMException")}}
  - : Thrown if the origin can not be {{glossary("Serialization", "serialized")}} to a URL.
- {{jsxref("TypeError")}}
  - : Thrown if a cookie that matches a given `name` or `options` cannot be deleted.

## Examples

### Delete a named cookie

In this example, a cookie is deleted by passing its name to the `delete()` method.

This will work if the cookie to be deleted matches the cookie name and the default values of the [`options`](#options) above.
This will be the case if the cookie was {{domxref("CookieStore/set","set()")}} using the just a name and value, but may not be if the cookie was created with options or using {{domxref("Document.cookie")}}.

```html hidden
<button id="showCookies" type="button">Show cookies</button>
<button id="reset" type="button">Reset</button>
<pre id="log"></pre>
```

```css hidden
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const reload = document.querySelector("#reset");

reload.addEventListener("click", () => {
  window.location.reload(true);
});

const logElement = document.querySelector("#log");

function clearLog() {
  logElement.innerText = "";
}

function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

#### JavaScript

The code first defines `setTestCookies()`, which we'll call below to create some test cookies and log their names.

```js
async function setTestCookies() {
  // Set two cookies
  try {
    await cookieStore.set("cookie1", "cookie1-value");
  } catch (error) {
    log(`Error setting cookie1: ${error}`);
  }

  try {
    await cookieStore.set("cookie2", "cookie2-value");
  } catch (error) {
    log(`Error setting cookie2: ${error}`);
  }

  // Log cookie names
  const cookieNames = (await cookieStore.getAll())
    .map((cookie) => cookie.name)
    .join(" ");
  log(`Initial cookies: ${cookieNames}`);
}
```

The `cookieTest()` method is called when the **Show cookies** button is clicked.
This first calls the method to set the test cookies.

We then delete cookie1 that we just created, and then list all cookie names again.

```js
async function cookieTest() {
  //Create our test cookies
  await setTestCookies();

  // Delete cookie1
  try {
    await cookieStore.delete("cookie1");
  } catch (error) {
    log(`Error deleting cookie1: ${error}`);
  }

  // Log cookie names again (to show cookie1 deleted)
  cookieNames = (await cookieStore.getAll())
    .map((cookie) => cookie.name)
    .join(" ");
  log(`Cookies after deleting cookie1: ${cookieNames}`);
}
```

```js hidden
const showCookies = document.querySelector("#showCookies");

showCookies.addEventListener("click", () => {
  clearLog();
  cookieTest();
});
```

Note that some logging and other code is omitted for brevity.

#### Result

Press **Show cookies** to run the code above.
This should show that both cookie1 and cookie2 are present initially, but cookie1 is not listed after it has been deleted.

{{EmbedLiveSample('Delete a named cookie', 100, 190)}}

### Delete a cookie with options

This example is almost identical to the previous one, except it demonstrates that the options must match those of the cookie to be deleted.
We define two cookies with the partitioned property set, and show that deletion only work in the case where this option is specified, and hence matches the cookie.

```html hidden
<button id="showCookies" type="button">Show cookies</button>
<button id="reset" type="button">Reset</button>
<pre id="log"></pre>
```

```css hidden
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const reload = document.querySelector("#reset");

reload.addEventListener("click", () => {
  window.location.reload(true);
});

const logElement = document.querySelector("#log");

function clearLog() {
  logElement.innerText = "";
}

function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

#### JavaScript

The code first defines `setTestCookies()`, which we'll call below to create some test cookies and log their names.
Note that in this case we have set `partitioned` to `true`.

```js
async function setTestCookies() {
  // Set two cookies
  try {
    await cookieStore.set({
      name: "cookie1",
      value: `cookie1-value`,
      partitioned: true,
    });
  } catch (error) {
    log(`Error setting cookie1: ${error}`);
  }

  try {
    await cookieStore.set({
      name: "cookie2",
      value: `cookie2-value`,
      partitioned: true,
    });
  } catch (error) {
    log(`Error setting cookie2: ${error}`);
  }

  // Log cookie names
  const cookieNames = (await cookieStore.getAll())
    .map((cookie) => cookie.name)
    .join(" ");
  log(`Initial cookies: ${cookieNames}`);
}
```

The `cookieTest()` method is called when the **Show cookies** button is clicked.
This first calls the method to set the test cookies and list them.

The code then attempts to delete cookie1 using just the name, which should fail because cookie1 is partitioned, and will not match.
It then attempts to delete cookie2, specifying both the name and `partitioned` options, which should succeed.

> [!NOTE]
> The deletion silently fails if the cookies to be deleted does not match.

```js
async function cookieTest() {
  //Create our test cookies
  await setTestCookies();

  // Delete cookie1 specifying just the name
  try {
    await cookieStore.delete("cookie1");
  } catch (error) {
    log(`Error deleting cookie1: ${error}`);
  }

  // Delete cookie2 specified partitioned as true
  try {
    await cookieStore.delete({
      name: "cookie2",
      partitioned: true,
    });
  } catch (error) {
    log(`Error deleting cookie2: ${error}`);
  }

  // Log cookie names again (to show cookie1 deleted)
  cookieNames = (await cookieStore.getAll())
    .map((cookie) => cookie.name)
    .join(" ");
  log(`Cookies after deleting cookie1: ${cookieNames}`);
}
```

```js hidden
const showCookies = document.querySelector("#showCookies");

showCookies.addEventListener("click", () => {
  clearLog();
  cookieTest();
});
```

Note that some logging and other code is omitted for brevity.

#### Result

Press **Show cookies** to run the code above.
This should show that both cookie1 and cookie2 are present initially, but cookie2 is not listed afterwards.

{{EmbedLiveSample('Delete a cookie with options', 100, 190)}}

### Delete cookies created using document.cookies

`delete()` can be used to delete any cookies, including those created using {{domxref("document.cookie")}}.

Note however that unlike cookies created with {{domxref("CookieStore.set()")}}, which have a default [`path`](#path) of `/`, cookies created with `document.cookie` have a default path equal to the path of the document they are created in.
In order to delete them you have to know this path, which means that you must either set it to a default value such as `/`, or store it.

> [!NOTE]
> On some browsers you could read the path and other properties from {{domxref("CookieStore.get()")}} or {{domxref("CookieStore.getAll()")}}.
> This does not work on Firefox.

This example demonstrates how you might set the default path when creating a cookie with {{domxref("document.cookie")}}, so that you can then delete it.

```html hidden
<button id="showCookies" type="button">Show cookies</button>
<button id="reset" type="button">Reset</button>
<pre id="log"></pre>
```

```css hidden
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const reload = document.querySelector("#reset");

reload.addEventListener("click", () => {
  window.location.reload(true);
});

const logElement = document.querySelector("#log");

function clearLog() {
  logElement.innerText = "";
}

function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

#### JavaScript

The code first defines `setTestCookies()`, which we'll call below to create some test cookies and log their names.
Note that in this case we have set `partitioned` to `true`.

```js
async function setTestCookies() {
  // Set two cookies
  try {
    await cookieStore.set({
      name: "cookie1",
      value: `cookie1-value`,
      partitioned: true,
    });
  } catch (error) {
    log(`Error setting cookie1: ${error}`);
  }

  try {
    await cookieStore.set({
      name: "cookie2",
      value: `cookie2-value`,
      partitioned: true,
    });
  } catch (error) {
    log(`Error setting cookie2: ${error}`);
  }
}
```

The `cookieTest()` method is called when the **Show cookies** button is clicked.
This creates two cookies using `document.cookie`.
We don't know the path of `doc_cookie1`, but we explicitly set the path of `doc_cookie2` to the default expected by `delete()`.

> [!NOTE]
> The deletion silently fails if the cookies to be deleted does not match.

```js
async function cookieTest() {
  // Create doc_cookie1 with document.cookie default path
  document.cookie = "doc_cookie1=doc_cookie1_name; SameSite=None; Secure";
  // Create doc_cookie2 with path /, the CookieStore.set() default
  document.cookie =
    "doc_cookie2=doc_cookie2_name; SameSite=None; Secure; path=/";
  // Delete cookie1 specifying just the name

  // Log cookie names
  const cookieNames = (await cookieStore.getAll())
    .map((cookie) => cookie.name)
    .join(" ");
  log(`Initial cookies: ${cookieNames}`);

  // Delete doc_cookie1 (should fail)
  try {
    await cookieStore.delete("doc_cookie1");
  } catch (error) {
    log(`Error deleting doc_cookie1: ${error}`);
  }

  // Delete doc_cookie2 (should succeed)
  try {
    await cookieStore.delete("doc_cookie2");
  } catch (error) {
    log(`Error deleting cookie2: ${error}`);
  }

  // Log cookie names again (to show cookie1 deleted)
  cookieNames = (await cookieStore.getAll())
    .map((cookie) => cookie.name)
    .join(" ");
  log(`Cookies attempting deletion: ${cookieNames}`);
}
```

```js hidden
const showCookies = document.querySelector("#showCookies");

showCookies.addEventListener("click", () => {
  clearLog();
  cookieTest();
});
```

Note that some logging and other code is omitted for brevity.

#### Result

Press **Show cookies** to run the code above.
This should show that both cookie1 and cookie2 are present initially, but cookie2 is not listed afterwards.

{{EmbedLiveSample('Delete cookies created using document.cookies', 100, 190)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

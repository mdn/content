---
title: "CookieStore: getAll() method"
short-title: getAll()
slug: Web/API/CookieStore/getAll
page-type: web-api-instance-method
browser-compat: api.CookieStore.getAll
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

The **`getAll()`** method of the {{domxref("CookieStore")}} interface returns a {{jsxref("Promise")}} that resolves as an array of cookies that match the `name` or `options` passed to it.
Passing no parameters will return all cookies for the current context.

## Syntax

```js-nolint
getAll()
getAll(name)
getAll(options)
```

### Parameters

- `name` {{optional_inline}}
  - : A string with the name of a cookie.

Or

- `options` {{optional_inline}}

  - : An object containing:

    - `name`
      - : A string with the name of a cookie.
    - `url`
      - : A string with the URL of a cookie.

> [!NOTE]
> The `url` option enables the modification of a cookie scoped under a particular URL. Service workers can obtain cookies that would be sent to any URL under their scope. From a document you may only obtain the cookies at the current URL, so the only valid URL in a document context is the document's URL.

### Return value

A {{jsxref("Promise")}} that resolves with an array of objects representing cookies that match the given `name` or `options`.

Each object contains the following properties:

- `domain`

  - : A string containing the domain of the cookie.

- `expires`

  - : A timestamp, given as [Unix time](/en-US/docs/Glossary/Unix_time) in milliseconds, containing the expiration date of the cookie.

- `name`

  - : A string containing the name of the cookie.

- `partitioned`

  - : A boolean indicating whether the cookie is a partitioned cookie (`true`) or not (`false`). See [Cookies Having Independent Partitioned State (CHIPS)](/en-US/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies) for more information.

- `path`

  - : A string containing the path of the cookie.

- `sameSite`

  - : One of the following [`SameSite`](/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) values: [`"strict"`](/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie#strict), [`"lax"`](/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie#lax), or [`"none"`](/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie#none).

- `secure`

  - : A boolean value indicating whether the cookie is to be used in secure contexts only (`true`) or not (`false`).

- `value`
  - : A string containing the value of the cookie.

### Exceptions

- `SecurityError` {{domxref("DOMException")}}
  - : Thrown if the origin does not {{glossary("Serialization", "serialize")}} to a URL.
- {{jsxref("TypeError")}}
  - : Thrown if:
    - The `url` option is present and is not equal with the creation URL, if in main thread.
    - The `url` option is present and its origin is not the same as the origin of the creation URL.
    - Querying cookies represented by the given `name` or `options` fails.

## Examples

### Get all cookies for this context

In this example, we use `getAll()` with no parameters.
This returns a {{jsxref("Promise")}} that resolves with all of the cookies for this context as an array of objects, or an empty array if there are no cookies.

```html hidden
<button id="showCookies" type="button">Show cookies</button>
<button id="reset" type="button">Reset</button>
<pre id="log"></pre>
```

```css hidden
#log {
  height: 330px;
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

```js hidden
function logCookie(name, cookie) {
  if (cookie) {
    log(`${name}:`);
    for (const [key, value] of Object.entries(cookie)) {
      log(` ${key}: ${value}`);
    }
  } else {
    log(`${name}: Cookie not found`);
  }
}
```

#### JavaScript

The `cookieTest()` method is called when the **Show cookies** button is clicked.
It first waits on `setTestCookies()` to set some cookies, then waits on `getAll()` to fetch all cookies defined in the current context.
If the returned promise resolves with an object we iterate the array, logging the properties of each cookie.

```js
async function cookieTest() {
  // Set our test cookies
  await setTestCookies();

  // Get all cookies
  const cookies = await cookieStore.getAll();

  // Iterate the cookies, or log that none were found
  if (cookies.length > 0) {
    log(`Found cookies: ${cookies.length}:`);
    cookies.forEach((cookie) => logCookie(cookie.value, cookie));
  } else {
    log("Cookies not found");
  }
}
```

The code for `setTestCookies()` is shown here just "for your interest".
Note that some logging and other code is omitted for brevity.

```js
async function setTestCookies() {
  // Set two cookies
  try {
    await cookieStore.set("cookie1", "cookie1-value");
  } catch (error) {
    log(`Error setting cookie1: ${error}`);
  }

  try {
    await cookieStore.set("cookie1", "cookie1-value");
  } catch (error) {
    log(`Error setting cookie2: ${error}`);
  }
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

Press **Show cookies** to add and then get all the cookies.
Note that some browsers will only display the `name` and `value`, while others will display all the properties of each cookie.

{{EmbedLiveSample('Get all cookies for this context', 100, 410)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

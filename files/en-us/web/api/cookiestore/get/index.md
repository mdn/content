---
title: "CookieStore: get() method"
short-title: get()
slug: Web/API/CookieStore/get
page-type: web-api-instance-method
browser-compat: api.CookieStore.get
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

The **`get()`** method of the {{domxref("CookieStore")}} interface returns a {{jsxref("Promise")}} that resolves to a single cookie matching the given `name` or `options` object. The method will return the first cookie that matches.

## Syntax

```js-nolint
get(name)
get(options)
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
    - `url`
      - : A string with the URL of a cookie.

> [!NOTE]
> The `url` option enables the modification of a cookie scoped under a particular URL. Service workers can obtain cookies that would be sent to any URL under their scope. From a document you may only obtain the cookies at the current URL, so the only valid URL in a document context is the document's URL.

### Return value

A {{jsxref("Promise")}} that resolves with an object representing the first cookie matching the submitted `name` or `options`, or `null` if there is no matching cookie.

The object returned for a match contains the following properties:

- `domain`

  - : A string containing the domain of the cookie.

- `expires`

  - : A timestamp, given as {{glossary("Unix time")}} in milliseconds, containing the expiration date of the cookie.

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
    - The `options` parameter is an empty object.
    - The `url` option is present and is not equal with the creation URL, if in main thread.
    - The `url` option is present and its origin is not the same as the origin of the creation URL.
    - Querying cookies represented by the given `name` or `options` fails.

## Examples

### Getting a cookie by name

In this example we get a particular cookie named `cookie1`, awaiting the returned Promise, and logging the resolved object.

```html hidden
<button id="showCookies" type="button">Show cookies</button>
<button id="reset" type="button">Reset</button>
<pre id="log"></pre>
```

```css hidden
#log {
  height: 180px;
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

function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

#### JavaScript

The code first sets a cookie.

We then await on `get()`, specifying the name of the cookie.
If the returned promise resolves with an object we log the properties of the cookie: otherwise we log that no matching cookie was found.

```js
async function cookieTest() {
  // await on setting the cookie
  await cookieStore.set({
    name: "cookie1",
    value: `cookie1-value`,
  });

  // await on getting the cookie
  const cookie = await cookieStore.get("cookie1");

  // log the cookie object keys and values.
  if (cookie) {
    log("cookie1:");
    for (const [key, value] of Object.entries(cookie)) {
      log(` ${key}: ${value}`);
    }
  } else {
    log("cookie1: Cookie not found");
  }
}
```

```js hidden
const showCookies = document.querySelector("#showCookies");

showCookies.addEventListener("click", () => {
  cookieTest();
});
```

Note that some logging and other code is omitted for brevity.

#### Result

Press **Show cookies** to set the cookie and then display it.
Note that some browsers will only display the `name` and `value`, while others will display all the properties of the cookie.

{{EmbedLiveSample('Setting a cookie with name and value', 100, 250)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

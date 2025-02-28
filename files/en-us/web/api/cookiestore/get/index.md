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

> [!WARNING]
> Cookie examples do not run properly within the MDN environment because setting cookies results in an unknown error.
> The examples can be tested by copying the source code and running it with a [local server](/en-US/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server), or by [building this documentation locally](https://github.com/mdn/content?tab=readme-ov-file#build-the-site).

### Getting a cookie by name

In this example we get a particular cookie named `cookie1`, awaiting the returned promise, and logging the resolved object.

```html hidden
<button id="showCookies" type="button">Show cookie</button>
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

function clearLog() {
  logElement.innerText = "";
}

function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

#### JavaScript

The `cookieTest()` method is called when the **Show cookies** button is clicked.
It first calls `setTestCookie()` to define a cookie, then waits on `get()` to retrieve information about that same cookie.
If the returned promise resolves with an object we log the properties of the cookie: otherwise we log that no matching cookie was found.

```js
async function cookieTest() {
  // Set test cookie
  await setTestCookie();

  // Get cookie, specifying name
  const cookie = await cookieStore.get("cookie1");

  // Log the cookie object keys and values.
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

The code for `setTestCookie()` is shown here just "for your interest".
Note that some logging and other code is omitted for brevity.

```js
async function setTestCookie() {
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
}
```

```js hidden
const showCookies = document.querySelector("#showCookies");

showCookies.addEventListener("click", () => {
  clearLog();
  cookieTest();
});
```

#### Result

Press **Show cookie** to set the cookie and then display it.
Note that some browsers will only display the `name` and `value`, while others will display all the properties of the cookie.

{{EmbedLiveSample('Getting a cookie by name', 100, 260)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

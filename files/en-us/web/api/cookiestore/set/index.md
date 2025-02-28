---
title: "CookieStore: set() method"
short-title: set()
slug: Web/API/CookieStore/set
page-type: web-api-instance-method
browser-compat: api.CookieStore.set
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

The **`set()`** method of the {{domxref("CookieStore")}} interface sets a cookie with the given `name` and `value` or `options` object.

## Syntax

```js-nolint
set(name, value)
set(options)
```

### Parameters

This method requires one of the following:

- `name` {{optional_inline}}
  - : A string with the name of the cookie.
- `value` {{optional_inline}}
  - : A string with the value of the cookie.

Or

- `options` {{optional_inline}}

  - : An object containing:

    - `domain` {{Optional_Inline}}
      - : A string containing the domain of the cookie. Defaults to `null`.
    - `expires` {{Optional_Inline}}
      - : A timestamp, given as {{glossary("Unix time")}} in milliseconds, containing the expiration date of the cookie. Defaults to `null`.
    - `name`
      - : A string with the name of a cookie.
    - `partitioned` {{Optional_Inline}}
      - : A boolean value that defaults to `false`. If set to `true`, the set cookie will be a partitioned cookie. See [Cookies Having Independent Partitioned State (CHIPS)](/en-US/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies) for more information.
    - `path` {{Optional_Inline}}
      - : A string containing the path of the cookie. Defaults to `/`.
    - `sameSite` {{Optional_Inline}}
      - : One of the following [`SameSite`](/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) values: [`"strict"`](/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie#strict), [`"lax"`](/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie#lax), or [`"none"`](/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie#none).
    - `value`
      - : A string with the value of the cookie.

> [!NOTE]
> While the values can be set here and will be used internally, some browsers will only return `name` and `value` options from {{domxref("CookieStore.get()")}} and {{domxref("CookieStore.getAll()")}}.

### Return value

A {{jsxref("Promise")}} that resolves with {{jsxref("undefined")}} when setting the cookie completes.

### Exceptions

- `SecurityError` {{domxref("DOMException")}}
  - : Thrown if the origin can not be {{glossary("Serialization", "serialized")}} to a URL.
- {{jsxref("TypeError")}}
  - : Thrown if setting the cookie with the given `name` and `value` or `options` fails.

## Examples

> [!WARNING]
> Cookie examples do not run properly within the MDN environment because setting cookies results in an unknown error.
> The examples can be tested by copying the source code and running it with a [local server](/en-US/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server), or by [building this documentation locally](https://github.com/mdn/content?tab=readme-ov-file#build-the-site).

### Setting a cookie with name and value

The following example sets a cookie by passing a `name` and `value` of "cookie1" and "cookie1-value", respectively.
The other properties of the cookie are set with default values, as defined in the [`options`](#options) parameter.

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

```js hidden
function logCookie(name, cookie) {
  clearLog();
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

The code first waits for the cookie to be set within a `try...catch` block, as setting a cookie can throw an exception.
It then gets the same cookie and displays its properties (note that some logging and other display code is omitted).

```js
async function cookieTest() {
  // Set cookie: passing name and value
  try {
    await cookieStore.set("cookie1", "cookie1-value");
  } catch (error) {
    log(`Error setting cookie1: ${error}`);
  }

  // Get the cookie and log its values
  const cookie = await cookieStore.get("cookie1");
  logCookie("cookie1", cookie);
}
```

```js hidden
const showCookies = document.querySelector("#showCookies");

showCookies.addEventListener("click", () => {
  cookieTest();
});
```

#### Result

Press **Show cookie** to set the cookie and then display it.
Note that some browsers will only display the `name` and `value`, while others will display all the properties of the cookie.

{{EmbedLiveSample('Setting a cookie with name and value', 100, 250)}}

### Setting a cookie with options

The following example sets a cookie by passing an `options` object with `name`, `value`, `expires`, and `partitioned`.

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

function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}

function clearLog() {
  logElement.innerText = "";
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

The code first waits for the cookie to be set: as this operation can fail, the operation is performed in a `try...catch` block and any errors are logged.
The example then gets the new cookie, if it exists, and logs its properties (note the logging and other display code is omitted).

```js
async function cookieTest() {
  clearLog();

  const day = 24 * 60 * 60 * 1000;
  const cookieName = "cookie2";
  try {
    // Set cookie: passing options
    await cookieStore.set({
      name: cookieName,
      value: `${cookieName}-value`,
      expires: Date.now() + day,
    });
  } catch (error) {
    log(`Error setting ${cookieName}: ${error}`);
    console.log(error);
  }

  // Log the new cookie
  const cookie = await cookieStore.get(cookieName);
  logCookie(cookieName, cookie);
}
```

Note that some logging and other code is omitted for brevity.

```js hidden
const showCookies = document.querySelector("#showCookies");

showCookies.addEventListener("click", () => {
  cookieTest();
});
```

#### Result

Press **Show cookie** to set the cookie and then display it.
Note that some browsers will only display the `name` and `value`, while others will display all the properties of the cookie.
Even if the values are not displayed, they are still set.

{{EmbedLiveSample('Setting a cookie with options', 100, 250)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

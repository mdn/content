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

      - : One of the following [`SameSite`](/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) values:

        - `"strict"`
          - : Cookies will only be sent in a first-party context and not be sent along with requests initiated by third party websites. This is the default.
        - `"lax"`
          - : Cookies are not sent on normal cross-site subrequests (for example to load images or frames into a third party site), but are sent when a user is navigating to the origin site (i.e. when following a link).
        - `"none"`
          - : Cookies will be sent in all contexts.

    - `value`
      - : A string with the value of the cookie.

### Return value

A {{jsxref("Promise")}} that resolves with {{jsxref("undefined")}} when setting the cookie completes.

### Exceptions

- `SecurityError` {{domxref("DOMException")}}
  - : Thrown if the origin can not be {{glossary("Serialization", "serialized")}} to a URL.
- {{jsxref("TypeError")}}
  - : Thrown if setting the cookie with the given `name` and `value` or `options` fails.

## Examples

### Setting a cookie with name and value

The following example sets a cookie by passing a `name` and `value` of "cookie1" and "cookie1-value", respectively.
This approach can be used when you only want to set a name and value.

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

The example code first waits for the cookie to be set, then waits to get the value, then logs the value (note that the logging and other display code is omitted).

```js
async function cookieTest() {
  // await on setting the cookie
  await cookieStore.set({
    name: "cookie1",
    value: `cookie1-value`,
  });

  // await on getting the cookie and then log its values
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

Press **Show cookies** to set the cookie and then display it.
Note that some browsers will only display the `name` and `value`, while others will display all the properties of the cookie.

{{EmbedLiveSample('Setting a cookie with name and value', 100, 250)}}

### Setting a cookie with options

The following example sets a cookie by passing an `options` object with `name`, `value`, `expires`, and `partitioned`.

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

The example code first awaits for the cookie to be set, then waits to get the value and log it (note the logging and other display code is omitted).

```js
async function cookieTest() {
  const day = 24 * 60 * 60 * 1000;
  await cookieStore.set({
    name: "cookie2",
    value: `cookie2-value`,
    expires: Date.now() + day,
    partitioned: true,
  });

  const cookie = await cookieStore.get("cookie2");
  logCookie("cookie2", cookie);
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

Press **Show cookies** to set the cookie and then display it.
Note that some browsers will only display the `name` and `value`, while others will display all the properties of the cookie.
Even if the values are not displayed, they are still set.

{{EmbedLiveSample('Setting a cookie with options', 100, 250)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

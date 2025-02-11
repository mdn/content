---
title: CookieStore
slug: Web/API/CookieStore
page-type: web-api-interface
browser-compat: api.CookieStore
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

The **`CookieStore`** interface of the {{domxref("Cookie Store API", "", "", "nocode")}} provides methods for getting and setting cookies asynchronously from either a page or a service worker.

The `CookieStore` is accessed via attributes in the global scope in a {{domxref("Window")}} or {{domxref("ServiceWorkerGlobalScope")}} context. Therefore there is no constructor.

{{InheritanceDiagram}}

## Instance methods

- {{domxref("CookieStore.delete()")}}
  - : The `delete()` method deletes a cookie with the given `name` or `options` object, it returns a {{jsxref("Promise")}} that resolves when the deletion completes.
- {{domxref("CookieStore.get()")}}
  - : The `get()` method gets a single cookie with the given `name` or `options` object, it returns a {{jsxref("Promise")}} that resolves with details of a single cookie.
- {{domxref("CookieStore.getAll()")}}
  - : The `getAll()` method gets all matching cookies, it returns a {{jsxref("Promise")}} that resolves with a list of cookies.
- {{domxref("CookieStore.set()")}}
  - : The `set()` method sets a cookie with the given `name` and `value` or `options` object, it returns a {{jsxref("Promise")}} that resolves when the cookie is set.

## Events

- {{domxref("CookieStore.change_event", "change")}}
  - : The `change` event fires when a change is made to any cookie.

## Examples

### Setting cookies

The following example sets cookie by passing a `name` and `value` and then by setting an options value.

```html hidden
<button id="showCookies" type="button">Show cookies</button>
<button id="reset" type="button">Reset</button>
<pre id="log"></pre>
```

```css hidden
#log {
  height: 280px;
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

The example code sets two cookies, the first using `name` and `value` parameters, and the second using an "options" object with `name`, `value`, `expires`, and `partitioned` properties set.

The {{apiref("CookieStore.get()")}} method is then used to get the cookies, which are then logged.

```js
async function cookieTest() {
  // Set a cookie passing name and value
  await cookieStore.set({
    name: "cookie1",
    value: `cookie1-value`,
  });

  // Set a cookie passing an options object
  const day = 24 * 60 * 60 * 1000;
  await cookieStore.set({
    name: "cookie2",
    value: `cookie2-value`,
    expires: Date.now() + day,
    partitioned: true,
  });

  // Get named cookies and log their properties
  const cookie1 = await cookieStore.get("cookie1");
  logCookie("cookie1", cookie1);

  const cookie2 = await cookieStore.get("cookie2");
  logCookie("cookie2", cookie2);
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

Press **Show cookies** to set the cookies and then display them in the log below
Note that some browsers will only display the `name` and `value`, while others will display all the properties of the cookie.
Even if the values are not displayed, they are still set.

{{EmbedLiveSample('Setting cookies', 100, 350)}}

### Getting cookies

The following example shows how you can get a particular cookie using {{domxref("CookieStore.get()")}} or all cookies using {{domxref("CookieStore.getAll()")}}.

```html hidden
<button id="showCookies" type="button">Show cookies</button>
<button id="reset" type="button">Reset</button>
<pre id="log"></pre>
```

```css hidden
#log {
  height: 550px;
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

The example code first sets a number of cookies that we'll use for demonstrating the get methods.

First it creates `cookie1` and `cookie2` using the {{domxref("CookieStore.set()")}} method.
Then it creates a couple of using the older synchronous {{domxref("Document.cookie")}} property (just so we can show that these are also fetched using our get methods)

The code then uses {{domxref("CookieStore.get()")}} to fetch "cookie1" and log its properties and {{domxref("CookieStore.getAll()")}} (without arguments) to fetch all cookies in the current context.

```js
async function cookieTest() {
  // Set a cookie passing name and value
  await cookieStore.set({
    name: "cookie1",
    value: `cookie1-value`,
  });

  // Set a cookie passing an options object
  const day = 24 * 60 * 60 * 1000;
  await cookieStore.set({
    name: "cookie2",
    value: `cookie2-value`,
    expires: Date.now() + day,
    partitioned: true,
  });

  // Set cookie using document.cookie
  // (to demonstrate these are are fetched too)
  document.cookie = "favorite_food=tripe; SameSite=None; Secure";

  // Get named cookie and log properties
  const cookie1 = await cookieStore.get("cookie1");
  logCookie("cookie1", cookie1);

  // Get all cookies and log each
  const cookies = await cookieStore.getAll();
  if (cookies.length > 0) {
    log(`\ngetAll(): ${cookies.length}:`);
    cookies.forEach((cookie) => logCookie(cookie.value, cookie));
  } else {
    log("Cookies not found");
  }
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

Press **Show cookies** to set the cookies and then display them in the log below.

{{EmbedLiveSample('Getting cookies', 100, 640)}}

### Delete a named cookie

In this example, a cookie is deleted by passing its name to the `delete()` method.

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

function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js hidden
// List cookies
async function getCookieNames() {
  let names = "";
  const cookies = await cookieStore.getAll();
  if (cookies.length > 0) {
    cookies.forEach((cookie) => (names += `${cookie.name} `));
  }
  return names;
}
```

#### JavaScript

The code first sets two cookies (which we then use to demonstrate deletion).

We then list the names of both cookies (code for getting the cookie names not shown), delete one of the cookies, and then list all cooking names again.

```js
async function cookieTest() {
  // Set two cookies
  await cookieStore.set({
    name: "cookie1",
    value: `cookie1-value`,
  });

  await cookieStore.set({
    name: "cookie2",
    value: `cookie2-value`,
  });

  // Log cookie names
  log(`Initial cookies: ${await getCookieNames()}`);

  // Delete cookie1
  await cookieStore.delete("cookie1");

  // Log cookie names again (to show cookie1 deleted)
  log(`Cookies after deleting cookie1: ${await getCookieNames()}`);
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

Press **Show cookies** to run the code above.
This should show that the deleted cookie is present in the first list, and not in the second.

{{EmbedLiveSample('Delete a named cookie', 100, 190)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

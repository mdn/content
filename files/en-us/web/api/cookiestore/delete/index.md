---
title: "CookieStore: delete() method"
short-title: delete()
slug: Web/API/CookieStore/delete
page-type: web-api-instance-method
browser-compat: api.CookieStore.delete
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

The **`delete()`** method of the {{domxref("CookieStore")}} interface deletes a cookie with the given `name` or `options` object. The `delete()` method expires the cookie by changing the date to one in the past.

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
  - : Thrown if deleting the cookie represented by the given `name` or `options` fails.

## Examples

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

The code first sets two cookies.
We then list the names of both cookies (code for getting the cookie names not shown), delete one of the cookies, and then list all cookie names again.

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

---
title: "CookieStore: delete() method"
short-title: delete()
slug: Web/API/CookieStore/delete
page-type: web-api-instance-method
browser-compat: api.CookieStore.delete
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

The **`delete()`** method of the {{domxref("CookieStore")}} interface deletes a cookie that matches the given `name` or `options` object.
The method expires the cookie by changing its date to one in the past.

Note that there is no error if a cookie cannot be matched: the returned promise will fulfill when the matched cookie is deleted or if no cookie is matched.

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

A {{jsxref("Promise")}} that resolves with {{jsxref("undefined")}} when the deletion operation completes or no cookie is matched.

### Exceptions

- `SecurityError` {{domxref("DOMException")}}
  - : Thrown if the origin can not be {{glossary("Serialization", "serialized")}} to a URL.
- {{jsxref("TypeError")}}
  - : Thrown if a cookie that matches a given `name` or `options` cannot be deleted.

## Examples

<!-- The examples don't work as live examples in MDN environment (due to unknown errors) -->

### Delete a named cookie

This example shows how a cookie can be deleted by passing its name to the `delete()` method.

This will work if the cookie to be deleted matches the cookie name and the default values of the [`options`](#options) above.
This will be the case if the cookie was {{domxref("CookieStore/set","set()")}} using the just a name and value, but may not be if the cookie was created with options or using {{domxref("Document.cookie")}}.

The code first defines `setTestCookies()` which creates some test cookies and logs their names.

```js
async function setTestCookies() {
  // Set two cookies
  try {
    await cookieStore.set("cookie1", "cookie1-value");
  } catch (error) {
    console.log(`Error setting cookie1: ${error}`);
  }

  try {
    await cookieStore.set("cookie2", "cookie2-value");
  } catch (error) {
    console.log(`Error setting cookie2: ${error}`);
  }

  // Log cookie names
  const cookieNames = (await cookieStore.getAll())
    .map((cookie) => cookie.name)
    .join(" ");
  console.log(`Initial cookies: ${cookieNames}`);
}
```

The `cookieTest()` method calls `setTestCookies()`.
It then deletes "cookie1" that we just created, and lists all cookie names again.

```js
async function cookieTest() {
  // Create our test cookies
  await setTestCookies();

  // Delete cookie1
  try {
    await cookieStore.delete("cookie1");
  } catch (error) {
    console.log(`Error deleting cookie1: ${error}`);
  }

  // Log cookie names again (to show cookie1 deleted)
  const cookieNames = (await cookieStore.getAll())
    .map((cookie) => cookie.name)
    .join(" ");
  console.log(
    `Cookies remaining after attempting to delete cookie1: ${cookieNames}`,
  );
}

cookieTest();
```

When run, the console log should initially show that both cookie1 and cookie2 are present, but cookie1 is not listed after it has been deleted.

### Delete a cookie with options

This example is almost identical to the previous one, except it demonstrates that the options must match those of the cookie to be deleted.

The code first defines `setTestCookies()`.
This creates two cookies with the `partitioned` property set to `true`, and logs their names.

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
    console.log(`Error setting cookie1: ${error}`);
  }

  try {
    await cookieStore.set({
      name: "cookie2",
      value: `cookie2-value`,
      partitioned: true,
    });
  } catch (error) {
    console.log(`Error setting cookie2: ${error}`);
  }

  // Log cookie names
  const cookieNames = (await cookieStore.getAll())
    .map((cookie) => cookie.name)
    .join(" ");
  console.log(`Initial cookies: ${cookieNames}`);
}
```

The `cookieTest()` method calls `setTestCookies()`.
It then attempts to delete the cookies named "cookie1", specifying its name, and "cookie2" specifying its name and `partitioned: true`.
The method then lists the cookie names again.

```js
async function cookieTest() {
  // Create our test cookies
  await setTestCookies();

  // Delete cookie1 specifying just the name
  try {
    await cookieStore.delete("cookie1");
  } catch (error) {
    console.log(`Error deleting cookie1: ${error}`);
  }

  // Delete cookie2, setting partitioned to true
  try {
    await cookieStore.delete({
      name: "cookie2",
      partitioned: true,
    });
  } catch (error) {
    console.log(`Error deleting cookie2: ${error}`);
  }

  // Log cookie names again (to show cookie1 deleted)
  cookieNames = (await cookieStore.getAll())
    .map((cookie) => cookie.name)
    .join(" ");
  console.log(
    `Cookies remaining after attempted deletions (cookie2 should be deleted): ${cookieNames}`,
  );
}

cookieTest();
```

When run, the console log should show that both "cookie1" and "cookie2" are present initially, but "cookie2" is not listed afterwards.
The cookie named "cookie1" is still present because it does not match the cookies specified in the `delete()` call.

> [!NOTE]
> The deletion silently fails if no cookie is matched.

### Delete cookies created using document.cookies

Deleting a cookie that was created using {{domxref("document.cookie")}} has the same requirements as deleting a cookie created using {{domxref("CookieStore.set()")}}: the cookie either needs to match the passed `options`, or the `name` and the default options.

> [!NOTE]
> Cookies created with `set()` always have a [default path](/en-US/docs/Web/HTTP/Guides/Cookies#define_where_cookies_are_sent) of `/`, while cookies created with `document.cookie` have a default path equal to the path of the document they are created in.
> Therefore when deleting cookies created with `document.cookie`, you can't assume they have the path `/` (unless it was been explicitly set as such), and hence that it will match the default `delete()` options.

The code below uses `document.cookie` to create cookies named "doc_cookie1" and "doc_cookie2", with the paths `/some_path` and `/` respectively, and then logs both cookies.
The code then deletes both cookies without specifying a `path` match option, and lists the cookies again.

```js
async function cookieTest() {
  // Create doc_cookie1 with path /some_path
  document.cookie =
    "doc_cookie1=doc_cookie1_name; SameSite=None; Secure; max-age=10; path='/some_path'";

  // Create doc_cookie2 with path / (the CookieStore.set() default)
  document.cookie =
    "doc_cookie2=doc_cookie2_name; SameSite=None; Secure; max-age=10; path=/";

  // Log cookie names
  let cookieNames = (await cookieStore.getAll())
    .map((cookie) => cookie.name)
    .join(" ");
  console.log(`Initial cookies: ${cookieNames}`);

  // Delete doc_cookie1 (should fail)
  try {
    await cookieStore.delete("doc_cookie1");
  } catch (error) {
    console.log(`Error deleting doc_cookie1: ${error}`);
  }

  // Delete doc_cookie2 (should succeed)
  try {
    await cookieStore.delete("doc_cookie2");
  } catch (error) {
    console.log(`Error deleting cookie2: ${error}`);
  }

  // Log cookie names again (to show cookie1 deleted)
  cookieNames = (await cookieStore.getAll())
    .map((cookie) => cookie.name)
    .join(" ");
  console.log(
    `Cookies remaining after attempted deletions (doc_cookie2 should be deleted): ${cookieNames}`,
  );
}

cookieTest();
```

When run, the first log should show that both cookies are present.
The second log should not include "doc_cookie2", as it should have matched and been deleted.
It should include "doc_cookie1" because `/some_path` will not match the default deletion path (`/`).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

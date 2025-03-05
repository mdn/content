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
  cookieNames = (await cookieStore.getAll())
    .map((cookie) => cookie.name)
    .join(" ");
  console.log(`Cookies after deleting cookie1: ${cookieNames}`);
}

cookieTest();
```

When run, the console log should show that both cookie1 and cookie2 are present initially, but cookie1 is not listed after it has been deleted.

The code can be tested by copying it into a test harness and running it with a [local server](/en-US/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server), or deploying it to a website site such as GitHub pages.

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
    console.log(`Error deleting cookie2: ${error}`);
  }

  // Log cookie names again (to show cookie1 deleted)
  cookieNames = (await cookieStore.getAll())
    .map((cookie) => cookie.name)
    .join(" ");
  console.log(`Cookies after deleting cookie1: ${cookieNames}`);
}

cookieTest();
```

When run, the console log should show that both "cookie1" and "cookie2" are present initially, but "cookie2" is not listed afterwards.
The cookie named "cookie1" is still present because it does not match the cookies specified in the `delete()` call.

> [!NOTE]
> The deletion silently fails if the cookies to be deleted does not match.

The code can be tested by copying it into a test harness and running it with a [local server](/en-US/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server), or deploying it to a website site such as GitHub pages.

### Delete cookies created using document.cookies

This example shows how we can use `delete()` to remove a cookie created using {{domxref("document.cookie")}}.

A potential issue is that cookies created with `document.cookie` have a default path equal to the path of the document they are created in (unlike cookies created with {{domxref("CookieStore.set()")}}, which have a default [`path`](#path) of `/`).
In order to be able to know the path later when we match the cookie, we can explicitly set the value when creating the cookie.

> [!NOTE]
> On some browsers you could read the path and other properties from {{domxref("CookieStore.get()")}} or {{domxref("CookieStore.getAll()")}}.
> This does not work on Firefox.

The example code below first creates two cookies "doc_cookie1" and "doc_cookie2" using `document.cookie` and logs their names.

The first cookie uses the default path, which will depend on where the cookies is deployed, while the second sets the path to `/`.
The code then deletes both cookies without specifying a `path` match option, and lists the cookies again.

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

cookieTest();
```

When run, the console log should show that both "doc_cookie1" and "doc_cookie2" are present initially.
Afterwards `doc_cookie2` should not be present: it will have been deleted because its path matches the default path used by `delete()`.
The cookie `doc_cookie2` will be removed if the code is run from a page in the root, but otherwise will not match the path, and hence not be removed.

The code can be tested by copying it into a test harness and running it with a [local server](/en-US/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server), or deploying it to a website site such as GitHub pages.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

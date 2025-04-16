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
  - : The `delete()` method deletes a cookie with the given `name` or `options` object.
    It returns a {{jsxref("Promise")}} that resolves when the deletion completes or if no cookies are matched.
- {{domxref("CookieStore.get()")}}
  - : The `get()` method gets a single cookie with the given `name` or `options` object.
    It returns a {{jsxref("Promise")}} that resolves with details of a single cookie.
- {{domxref("CookieStore.getAll()")}}
  - : The `getAll()` method gets all matching cookies.
    It returns a {{jsxref("Promise")}} that resolves with a list of cookies.
- {{domxref("CookieStore.set()")}}
  - : The `set()` method sets a cookie with the given `name` and `value` or `options` object.
    It returns a {{jsxref("Promise")}} that resolves when the cookie is set.

## Events

- {{domxref("CookieStore.change_event", "change")}}
  - : The `change` event fires when a change is made to any cookie.

## Examples

The examples below can be tested by copying the code into a test harness and running it with a [local server](/en-US/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server), or deploying it to a website site such as GitHub pages.

<!-- The examples don't work as live examples in MDN environment (due to unknown errors) -->

### Setting cookies

This example shows how to set cookies by passing a `name` and `value`, and by setting an `options` value.

The `cookieTest()` method sets one cookie with `name` and `value` properties and another with `name`, `value`, and `expires` properties.
We then use the {{domxref("CookieStore.get()")}} method to get each of the cookies, which are then logged.

```js
async function cookieTest() {
  // Set cookie: passing name and value
  try {
    await cookieStore.set("cookie1", "cookie1-value");
  } catch (error) {
    console.log(`Error setting cookie1: ${error}`);
  }

  // Set cookie: passing options
  const day = 24 * 60 * 60 * 1000;

  try {
    await cookieStore.set({
      name: "cookie2",
      value: "cookie2-value",
      expires: Date.now() + day,
      partitioned: true,
    });
  } catch (error) {
    log(`Error setting cookie2: ${error}`);
  }

  // Get named cookies and log their properties
  const cookie1 = await cookieStore.get("cookie1");
  console.log(cookie1);

  const cookie2 = await cookieStore.get("cookie2");
  console.log(cookie2);
}

cookieTest();
```

### Getting cookies

This example shows how you can get a particular cookie using {{domxref("CookieStore.get()")}} or all cookies using {{domxref("CookieStore.getAll()")}}.

The example code first sets three cookies that we'll use for demonstrating the get methods.
First it creates `cookie1` and `cookie2` using the {{domxref("CookieStore.set()")}} method.
Then it creates a third cookie using the older synchronous {{domxref("Document.cookie")}} property (just so we can show that these are also fetched using the `get()` and `getAll()` methods).

The code then uses {{domxref("CookieStore.get()")}} to fetch "cookie1" and log its properties, and {{domxref("CookieStore.getAll()")}} (without arguments) to fetch all cookies in the current context.

```js
async function cookieTest() {
  // Set a cookie passing name and value
  try {
    await cookieStore.set("cookie1", "cookie1-value");
  } catch (error) {
    console.log(`Error setting cookie1: ${error}`);
  }

  // Set a cookie passing an options object
  const day = 24 * 60 * 60 * 1000;
  try {
    await cookieStore.set({
      name: "cookie2",
      value: `cookie2-value`,
      expires: Date.now() + day,
      partitioned: true,
    });
  } catch (error) {
    console.log(`Error setting cookie2: ${error}`);
  }

  // Set cookie using document.cookie
  // (to demonstrate these are are fetched too)
  document.cookie = "favorite_food=tripe; SameSite=None; Secure";

  // Get named cookie and log properties
  const cookie1 = await cookieStore.get("cookie1");
  console.log(cookie1);

  // Get all cookies and log each
  const cookies = await cookieStore.getAll();
  if (cookies.length > 0) {
    console.log(`getAll(): ${cookies.length}:`);
    cookies.forEach((cookie) => console.log(cookie));
  } else {
    console.log("Cookies not found");
  }
}

cookieTest();
```

The example should log "cookie1" and all three cookies separately.
One thing to note is that the cookie created using {{domxref("Document.cookie")}} may have a different path than those created using {{domxref("CookieStore.set()","set()")}} (which defaults to `/`).

### Delete a named cookie

This example shows how to delete a named cookie using the {{domxref("CookieStore.delete()","delete()")}} method.

The code first sets two cookies and logs them to the console.
We then delete one of the cookies, and then list all cookies again.
The deleted cookie ("cookie1") is present in the first log array, and not in the second.

```js
async function cookieTest() {
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
  let cookieNames = (await cookieStore.getAll())
    .map((cookie) => cookie.name)
    .join(" ");
  console.log(`Initial cookies: ${cookieNames}`);

  // Delete cookie1
  await cookieStore.delete("cookie1");

  // Log cookies again (to show cookie1 deleted)
  cookieNames = (await cookieStore.getAll())
    .map((cookie) => cookie.name)
    .join(" ");
  console.log(
    `Cookies remaining after attempted deletions (cookie1 should be deleted): ${cookieNames}`,
  );
}

cookieTest();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

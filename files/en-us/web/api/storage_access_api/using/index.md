---
title: Using the Storage Access API
slug: Web/API/Storage_Access_API/Using
page-type: guide
---

{{DefaultAPISidebar("Storage Access API")}}

The [Storage Access API](/en-US/docs/Web/API/Storage_Access_API) can be used by embedded cross-site documents to verify whether they have access to [third-party cookies](/en-US/docs/Web/Privacy/Third-party_cookies) and [unpartitioned state](/en-US/docs/Web/Privacy/State_Partitioning#state_partitioning) and, if not, to request access. We'll briefly look at a common storage access scenario.

> [!NOTE]
> When we talk about third-party cookies in the content of the Storage Access API, we implicitly mean [_unpartitioned_](/en-US/docs/Web/API/Storage_Access_API#unpartitioned_versus_partitioned_cookies) third-party cookies.

## Usage notes

The Storage Access API is designed to allow embedded content to request access to third-party cookies and unpartitioned state — most modern browsers block such access by default to protect user privacy. Since embedded content won't know what a browser's behavior is going to be in this regard, it's best to always check whether the embedded {{htmlelement("iframe")}} has storage access before attempting to read or write a cookie. This is particularly true for {{domxref("Document.cookie")}} access, as browsers will often return an empty cookie jar when third-party cookie access is blocked.

In the example below, we show how an embedded cross-site {{htmlelement("iframe")}} can access third-party cookies and unpartitioned state under a browser storage access policy that would otherwise block access to them.

## Allowing a sandboxed \<iframe> to use the API

First of all, if the `<iframe>` is sandboxed, the embedding website needs to add the `allow-storage-access-by-user-activation` [sandbox token](/en-US/docs/Web/HTML/Element/iframe#sandbox) to allow Storage Access API requests to be successful, along with `allow-scripts` and `allow-same-origin` to allow it to execute a script to call the API and execute it in an origin that can have cookies and state:

```html
<iframe
  sandbox="allow-storage-access-by-user-activation
                 allow-scripts
                 allow-same-origin">
  …
</iframe>
```

## Checking and requesting storage access

Now on to the code executed inside the embedded document. In this code:

1. We first use feature detection (`if (document.hasStorageAccess) {}`) to check whether the API is supported. If not, we run our code that accesses cookies anyway, and hope that it works. It should be coded defensively to deal with such eventualities anyway.
2. If the API is supported, we call `document.hasStorageAccess()`.
3. If that call returns `true`, it means this {{htmlelement("iframe")}} has already obtained access, and we can run our code that accesses cookies and state right away.
4. If that call returns `false`, we then call {{domxref("Permissions.query()")}} to check whether permission to access third-party cookies and unpartitioned state has already been granted (i.e., to another same-site embed). We wrap this whole section in a [`try...catch`](/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) block because [some browsers don't support the `"storage-access"` permission](/en-US/docs/Web/API/Storage_Access_API#api.permissions.permission_storage-access), which can cause the `query()` call to throw. If it throws, we report that to the console and try running the cookie code anyway.
5. If the permission state is `"granted"`, we immediately call `document.requestStorageAccess()`. This call will automatically resolve, saving the user some time, then we can run our code that accesses cookies and state.
6. If the permission state is `"prompt"`, we call `document.requestStorageAccess()` after user interaction. This call may trigger a prompt to the user. If this call resolves, then we can run our code that accesses cookies and state.
7. If the permission state is `"denied"`, the user has denied our requests to access third-party cookies or unpartitioned state, and our code cannot use them.

```js
function doThingsWithCookies() {
  document.cookie = "foo=bar"; // set a cookie
}

function doThingsWithLocalStorage(handle) {
  handle.localStorage.setItem("foo", "bar"); // set a local storage key
}

async function handleCookieAccess() {
  if (!document.hasStorageAccess) {
    // This browser doesn't support the Storage Access API
    // so let's just hope we have access!
    doThingsWithCookies();
  } else {
    const hasAccess = await document.hasStorageAccess();
    if (hasAccess) {
      // We have access to third-party cookies, so let's go
      doThingsWithCookies();
      // If we want to modify unpartitioned state, we need to request a handle.
      const handle = await document.requestStorageAccess({
        localStorage: true,
      });
      doThingsWithLocalStorage(handle);
    } else {
      // Check whether third-party cookie access has been granted
      // to another same-site embed
      try {
        const permission = await navigator.permissions.query({
          name: "storage-access",
        });

        if (permission.state === "granted") {
          // If so, you can just call requestStorageAccess() without a user interaction,
          // and it will resolve automatically.
          const handle = await document.requestStorageAccess({
            cookies: true,
            localStorage: true,
          });
          doThingsWithLocalStorage(handle);
          doThingsWithCookies();
        } else if (permission.state === "prompt") {
          // Need to call requestStorageAccess() after a user interaction
          btn.addEventListener("click", async () => {
            try {
              const handle = await document.requestStorageAccess({
                cookies: true,
                localStorage: true,
              });
              doThingsWithLocalStorage(handle);
              doThingsWithCookies();
            } catch (err) {
              // If there is an error obtaining storage access.
              console.error(`Error obtaining storage access: ${err}.
                            Please sign in.`);
            }
          });
        } else if (permission.state === "denied") {
          // User has denied third-party cookie access, so we'll
          // need to do something else
        }
      } catch (error) {
        console.log(`Could not access permission state. Error: ${error}`);
        doThingsWithCookies(); // Again, we'll have to hope we have access!
      }
    }
  }
}
```

> **Note:** `requestStorageAccess()` requests are automatically denied unless the embedded content is currently processing a user gesture such as a tap or click ({{Glossary("transient activation")}}), or if permission was already granted previously. If permission was not previously granted, `requestStorageAccess()` requests must be run inside a user gesture-based event handler, as shown above.

### Related website sets

The Chrome-only [related website sets](/en-US/docs/Web/API/Storage_Access_API/Related_website_sets) feature can be considered a progressive enhancement mechanism that works alongside the Storage Access API — supporting browsers grant default third-party cookie and unpartitioned state access between websites in the same set. This means not having to go through the usual user permission prompt workflow described above, meaning a more user-friendly experience for users of sites in the set.

## Requesting storage access from the top-level site on behalf of embedded resources

The Storage Access API features above allow an embedded document to request its own third-party cookie access. There is an additional experimental method available, {{domxref("Document.requestStorageAccessFor()")}}, a proposed extension to the Storage Access API that allows top-level sites to request storage access on behalf of specific related origins.

The `requestStorageAccessFor()` method addresses challenges in adopting the Storage Access API on top-level sites that use cross-site images or scripts requiring cookies. It can enable third-party cookie access for cross-site resources directly embedded into the top-level site that are unable to request their own storage access, for example via {{htmlelement("img")}} or {{htmlelement("script")}} elements.

For `requestStorageAccessFor()` to work, both the calling top-level page and the embedded resource it is requesting storage access for need to be part of the same [related website set](/en-US/docs/Web/API/Storage_Access_API/Related_website_sets).

Typical usage of `requestStorageAccessFor()` looks like this (this time written in regular promise-style rather than async/await):

```js
navigator.permissions
  .query({
    name: "top-level-storage-access",
    requestedOrigin: "https://example.com",
  })
  .then((permission) => {
    if (permission.state === "granted") {
      // Permission has already been granted
      // No need to call requestStorageAccessFor() again, just start using cookies
      doThingsWithCookies();
    } else if (permission.state === "prompt") {
      // Need to call requestStorageAccessFor() after a user interaction
      btn.addEventListener("click", () => {
        // Request storage access
        rSAFor();
      });
    } else if (permission.state === "denied") {
      // User has denied third-party cookie access, so we'll
      // need to do something else
    }
  });

function rSAFor() {
  if ("requestStorageAccessFor" in document) {
    document.requestStorageAccessFor("https://example.com").then(
      (res) => {
        doThingsWithCookies();
      },
      (err) => {
        // Handle errors
      },
    );
  }
}
```

> [!NOTE]
> Unlike with `requestStorageAccess()`, Chrome doesn't check for an interaction in a top-level document within the last 30 days when `requestStorageAccessFor()` is called because the user is already on the page. See [Browser-specific variations > Chrome](/en-US/docs/Web/API/Storage_Access_API#chrome) for more details of this behavior.

When querying permission status for storage access requests made on behalf of another origin, the permission name used is different from the rest of the Storage Access API: `"top-level-storage-access"` rather than `"storage-access"`. In the above code, we use the following call:

```js
navigator.permissions.query({
  name: "top-level-storage-access",
  requestedOrigin: "https://example.com",
});
```

to discover if the origin has previously been granted permission or if cookie access still needs to be requested.

- If the permission status is `"granted"` we can start using cookies; `requestStorageAccessFor()` was already called, so there is no need to call it again.
- If the permission status is `"prompt"` we need to call `document.requestStorageAccessFor("https://example.com")` from within a user gesture, such as a button click.

After the `"top-level-storage-access"` permission is granted, cross-site requests will include cookies if they include [CORS](/en-US/docs/Web/HTTP/CORS) / [`crossorigin`](/en-US/docs/Web/HTML/Attributes/crossorigin), so sites may want to wait before triggering a request. Such requests must use the [`credentials: "include"`](/en-US/docs/Web/API/RequestInit#credentials) option and resources must include the `crossorigin="use-credentials"` attribute.

For example:

```js
function checkCookie() {
  fetch("https://example.com/getcookies.json", {
    method: "GET",
    credentials: "include",
  })
    .then((response) => response.json())
    .then((json) => {
      // Do something
    });
}
```

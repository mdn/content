---
title: Using the Storage Access API
slug: Web/API/Storage_Access_API/Using
page-type: guide
---

{{DefaultAPISidebar("Storage Access API")}}

The [Storage Access API](/en-US/docs/Web/API/Storage_Access_API) can be used by embedded cross-site documents to verify whether they have access to unpartitioned cookies and, if not, to request access. We'll briefly look at a common storage access scenario.

## Usage notes

The Storage Access API is designed to allow embedded content to request access to unpartitioned cookies — most modern browsers block such access by default to protect user privacy. Since embedded content won't know what a browser's behavior is going to be in this regard, it's best to always check whether the embedded {{htmlelement("iframe")}} has storage access before attempting to read or write a cookie. This is particularly true for {{domxref("Document.cookie")}} access, as browsers will often return an empty cookie jar when third-party cookie access is blocked.

In the example below, we show how an embedded cross-site {{htmlelement("iframe")}} can access unpartitioned cookies under a browser storage access policy that blocks third-party cookie access.

## Allowing a sandboxed \<iframe> to use the API

First of all, if the `<iframe>` is sandboxed, the embedding website needs to add the `allow-storage-access-by-user-activation` [sandbox token](/en-US/docs/Web/HTML/Element/iframe#sandbox) to allow Storage Access API requests to be successful, along with `allow-scripts` and `allow-same-origin` to allow it to execute a script to call the API and execute it in an origin that can have cookies:

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
3. If that call returns `true`, it means this {{htmlelement("iframe")}} has already obtained access, and we can run our code that accesses cookies right away.
4. If that call returns `false`, we then call {{domxref("Permissions.query()")}} to check whether permission to access unpartitioned cookies has already been granted (i.e. to another same-site embed). We wrap this whole section in a [`try...catch`](/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) block because some browsers don't support the `"storage-access"` permission, which can cause the `query()` call to throw. If it throws, we report that to the console and try running the cookie code anyway.
5. If the permission state is `"granted"`, we immediately call `document.requestStorageAccess()`. This call will automatically resolve, saving the user some time, then we can run our code that accesses cookies.
6. If the permission state is `"prompt"`, we call `document.requestStorageAccess()` after user interaction. This call may trigger a prompt to the user. If this call resolves, then we can run our code that accesses cookies.
7. If the permission state is `"denied"`, the user has denied our requests to access unpartitioned cookies, and our code cannot make use of them.

```js
function doThingsWithCookies() {
  document.cookie = "foo=bar"; // set a cookie
}

async function handleCookieAccess() {
  if (document.hasStorageAccess) {
    // This browser doesn't support the Storage Access API
    // so let's just hope we have access!
    doThingsWithCookies();
  } else {
    const hasAccess = await document.hasStorageAccess();
    if (hasAccess) {
      // We have access to unpartitioned cookies, so let's go
      doThingsWithCookies();
    } else {
      // Check whether unpartitioned cookie access has been granted
      // to another same-site embed
      try {
        const permission = await navigator.permissions.query({
          name: "storage-access",
        });

        if (permission.state === "granted") {
          // If so, you can just call requestStorageAccess() without a user interaction,
          // and it will resolve automatically.
          await document.requestStorageAccess();
          doThingsWithCookies();
        } else if (permission.state === "prompt") {
          // Need to call requestStorageAccess() after a user interaction
          btn.addEventListener("click", async () => {
            try {
              await document.requestStorageAccess();
              doThingsWithCookies();
            } catch (err) {
              // If there is an error obtaining storage access.
              console.error(`Error obtaining storage access: ${err}.
                            Please sign in.`);
            }
          });
        } else if (permission.state === "denied") {
          // User has denied unpartitioned cookie access, so we'll
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

> **Note:** `requestStorageAccess()` requests are automatically denied unless the embedded content is currently processing a user gesture such as a tap or click ({{Glossary("transient activation")}}), or if permission was already granted previously. If permission was not previously granted, they need to be run inside some kind of user gesture-based event handler, as shown above.

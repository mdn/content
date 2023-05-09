---
title: Using the Storage Access API
slug: Web/API/Storage_Access_API/Using
page-type: guide
---

{{DefaultAPISidebar("Storage Access API")}}

The [Storage Access API](/en-US/docs/Web/API/Storage_Access_API) should be used by embedded cross-site documents to verify whether they have access to their first-party cookies and, if not, to request access. We'll briefly look at a common storage access scenario.

## Usage notes

The Storage Access API is designed to allow embedded content to request access to first-party cookies — most modern browsers block such access by default to protect user privacy. Since embedded content won't know what a browser's behavior is going to be in this regard, it's best to always check whether the embedded {{htmlelement("iframe")}} has storage access before attempting to read or write a cookie. This is particularly true for {{domxref("Document.cookie")}} access, as browsers will often return an empty cookie jar when third-party cookies are blocked.

In the example below, we show how an embedded cross-site {{htmlelement("iframe")}} can access a user's cookies under a storage access policy that blocks third-party cookies.

## Allowing a sandboxed \<iframe> to use the API

First of all, if the `<iframe>` is sandboxed, the embedding website needs to add the `allow-storage-access-by-user-activation` [sandbox token](/en-US/docs/Web/HTML/Element/iframe#sandbox) to allow Storage Access API requests to be successful, along with `allow-scripts` and `allow-same-origin` to allow it to execute a script to call the API and execute it in an origin that can have cookies:

```html
<iframe sandbox="allow-storage-access-by-user-activation
                 allow-scripts
                 allow-same-origin">
  …
</iframe>
```

## Checking and requesting storage access

Now on to the code executed inside the embedded document. In this code:

1. We first use feature detection (`if (document.hasStorageAccess === null) {}`) to check whether the API is supported. If not, we run our code that uses first-party cookie access anyway, and hope that it works. It should be coded defensively to deal with such eventualities anyway.
2. If the API is supported, we call {{domxref("Permissions.query()")}} to check whether permission to use the Storage Access API has already been granted. If so, we can just call `requestStorageAccess()` without a user interaction to opt in to access to first-party cookies and it will resolve automatically, saving the user some time.
3. If storage access has not been granted, we call {{domxref("Document.hasStorageAccess()")}}.
4. If that call returns `true`, it means that the embedded code already has access, so we can run our code that uses first-party cookie access right away.
5. If that call returns `false`, we can then call {{domxref("Document.requestStorageAccess()")}} in a user interaction, returning the result so that then we can chain it onto the previous promise call. In the final `then`, we'll have first-party cookie access.

```js
function doThingsWithFirstPartyStorageAccess() {
  // Let's access an item from the first-party cookie jar
  document.cookie = "foo=bar"; // set a cookie
}

if (document.hasStorageAccess === null) {
  // This browser doesn't support the Storage Access API
  // so let's just hope we have access!
  doThingsWithFirstPartyStorageAccess();
} else {
  // First use permissions.query() to check whether storage access
  // has already been granted
  navigator.permissions.query({ name: "storage-access" }).then((result) => {
    if (result.state === "granted") {
      // If so, you can just call requestStorageAccess() without a user interaction,
      // and it will resolve automatically.
      document
        .requestStorageAccess()
        .then(() => {
          doThingsWithFirstPartyStorageAccess();
        })
    } else {
      document.hasStorageAccess().then((hasAccess) => {
        if (hasAccess) {
          // We already have access, so let's do things right away!
          doThingsWithFirstPartyStorageAccess();
        } else {
          // As we don't have access, we need to request it. This request has
          // to happen within an event handler for a user interaction (e.g., clicking)
          btn.addEventListener("click", () => {
            document
              .requestStorageAccess()
              .then(() => {
                doThingsWithFirstPartyStorageAccess();
              })
              .catch((err) => {
                // If there is an error obtaining storage access.
                console.error(`Error obtaining storage access: ${err}.
                               Please sign in.`);
              });
          });
        }
      });
    }
  });
}
```

> **Note:** `requestStorageAccess()` requests are automatically denied unless the embedded content is currently processing a user gesture such as a tap or click ({{Glossary("transient activation")}}). They therefore need to be run inside some kind of user gesture-based event handler, as shown above

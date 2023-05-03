---
title: Storage Access API
slug: Web/API/Storage_Access_API
page-type: web-api-overview
browser-compat:
  - api.Document.hasStorageAccess
  - api.Document.requestStorageAccess
---

{{DefaultAPISidebar("Storage Access API")}}

The Storage Access API provides a way for cross-origin content loaded in a third-party context (i.e. embedded in an {{htmlelement("iframe")}}) to gain access to client-side storage that it would normally only have access to in a first-party context (i.e. when loaded directly in a browser tab; we refer to this as an origin's _first-party_ storage).

This is relevant to user agents that by default block access to client-side storage by sites loaded in a third-party context to improve privacy (e.g. to prevent tracking). There are legitimate uses of first-party client-side storage access by third-party content that we still want to enable, even with these default restrictions in place. Examples include SSO with federated IdPs, or persisting user details across different sites such as location data or viewing preferences.

The API provides methods that allow embedded resources to check whether they currently have access to their first-party client-side storage, and to request access to their first-party storage from the user agent.

> **Note:** Bear in mind that when we say "first-party client-side storage" in this documentation, we are basically talking about access to cookies. We have however written it with a more generic focus, as it may be useful for other forms of client-side storage in the future.

## Concepts and usage

Most browsers implement a number of storage access features and policies that restrict access to cookies and site data for embedded, cross-origin resources. These range from giving embedded resources under each top-level origin a unique storage space (see for example [Cookies Having Independent Partitioned State (CHIPS)](/en-US/docs/Web/Privacy/Partitioned_cookies)) to outright blocking of storage access when resources are loaded in a third-party context.

The semantics around third-party cookie blocking features/policies differ from browser to browser, but the core functionality is similar: cross-origin resources embedded in a third-party context are not given access to the same cookies and site storage that they would have access to when loaded in a first-party context. This is done with good intent — browser vendors want to take steps to better protect their user's privacy and security, for example leaving them less open to having their activity tracked across different sites, and less vulnerable to exploits such as cross-site request forgery ({{glossary("CSRF")}}).

However, there are legitimate uses for embedded cross-origin content accessing its first-party storage, which the above features/policies are known to break. As an example, federated logins often require access to authentication cookies stored in first-party storage, and will require the user to sign in on each site separately (or completely break) if those cookies are not available. As a result, site owners often encourage users to add their site as an exception or to disable such policies entirely. Users who wish to continue to interact with embedded content are forced to greatly relax their blocking policy for resources loaded from all embedded origins and possibly across all websites.

The Storage Access API is intended to solve this problem; embedded cross-origin content can request unrestricted access to its first-party storage on a frame-by-frame basis, for a particular top-level embedding site, via the {{domxref("Document.requestStorageAccess()")}} method. It can also check whether it already has access via the {{domxref("Document.hasStorageAccess()")}} method.

## How it works

As explained above, modern browsers implement various features and policies to restrict or block access to first-party storage by embedded content. Such content that has a legitimate need for first-party storage access can get around this problem as follows:

1. It can call the {{domxref("Document.hasStorageAccess()")}} method to check whether it has the access it needs already.
2. If not, it can request access via the {{domxref("Document.requestStorageAccess()")}} method.
3. Depending on the browser, the user will be asked whether to grant storage access to the requesting embed in slightly differing ways.
   - Safari shows prompts for all embedded tracking content that has not previously received storage access.
   - Firefox only prompts users after a tracking origin has requested storage access on more than a threshold number of sites.
   - At the time of writing, Chrome doesn't prompt the user. Instead, it only resolves <code>requestStorageAccess()</code> calls that come from domains within a <a href='https://developer.chrome.com/docs/privacy-sandbox/first-party-sets/'>first-party set</a>. This behavior will change as the implementation is developed further.
4. Access is granted or denied based on whether the content meets all the security requirements (see [Security measures](#security_measures), below). The {{jsxref("Promise")}}-based nature of `requestStorageAccess()` allows you to run code to handle success and failure cases.
   - Modern spec behavior dictates that access is granted **per-frame** — every separate content embed has its access blocked by default, and needs to call `requestStorageAccess()` to opt in to access. If a content embed has received access, and same-site embeds then call `requestStorageAccess()`, their promises will fulfill automatically. But they still need to opt in.
   - In older versions of the spec, the access was **per-page**. As soon as one embed received storage access via `requestStorageAccess()`, all other same-site embeds would automatically receive storage access. This was not desirable behavior from a security standpoint — if `shop.example.com` embedded `locator.users.com` to allow users to use their location info while shopping, and `locator.users.com` called `requestStorageAccess()`, `shop.example.com` and any other sites it embeds would be able to access its cookies, but also access cookies from `private.users.com`, which is not intended to be embedded. [Read more about the motivations](https://github.com/privacycg/storage-access/issues/113) behind this change.
   - Consult the [Browser compatibility information](#browser_compatibility) to see which browsers implement which behavior.
5. Once access is granted, a permission key is stored in the browser with the structure `<top-level site, embedded site>`. For example, if the embedding site is `embedder.com`, and the embed is `locator.example.com`, the key would be `<embedder.com, example.com>`. Same-site embeds (`docs.example.com`, `profile.example.com`, etc.) would then be able to call `requestStorageAccess()` and the promise would fulfill automatically, as mentioned earlier.
   - Older versions of the spec used the more specific permission key structure `<top-level site, embedded origin>`, which meant that same-site embeds didn't match the permission key and had to go through the whole process separately.
   - At the time of writing, only Chromium browsers had implemented the new behavior.

> **Note:** See [Using the Storage Access API](/en-US/docs/Web/API/Storage_Access_API/Using) for an implementation guide, with code examples.

> **Note:** The only exception to the "blocked by default" behavior is when a content embed makes a successful `requestStorageAccess()`, but then performs a same-origin navigation (for example reloading itself). In such cases, the storage access is carried over from the previous navigation.

## Security measures

There are a number of different related security measures that could cause a {{domxref("Document.requestStorageAccess()")}} call to fail. Check the below list if you are having trouble getting a request to work:

1. The call must be associated with a user gesture ({{Glossary("transient activation")}}) such as a tap or click. This prevents embedded content on the page from spamming the browser or user with excessive access requests.
2. The document and top-level document must not have a `null` origin.
3. Origins that have never been interacted with as a first party do not have a notion of first-party storage. From the user's perspective, they only have a third-party relationship with that origin. Access requests are automatically denied if the browser detects that the user hasn't interacted with the embedded content in a first-party context recently (in Firefox, "recently" is "within 30 days").
4. The document's window must be a [secure context](/en-US/docs/Web/Security/Secure_Contexts).
5. Sandboxed {{htmlelement("iframe")}}s cannot be granted storage access by default for security reasons. The API therefore also adds the `allow-storage-access-by-user-activation` [sandbox token](/en-US/docs/Web/HTML/Element/iframe#sandbox). The embedding website needs to add this to allow storage access requests to be successful, along with `allow-scripts` and `allow-same-origin` to allow it to call the API, and execute in an origin that can have cookies:

   ```html
   <iframe sandbox="allow-storage-access-by-user-activation
                   allow-scripts
                   allow-same-origin">
    …
   </iframe>
   ```

6. Usage of this feature may be blocked by a {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy) set on your server.
7. At the time of writing, Chrome only resolves <code>requestStorageAccess()</code> calls that come from domains within a <a href='https://developer.chrome.com/docs/privacy-sandbox/first-party-sets/'>first-party set</a>. This restriction is intended to be relaxed as the implementation is developed further.

> **Note:** The document may also be required to pass additional browser-specific checks. Examples: allowlists, blocklists, on-device classification, user settings, anti-[clickjacking](/en-US/docs/Glossary/Clickjacking) heuristics, or prompting the user for explicit permission.

## Browser storage access policy variations

Although the API surface is the same, websites using the Storage Access API should expect differences in the level and extent of storage access they receive between different browsers, due to differences in their storage access policies.

### Firefox

Design properties unique to Firefox are summarized here:

- If the embedded origin `tracker.example` has already obtained first-party storage access on the top-level origin `foo.example`, and the user visits a page from `foo.example` embedding a page from `tracker.example` again in less than 30 days, the embedded origin will have storage access immediately when loading.
- If an embedded page from `tracker.example` has previously successfully obtained storage access on top-level origin `foo.example`, all embedded subresources from `tracker.example` on `foo.example` (e.g. scripts, images, stylesheets, etc.) will load with access to their first-party storage, which means they may send Cookie headers and honor incoming {{httpheader("Set-Cookie")}} headers.
- In Firefox, when the promise returned from `requestStorageAccess()` is resolved, the embedded page will gain access to its entire first-party storage, not just cookies. This includes access to APIs such as [Web Storage](/en-US/docs/Web/API/Web_Storage_API), [IndexedDB](/en-US/docs/Web/API/IndexedDB_API), [DOM Cache](/en-US/docs/Web/API/Cache), and so on.
- The storage access grants are phased out after 30 calendar days passing.

Documentation for Firefox's new storage access policy for blocking tracking cookies includes [a detailed description](/en-US/docs/Web/Privacy/Storage_Access_Policy#storage_access_grants) of the scope of storage access grants.

### Safari

- The storage access grants are phased out after 30 days of browser usage passed without user interaction. Successful use of the storage access API resets this counter.

## API methods

- {{domxref("Document.hasStorageAccess()")}}
  - : Returns a {{jsxref("Promise")}} that resolves with a boolean value indicating whether the document has access to its first-party storage.
- {{domxref("Document.requestStorageAccess()")}}
  - : Returns a {{jsxref("Promise")}} that resolves if the access to first-party storage was granted, and rejects if access was denied.

> **Note:** User interaction propagates to the Promise returned by both of these methods, allowing the callers to take actions that require user interaction without requiring a second click from the user. For example, a caller could open a pop-up window from the resolved Promise without triggering Firefox's pop-up blocker.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Storage Access API](/en-US/docs/Web/API/Storage_Access_API/Using)
- [Introducing Storage Access API](https://webkit.org/blog/8124/introducing-storage-access-api/) (WebKit blog)

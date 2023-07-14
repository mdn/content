---
title: Storage Access API
slug: Web/API/Storage_Access_API
page-type: web-api-overview
browser-compat:
  - api.Document.hasStorageAccess
  - api.Document.requestStorageAccess
---

{{DefaultAPISidebar("Storage Access API")}}

The Storage Access API provides a way for cross-site content loaded in a third-party context (i.e. embedded in an {{htmlelement("iframe")}}) to gain access to _unpartitioned cookies_ that it would normally only have access to in a first-party context (i.e. when loaded directly in a browser tab).

> **Note:** When we say _unpartitioned cookies_, we are talking about cookies stored in the traditional way they have historically been stored since the early web — all cookies set on the same site are stored in the same cookie jar. This is in contrast to _partitioned cookies_, where embedded resources under each top-level origin are given a unique cookie storage space (see for example [Cookies Having Independent Partitioned State (CHIPS)](/en-US/docs/Web/Privacy/Partitioned_cookies)).

The Storage Access API is relevant to user agents that by default block access to unpartitioned cookies by sites loaded in a third-party context to improve privacy (for example, to prevent tracking). There are legitimate uses for unpartitioned cookie access by third-party content that we still want to enable, even with these default restrictions in place. Examples include SSO with federated IdPs, or persisting user details such as location data or viewing preferences across different sites.

The API provides methods that allow embedded resources to check whether they currently have access to unpartitioned cookies and, if not, to request access from the user agent.

> **Note:** The _Storage Access API_ name may seem like somewhat of a misnomer, given that it only provides access to cookies, and not other client-side storage mechanisms such as {{domxref("Web_Storage_API", "Web Storage", "", "nocode")}} or {{domxref("IndexedDB_API", "IndexedDB", "", "nocode")}}. The name has been kept generic because it may provide access to other forms of client-side storage in the future.

## Concepts and usage

Browsers implement several storage access features and policies that restrict access to unpartitioned cookies by embedded, cross-site resources. These range from giving embedded resources under each top-level origin a unique cookie storage space (_partitioned cookies_), to outright blocking of cookie access when resources are loaded in a third-party context.

The semantics around unpartitioned cookie blocking features/policies differ from browser to browser, but the core functionality is similar: cross-site resources embedded in a third-party context are not given access to the same cookies that they would have access to when loaded in a first-party context. This is done with good intent — browser vendors want to take steps to better protect their user's privacy and security, for example leaving them less open to having their activity tracked across different sites, and less vulnerable to exploits such as cross-site request forgery ({{glossary("CSRF")}}).

However, there are legitimate uses for embedded cross-site content accessing unpartitioned cookies, which the above features/policies are known to break. As an example, federated logins often require access to authentication cookies, and will require the user to sign in on each site separately (or completely break) if those cookies are not available. As a result, site owners often encourage users to add their site as an exception or to disable such policies entirely. Users who wish to continue to interact with embedded content are forced to greatly relax their blocking policy for resources loaded from all embedded origins and possibly across all websites.

The Storage Access API is intended to solve this problem; embedded cross-site content can request unrestricted access to unpartitioned cookies on a frame-by-frame basis, for a particular top-level embedding site, via the {{domxref("Document.requestStorageAccess()")}} method. It can also check whether it already has access via the {{domxref("Document.hasStorageAccess()")}} method.

## How it works

As explained above, modern browsers implement various features and policies to restrict or block access to unpartitioned cookies by embedded content. Such content that has a legitimate need for cookie access can get around this problem using the Storage Access API as follows:

1. It can call the {{domxref("Document.hasStorageAccess()")}} method to check whether it has the access it needs already.
2. If not, it can request access via the {{domxref("Document.requestStorageAccess()")}} method.
3. Depending on the browser, the user will be asked whether to grant access to the requesting embed in slightly different ways.
   - Safari shows prompts for all embedded content that has not previously received storage access.
   - Firefox only prompts users after an origin has requested storage access on more than a threshold number of sites.
   - At the time of writing, Chrome doesn't prompt the user. Instead, it only resolves `requestStorageAccess()` calls that come from domains within a [first-party set](https://developer.chrome.com/docs/privacy-sandbox/first-party-sets/). This behavior will change as the implementation is developed further.
4. Access is granted or denied based on whether the content meets all the security requirements (see [Security measures](#security_measures), below). The {{jsxref("Promise")}}-based nature of `requestStorageAccess()` allows you to run code to handle success and failure cases.
   - Modern spec behavior dictates that access is granted **per-frame** — every separate content embed has its unpartitioned cookie access blocked by default, and needs to call `requestStorageAccess()` to opt-in to access. If a content embed has received access, and same-site embeds then call `requestStorageAccess()`, their promises will fulfill automatically. But they still need to opt-in.
   - In older versions of the spec, the access was **per-page**. As soon as one embed received unpartitioned cookie access via `requestStorageAccess()`, all other same-site embeds would automatically receive access. This was not desirable behavior from a security standpoint — for example, if `shop.example.com` embedded `locator.users.com` to allow users to use their location info while shopping, and `locator.users.com` called `requestStorageAccess()`, `shop.example.com` and any other sites it embeds would be able to access its cookies, but also access cookies from `private.users.com`, which is not intended to be embedded. [Read more about the motivations](https://github.com/privacycg/storage-access/issues/113) behind this change.
   - Consult the [Browser compatibility information](#browser_compatibility) to see which browsers implement which behavior.
5. Once access is granted, a permission key is stored in the browser with the structure `<top-level site, embedded site>`. For example, if the embedding site is `embedder.com`, and the embed is `locator.example.com`, the key would be `<embedder.com, example.com>`. Same-site embeds (`docs.example.com`, `profile.example.com`, etc.) would then be able to call `requestStorageAccess()` and the promise would fulfill automatically, as mentioned earlier.
   - Older versions of the spec used the more specific permission key structure `<top-level site, embedded origin>`, which meant that same-site, cross-origin embeds didn't match the permission key and had to go through the whole process separately.
   - At the time of writing, only Chromium browsers had implemented the new behavior.

> **Note:** The only exception to the "blocked by default" behavior is when a content embed makes a successful `requestStorageAccess()`, but then performs a same-origin navigation (for example reloading itself). In such cases, the storage access is carried over from the previous navigation.

> **Note:** In cases where a top-level site has its cookies partitioned (for example via [CHIPS](/en-US/docs/Web/Privacy/Partitioned_cookies) or [Total Cookie Protection](https://blog.mozilla.org/en/mozilla/firefox-androids-new-privacy-feature-total-cookie-protection-stops-companies-from-keeping-tabs-on-your-moves/)), the Storage Access API isn't required, as sharing the cookies by default has no privacy risk.

## Security measures

Several different security measures could cause a {{domxref("Document.requestStorageAccess()")}} call to fail. Check the below list if you are having trouble getting a request to work:

1. The call must be associated with a user gesture ({{Glossary("transient activation")}}) such as a tap or click. This prevents embedded content on the page from spamming the browser or user with excessive access requests. Note that this isn't required if:
   - Permission to use the API has already been granted, for example by another same-site resource calling `requestStorageAccess()`.
   - The caller is a top-level document or same-site to the top-level document. In such cases, `requestStorageAccess()` probably doesn't need to be called at all.
2. The document and top-level document must not have a `null` origin.
3. Origins that have never been interacted with as a first party do not have a notion of first-party storage. From the user's perspective, they only have a third-party relationship with that origin. Access requests are automatically denied if the browser detects that the user hasn't interacted with the embedded content in a first-party context recently (in Firefox, "recently" means within 30 days).
4. The document's window must be a [secure context](/en-US/docs/Web/Security/Secure_Contexts).
5. Sandboxed {{htmlelement("iframe")}}s cannot be granted storage access by default for security reasons. The API therefore also adds the `allow-storage-access-by-user-activation` [sandbox token](/en-US/docs/Web/HTML/Element/iframe#sandbox). The embedding website needs to add this to allow storage access requests to be successful, along with `allow-scripts` and `allow-same-origin` to allow it to execute a script to call the API and execute it in an origin that can have cookies:

   ```html
   <iframe
     sandbox="allow-storage-access-by-user-activation
                   allow-scripts
                   allow-same-origin">
     …
   </iframe>
   ```

6. Usage of this feature may be blocked by a {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy) set on your server.
7. At the time of writing, Chrome only resolves `requestStorageAccess()` calls that come from domains within a [first-party set](https://developer.chrome.com/docs/privacy-sandbox/first-party-sets/). This restriction is intended to be relaxed as the implementation is developed further.

> **Note:** The document may also be required to pass additional browser-specific checks. Examples: allowlists, blocklists, on-device classification, user settings, anti-[clickjacking](/en-US/docs/Glossary/Clickjacking) heuristics, or prompting the user for explicit permission.

## Browser storage access policy variations

Although the API surface is the same, websites using the Storage Access API should expect differences in the level and extent of unpartitioned cookie access they receive between different browsers, due to differences in their storage access policies.

### Firefox

Design properties unique to Firefox are summarized here:

- If the embedded origin `tracker.example` has already obtained unpartitioned cookie access on the top-level origin `foo.example`, and the user visits a page from `foo.example` embedding a page from `tracker.example` again in less than 30 days, the embedded origin will have unpartitioned cookie access immediately when loading.
- If an embedded page from `tracker.example` has previously successfully obtained unpartitioned cookie access on top-level origin `foo.example`, all embedded subresources from `tracker.example` on `foo.example` (e.g. scripts, images, stylesheets, etc.) will load with access to their cookies, which means they may send Cookie headers and honor incoming {{httpheader("Set-Cookie")}} headers.
- In Firefox, when the promise returned from `requestStorageAccess()` is resolved, the embedded page will gain access to its entire first-party storage, not just unpartitioned cookies. This includes access to APIs such as [Web Storage](/en-US/docs/Web/API/Web_Storage_API), [IndexedDB](/en-US/docs/Web/API/IndexedDB_API), [DOM Cache](/en-US/docs/Web/API/Cache), and so on.
- The storage access grants are phased out after 30 calendar days have passed.

Documentation for Firefox's new storage access policy for blocking tracking cookies includes [a detailed description](/en-US/docs/Web/Privacy/Storage_Access_Policy#storage_access_grants) of the scope of storage access grants.

### Safari

- The storage access grants are phased out after 30 days of browser usage passed without user interaction. Successful use of the Storage Access API resets this counter.

## Examples

See [Using the Storage Access API](/en-US/docs/Web/API/Storage_Access_API/Using) for an implementation guide with code examples.

## API methods

- {{domxref("Document.hasStorageAccess()")}}
  - : Returns a {{jsxref("Promise")}} that resolves with a boolean value indicating whether the document has access to unpartitioned cookies.
- {{domxref("Document.requestStorageAccess()")}}
  - : Returns a {{jsxref("Promise")}} that resolves if the access to unpartitioned cookies was granted, and rejects if access was denied.

> **Note:** User interaction propagates to the promise returned by both of these methods, allowing the callers to take actions that require user interaction without requiring a second click from the user. For example, a caller could open a pop-up window from the resolved promise without triggering Firefox's pop-up blocker.

### Additions to other APIs

- {{domxref("Permissions.query()")}}
  - : You can call `Permissions.query()` with a value of `"storage-access"` to query whether unpartitioned cookie access has been granted in general, i.e. to another same-site embed. If so, you can call `requestStorageAccess()` without user interaction, and the promise will resolve automatically.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Storage Access API](/en-US/docs/Web/API/Storage_Access_API/Using)
- [Introducing Storage Access API](https://webkit.org/blog/8124/introducing-storage-access-api/) (WebKit blog)

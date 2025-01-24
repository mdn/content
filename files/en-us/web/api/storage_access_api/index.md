---
title: Storage Access API
slug: Web/API/Storage_Access_API
page-type: web-api-overview
browser-compat:
  - api.Document.hasStorageAccess
  - api.Document.hasUnpartitionedCookieAccess
  - api.Document.requestStorageAccess
  - api.Document.requestStorageAccessFor
  - api.Permissions.permission_storage-access
spec-urls:
  - https://privacycg.github.io/storage-access/
  - https://privacycg.github.io/saa-non-cookie-storage/
---

{{DefaultAPISidebar("Storage Access API")}}

The Storage Access API provides a way for cross-site content loaded in a third-party context (i.e., embedded in an {{htmlelement("iframe")}}) to gain access to [third-party cookies](/en-US/docs/Web/Privacy/Third-party_cookies) and [unpartitioned state](/en-US/docs/Web/Privacy/State_Partitioning#state_partitioning) that it would typically only have access to in a first-party context (i.e., when loaded directly in a browser tab).

The Storage Access API is relevant to user agents that, by default, block access to third-party cookies and unpartitioned state to improve privacy (for example, to prevent tracking). There are legitimate uses for third-party cookies and unpartitioned state that we still want to enable, even with these default restrictions in place. Examples include single sign-on (SSO) with federated identity providers (IdPs), or persisting user details such as location data or viewing preferences across different sites.

The API provides methods that allow embedded resources to check whether they currently have access to third-party cookies and, if not, to request access from the user agent.

## Concepts and usage

Browsers implement several storage access features and policies restricting access to third-party cookies and unpartitioned state. These range from giving embedded resources under each top-level origin a unique cookie storage space ([partitioned cookies](#unpartitioned_versus_partitioned_cookies)) to outright blocking of cookie access when resources are loaded in a third-party context.

The semantics around third-party cookie and unpartitioned state blocking features and policies differ from browser to browser, but the core functionality is similar. Cross-site resources embedded in a third-party context are not given access to the same state that they would have access to when loaded in a first-party context. This is done with good intent — browser vendors want to take steps to better protect their user's privacy and security. Examples include leaving them less open to having their activity tracked across different sites, and less vulnerable to exploits such as cross-site request forgery ({{glossary("CSRF")}}).

However, there are legitimate uses for embedded cross-site content accessing third-party cookies and unpartitioned state, which the above features and policies are known to break. Let's say you've got a series of different sites that provide access to different products — `heads-example.com`, `shoulders-example.com`, `knees-example.com`, and `toes-example.com`.

Alternatively, you might separate your content or services into different country domains for localization purposes — `example.com`, `example.ua`, `example.br`, etc. — or in some other way.

You might have accompanying utility sites with components embedded in all the other sites, for example, to provide SSO (`sso-example.com`) or general personalization services (`services-example.com`). These utility sites will want to share their state with the sites they are embedded in via cookies. They cannot share first-party cookies because they are on different domains, and third-party cookies will no longer work in browsers that block them.

In such situations, site owners often encourage users to add their site as an exception or to disable third-party cookie-blocking policies entirely. Users who wish to continue interacting with their content must significantly relax their blocking policy for resources loaded from all embedded origins and possibly across all websites.

The Storage Access API is intended to solve this problem; embedded cross-site content can request unrestricted access to third-party cookies and unpartitioned state on a frame-by-frame basis via the {{domxref("Document.requestStorageAccess()")}} method. It can also check whether it already has access via the {{domxref("Document.hasStorageAccess()")}} method.

### Unpartitioned versus partitioned cookies

It is important to note that the Storage Access API is only needed to provide access to _unpartitioned_ third-party cookies. This means cookies stored in the traditional way since the early web — all cookies set on the same site are stored in the same cookie jar. This is in contrast to _partitioned_ cookies, where embedded resources under each top-level site are given a unique cookie storage space, thereby making tracking users across sites via these cookies impossible.

Browsers have various mechanisms to partition third-party cookie access, for example [Firefox Total Cookie Protection](https://blog.mozilla.org/en/products/firefox/firefox-rolls-out-total-cookie-protection-by-default-to-all-users-worldwide/) and [Cookies Having Independent Partitioned State (CHIPS)](/en-US/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies).

When we talk about third-party cookies in the context of the Storage Access API, we implicitly mean _unpartitioned_ third-party cookies.

### How it works

Embedded content that has a legitimate need for third party cookie or unpartitioned state access can request access using the Storage Access API as follows:

1. It can call the {{domxref("Document.hasStorageAccess()")}} method to check whether it has the access it needs already.
2. If not, it can request access via the {{domxref("Document.requestStorageAccess()")}} method.
3. Depending on the browser, the user will be asked whether to grant access to the requesting embed in slightly different ways.
   - Safari shows prompts for all embedded content that has not previously received storage access.
   - Firefox only prompts users after an origin has requested storage access on more than a threshold number of sites.
   - Chrome shows prompts for all embedded content that has not previously received storage access. It will however automatically grant access and skip prompts if the embedded content and embedding site are part of the same [related website set](/en-US/docs/Web/API/Storage_Access_API/Related_website_sets).
4. Access is granted or denied based on whether the content meets all the security requirements — see [Security measures](#security_measures) for general requirements, and [Browser-specific variations](#browser-specific_variations) for some browser-specific security requirements. The {{jsxref("Promise")}}-based nature of `requestStorageAccess()` allows you to run code to handle success and failure cases.
   - Modern spec behavior dictates that access is granted _per-frame_ — every separate content embed has its third-party cookie access blocked by default, and needs to call `requestStorageAccess()` to opt in to access. If a content embed has received access, and same-site embeds then call `requestStorageAccess()`, their promises will fulfill automatically. But they still need to opt in.
   - The only exception to the "blocked by default" behavior is when a content embed makes a successful `requestStorageAccess()`, but then performs a same-origin navigation (for example reloading itself). In such cases, the storage access is carried over from the previous navigation.
   - In older spec versions, the access was _per-page_ (Safari is the only browser still using this model). When one embed received third-party cookie access via `requestStorageAccess()`, all other same-site embeds would automatically receive access. This was not desirable behavior from a security standpoint — for example, if `shop.example.com` embedded `locator.users.com` to allow users to use their location info while shopping, and `locator.users.com` called `requestStorageAccess()`, `shop.example.com` and any other sites it embeds would be able to access its cookies, but also access cookies from `private.users.com`, which is not intended to be embedded. [Read more about the motivations](https://github.com/privacycg/storage-access/issues/113) behind this change.
5. Once access is granted, a permission key is stored in the browser with the structure `<top-level site, embedded site>`. For example, if the embedding site is `embedder.com`, and the embed is `locator.example.com`, the key would be `<embedder.com, example.com>`. Same-site embeds (`docs.example.com`, `profile.example.com`, etc.) would then be able to call `requestStorageAccess()` and the promise would fulfill automatically, as mentioned earlier.
   - Older spec versions used the more specific permission key structure `<top-level site, embedded origin>`, which meant that same-site, cross-origin embeds didn't match the permission key and had to go through the whole process separately.

> [!NOTE]
> In cases where a top-level site has its cookies [partitioned](#unpartitioned_versus_partitioned_cookies), the Storage Access API isn't required, as sharing the cookies by default has no privacy risk.

## Security measures

Several different security measures could cause a {{domxref("Document.requestStorageAccess()")}} call to fail. Check the below list if you are having trouble getting a request to work:

1. The call must be associated with a user gesture ({{Glossary("transient activation")}}) such as a tap or click. This prevents embedded content on the page from spamming the browser or user with excessive access requests. Note that this isn't required if:
   - Permission to use the API has already been granted, for example by another same-site resource calling `requestStorageAccess()`.
   - The caller is a top-level document or same-site to the top-level document. In such cases, `requestStorageAccess()` probably doesn't need to be called at all.
2. The document and top-level document must not have a `null` origin.
3. Origins that have never been interacted with as a first party do not have a notion of first-party storage. From the user's perspective, they only have a third-party relationship with that origin. Access requests are automatically denied if the browser detects that the user hasn't interacted with the embedded content in a first-party context recently (in Firefox, "recently" means within 30 days).
4. The document's window must be a [secure context](/en-US/docs/Web/Security/Secure_Contexts).
5. Sandboxed {{htmlelement("iframe")}}s cannot be granted storage access by default for security reasons. The API therefore also adds the `allow-storage-access-by-user-activation` [sandbox token](/en-US/docs/Web/HTML/Element/iframe#sandbox). The embedding website needs to add this to allow storage access requests to be successful, along with `allow-scripts` and `allow-same-origin` to allow it to execute a script to call the API and execute it in an origin that can have cookies/state:

   ```html
   <iframe
     sandbox="allow-storage-access-by-user-activation
                   allow-scripts
                   allow-same-origin">
     …
   </iframe>
   ```

6. Usage of this feature may be blocked by a {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy) set on your server.

> [!NOTE]
> The document may also be required to pass additional browser-specific checks. Examples: allowlists, blocklists, on-device classification, user settings, anti-[clickjacking](/en-US/docs/Web/Security/Attacks/Clickjacking) heuristics, or prompting the user for explicit permission.

## Browser-specific variations

Although the API surface is the same, websites using the Storage Access API should expect differences in the level and extent of third-party cookie access they receive between different browsers, due to differences in their storage access policies.

### Chrome

- Cookies must have [`SameSite=None`](/en-US/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) explicitly set on them, because the default value for Chrome is `SameSite=Lax` (`SameSite=None` is the default in Firefox and Safari).
- Cookies must have the [`Secure`](/en-US/docs/Web/HTTP/Headers/Set-Cookie#secure) attribute set on them.
- The storage access grants are phased out after 30 days of browser usage passed without user interaction. Interaction with the embedded content extends this limit by another 30 days. This doesn't occur when {{domxref("Document.requestStorageAccessFor()")}} is called because the user is already on the page.

### Firefox

- If the embedded origin `tracker.example` has already obtained third-party cookie access on the top-level origin `foo.example`, and the user visits a page from `foo.example` embedding a page from `tracker.example` again in less than 30 days, the embedded origin will have third-party cookie access immediately when loading.
- The storage access grants are phased out after 30 calendar days have passed.

Documentation for Firefox's new storage access policy for blocking tracking cookies includes [a detailed description](/en-US/docs/Web/Privacy/Storage_Access_Policy#storage_access_grants) of the scope of storage access grants.

### Safari

- The storage access grants are phased out after 30 days of browser usage passed without user interaction. Successful use of the Storage Access API resets this counter.

## Examples

- See [Using the Storage Access API](/en-US/docs/Web/API/Storage_Access_API/Using) for an implementation guide with code examples.
- See [Storage Access API Demo](https://storage-access-api-demo.glitch.me/) for a live demo.

## API methods

- {{domxref("Document.hasStorageAccess()")}}
  - : Returns a {{jsxref("Promise")}} that resolves with a boolean value indicating whether the document has access to third-party cookies.
- {{domxref("Document.hasUnpartitionedCookieAccess()")}}
  - : New name for {{domxref("Document.hasStorageAccess()")}}.
- {{domxref("Document.requestStorageAccess()")}}
  - : Allows content loaded in a third-party context (i.e., embedded in an {{htmlelement("iframe")}}) to request access to third-party cookies and unpartitioned state; returns a {{jsxref("Promise")}} that resolves if the access was granted, and rejects if access was denied.
- {{domxref("Document.requestStorageAccessFor()")}} {{experimental_inline}}
  - : A proposed extension to the Storage Access API that allows top-level sites to request third-party cookie access on behalf of embedded content originating from another site in the same [related website set](/en-US/docs/Web/API/Storage_Access_API/Related_website_sets). Returns a {{jsxref("Promise")}} that resolves if the access was granted, and rejects if access was denied.

> [!NOTE]
> User interaction propagates to the promise returned by these methods, allowing the callers to take actions requiring user interaction without requiring a second click. For example, a caller could open a pop-up window from the resolved promise without triggering Firefox's pop-up blocker.

### Additions to other APIs

- {{domxref("Permissions.query()")}}, the `"storage-access"` feature name
  - : In supporting browsers, this can query whether third-party cookie access has been granted in general, that is, to another same-site embed. If so, you can call `requestStorageAccess()` without user interaction, and the promise will resolve automatically.
- `Permissions.query()`, the `"top-level-storage-access"` feature name {{experimental_inline}}
  - : A separate feature name used to query whether permission to access third-party cookies has already been granted via `requestStorageAccessFor()`. If so, you don't need to call `requestStorageAccessFor()` again.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Storage Access API](/en-US/docs/Web/API/Storage_Access_API/Using)
- [Introducing Storage Access API](https://webkit.org/blog/8124/introducing-storage-access-api/) (WebKit blog)

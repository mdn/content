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
  - http.headers.Activate-Storage-Access
  - http.headers.Sec-Fetch-Storage-Access
spec-urls:
  - https://privacycg.github.io/storage-access/
  - https://privacycg.github.io/saa-non-cookie-storage/
---

{{DefaultAPISidebar("Storage Access API")}}{{securecontext_header}}

The Storage Access API provides a way for cross-site content loaded in a third-party context (i.e., embedded in an {{htmlelement("iframe")}}) to gain access to [third-party cookies](/en-US/docs/Web/Privacy/Guides/Third-party_cookies) and [unpartitioned state](/en-US/docs/Web/Privacy/Guides/State_Partitioning#state_partitioning) that it would typically only have access to in a first-party context (i.e., when loaded directly in a browser tab).

The Storage Access API is relevant to user agents that, by default, block access to third-party cookies and unpartitioned state to improve privacy (for example, to prevent tracking). There are legitimate uses for third-party cookies and unpartitioned state that we still want to enable, even with these default restrictions in place. Examples include single sign-on (SSO) with federated identity providers (IdPs), or persisting user details such as location data or viewing preferences across different sites.

The API provides methods that allow embedded resources to check whether they currently have access to third-party cookies and, if not, to request access from the user agent.

## Concepts and usage

Browsers implement several storage access features and policies restricting access to third-party cookies and unpartitioned state. These range from giving embedded resources under each top-level origin a unique cookie storage space ([partitioned cookies](#unpartitioned_versus_partitioned_cookies)) to outright blocking of cookie access when resources are loaded in a third-party context.

The semantics around third-party cookie and unpartitioned state blocking features and policies differ from browser to browser, but the core functionality is similar. Cross-site resources embedded in a third-party context are not given access to the same state that they would have access to when loaded in a first-party context. This is done with good intent — browser vendors want to take steps to better protect their user's privacy and security. Examples include leaving them less open to having their activity tracked across different sites, and less vulnerable to exploits such as cross-site request forgery ({{glossary("CSRF")}}).

However, there are legitimate uses for embedded cross-site content accessing third-party cookies and unpartitioned state, which the above features and policies are known to break. Let's say you've got a series of different sites that provide access to different products — `heads-example.com`, `shoulders-example.com`, `knees-example.com`, and `toes-example.com`.

Alternatively, you might separate your content or services into different country domains for localization purposes — `example.com`, `example.ua`, `example.br`, etc. — or in some other way.

You might have accompanying utility sites with components embedded in all the other sites, for example, to provide SSO (`sso-example.com`) or general personalization services (`services-example.com`). These utility sites will want to share their state with the sites they are embedded in via cookies. They cannot share first-party cookies because they are on different domains, and third-party cookies will no longer work in browsers that block them.

In such situations, site owners often encourage users to add their site as an exception or to disable third-party cookie-blocking policies entirely. Users who wish to continue interacting with their content must significantly relax their blocking policy for resources loaded from all embedded origins and possibly across all websites.

The Storage Access API is intended to solve this problem; embedded cross-site content can request unrestricted access to third-party cookies and unpartitioned state on a frame-by-frame basis via the {{domxref("Document.requestStorageAccess()")}} method.
It can also check whether it already has access via the {{domxref("Document.hasStorageAccess()")}} method.

> [!NOTE]
> The [storage access headers](/en-US/docs/Web/API/Storage_Access_API#storage_access_headers) are an HTTP extension to the API that enables a more efficient storage API workflow, and can also be used to activate a previously granted storage access permission for passive resources, such as images.

### Unpartitioned versus partitioned cookies

The Storage Access API is only needed to provide access to _unpartitioned_ third-party cookies!
Unpartitioned cookies are those where all cookies set on the same site are stored in the same cookie jar — the traditional way since the early web.
Because there is a risk of exposing data intended for one site with others, browsers commonly block sending unpartitioned third party cookies in requests, and allowing access to them in embedded contexts.

This is in contrast to _partitioned_ cookies, where embedded resources under each top-level site are given a unique cookie storage space, isolated from those of other sites.
Since there is no privacy risk, because it is not possible to track users across sites via partitioned cookies, browsers send partitioned cookies in requests and make them available to the embedded resources.
Note however that, because the cookies aren't shared between sites, they are also not automatically synchronized across sites.
Browsers have various mechanisms to partition third-party cookie access, for example [Firefox Total Cookie Protection](https://blog.mozilla.org/en/mozilla/firefox-rolls-out-total-cookie-protection-by-default-to-all-users-worldwide/) and [Cookies Having Independent Partitioned State (CHIPS)](/en-US/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies).

When we talk about third-party cookies in the context of the Storage Access API, we implicitly mean _unpartitioned_ third-party cookies.

### How it works

Third party content embedded in an {{htmlelement("iframe")}} that needs to access cookie or other unpartitioned state can request access using the Storage Access API as follows:

1. {{domxref("Document.hasStorageAccess()")}} can be called to check if it already has access to unpartitioned cookies.
2. If not, {{domxref("Document.requestStorageAccess()")}} can be called with {{Glossary("transient activation")}} to request the `storage-access` permission.

   Depending on the browser, the user will be asked whether to grant permission to the requesting embed in slightly different ways.
   - Safari shows prompts for all embedded content that has not previously received storage access.
   - Firefox only prompts users after an origin has requested storage access on more than a threshold number of sites.
   - Chrome shows prompts for all embedded content that has not previously received storage access.
     It will however automatically grant access and skip prompts if the embedded content and embedding site are part of the same [related website set](/en-US/docs/Web/API/Storage_Access_API/Related_website_sets).

3. Permission is granted or denied based on whether the content meets all the security requirements — see [Security considerations](#security_considerations) for general requirements, and [Browser-specific variations](#browser-specific_variations) for some browser-specific security requirements.
   The {{jsxref("Promise")}}-based nature of `requestStorageAccess()` allows you to run code to handle success and failure cases.

   Once permission is granted, a permission key is stored in the browser with the structure `<top-level site, embedded site>`.
   For example, if the embedding site is `embedder.com`, and the embed is `locator.example.com`, the key would be `<embedder.com, example.com>`.

   What this means is that permission is granted for access to unpartitioned cookies for any page on the `example.com` site or one of its subdomains that is embedded in any page on the `embedder.com` site.
   For example, `docs.example.com`, `profile.example.com`, can now call `requestStorageAccess()` and the promise would fulfill automatically.

   > [!NOTE]
   > Older spec versions used the more specific permission key structure `<top-level site, embedded origin>`, which meant that same-site, cross-origin embeds didn't match the permission key and had to go through the whole process separately.

4. Permission must be explicitly activated for each _context_.

   When an embed is granted permission, that permission is also activated for the current context.
   However other contexts, such as new browser tabs or content in other {{htmlelement("iframe")}} elements in the page, have their third-party cookie access blocked by default.
   That means that even if permission is granted, the page will need to be loaded and call `requestStorageAccess()` to activate the permission.
   If permission has already been granted then a call to `requestStorageAccess()` will not require transient activation and the promise will fulfill automatically.

   The only exception to the "blocked by default" behavior is if an embed performs a same-origin navigation to reload itself after after being granted permission or activating a permission.
   In such cases, the storage access is carried over from the previous navigation.
   This allows the embedded resource to reload itself and gain access to its cookies.

   > [!NOTE]
   > In older spec versions, the access was _per-page_ (Safari is the only browser still using this model). When one embed received third-party cookie access via `requestStorageAccess()`, all other same-site embeds would automatically receive access.
   > This was not desirable behavior from a security standpoint — for example, if `shop.example.com` embedded `locator.users.com` to allow users to use their location info while shopping, and `locator.users.com` called `requestStorageAccess()`, `shop.example.com` and any other sites it embeds would be able to access its cookies, but also access cookies from `private.users.com`, which is not intended to be embedded. [Read more about the motivations](https://github.com/privacycg/storage-access/issues/113) behind this change.

5. After an embed has activated the storage-access permission it should reload itself.
   The browser will the re-request the resource with third party cookies included, and make them available to the embedded resource once it has loaded.

### Storage access headers

The API requires that a resource must must call `requestStorageAccess()` for each new context to opt-in to activating the storage-access permission, which must already have been granted.
This in turn means that the embedded resource must first be requested without cookies and loaded so it can call the method.

The storage access headers enable a workflow where the server can request that the permission is activated for the context, avoiding an unnecessary additional load of the embedded resource if permission has already been granted.
The resource must still be loaded in order to request permission the first time.

There are two headers:

- The browser adds the {{HTTPHeader("Sec-Fetch-Storage-Access")}} header to requests to indicate the storage access state of the current fetch context, such as whether permission has been activated, granted, or not granted.
- Depending on the storage access state of the request, the server can respond with an {{HTTPHeader("Activate-Storage-Access")}} to request that the browser activate the permission for the context and retry the request with cookies (avoiding it having to load the resource so it can call `requestStorageAccess()`), or activate the permission and load the returned resource.

The storage access headers can also be used to activate permission for passive resources, such as images (provided the context has already been granted permission).
This might be used, for example, to serve different images for different users, demographics, or locales.

The workflows are shown in the [Storage access header sequences](#storage_access_header_sequences) section.

### Request/response flow

#### JavaScript sequences

Consider the example of a library to be loaded in an {{htmlelement("iframe")}} that needs to be shared among a number of sites, and which relies on credentials stored in unpartitioned cookies.

First consider the case where permission has not been granted.

- Resources are requested without third party cookies by default, so the server returns a version that does not rely on credentials (and which when loaded doesn't have access to the cookies).
- Once loaded, the resource calls `requestStorageAccess()` with transient activation to request and activate the `storage-access` permission.
- If permission is granted, the resource will then reload itself.
  This time the browser makes the request with third party cookies included, and the server may respond with a different "credentialed" version of the resource.
- The browser then loads the resource, and because it has an activated `storage-access` permission, gives it access to its cookies.

![Storage API workflow - without storage-access permission](storage_api_no_permission.png)

<!--
[![](https://mermaid.ink/img/pako:eNqFkkGPmzAQhf-K5VNWykbAkgBuGylK99pDo1669ODYE2It2NQedttG-e8dsKhWW62WC8zjfTP2sy9cOQ1c8AA_B7AKPhvZeNl9qC2jp5cejTK9tMj2rQGL_-sH8E_gox49t9ttFAX7OrYNyDwEN3gFbGEdU849Ggg3kYnWW4IiPUKhdzbAw0m27VGqRyIs0q8fkfjiEJgjiM3EfXcEzRTZA42aRh7QednATikIYXHDng2ePx79Fr20YaSYVGieJBpnGboZYz34zoRA6lvDvgUqKCSL4YV77B2X4aF1UgdmMEB7You5s7GqHTSEV_t_K7Ox4X5yCjbQSKM_pdnde5mxh_eyim8W1_hsdAM4hcMOu92L_cR4oLZ8yRsazgX6AZa8I4ccS34ZJ9Qcz9BBzQV9ajjJocWa1_ZKGF2P7851M-nd0Jy5oEMNVA29ljhft1fqvTZ0ev9ED1aD37vBIhdFUUydubjwX1xkZbVKk3WerNdVXiXrdLPkv7lIy3KVVHmeZVVZVEWSZtcl_zMtJlltyvWmzDdlUt2VRZYU178i0ga1?type=png)](https://mermaid.live/edit#pako:eNqFkkGPmzAQhf-K5VNWykbAkgBuGylK99pDo1669ODYE2It2NQedttG-e8dsKhWW62WC8zjfTP2sy9cOQ1c8AA_B7AKPhvZeNl9qC2jp5cejTK9tMj2rQGL_-sH8E_gox49t9ttFAX7OrYNyDwEN3gFbGEdU849Ggg3kYnWW4IiPUKhdzbAw0m27VGqRyIs0q8fkfjiEJgjiM3EfXcEzRTZA42aRh7QednATikIYXHDng2ePx79Fr20YaSYVGieJBpnGboZYz34zoRA6lvDvgUqKCSL4YV77B2X4aF1UgdmMEB7You5s7GqHTSEV_t_K7Ox4X5yCjbQSKM_pdnde5mxh_eyim8W1_hsdAM4hcMOu92L_cR4oLZ8yRsazgX6AZa8I4ccS34ZJ9Qcz9BBzQV9ajjJocWa1_ZKGF2P7851M-nd0Jy5oEMNVA29ljhft1fqvTZ0ev9ED1aD37vBIhdFUUydubjwX1xkZbVKk3WerNdVXiXrdLPkv7lIy3KVVHmeZVVZVEWSZtcl_zMtJlltyvWmzDdlUt2VRZYU178i0ga1)

sequenceDiagram;
    participant Client
    participant Server
    Client->>Server: Request resource (no cookies)
    Server-- >>Client: Response[fallback content]
    Note over Client: Embed calls requestStorageAccess() with<br>transient activation to request permission
    Note over Client: User grants permission<br>Embed reloads itself (request includes cookies)
    Client->>Server: Request<br>Cookie: userid=123
    Server-- >>Client: Response [content]
    Note over Client: Client loads widget with SAA permission active
-->

Now consider the case where permission has been granted but not activated.
This would happen if you were to open the same URL in a new browser tab, or attempt to embed the same resource from another page in the same site.

The workflow is almost exactly the same because the resource still needs to be loaded the first time without cookies, and it then needs to call `requestStorageAccess()` to activate the permission for the context.
In this case though it doesn't need transient activation and can execute on load.

![Storage API workflow - activate storage-access permission](storage_api_permission.png)

<!--
[![](https://mermaid.ink/img/pako:eNqFkk1P4zAQhv_KyKcilcoJSZuE3UpV4bqH7W0JB9eephaJHfzBflT97zutASFWC77YM3mfGb-eHJi0ClnDPD5GNBJvtOicGK5bA7RG4YKWehQmwLrXaMK_-Q26J3QpnzSXy2VKNvD9VNYHcOhtdBJhYixIax80-ovEJOklQYk-QX60xuPdTvT9VsgHIkygT_eJ-GYDgiUIXojbYYsKJMk9tTq33ATrRIcrKdH7yQUEC0IG_SSIHdEN2nttzccFHfZWKA86eOx3MHkuDdrIPir075z8z_2XrVuuz8oGoken1dcsv_rMPdx95jrtkO74U6sOA21hD5vV6o3H5Btbw6aso-asCS7ilA2kEKeQHU4dWhb2OGDLGjoq3InYh5a15kgYDfqHtcML6Wzs9qyh8XiK4qjoUZ9_nHfZW6VpDq9Jh0ahW9toAmvynJ8rs-bAflFY1bOMlwUvy7qoeZnNp-w3a7KqmvG6KPK8rhb1gmf5ccr-nC_DZ_OqnFfFvOL1VbXI-eL4F7UV8YQ?type=png)](https://mermaid.live/edit#pako:eNqFkk1P4zAQhv_KyKcilcoJSZuE3UpV4bqH7W0JB9eephaJHfzBflT97zutASFWC77YM3mfGb-eHJi0ClnDPD5GNBJvtOicGK5bA7RG4YKWehQmwLrXaMK_-Q26J3QpnzSXy2VKNvD9VNYHcOhtdBJhYixIax80-ovEJOklQYk-QX60xuPdTvT9VsgHIkygT_eJ-GYDgiUIXojbYYsKJMk9tTq33ATrRIcrKdH7yQUEC0IG_SSIHdEN2nttzccFHfZWKA86eOx3MHkuDdrIPir075z8z_2XrVuuz8oGoken1dcsv_rMPdx95jrtkO74U6sOA21hD5vV6o3H5Btbw6aso-asCS7ilA2kEKeQHU4dWhb2OGDLGjoq3InYh5a15kgYDfqHtcML6Wzs9qyh8XiK4qjoUZ9_nHfZW6VpDq9Jh0ahW9toAmvynJ8rs-bAflFY1bOMlwUvy7qoeZnNp-w3a7KqmvG6KPK8rhb1gmf5ccr-nC_DZ_OqnFfFvOL1VbXI-eL4F7UV8YQ)

sequenceDiagram;
    participant Client
    participant Server
    Client->>Server: Request resource (no cookies)
    Server-- >>Client: Response[fallback content]
    Note over Client: Embed calls requestStorageAccess() to activate permission
    Note over Client: Embed reloads itself (request includes cookies)
    Client->>Server: Request<br>Cookie: userid=123
    Server-- >>Client: Response [content]
    Note over Client: Client loads widget with SAA permission active
-->

#### Storage access header sequences

The storage access headers enable an improved workflow that allows the server to request that the browser activate a permission that has been granted and retry the request with cookies included.
This avoids having to load the resource, in order to call `requestStorageAccess()`, when the user has already granted permission.

The {{HTTPHeader("Sec-Fetch-Storage-Access")}} header is added to requests to indicate the storage access state of the current fetch context, such as whether permission has been activated, granted, or not granted.
Depending on the storage access state of the request, the server can respond with an {{HTTPHeader("Activate-Storage-Access")}} to request that the browser activate the permission for the context and retry the request with cookies (avoiding it having to load the resource so it can call `requestStorageAccess()`).

First consider the case where permission has not been granted.
This is effectively the same as the initial sequence for the API, because we still need to first load the resource without cookies so that the permission can be requested and granted.

![Storage access header workflow - without storage-access permission](storage_headers_no_permission.png)

<!--
[![](https://mermaid.ink/img/pako:eNqFkkGPmzAQhf-K5VNWChGwkIDbrhSl22MPjXrZpQfHnhBrwaa22W0b5b93jJPVqquoXMDDvG_ePPlIhZFAGXXwcwQt4LPireX9h0YTfAZuvRJq4NqTTadA-_f1LdhnsLEee5K7u1hk5FvAOk8sODNaAWSmDRHGPClwNx93FhtF8gW8OCRbbyxvIVkLAc4xoo2GSI2wBLGRH7BuMNrB45533Y6LJ2Rqj79-RMVX44EYFJGL4r7fgSQC2x2amUydB8Z5sxvyovwhWPKWaxdUhAuvnrlXRhNvLjIygO2Vc1hdXJv23eEBc9TevWkP8OjDQme4dER5B92ezC5opUU3SnCvEV2J9Xpqk2UIkzYTgpERvSj5Kctvr6W5jmvCO1gwGVCP_0s3vklc6kXJFvwUJ9mu128COLtrNJ3TFk1R5u0Ic9pjBw9HegwTGuoP0ENDGX5K2POx8w1t9AlleOUejOkvSmvG9kAZXgOHp3GQuMb5Cv9TvZcKt3stWtAS7MaM2lNW1BOYsiP9RVle1YssLYu0LOuiTstsOae_KcuqapHWRZHndbWqV2mWn-b0z-QlXSyrclkVyyqtb6tVnq5OfwFA_iPh?type=png)](https://mermaid.live/edit#pako:eNqFkkGPmzAQhf-K5VNWChGwkIDbrhSl22MPjXrZpQfHnhBrwaa22W0b5b93jJPVqquoXMDDvG_ePPlIhZFAGXXwcwQt4LPireX9h0YTfAZuvRJq4NqTTadA-_f1LdhnsLEee5K7u1hk5FvAOk8sODNaAWSmDRHGPClwNx93FhtF8gW8OCRbbyxvIVkLAc4xoo2GSI2wBLGRH7BuMNrB45533Y6LJ2Rqj79-RMVX44EYFJGL4r7fgSQC2x2amUydB8Z5sxvyovwhWPKWaxdUhAuvnrlXRhNvLjIygO2Vc1hdXJv23eEBc9TevWkP8OjDQme4dER5B92ezC5opUU3SnCvEV2J9Xpqk2UIkzYTgpERvSj5Kctvr6W5jmvCO1gwGVCP_0s3vklc6kXJFvwUJ9mu128COLtrNJ3TFk1R5u0Ic9pjBw9HegwTGuoP0ENDGX5K2POx8w1t9AlleOUejOkvSmvG9kAZXgOHp3GQuMb5Cv9TvZcKt3stWtAS7MaM2lNW1BOYsiP9RVle1YssLYu0LOuiTstsOae_KcuqapHWRZHndbWqV2mWn-b0z-QlXSyrclkVyyqtb6tVnq5OfwFA_iPh)

sequenceDiagram;
    participant Client
    participant Server
    Client->>Server: Request resource (no cookies)<br>Sec-Fetch-Storage-Access: none
    Server-- >>Client: Response[fallback content]
    Note over Client: Embed calls requestStorageAccess() with<br>transient activation to request permission.
    Note over Client: User grants permission<br>Embed reloads itself (request includes cookies)
    Client->>Server: Sec-Fetch-Storage-Access: active<br>Cookie: userid=123
    Server-- >>Client: Activate-Storage-Access: load<br>[content]
    Note over Client: Client loads widget with SAA permission active
-->

What differs in the above sequence is that the browser and server have added some storage access headers (which aren't strictly needed).

- Initially the browser adds the header `Sec-Fetch-Storage-Access: none` to the request to indicate that permission has not been granted.
- After the user has granted (and thereby activated) the permission, the embed reloads itself.
  - The browser adds `Sec-Fetch-Storage-Access: active` to the request to indicate the context has an activated `storage-access` permission, and includes the third party cookies.
  - The server responds with `Activate-Storage-Access: load` which tells the browser to load the new version of the library with access to third party cookies.

The real benefit of the headers comes when attempting to load an embedded resource that already has permission granted.
In this case the browser will attach `Sec-Fetch-Storage-Access: inactive` to the request to indicate that the context has permission but that it is inactive.
The server can then respond with `Activate-Storage-Access: retry` to indicate that the browser should activate the permission, and retry the request with cookies.
If the browser retries the request it adds `Sec-Fetch-Storage-Access: active` to the request along with the cookies, and the server responds with `Activate-Storage-Access: load` which tells the browser to load the new version of the library with access to third party cookies.

![Storage access header workflow - activate storage-access permission and retry](storage_headers_activate_permission.png)

<!--
[![](https://mermaid.ink/img/pako:eNqVkkFP4zAQhf-KNSeQmirdNJQatlLVheNeeoNwMPaQWiR2157AQtX_ziRuV9VyAUtR7Od5n_1s70B7gyAh4p8OncZfVtVBtVeVE9y2KpDVdqsciVVj0dFnfY3hBUPSU022WCRR8qTObpH0JluTD6rGbKk1xiiFdUqTfcFkTPUZOxNCimU_qwg_GQNSeLt-DIv7J9U0j0o_C-0dsekhsX57QuEZJ46s9BfqgIwiHphqYIothtbGaL3rucqZYRHLhaE_lkji7NXShtfxz6yefztsitrDVwNCii5isObn5Efx7QNovDJD_i_G7uujeLWmRhJDjvVyeZJZHC8CRlDzpkBS6HAELVeofgi7foUKaIMtViC5a_BJdQ1VULk92_gh3HnfHp3Bd_UGJN9P5FG3NRzj8LD-U2-M5XT_xIDOYFj5zhHIeTGAQe7gL8iiyMflZFrmc_5m8_JiBG8gy2I8L2bT2YSFaTnNi_0I3oed5OPLWZmftMn-A8Dz_GQ?type=png)](https://mermaid.live/edit#pako:eNqVkkFP4zAQhf-KNSeQmirdNJQatlLVheNeeoNwMPaQWiR2157AQtX_ziRuV9VyAUtR7Od5n_1s70B7gyAh4p8OncZfVtVBtVeVE9y2KpDVdqsciVVj0dFnfY3hBUPSU022WCRR8qTObpH0JluTD6rGbKk1xiiFdUqTfcFkTPUZOxNCimU_qwg_GQNSeLt-DIv7J9U0j0o_C-0dsekhsX57QuEZJ46s9BfqgIwiHphqYIothtbGaL3rucqZYRHLhaE_lkji7NXShtfxz6yefztsitrDVwNCii5isObn5Efx7QNovDJD_i_G7uujeLWmRhJDjvVyeZJZHC8CRlDzpkBS6HAELVeofgi7foUKaIMtViC5a_BJdQ1VULk92_gh3HnfHp3Bd_UGJN9P5FG3NRzj8LD-U2-M5XT_xIDOYFj5zhHIeTGAQe7gL8iiyMflZFrmc_5m8_JiBG8gy2I8L2bT2YSFaTnNi_0I3oed5OPLWZmftMn-A8Dz_GQ)

sequenceDiagram;
    participant Client
    participant Server
    Client->>Server: Sec-Fetch-Storage-Access: inactive
    Server-- >>Client: Activate-Storage-Access: retry<br>[fallback content]
    Note over Client: Client activates storage-access permission<br>and retries request (with cookies)
    Client->>Server: Sec-Fetch-Storage-Access: active<br>Cookie: userid=123
    Server-- >>Client: Activate-Storage-Access: load<br>[content]
    Note over Client: Client loads widget with SAA permission active
-->

## Security considerations

Several different security measures could cause a {{domxref("Document.requestStorageAccess()")}} call to fail.
Check the below list if you are having trouble getting a request to work:

1. The permission request must be associated with a user gesture ({{Glossary("transient activation")}}) such as a tap or click.
   This prevents embedded content on the page from spamming the browser or user with excessive access requests.
   Note that this isn't required if:
   - Permission to use the API has already been granted to another context with the same `<top-level site, embedded site>` key.
   - The caller is a top-level document or same-site to the top-level document.
     In such cases, `requestStorageAccess()` probably doesn't need to be called at all.
2. The document and top-level document must not have a `null` origin.
3. Origins that have never been interacted with as a first party do not have a notion of first-party storage. From the user's perspective, they only have a third-party relationship with that origin. Access requests are automatically denied if the browser detects that the user hasn't interacted with the embedded content in a first-party context recently (in Firefox, "recently" means within 30 days).
4. The document's window must be a [secure context](/en-US/docs/Web/Security/Secure_Contexts).
5. Sandboxed {{htmlelement("iframe")}}s cannot be granted storage access by default for security reasons. The API therefore also adds the [`allow-storage-access-by-user-activation`](/en-US/docs/Web/HTML/Reference/Elements/iframe#allow-storage-access-by-user-activation) [sandbox token](/en-US/docs/Web/HTML/Reference/Elements/iframe#sandbox). The embedding website needs to add this to allow storage access requests to be successful, along with `allow-scripts` and `allow-same-origin` to allow it to execute a script to call the API and execute it in an origin that can have cookies/state:

   ```html
   <iframe
     sandbox="allow-storage-access-by-user-activation
                   allow-scripts
                   allow-same-origin">
     …
   </iframe>
   ```

6. Usage of this feature may be blocked by a {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [Permissions Policy](/en-US/docs/Web/HTTP/Guides/Permissions_Policy) set on your server.

> [!NOTE]
> The document may also be required to pass additional browser-specific checks. Examples: allowlists, blocklists, on-device classification, user settings, anti-[clickjacking](/en-US/docs/Web/Security/Attacks/Clickjacking) heuristics, or prompting the user for explicit permission.

## Browser-specific variations

Although the API surface is the same, websites using the Storage Access API should expect differences in the level and extent of third-party cookie access they receive between different browsers, due to differences in their storage access policies.

### Chrome

- Cookies must have [`SameSite=None`](/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) explicitly set on them, because the default value for Chrome is `SameSite=Lax` (`SameSite=None` is the default in Firefox and Safari).
- Cookies must have the [`Secure`](/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie#secure) attribute set on them.
- The storage access grants are phased out after 30 days of browser usage passed without user interaction. Interaction with the embedded content extends this limit by another 30 days. This doesn't occur when {{domxref("Document.requestStorageAccessFor()")}} is called because the user is already on the page.

### Firefox

- If the embedded origin `tracker.example` has already obtained third-party cookie access on the top-level origin `foo.example`, and the user visits a page from `foo.example` embedding a page from `tracker.example` again in less than 30 days, the embedded origin will have third-party cookie access immediately when loading.
- The storage access grants are phased out after 30 calendar days have passed.

Documentation for Firefox's new storage access policy for blocking tracking cookies includes [a detailed description](/en-US/docs/Web/Privacy/Guides/Storage_Access_Policy#storage_access_grants) of the scope of storage access grants.

### Safari

- The storage access grants are phased out after 30 days of browser usage passed without user interaction. Successful use of the Storage Access API resets this counter.

## Examples

- See [Using the Storage Access API](/en-US/docs/Web/API/Storage_Access_API/Using) for an implementation guide with code examples.

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

### Additions to HTTP

#### Permissions-Policy

- {{httpheader("Permissions-Policy/storage-access","Permissions-Policy: storage-access")}}
  - : The `storage-access` {{HTTPHeader("Permissions-Policy")}} directive controls whether a document loaded in a third-party context (i.e., embedded in an {{htmlelement("iframe")}}) is allowed to use the storage access API to request access to unpartitioned cookies.

#### Storage access headers

- {{HTTPHeader("Sec-Fetch-Storage-Access")}}
  - : Indicates the "storage access status" for the current request context, which will be one of `none`, `inactive`, `active`.
- {{HTTPHeader("Activate-Storage-Access")}}
  - : Used in response to `Sec-Fetch-Storage-Access` to indicate that the browser can activate an existing permission for secure access and retry the request with cookies, or load a resource with cookie access if it already has an activated permission.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Storage Access API](/en-US/docs/Web/API/Storage_Access_API/Using)
- [Introducing Storage Access API](https://webkit.org/blog/8124/introducing-storage-access-api/) (WebKit blog)

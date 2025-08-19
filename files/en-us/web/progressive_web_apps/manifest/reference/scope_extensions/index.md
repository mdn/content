---
title: scope_extensions
slug: Web/Progressive_web_apps/Manifest/Reference/scope_extensions
page-type: web-manifest-member
status:
  - experimental
browser-compat: manifests.webapp.scope_extensions
sidebar: pwasidebar
---

{{SeeCompatTable}}

The `scope_extensions` manifest member is used to extend the scope of a web app to include other origins. This allows multiple domains to be presented as a single web app.

## Syntax

```json
"scope_extensions": [
  { "type": "origin", "origin": "https://support.example.com"},
  { "type": "origin", "origin": "https://shop.example.com"},
  { "type": "origin", "origin": "https://example.de"},
  { "type": "origin", "origin": "https://example.co.uk"}
]
```

### Values

- `scope_extensions`
  - : An array of objects each containing the following properties:
    - `type`
      - : A string defining the type of scope extension. This is currently always `origin`, but future extensions may add other types.
    - `origin`
      - : A string representing an origin that the web app wishes to extend its scope to.

## Description

The `scope_extensions` manifest member can extend the scope of a web app to include other origins. Typical use cases include:

- Different subdomains for content or functionality, for example `https://support.example.com`, `https://shop.example.com`, `https://maps.example.com`, `https://auth.example.com`.
- Different subdomains for language/locale, for example `https://uk.example.com`, `https://de.example.com`, `https://jp.example.com`, `https://no.example.com`.
- Related independent domains, for example `https://example.jp`, `https://my-example.com`, `https://my-partner-site.com`, `https://example.slack.com`.

The main web app (for example, `https://example.com`) needs to include the origins it wishes to include in its scope inside its `scope_extensions` manifest member:

```json
"scope_extensions": [
  { "type": "origin", "origin": "https://example.jp"},
  { "type": "origin", "origin": "https://my-example.com"},
  { "type": "origin", "origin": "https://my-partner-site.com"},
  { "type": "origin", "origin": "https://example.slack.com"}
]
```

### Opt-in via a .well-known file

To opt-in to the association, the sites whose origins are specified as in-scope inside the web app's `scope_extensions` manifest member need to include a [.well-known](https://en.wikipedia.org/wiki/Well-known_URI) file called `web-app-origin-association` at a relative URL of `/.well-known/web-app-origin-association`. This must contain a JSON structure that includes one or more properties whose keys are equal to the [`id`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/id) manifest members of each web app the site is opting into the scope of.

For example:

```json
{
  "https://example.com": {
    "scope": "/"
  },
  "https://beta.example.com": {
    "scope": "/"
  }
}
```

The value of each property is an object containing a `scope` property with a value specifying the exact path that will be in-scope for the referencing web app.

> [!NOTE]
> It is not possible to specify different scopes for the same web app — you can't include multiple entries for the same key.

### Effect of `scope_extensions`

Once the origins included in the web app's `scope_extensions` are successfully opted-in, you can then link to locations within the scope of those origins, and when the links are followed the locations will appear in the app window in just the same way as locations inside the web app's own scope.

If you follow a link to a location not in the web app's scope, it will appear as an external location, as expected.

## Examples

Take a sample web app located at `https://example.com/app`:

```json
{
  "id": "https://example.com/app",
  "name": "My App",
  "icons": [
    {
      "src": "icon/hd_hi",
      "sizes": "128x128"
    }
  ],
  "start_url": "/app/index.html",
  "scope": "/app",
  "display": "standalone",
  "scope_extensions": [
    { "type": "origin", "origin": "https://example.co.uk" },
    { "type": "origin", "origin": "https://help.example.com" }
  ]
}
```

To opt-in to the app's scope, `https://example.co.uk` and `https://help.example.com` would need to include a `/.well-known/web-app-origin-association` that looks like this:

```json
{
  "https://example.com/app": {
    "scope": "/"
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`scope`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/scope) manifest member

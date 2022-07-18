---
title: web_accessible_resources
slug: Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources
tags:
  - Add-ons
  - Extensions
  - WebExtensions
browser-compat: webextensions.manifest.web_accessible_resources
---
{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>Array</code></td>
    </tr>
    <tr>
      <th scope="row">Mandatory</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Manifest version</th>
      <td>2 or higher</td>
    </tr>
    <tr>
      <th scope="row">Example</th>
      <td>
        <pre class="brush: json">
"web_accessible_resources": [
  "images/my-image.png"
]</pre
        >
      </td>
    </tr>
  </tbody>
</table>

## Description

Sometimes you want to package resources—for example, images, HTML, CSS, or JavaScript—with your extension and make them available to web pages.

For example, the [Beastify example extension](https://github.com/mdn/webextensions-examples/tree/master/beastify) replaces a web page with an image of a beast selected by the user. The beast images are packaged with the extension. To make the selected image visible, the extension adds [`<img>`](/en-US/docs/Web/HTML/Element/img) elements whose `src` attribute points to the beast's image. For the web page to be able to load the images, they must be made web accessible.

With the `web_accessible_resources` key, you list all the packaged resources that you want to make available to web pages. You specify them as paths relative to the manifest.json file.

Note that content scripts don't need to be listed as web accessible resources.

If an extension wants to use {{WebExtAPIRef("webRequest")}} to redirect a public URL (e.g., HTTPS) to a page that's packaged in the extension, then the extension must list the page in the `web_accessible_resources` key.

### Manifest V2 syntax

In Manifest V2, web accessible resources are added as an array under the key, like this:

```json
"web_accessible_resources": [
  "images/my-image.png"
]
```

### Manifest V3 syntax

In Manifest V3, the `web_accessible_resources` key is an array of objects like this:

```
{
  // …
  "web_accessible_resources": [
    {
      "resources": [ "test1.png", "test2.png" ],
      "matches": [ "https://web-accessible-resources-1.glitch.me/*" ]
    }, {
      "resources": [ "test3.png", "test4.png" ],
      "matches": [ "https://web-accessible-resources-2.glitch.me/*" ],
      "use_dynamic_url": true
    }
  ],
  // …
}
```

Each object must include a `"resources"` property and either a `"matches"` or `"extension_ids"` property from the following properties:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Type</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>extension_ids</code>
      </td>
      <td><code>String</code></td>
      <td>
        A list of extension IDs specifying the extensions that can access the resources.
      </td>
    </tr>
    <tr>
      <td><code>matches</code></td>
      <td><code>String</code></td>
      <td>
        A list of URL match patterns specifying the pages that can access the resources. Only the origin is used to match URLs. Origins include subdomain matching. Paths are ignored.
      </td>
    </tr>
    <tr>
      <td><code>resources</code></td>
      <td><code>String</code></td>
      <td>
        An array of resources to be exposed. Resources are specified as strings and may contain <code>*</code> for wildcard matches. For example, <code>"/images/*"</code> exposes everything in the extension's <code>/images</code> directory recursively, while <code>"*.png"</code> exposes all PNG files.
      </td>
    </tr>
    <tr>
      <td><code>use_dynamic_url</code></td>
      <td><code>Boolean</code></td>
      <td>
        Whether resources to be accessible through the dynamic ID. The dynamic ID is generated per session and regenerated on browser restart or extension reload.
      </td>
    </tr>
  </tbody>
</table>

### Using web_accessible_resources

Suppose your extension includes an image file at `images/my-image.png`, like this:

```plain
my-extension-files/
    manifest.json
    my-background-script.js
    images/
        my-image.png
```

To enable a web page to use an [`<img>`](/en-US/docs/Web/HTML/Element/img) element whose `src` attribute points to this image, you would specify `web_accessible_resources` like this:

```json
"web_accessible_resources": ["images/my-image.png"]
```

The file is then available using a URL like:

```plain
moz-extension://<extension-UUID>/images/my-image.png"
```

`<extension-UUID>` is **not** your extension's ID. This ID is randomly generated for every browser instance. This prevents websites from fingerprinting a browser by examining the extensions it has installed.

> **Note:** In Chrome in Manifest V2, an extension's ID is fixed. When a resource is listed in `web_accessible_resources`, it is accessible as `chrome-extension://<your-extension-id>/<path/to/resource>`. In Manifest V3, Chrome can use a dynamic URL by setting `use_dynamic_url` two `true`.

The recommended approach to obtaining the URL of the resource is to use [`runtime.getURL`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/getURL) passing the path relative to manifest.json, for example:

```js
browser.runtime.getURL("images/my-image.png");
// something like:
// moz-extension://944cfddf-7a95-3c47-bd9a-663b3ce8d699/images/my-image.png
```

This approach gives you the correct URL regardless of the browser your extension is running on.

### Wildcards

`web_accessible_resources` entries can contain wildcards. For example, the following entry would also work to include the resource at "images/my-image.png":

```json
  "web_accessible_resources": ["images/*.png"]
```

### Security

If you make a page web-accessible, any website may link or redirect to that page. The page should then treat any input (POST data, for example) as if it came from an untrusted source, just as a normal web page should.

Web-accessible extension resources are not blocked by [CORS](/en-US/docs/Web/HTTP/CORS) or [CSP](/en-US/docs/Web/HTTP/CSP). Because of this ability to bypass security checks, extensions should avoid using web-accessible scripts when possible. A web-accessible extension script can unexpectedly be misused by malicious websites to weaken the security of other websites. Follow the [security best practices](https://extensionworkshop.com/documentation/develop/build-a-secure-extension/) by avoiding injection of moz-extension:-URLs in web pages and ensuring that third-party libraries are up to date.

## Example

```json
"web_accessible_resources": ["images/my-image.png"]
```

Make the file at "images/my-image.png" web accessible.

## Browser compatibility

{{Compat}}

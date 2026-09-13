---
title: "`<install>` HTML install element"
short-title: <install>
slug: Web/HTML/Reference/Elements/install
page-type: html-element
status:
  - experimental
browser-compat: html.elements.install
sidebar: htmlsidebar
---

{{SeeCompatTable}}

The **`<install>`** [HTML](/en-US/docs/Web/HTML) element creates a button that, when pressed, instructs the browser to install a [progressive web app (PWA)](/en-US/docs/Glossary/Progressive_web_apps), provided it is eligible to be installed. This can be an app containing the install button, or an app located in a different location on the same origin or another origin.

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Reference/Global_attributes).

- `manifest` {{experimental_inline}}
  - : A string equal to an absolute URL pointing to the [web app manifest](/en-US/docs/Web/Progressive_web_apps/Manifest) of the PWA to be installed. If this is omitted, the browser will attempt to install the current document as a PWA.

- `manifestId` {{experimental_inline}}
  - : A string equal to an absolute URL representing the ID of the PWA to be installed. This can be omitted if the manifest at `manifest` contains an [`id`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/id) field.

## Description

The `<install>` element provides a declarative browser-defined control that instructs the browser to install a [progressive web app (PWA)](/en-US/docs/Glossary/Progressive_web_apps) on the user's device. In Chrome, for example, the button features an installation icon (the same as the PWA install controls on the browser UI) and intuitive text ("Install" in English content).

This uses the same permission flow as the browser's built-in install functionality, but it has some advantages. It allows the developer to create an install experience that is more consistent across supporting browsers, has greater flexibility as to where it can be implemented, and is easier to discover.

> [!NOTE]
> There is an equivalent DOM method, {{domxref("Navigator.install()")}}, which provides a programmatic mechanism to create such an install button.

The element's DOM API interface, {{domxref("HTMLInstallElement")}}, provides features to access current permission status and errors if the data retrieval was unsuccessful. It also has events available to run code in response to changes in permission status and to report the result of the installation attempt.

### Usage contexts

There are three distinct usage contexts in which `<install>` is useful:

1. **Same origin install: Install the current site**. If you just want to allow the user to install the current site they are looking at as a PWA, you can provide an `<install>` element with no attributes, and the browser will find the app's manifest via its [`<link rel="manifest">`](/en-US/docs/Web/HTML/Reference/Attributes/rel/manifest) element.

   ```html
   <install></install>
   ```

2. **Same origin install: Install suite of apps from landing page**. If you have a site that contains multiple PWAs in separate sub-directories, you can provide multiple `<install>` elements on the site's home page with different `manifest` attributes pointing to the manifests of the different apps to install.

   ```html
   <p>
     Install app1:
     <install manifest="https://example.com/app1/manifest.json"></install>
   </p>
   <p>
     Install app2:
     <install manifest="https://example.com/app2/manifest.json"></install>
   </p>
   <p>
     Install app3:
     <install manifest="https://example.com/app3/manifest.json"></install>
   </p>
   ```

3. **Cross origin install: Third party app store.** A third-party app catalog can provide one-click installation of any apps it wishes to, again by pointing to the app manifest:

   ```html
   <p>
     Install app1:
     <install manifest="https://example1.com/app/manifest.json"></install>
   </p>
   <p>
     Install app2:
     <install manifest="https://example2.com/app/manifest.json"></install>
   </p>
   ```

> [!NOTE]
> The above snippets assume that the referenced manifests specify an [`id`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/id) field. If they don't, then the manifest `id` must be specified in the `<install>` element's [`manifestId`](#manifestid) attribute.

### Criteria for installing a PWA via `<install>`

For an app to be installed via an `<install>` element, the following criteria must be met:

- The app must meet the basic PWA [installability](/en-US/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#installability) criteria, namely, it must have a valid manifest and must be served over HTTPS, or from a `localhost` address.
- The app must have a manifest ID available, either in the manifest file `id` field, or provided in the `<install>` element's `manifestId` attribute.

### Setting the button language

The global [`lang`](/en-US/docs/Web/HTML/Reference/Global_attributes/lang) attribute is used by the `<install>` element to select a language for its rendered text. This means that you can set a `lang` attribute directly on the `<install>` element or on one of its ancestors to tell the browser what language to use for the button label.

If no suitable `lang` attribute is set, the browser's preferred language setting is used.

### Including fallback content

You can include fallback content between the `<install>` element's opening and closing tags that will be displayed if it isn't supported. For example, you might include a message to point to instructions on how to install the PWA on different browsers:

```html-nolint
<install>
  <p>
    Install this site as an app using your browser's install button
    (<a href="../install-instructions/">show me how</a>).
  </p>
</install>
```

### `<install>` blocking

The `<install>` element is designed to prevent bad actors from tricking users into activating it, for example via [clickjacking](/en-US/docs/Web/Security/Attacks/Clickjacking). To enable this, the browser keeps a record of so-called **blocker reasons** for each rendered element.

When a blocker is active on an `<install>` element, it is prevented from functioning (blocked), either temporarily or permanently, depending on the reason. When a `<install>` element is blocked, it is said to be invalid. You can check whether it is invalid by querying the {{domxref("HTMLInstallElement.isValid")}} property. You can also return the reason why it is invalid via the {{domxref("HTMLInstallElement.invalidReason")}} property — see that page for a full list of possible reasons.

### Styling restrictions

The `<install>` element has several constraints on the CSS styles that can be applied to it. Some of these constraints are designed to enforce fundamental accessibility, and will result in the button being deactivated if they are not adhered to. Some enforce certain values or value ranges for various properties.

The constraints are the same as those applied to the `<geolocation>` element. See [`<geolocation>` > Styling restrictions](/en-US/docs/Web/HTML/Reference/Elements/geolocation#styling_restrictions).

## Accessibility

The `<install>` element has an accessible name written in the [language it is set to](#setting_the_button_language). It also has a [`role`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles) of [`button`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) so that it is recognized as a button by screen readers.

In addition, the `<install>` element has a default [`tabindex`](/en-US/docs/Web/HTML/Reference/Global_attributes/tabindex) value of `0`, so it behaves like a real `<button>` with respect to keyboard focus.

Finally, refer to [`<geolocation>` > Accessibility restrictions](/en-US/docs/Web/HTML/Reference/Elements/geolocation#accessibility_restrictions) for information on styling constraints applied to the `<install>` element to enforce fundamental accessibility requirements.

## Security considerations

The `<install>` element is restricted to [secure contexts](/en-US/docs/Web/Security/Defenses/Secure_Contexts) (HTTPS).

Access to the API is also controlled via the {{httpheader("Permissions-Policy/web-app-installation", "web-app-installation")}} {{httpheader("Permissions-Policy")}} directive.

## Examples

TBD

## Technical summary

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/HTML/Guides/Content_categories"
          >Content categories</a
        >
      </th>
      <td>
        <a href="/en-US/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flow content</a
        >,
        <a href="/en-US/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >phrasing content</a
        >, interactive content, palpable content.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>Any suitable transparent fallback content.</td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>None, both the starting and ending tag are mandatory.</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>Any element that accepts phrasing content.</td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >No corresponding role</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>
        <a href="/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/button_role"><code>button</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLInstallElement")}}</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLInstallElement")}}
- {{domxref("Navigator.install()")}}
- The {{httpheader("Permissions-Policy/web-app-installation", "web-app-installation")}} [Permissions Policy](/en-US/docs/Web/HTTP/Guides/Permissions_Policy)

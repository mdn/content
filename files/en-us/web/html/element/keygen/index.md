---
title: <keygen>
slug: Web/HTML/Element/keygen
tags:
  - Deprecated
  - Element
  - HTML
  - Deprecated
  - Reference
  - Web
browser-compat: html.elements.keygen
---

{{HTMLRef}}{{deprecated_header}}

The **`<keygen>`** [HTML](/en-US/docs/Web/HTML) element exists to facilitate generation of key material, and submission of the public key as part of an [HTML form](/en-US/docs/Learn/Forms). This mechanism is designed for use with Web-based certificate management systems. It is expected that the `<keygen>` element will be used in an HTML form along with other information needed to construct a certificate request, and that the result of the process will be a signed certificate.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories"
          >Content categories</a
        >
      </th>
      <td>
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#flow_content"
          >Flow content</a
        >,
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >phrasing content</a
        >, interactive content,
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#form_listed"
          >listed</a
        >,
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#form_labelable"
          >labelable</a
        >,
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#form_submittable"
          >submittable</a
        >,
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#form_resettable"
          >resettable</a
        >
        <a
          href="/en-US/docs/Web/Guide/HTML/Content_categories#form-associated_content"
          >form-associated element</a
        >, palpable content.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>None, it is an {{Glossary("empty element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>Must have a start tag and must not have an end tag.</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        Any element that accepts
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >phrasing content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>None</td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{DOMxRef("HTMLKeygenElement")}}</td>
    </tr>
  </tbody>
</table>

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

- {{HTMLAttrDef("autofocus")}}
  - : This Boolean attribute lets you specify that the control should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form element in a document can have the `autofocus` attribute, which is a Boolean.
- {{HTMLAttrDef("challenge")}}
  - : A challenge string that is submitted along with the public key. Defaults to an empty string if not specified.
- {{HTMLAttrDef("disabled")}}
  - : This Boolean attribute indicates that the form control is not available for interaction.
- {{HTMLAttrDef("form")}}
  - : The form element that this element is associated with (its _form owner_). The value of the attribute must be an `id` of a {{HTMLElement("form")}} element in the same document. If this attribute is not specified, this element must be a descendant of a {{HTMLElement("form")}} element. This attribute enables you to place `<keygen>` elements anywhere within a document, not just as descendants of their form elements.
- {{HTMLAttrDef("keytype")}}
  - : The type of key generated. The default value is `RSA`.
- {{HTMLAttrDef("name")}}
  - : The name of the control, which is submitted with the form data.

The element is written as follows:

```html
<keygen name="name" challenge="challenge string" keytype="type"
        keyparams="pqg-params">
```

The `keytype` parameter is used to specify what type of key is to be generated. Valid values are "`RSA`", which is the default, "`DSA`" and "`EC`". The `name` and `challenge` attributes are required in all cases. The `keytype` attribute is optional for RSA key generation and required for DSA and EC key generation. The `keyparams` attribute is required for DSA and EC key generation and ignored for RSA key generation. `PQG` is a synonym for `keyparams`. That is, you may specify `keyparams="pqg-params"` or `pqg="pqg-params"`.

For RSA keys, the `keyparams` parameter is not used (ignored if present). The user may be given a choice of RSA key strengths. Currently, the user is given a choice between "high" strength (2048 bits) and "medium" strength (1024 bits).

For DSA keys, the `keyparams` parameter specifies the DSA PQG parameters which are to be used in the keygen process. The value of the `pqg` parameter is the BASE64 encoded, DER encoded Dss-Parms as specified in IETF [RFC 3279](https://datatracker.ietf.org/doc/html/rfc3279). The user may be given a choice of DSA key sizes, allowing the user to choose one of the sizes defined in the DSA standard.

For EC keys, the `keyparams` parameter specifies the name of the elliptic curve on which the key will be generated. It is normally a string from the list in [RFC 5480, section 2.1.1.1](https://datatracker.ietf.org/doc/html/rfc5480#section-2.1.1.1). (Note that only a subset of the curves named there may actually be supported in any particular browser.) If the `keyparams` parameter string is not a recognized curve name string, then a curve is chosen according to the user's chosen key strength (low, medium, high), using the curve named "`secp384r1`" for high, and the curve named "`secp256r1`" for medium keys. (Note: choice of the number of key strengths, default values for each strength, and the UI by which the user is offered a choice, are outside of the scope of this specification.)

The `<keygen>` element is only valid within an HTML form. It will cause some sort of selection to be presented to the user for selecting key size. The UI for the selection may be a menu, radio buttons, or possibly something else. The browser presents several possible key strengths. Currently, two strengths are offered, high and medium. If the user's browser is configured to support cryptographic hardware (e.g. "smart cards") the user may also be given a choice of where to generate the key, i.e., in a smart card or in software and stored on disk.

When the submit button is pressed, a key pair of the selected size is generated. The private key is encrypted and stored in the local key database.

```
PublicKeyAndChallenge ::= SEQUENCE {
    spki SubjectPublicKeyInfo,
    challenge IA5STRING
}
SignedPublicKeyAndChallenge ::= SEQUENCE {
    publicKeyAndChallenge PublicKeyAndChallenge,
    signatureAlgorithm AlgorithmIdentifier,
    signature BIT STRING
}
```

The public key and challenge string are DER encoded as `PublicKeyAndChallenge`, and then digitally signed with the private key to produce a `SignedPublicKeyAndChallenge`. The `SignedPublicKeyAndChallenge` is {{Glossary("Base64")}} encoded, and the ASCII data is finally submitted to the server as the value of a form name/value pair, where the name is _name_ as specified by the `name` attribute of the `keygen` element. If no challenge string is provided, then it will be encoded as an `IA5STRING` of length zero.

Here is an example form submission as it would be delivered to a CGI program by the HTTP server:

```
commonname=John+Doe&email=doe@foo.com&org=Foobar+Computing+Corp.&
orgunit=Bureau+of+Bureaucracy&locality=Anytown&state=California&country=US&
key=MIHFMHEwXDANBgkqhkiG9w0BAQEFAANLADBIAkEAnX0TILJrOMUue%2BPtwBRE6XfV%0AWtKQbsshxk5ZhcUwcwyvcnIq9b82QhJdoACdD34rqfCAIND46fXKQUnb0mvKzQID%0AAQABFhFNb3ppbGxhSXNNeUZyaWVuZDANBgkqhkiG9w0BAQQFAANBAAKv2Eex2n%2FS%0Ar%2F7iJNroWlSzSMtTiQTEB%2BADWHGj9u1xrUrOilq%2Fo2cuQxIfZcNZkYAkWP4DubqW%0Ai0%2F%2FrgBvmco%3D
```

## Specifications

Not part of any current specifications.

## Browser compatibility

{{Compat}}

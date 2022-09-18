---
title: Privacy, permissions, and information security
slug: Web/Privacy
tags:
  - Feature Policy
  - Information
  - Permissions
  - Personalize
  - Privacy
  - Protection
  - Web
  - allow
  - allowlist
  - data
  - permission
  - personal
---


As users use the web for more and more of their daily tasks, more of their private or personally-identifying information they share, ideally only with sites they trust. Cooperation among web content, the web browser, and the web server is needed to achieve as much privacy and information security as possible. In this article, we examine how to create web content that minimizes the risk of users' personal information or imagery being obtained unexpectedly by third parties.

## Security and privacy defined

Before we go into any depth about the various security and privacy features available to users on the web, let's define some important terms.

- Personally identifiable information

  - : Personally identifiable information (PII) is information which can be used, in whole or in part, to track down and/or identify a specific person. As such, PII extends beyond the web to all aspects of life. For example, if a site leaks a list of users' names and zip codes online, a bad actor could almost certainly track down at least some percentage of those users by using the corresponding phone books.

    Personally identification can include information like usernames, real names, passwords, phone numbers or addresses (or even portions of them), information about medical history, Social Security Numbers, driver licenses, or any other form of ID or ID number, credit card information, and so forth. It's a very broad range of information. Whenever working with data, always stop and think: is there any way this can be used to even through many steps identify a specific person?

- Privacy

  - : The concept of privacy is somewhat hard to define. Everyone has some idea what it means to keep something private, but when talking about the privacy of data, it becomes murky. Fundamentally, privacy of your data on the internet is about ensuring that information that has personal implications is kept out of the hands of unauthorized persons or organizations, regardless of how it's obtained.

    Privacy exceptions may be granted to specific sites or applications, but it may also be granted _conditionally_, such as by permitting only a select group of people to access it, or only allowing the information to be accessed and used for a limited period of time.

- Security
  - : Security is about the active protection of data or a system against being accessed, downloaded, or operated by people or organizations that don't have permission to do so. Good security practices aim to prevent unauthorized access to systems or data, regardless of what the target is.

## Personal and private information

<!--what kind of information is private or personal?-->

## Privacy risks

<!--what are ways personal information can be gotten by third parties?-->

### Fingerprinting

**Fingerprinting** is a technique used to gather a variety of information that's made available by a user's browser and collating it until it becomes possible to uniquely identify that user's browser. Even seemingly innocuous information can in principle be used in the fingerprinting process, though the more unique the information is to the particular device the better.

Modern browsers take steps to help prevent fingerprinting-based attacks by either not allowing information to be accessed or, where the information must be made available, by introducing variations that prevent it from being used for identification purposes.

For example, if a web site queries a user's browser for the elapsed time, a comparison of that time to the time as reported by the server might be useful as a factor in fingerprinting. Because of this, browsers typically introduce a small amount of variability to timers in order to make them less useful for identifying the user's system.

## New privacy technology

Web browsers are actively working on improving the privacy space through new features:

{{ListSubpages()}}

## Privacy and security controls

There are multiple layers of controls for helping to protect users against security and privacy breaches. These start at the web server, include the very communication layer used over the network,  and then extend through the web browser's security offerings before reaching your web app code and the efforts it takes to secure itself and the data the user entrusts to it.

There are several web technologies and features at play to manage privacy and security. The following list includes features affecting both, since many of these features are used for both.

<table class="standard-table" style="max-width: 42rem">
  <caption>
    Web technologies and features used to enforce security and privacy
  </caption>
  <thead>
    <tr>
      <th scope="col">Technology or feature</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="/en-US/docs/Web/Security/Certificate_Transparency">Certificate Transparency</a>
      </td>
      <td>
        An open standard for monitoring and auditing certificates, creating a
        database of public logs that can be used to help identify incorrect or
        malicious certificates
      </td>
    </tr>
    <tr>
      <td><a href="/en-US/docs/Web/HTTP/CSP">Content Security Policy</a></td>
      <td>
        Provides the ability to define the extent to which a document's content
        can be accessed by other devices over the web; used in particular to
        prevent or mitigate attacks on the server
      </td>
    </tr>
    <tr>
      <td><a href="/en-US/docs/Web/HTTP/Feature_Policy">Feature Policy</a></td>
      <td>
        Lets web developers selectively enable, disable, and modify the behavior
        of certain features and APIs both for a document and for subdocuments
        loaded in {{HTMLElement("iframe")}}s
      </td>
    </tr>
    <tr>
      <td>
        {{HTMLElement("iframe")}}'s {{htmlattrxref("allow", "iframe")}}
        attribute
      </td>
      <td>
        Technically part of Feature Policy, the <code>allow</code> attribute on
        an <code>&#x3C;iframe></code> specifies which web features the document
        in the frame should be allowed to access
      </td>
    </tr>
    <tr>
      <td>
        <a href="/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security">HTTP Strict Transport Security</a> (HSTS)
      </td>
      <td>
        HSTS is used by servers to let them protect themselves from protocol
        downgrade and cookie hijack attacks by letting sites tell clients that
        they can only use HTTPS to communicate with the server
      </td>
    </tr>
    <tr>
      <td><a href="/en-US/docs/Glossary/HTTP_2">HTTP/2</a></td>
      <td>
        While HTTP/2 technically does not <em>have</em> to use encryption, most
        browser developers are only supporting it when used with HTTPS, so it
        can be thought of in that regard as being security-related
      </td>
    </tr>
    <tr>
      <td><a href="/en-US/docs/Web/API/Permissions_API">Permissions API</a></td>
      <td>
        Provides a way to determine the status of permissions for the current
        browser context
      </td>
    </tr>
    <tr>
      <td>
        <a href="/en-US/docs/Web/Security/Transport_Layer_Security">Transport Layer Security</a>
        (TLS); formerly known as Secure Sockets Layer (SSL)
      </td>
      <td>
        TLS provides security and privacy by encrypting data during transport
        over the network. This is the technology behind the
        <a href="/en-US/docs/Glossary/https">HTTPS</a> (HyperText Transport
        Protocol Secured) protocol
      </td>
    </tr>
  </tbody>
</table>

Not all of these are generally directly used within code; notably, the [Permissions API](/en-US/docs/Web/API/Permissions_API), [Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy), and the {{htmlattrxref("allow", "iframe")}} attribute on {{HTMLElement("iframe")}} elements are primary tools directly used by code to help secure a site and its content.

## Keeping personal data safe

## Managing site permissions

## Bringing it all together

<!--using Feature Policy with permissions and so forth; how to use them together, how they interact, etc.-->

### Permission requests in \<iframe> elements

Things can get tricky when your web app uses the {{HTMLElement("iframe")}} element to embed content from another site inside your own, especially if the document you load into the frame has its own permission needs to consider.

While specifications for these technologies either state or recommend tactics for handling situations like this, browsers may offer different solutions to improve security even further or to try new features, or try to reduce complexity for users, among other possible reasons.

<!-- allow attribute, feature policy, and permissions api stuff -->

A specific user experience issue that often arises is a document that's loaded with permission to access a resource and the document contains an {{HTMLElement("iframe")}} with the {{htmlattrxref("allow", "iframe")}} attribute to delegate that permission to the contents of the frame. In this case, it's possible for the user to wind up being prompted repeatedly for that same resource, first by the main page, then by the document in the frame.

Browsers may choose to provide ways around this. For example, in Firefox 73, the user permission requests were revised so that when an `<iframe>` uses the `allow` keyword to delegate permission to the embedded document, the browser asks the user to grant the parent document permission to use the resource, and that permission is then shared with the embedded content that requested the resource to begin with.

<!-- diagram and/or code snippet to clarify things-->

## See also

- [Web security](/en-US/docs/Web/Security)
- [Permissions API](/en-US/docs/Web/API/Permissions_API)
- [Using Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy) and the HTTP {{HTTPHeader("feature-policy")}} header

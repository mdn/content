---
title: Supply chain attacks
slug: Web/Security/Attacks/Supply_chain_attacks
page-type: guide
sidebar: security
---

A _software supply chain_ consists of all the software and tools used to create and maintain a software product. This includes not only the software developed for the product itself but all the software and tools used in its production.

In a supply chain attack, the attacker targets part of the product's supply chain in order to compromise the product itself.

The most obvious example here is a third-party library. If you use, for example, an [npm](https://www.npmjs.com/) package developed by a third party, it has the ability to compromise your site. It may do so deliberately, if it is malicious, or accidentally, if it contains inadvertent vulnerabilities of its own. Essentially, you have to trust your third-party dependencies as much as you trust your own code.

Less obviously, the same principle applies to all the tools you use in creating your software, including code editors, editor plugins, version control systems, build tools, and so on. Any of these tools could insert malicious or vulnerable code into your final software product, in the course of the transformations they apply.

In this document we'll outline practices to follow to secure your software supply chain. It's organized into two main sections:

- [Securing your development environment](#securing_your_development_environment): practices to help ensure your own code isn't compromised.
- [Managing third-party dependencies](#managing_third-party_dependencies): practices to help ensure that your dependencies are not compromised.

## Securing your development environment

One route for a supply chain attack is for an attacker to introduce vulnerabilities or malicious code directly into your own product. In this section we'll describe some practices that can counter this threat.

### Implementing access control

Implement strong access control for everyone working on the project, including anyone with write access to your code repository or with the permissions to modify the build or testing configuration. Good practices here include:

- Requiring {{glossary("multi-factor authentication")}} for team members.
- Following the {{glossary("principle of least privilege")}}: that is, only giving privileges to team members that need them, and actively minimizing the number of team members that are granted very powerful permissions.

### Securing tools

Assess the security risk of any of the tools you use in the production of your site, including:

- Text editors and IDEs
- Editor plugins
- Source control systems
- All tools involved in your build, test, and deployment processes

For open source software dependencies, you can use the [Concise Guide for Evaluating Open Source Software](https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software), published by the [OpenSSF](https://openssf.org/), as a guide.

### Securing your configuration

Understand and apply secure settings for your tools, especially your source control system. Key protections are:

- Ensuring that pull requests (PRs) go through review and explicit approval from a code owner before they can be merged.
- Ensuring that PRs pass {{glossary("continuous integration")}} checks before they can be merged.
- Requiring that commits are signed.

See the OpenSSF's [Source Code Management Platform Configuration Best Practices](https://best.openssf.org/SCM-BestPractices/), which includes specific checklists for GitHub and GitLab.

## Managing third-party dependencies

Third-party dependencies include not only libraries and frameworks that your code uses, but all third-party tools involved in the development process, including editors, IDEs, source control systems, package managers, and build tools.

To mitigate problems with third-party dependencies, we'll discuss two practices:

1. Keeping an inventory of dependencies, and using it to monitor them for vulnerabilities.
2. Defining and following a process for adding new dependencies.
3. Using Subresource Integrity for external scripts.

### Keeping an inventory

To be able to manage dependencies it's obviously essential to know what they are. An inventory of software dependencies is called a _Software Bill of Materials_ (SBOM).

Any inventory is better than none: however, using a standard format for representing an SBOM means you can:

- Share your SBOM with third parties
- Integrate tools that can understand your SBOM for purposes such as regulatory compliance or vulnerability monitoring.

The two most common standards for representing a software bill of materials are:

- [CycloneDX](https://cyclonedx.org/), originally developed by [OWASP](https://owasp.org/).
- [SPDX](https://spdx.dev/), maintained by the [Linux Foundation](https://www.linuxfoundation.org/).

Both these standards have good support, and you can use either to represent the SBOM for your project. SPDX was initially focused on helping products ensure that they are compliant with open source software licenses, but has added features to support security use cases. CycloneDX is a newer and more lightweight standard which was focused from the start on promoting supply chain security.

#### Anatomy of an SBOM

> [!NOTE]
> In this section we'll use CycloneDX as a concrete example of an SBOM format.
>
> This section only provides an brief introduction to some of the most fundamental parts of the CycloneDX object model. For the full details, see the CycloneDX [Authoritative Guide to SBOM](https://cyclonedx.org/guides/OWASP_CycloneDX-Authoritative-Guide-to-SBOM-en.pdf).

In CycloneDX, all dependencies are either _components_ or _services_.

- Components include, but are not limited to, software frameworks, libraries, applications, and configuration data.
- Services represent external APIs that software may call, for example through endpoint URIs.

Every component and service used in the product, either directly or indirectly, is represented by an object in the SBOM. The object includes information about the item including its name, version, author, license, description, {{glossary("hash_function", "hashes")}} (for components) and endpoint URIs (for services).

The SBOM also lists vulnerabilities that have been identified in the product's dependencies. Each item in the list contains information about this vulnerability, including a description, a set of [CWE](https://cwe.mitre.org/index.html) codes, mitigations, links to advisories, and the identifiers for the components or services that the vulnerability affects.

#### Creating an SBOM

You can generate an SBOM for a product using a tool such as [cdxgen](https://cyclonedx.github.io/cdxgen/#/). An SBOM is usually generated as part of the build process, although it is possible to generate one at other stages of the software lifecycle.

#### Using an SBOM

An SBOM enables you to implement several defenses against supply chain attacks, and we'll list three important ones here:

- **Vulnerability management**: one of the main uses for an SBOM is to respond to vulnerabilities that have been identified in your dependencies. You can use third-party tools such as OWASP's [Dependency-Track](https://dependencytrack.org/), which automate this by scanning sources of vulnerability reports such as the [NIST National Vulnerability Database](https://nvd.nist.gov/) or [GitHub Advisories](https://github.com/advisories).
- **Integrity verification**: if the SBOM contains hashes for dependencies, it's possible to verify that the source of the component you're depending on has not been modified from its original released form.
- **Supplier risk management**: by capturing information about the supplier of your dependencies, an SBOM can help you understand when you are depending on components or services from suppliers that are no longer considered reliable.

### Evaluating new dependencies

Before adding any new dependencies, you should assess how much of a security risk they represent. You need to be confident that the dependency is actively maintained, that it has a record of fixing issues and a process for reporting and responding to security vulnerabilities.

The [Concise Guide for Evaluating Open Source Software](https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software), published by the [OpenSSF](https://openssf.org/), lists questions you should ask before adding a new dependency.

### Using Subresource Integrity

Many websites include externally hosted scripts: most notably, but not exclusively, scripts that are served from a {{glossary("CDN", "Content Delivery Network (CDN)")}}:

```html
<script src="https://cdn.example.org/library.js"></script>
```

This represents a risk to your supply chain: if an attacker can get control of the `cdn.example.org` domain, they can replace the script with a malicious script, and thus compromise your site.

External scripts, like other software dependencies, should be part of your SBOM, but an additional defense is to set the script's [`integrity`](/en-US/docs/Web/HTML/Reference/Elements/script#integrity) attribute:

```html
<script
  src="https://cdn.example.org/library.js"
  integrity="sha256-d5f450f7ce715d827de27ca569e183f819d33c1e7601875fd61eccbc98f56c5b"></script>
```

The value of this attribute contains a {{glossary("hash_function", "cryptographic hash")}} of the script's contents. If the script has been modified by an attacker, then the browser will refuse to load it, and you will be protected.

This does add an extra maintenance burden: every time the source changes (for example, every time a new version is released) you must update the attribute's value in your code.

The {{htmlelement("link")}} element also supports the `integrity` attribute, so you can (and should) use it for CSS stylesheets as well as scripts.

See [Subresource Integrity](/en-US/docs/Web/Security/Subresource_Integrity) for more details.

## Defense summary checklist

- Require {{glossary("multi-factor authentication")}} for team members and minimize permissions granted.
- Assess tools involved in your build, test, and deployment processes
- Ensure pull requests go through review and pass {{glossary("continuous integration")}} checks
- Keep an inventory (SBOM) of dependencies
- Define a process for managing, updating, monitoring dependencies
- Use Subresource Integrity for externally referenced scripts and stylesheets
- Lock dependency versions (`package-lock.json`)

## See also

- [Software Supply Chain Security](https://cheatsheetseries.owasp.org/cheatsheets/Software_Supply_Chain_Security_Cheat_Sheet.html) at [owasp.org](https://owasp.org/)

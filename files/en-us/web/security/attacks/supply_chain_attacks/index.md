---
title: Supply chain attacks
slug: Web/Security/Attacks/Supply_chain_attacks
page-type: guide
sidebar: security
---

A _software supply chain_ consists of all the software and tools used to create and maintain a software product. This includes not only the software developed for the product itself but all the software and tools used in its production.

In a supply chain attack, the attacker targets part of the product's supply chain in order to compromise the product itself.

The most obvious example here is a third-party library. If you use, for example, an [npm](https://www.npmjs.com/) package developed by a third party, it has the ability to compromise your site. It may do so deliberately, if it is malicious, or accidentally, if it contains inadvertent vulnerabilities of its own. Essentially, you have to trust your third-party dependencies as much as you trust your own code.

Less obviously, the same principle applies to all the tools you use in creating your software, including code editors, editor plugins, version control systems, build tools, and so on. Any of these tools could insert malicous or vulnerable code into your final software product, in the course of the transformations they apply.

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

- Ensuring that PRs go through review and explicit approval from a code owner before they can be merged.
- Ensuring that PRs pass {{glossary("continuous integration")}} checks before they can be merged.
- Requiring that commits are signed.

See the OpenSSF's [Source Code Management Platform Configuration Best Practices](https://best.openssf.org/SCM-BestPractices/), which includes specific checklists for GitHub and GitLab.

## Managing third-party dependencies

Third-party dependencies include not only libraries and frameworks that your code uses, but all third-party tools involved in the development process, including editors, IDEs, source control systems, package managers, and build tools.

To mitigate problems with third-party dependencies, we'll discuss two practices:

1. Keeping an inventory of dependencies, and using it to monitor them for vulnerabilities.
2. Defining and following a process for adding new dependencies.

### Keeping an inventory

To be able to manage dependencies it's obviously essential to know what they are. An inventory of software dependencies is called a _Software Bill of Materials_ (SBOM).

Any inventory is better than none: however, using a standard format for representing an SBOM means you can:

- Share your SBOM with third parties
- Integrate tools that can understand your SBOM for purposes such as regulatory compliance or vulnerability monitoring.

The two most common standards for representing a software bill of materials are:

- [CycloneDX](https://cyclonedx.org/), originally developed by [OWASP](https://owasp.org/).
- [SPDX](https://spdx.dev/), maintained by the [Linux Foundation](https://www.linuxfoundation.org/).

Both these standards have good support, and you can use either to represent the SBOM for your project. SPDX was initally focused on helping products ensure that they are compliant with open source software licenses, but has added features to support security use cases. CycloneDX is a newer and more lightweight standard which was focused from the start on promoting supply chain security.

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

- **Vulnerability management**: one of the main uses for an SBOM is to respond to vulnerabilites that have been identified in your dependencies. You can use third-party tools such as OWASP's [Dependency-Track](https://dependencytrack.org/), which automate this by scanning sources of vulnerability reports such as the [NIST National Vulnerability Database](https://nvd.nist.gov/) or [GitHub Advisories](https://github.com/advisories).
- **Integrity verification**: if the SBOM contains hashes for dependencies, it's possible to verify that the source of the component you're depending on has not been modified from its original released form.
- **Supplier risk management**: by capturing information about the supplier of your dependencies, an SBOM can help you understand when you are depending on components or services from suppliers that are no longer considered reliable.

### Evaluating new dependencies

Before adding any new dependencies, you should assess how much of a security risk they represent. You need to be confident that the dependency is actively maintained, that it has a record of fixing issues and a process for reporting and responding to security vulnerabilities.

The [Concise Guide for Evaluating Open Source Software](https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software), published by the [OpenSSF](https://openssf.org/), lists questions you should ask before adding a new dependency.

## See also

- [Software Supply Chain Security](https://cheatsheetseries.owasp.org/cheatsheets/Software_Supply_Chain_Security_Cheat_Sheet.html) at [owasp.org](https://owasp.org/)

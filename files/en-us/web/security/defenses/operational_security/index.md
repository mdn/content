---
title: Operational security
slug: Web/Security/Defenses/Operational_security
page-type: guide
sidebar: security
---

In this guide we'll cover security practices that are not directly related to the code you write, but are concerned with how you develop, build, ship, and update your project.

Many of these are defenses against [supply chain attacks](/en-US/docs/Web/Security/Attacks/Supply_chain_attacks), in which the attacker subverts the processes you follow to develop your sites, to introduce malicious or vulnerable code into them. Defenses against supply chain attacks are usually about securing your development process.

We've split this guide into three sections:

- Securing your development environment: this includes practices to follow regarding the way you develop and update your own code.

- Managing dependencies: almost all software projects depend on packages written by a third party. This section lists practices to follow that reduce the risk involved when you choose to do this.

- Monitoring and response: this section lists practices that help you discover security problems in your project and respond to them.

## Securing your development environment

In this section we'll describe steps you can take to prevent attackers from compromising your project's code.

### Requiring strong authentication for project maintainers

By gaining control of a maintainer's account, an attacker can introduce malicious code or ship a malicious update of their product.

This means that a project must use a strong authentication method for maintainer accounts.

- If possible, use [passkeys](/en-US/docs/Web/Security/Authentication/Passkeys) to authenticate maintainers.

- If this is not possible, use {{glossary("multi-factor authentication", "multi-factor authentication (MFA)")}}, combining passwords with [time-based one-time passwords (TOTP)](/en-US/docs/Web/Security/Authentication/OTP#totp).

Note that attackers often use [phishing](/en-US/docs/Web/Security/Attacks/Phishing) to gain control of maintainer accounts. While MFA makes phishing more difficult, [most forms of MFA do not prevent it](/en-US/docs/Web/Security/Attacks/Phishing#multi-factor_authentication). Passkeys provide the strongest defense against phishing attacks.

### Implementing role-based access control for project maintainers

Projects should only grant maintainers the privileges that they need for the work that they do. For example, you might allow only a subset of maintainers to modify the project's security settings or to make new releases. This limits the damage that an attacker can do, if they compromise the account of a maintainer.

### Evaluating the tools you use

Apart from [direct third-party dependencies](#managing_third-party_dependencies), projects typically use a number of third-party tools in the process of developing, testing, and shipping software. This includes, for example:

- Text editors and IDEs
- Editor plugins
- Source control systems
- All tools involved in your build, test, and deployment processes

If an attacker can compromise these tools, they can potentially compromise your product. You can reduce the risk here by evaluating tools before choosing to use them. For open source software dependencies, you can use the [Concise Guide for Evaluating Open Source Software](https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software), published by the [OpenSSF](https://openssf.org/), as a guide.

### Securing your configuration

Understand and apply secure settings for your tools, especially your source control system. Key protections are:

- Ensuring that pull requests (PRs) go through review and explicit approval from a code owner before they can be merged.
- Ensuring that PRs pass {{glossary("continuous integration")}} checks before they can be merged.
- Requiring that commits are signed.

See the OpenSSF's [Source Code Management Platform Configuration Best Practices](https://best.openssf.org/SCM-BestPractices/), which includes specific checklists for GitHub and GitLab.

## Managing third-party dependencies

Third-party dependencies include not only libraries and frameworks that your code uses, but all third-party tools involved in the development process, including editors, IDEs, source control systems, package managers, and build tools.

To mitigate problems with third-party dependencies, we'll discuss the following practices:

1. Evaluating new dependencies
2. Updating existing dependencies
3. Maintaining a _Software Bill of Materials_ (SBOM)

### Evaluating new dependencies

Before adding a new dependency, you should assess how much of a security risk it represents. You need to be confident that the dependency is actively maintained, has a record of fixing issues, and has a process for reporting and responding to security vulnerabilities.

You should consider whether the risk of adding the dependency outweighs the cost of implementing the feature yourself.

The [Concise Guide for Evaluating Open Source Software](https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software), published by the [OpenSSF](https://openssf.org/), lists questions you should ask before adding a new dependency.

### Updating dependencies

Once you have added a dependency to your project, the dependency's supplier will typically release new versions with new features, bug fixes, and security fixes. You will usually want to take advantage of these updates, by implementing a mechanism to keep the dependency up to date. Tools such as GitHub's [dependabot](https://docs.github.com/en/code-security/tutorials/secure-your-dependencies/dependabot-quickstart-guide) can help with this, by detecting new versions of dependencies and automatically opening pull requests to update your project.

However, updating dependencies too eagerly comes with its own risks. For example, suppose you add a dependency on a trustworthy third-party package. An attacker then gets control of the package developer's account, and publishes a malicious update. If you immediately accept the update, your project is compromised.

#### Use a lockfile

The first step towards securing dependency updates is to use a _lockfile_ for dependencies, commit it to source control, and use it when building your project.

Package managers like [npm](https://www.npmjs.com/) and [Yarn](https://yarnpkg.com/) let you provide a file such as [package.json](https://docs.npmjs.com/cli/configuring-npm/package-json/) that lists your project's dependencies. You can then run a command that installs the given dependencies so the project can use them.

However, the dependency list doesn't determine the exact version of each package: if the package supplier releases a new version, then it may be automatically included in your project when it is built. If the new version of the dependency is malicious, it may be included in your project automatically, without you even being aware of it.

For example, suppose your package.json includes a dependency named "example-dependency":

```json
{
  "name": "example-project",
  "version": "1.0.0",
  "dependencies": {
    "example-dependency": "^1.0.2"
  }
}
```

Suppose your project's build process automatically runs when your suppliers release new versions. The build process starts the build by calling `npm install`. This will fetch the latest version of "example-dependency", subject to the version range `"^1.0.2"`.

At version `1.0.2`, which is the point you added it to the project, "example-dependency" is a useful, benign package. Then an attacker takes over the account belonging to the developer of "example-dependency", and publishes a malicious `1.0.3` version. Your build process runs, installs the malicious package, and you are compromised.

All this has happened without any changes to your project's direct artifacts, or any opportunity for you to review the update and see if it looks suspicious.

The solution to this is to use a lockfile when building your project. A lockfile is automatically generated whenever a project's dependencies are installed, and it lists the exact versions of the direct and indirect dependencies used in a project. With the lockfile present, you can no longer install versions of the dependencies other than the ones listed in it.

That is, if _package.json_ tells you that your project is using "example-dependency", then _package.lock_ will tell you exactly which version of "example-dependency" to use, and what the versions of its dependencies are.

Your project's lockfile should be checked into source control. When building your project you should use the lockfile to control which versions of your dependencies are installed: in npm you do this by using [`npm ci`](https://docs.npmjs.com/cli/commands/npm-ci/) instead of `npm install`.

> [!NOTE]
> Fixing the versions of your dependencies in this way is sometimes called "version pinning".

This means that to update dependencies, your build system has to make a pull request to update the lockfile, and this gives you the chance to review the update and ensure you want to accept it.

#### Review updates

When reviewing an update to a dependency, consider whether it's an update you want to accept:

- Read the changelog for the release, to understand what it claims to be offering (and whether you need to accept it at all, at this point).
- See if it introduces any additional dependencies.
- If possible, review the source code updates, and see if any of them are inexplicable or don't match up with the changelog.
- Consider waiting a little while before updating: often, supply chain attacks are quickly discovered by security researchers, and it is better for you if an update is found to be malicious before you have accepted it.

### Maintaining a Software Bill of Materials

To get a deeper insight into your dependencies, you can maintain a detailed inventory of them. This is called a _Software Bill of Materials_ (SBOM).

A lockfile is really a kind of SBOM: however, the term "SBOM" usually refers to a separate standard format for representing dependencies. These standards are usually both broader and deeper than a lockfile. That is:

- They can capture dependencies, such as web services, that are not represented in a lockfile.
- They can capture additional information about each dependency that is not represented in a lockfile.

Using a standard format for representing an SBOM also means you can:

- Share your SBOM with third parties
- Integrate tools that can understand your SBOM for purposes such as regulatory compliance or vulnerability monitoring.

The two most common standards for representing a software bill of materials are:

- [CycloneDX](https://cyclonedx.org/), originally developed by [OWASP](https://owasp.org/).
- [SPDX](https://spdx.dev/), maintained by the [Linux Foundation](https://www.linuxfoundation.org/).

Both these standards have good support, and you can use either to represent the SBOM for your project. SPDX was initially focused on helping products ensure compliance with open source software licenses, but has added features to support security use cases. CycloneDX is a newer and more lightweight standard focused from the start on promoting supply chain security.

#### Anatomy of an SBOM

> [!NOTE]
> In this section we'll use CycloneDX as a concrete example of an SBOM format.
>
> This section only provides a brief introduction to some of the most fundamental parts of the CycloneDX object model. For the full details, see the CycloneDX [Authoritative Guide to SBOM](https://cyclonedx.org/guides/OWASP_CycloneDX-Authoritative-Guide-to-SBOM-en.pdf).

In CycloneDX, all dependencies are either _components_ or _services_.

- Components include, but are not limited to, software frameworks, libraries, applications, and configuration data.
- Services represent external APIs that software may call, for example through endpoint URIs.

Every component and service used in the product, either directly or indirectly, is represented by an object in the SBOM. The object includes information about the item including its name, version, author, license, description, {{glossary("hash_function", "hashes")}} (for components) and endpoint URIs (for services).

The SBOM also lists vulnerabilities that have been identified in the product's dependencies. Each item in the list contains information about this vulnerability, including a description, a set of [CWE](https://cwe.mitre.org/index.html) codes, mitigations, links to advisories, and the identifiers for the components or services that the vulnerability affects.

#### Creating an SBOM

You can generate an SBOM for a product using a separate tool such as [cdxgen](https://cdxgen.github.io/cdxgen/#/) or a command such as [`npm sbom`](https://docs.npmjs.com/cli/commands/npm-sbom/). An SBOM is usually generated as part of the build process, although it is possible to generate one at other stages of the software lifecycle.

#### Using an SBOM

An SBOM enables you to implement several defenses against supply chain attacks; the three most important ones are as follows:

- **Vulnerability management**: one of the main uses for an SBOM is to respond to vulnerabilities that have been identified in your dependencies. You can use third-party tools such as OWASP's [Dependency-Track](https://dependencytrack.org/), which automate this by scanning sources of vulnerability reports such as the [NIST National Vulnerability Database](https://nvd.nist.gov/) or [GitHub Advisories](https://github.com/advisories).
- **Integrity verification**: if the SBOM contains hashes for dependencies, it's possible to verify that the source of a dependency has not been modified from its original released form.
- **Supplier risk management**: by capturing information about the supplier of your dependencies, an SBOM can help you understand when you are depending on components or services from suppliers that are no longer considered reliable.

## Monitoring and response

Once a website is deployed, you can help detect and respond to attacks by logging relevant events and alerting project maintainers when potentially suspicious activity is detected.

You need to find a balance in which maintainers are alerted about real problems, but are not constantly being alerted by false alarms. The specific events which should be logged, and the subset of events that should trigger alarms, is dependent on the project and its threat model, but commonly includes:

- Input validation failures: cases when user input isn't what your website expects. Input types include form input, URL parameters, or file uploads. Validation failures include input with unexpected values, formats, lengths, or parameter names. User input that could not have been entered manually, such as a nonexistent {{htmlelement("select")}} option, is especially suspicious.

- Events related to authentication:
  - Failed attempts to sign in, especially repeated failures in a short space of time.
  - Logins from unexpected locations or devices.
  - Credential management events: changing, creating, or deleting credentials.
  - Triggering secondary flows such as forgotten password flows.

- Access control failures: attempts to access resources without the correct level of authorization.

- [CSP](/en-US/docs/Web/HTTP/Guides/CSP) violations.

## Making backups

Making regular backups of your site and, especially, your data, provides a defense against a number of problems, including but not limited to active attacks:

- Errors by maintainers or buggy tools resulting in data loss or corruption.
- Vandalism by an attacker with write access.
- [Ransomware](https://en.wikipedia.org/wiki/Ransomware) attacks, in which an attacker makes the victim's data inaccessible (for example, by encrypting it) unless the victim pays a ransom to recover it.

## See also

- [Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html) (OWASP)
- [OpenJS Security Collaboration Space](https://github.com/openjs-foundation/security-wg?tab=readme-ov-file#documents--guides) - A central hub for security guidance and resources for the JavaScript ecosystem, including:
  - [SBOM and Supply Chain Security Challenges](https://github.com/openjs-foundation/security-wg/blob/main/docs/SBOM/OpenJS-SBOM-CSCRM-Challenges-Recommendations.md) - Recommendations for JavaScript SBOM and software attestation
  - [Security Compliance Guidelines](https://github.com/openjs-foundation/security-wg/blob/main/docs/OpenJS_Security_Compliance_Guidelines/v1/readme.md) - A comprehensive checklist for operational security
  - [npm Security Best Practices Guide](https://github.com/openjs-foundation/security-wg/blob/main/docs/npm-security-best-practices.md) - Best practices for securing npm packages and dependencies
  - [Secure Releases Guide](https://github.com/openjs-foundation/security-wg/blob/main/docs/Secure_Releases/secure-releases.md) - Guidelines for creating secure software releases

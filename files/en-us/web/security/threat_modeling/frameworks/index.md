---
title: Threat modeling frameworks and tools
slug: Web/Security/Threat_modeling/Frameworks
page-type: guide
sidebar: security
---

Threat modeling is a process that can help developers identify and understand potential security risks in applications and websites.

The [threat modeling guide](/en-US/docs/Web/Security/Threat_modeling/) describes how to perform threat modeling, providing a lightweight overview of the threat modeling process, focusing on the four key questions as defined in the [Threat Modeling Manifesto](https://www.threatmodelingmanifesto.org).

This article describes [STRIDE](#stride) and [LINDDUN](#linddun), frameworks providing structure for threat modeling processes, along with additional resources.

## Frameworks

Frameworks and techniques exist that can help you to think about threats from different perspectives. Frameworks can help you to explore structured answers to the [four threat modeling questions](/en-US/docs/Web/Security/Threat_modeling#1._what_are_we_working_on), such as "What can go wrong?", by providing an outline of the variety of threat categories.

You can reference these categories in your threat models (for example, "STRIDE: Tampering") to indicate that you've considered defined known threat categories, even if your model doesn't include all the categories.

Two popular threat analysis frameworks are [STRIDE](#stride), which focuses on security, and [LINDDUN](#linddun), which focuses on privacy.

### STRIDE

The [STRIDE](https://en.wikipedia.org/wiki/STRIDE_model) framework is a widely recognized threat modeling method developed by Microsoft. Each letter in the STRIDE acronym represents one of the six security threat categories. Within each threat model category, we've included questions you can include in your threat model relevant to the listed category.

- **Spoofing**
  - : Impersonating another user or system to gain unauthorized access, such as an attacker faking a login user interface to steal user credentials. Questions could be:
    - Are cookies protected from theft or reuse?
    - Could an attacker reuse old credentials or sessions?
- **Tampering**
  - : Unauthorized modification of data or systems, such as changing a hidden input field in a checkout form. Questions could be:
    - Is everything encrypted with HTTPS?
    - Can users modify requests parameters, headers, API payloads?
- **Repudiation**
  - : Claiming not to have performed an action, such as a user deleting data and the data not being deleting with no audit trail. Questions could be:
    - Do we log security-relevant events like login failures?
    - Can we trace back actions to a specific user?
- **Information Disclosure**
  - : Unauthorized access to confidential information, such as pushing sensitive environmental values to production. Questions could be:
    - Is personal data exposed via URL query strings?
    - Are secret credentials exposed to the client?
- **Denial of Service (DoS)**
  - : Disrupting services to make them unavailable, such as client-side infinite loops that can freeze the browser or infinite requests that can bog down the server. Questions could be:
    - Can large uploads or heavy database queries be triggered by users?
    - Can API endpoints be called repeatedly without limits?
- **Elevation of Privilege**
  - : Gaining higher access rights than permitted, such as a user changing a variable value and gaining unauthorized access. Questions could be:
    - Can users guess admin endpoint URLs?
    - When are privilege checks performed?

### LINDDUN

The [LINDDUN](https://linddun.org) framework is a widely recognized threat modeling framework about data privacy and is inspired by STRIDE. Each letter in the LINDDUN acronym represents one of the seven categories of privacy threats. Within each threat model category, we've included questions you can include in your threat model relevant to the listed category.

- **Linking**
  - : The ability to associate data or actions to an individual or group. Questions could be:
    - Are cookies used unnecessarily?
    - Can third parties track user behaviors across sites?
- **Identifying**
  - : Learning the identity of an individual. Questions could be:
    - Are pseudonyms or user IDs truly non-identifying?
    - Could identities be revealed through combining publicly available data?
- **Non-repudiation**
  - : The ability to link or attribute a claim (or action) to an individual. Questions could be:
    - Can users perform actions without creating permanent records?
    - Are logs kept longer than necessary?
- **Detecting**
  - : Determining the involvement of an individual based on observation. Questions could be:
    - Does the login reveal if a user exist?
    - Does the system leak if an admin is currently online?
- **Data disclosure**
  - : Excessively collecting, storing, processing or sharing personal data. Questions could be:
    - Are backups, logs, or exports protected?
    - Are analytics or other metric gathering embeds receiving personal data?
- **Unawareness**
  - : Insufficiently informing, involving or empowering individuals in the processing of personal data. Questions could be:
    - Do users understand opt-in or opt-out dialogs?
    - Do users understand what data is collected and why?
- **Non-compliance**
  - : Deviation from security and data management best practices, standards and legislation. Questions could be:
    - Can users request deletion or export of their data?
    - Are third-party services compliant with your policies?

## Other resources

A variety of other documents exists which can help you to think about a diverse set of threats even outside of the STRIDE and LINDDUN categories:

- [RFC 9620 Human Rights Considerations](https://datatracker.ietf.org/doc/rfc9620/)
- [W3C TAG: Ethical Web Principles](https://w3ctag.github.io/ethical-web-principles/)
- [W3C Self-Review Questionnaire: Security and Privacy](https://www.w3.org/TR/security-privacy-questionnaire/#missing-questions)
- [RFC 6973 Privacy Considerations for Internet Protocols](https://datatracker.ietf.org/doc/html/rfc6973)
- [RFC 3552 Guidelines for Writing RFC Text on Security Considerations](https://datatracker.ietf.org/doc/html/rfc3552)
- [Invariant-centric threat modeling](https://github.com/defuse/ictm)

## Threat modeling tools

There are tools designed to make threat modeling easier through standards for visualizing system components, data flows, etc. These tools can help you with creating diagrams, for example. However, these tools are secondary. Even a (digital) drawing board would do it if it leads to discussions with your team. The primary goal should always be better understanding of your systems. The discussions had during threat modeling are more important than tool usage. Keep in mind that a complex diagram that is difficult to understand might not spark great interest in discussing your project's architecture and its threats.

- [OWASP Threat Dragon](https://owasp.org/www-project-threat-dragon/)
- [Microsoft Threat Modeling Tool](https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool)

## See also

- [Guide to threat modeling](/en-US/docs/Web/Security/Threat_modeling/)
- [Example threat model](/en-US/docs/Web/Security/Threat_modeling/Example_threat_model)
- [Threat Modeling Manifesto](https://www.threatmodelingmanifesto.org)
- [W3C Threat Modeling Guide for specification authors](https://w3c.github.io/threat-modeling-guide/)
- [Threat Model for the Web Platform](https://w3c.github.io/threat-model-web/)
- [OWASP Threat Modeling Playbook](https://github.com/OWASP/threat-modeling-playbook)
- [OWASP Threat Modeling Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html)

---
title: Threat modeling frameworks and tools
slug: Web/Security/Threat_modeling/Frameworks
page-type: guide
sidebar: security
---

Threat modeling is a process that can help developers identify and understand potential security risks in applications and websites.

The [threat modeling guide](/en-US/docs/Web/Security/Threat_modeling/) describes how to perform threat modeling. It provides a lightweight overview of the threat modeling process, focusing on the four key questions as defined in the [Threat Modeling Manifesto](https://www.threatmodelingmanifesto.org).

This article describes the [STRIDE](#stride) and [LINDDUN](#linddun) frameworks, which provide structure for threat modeling processes, along with additional resources.

## Frameworks

Frameworks and techniques exist that can help you to think about threats from different perspectives. They can help you to explore structured answers to the [four threat modeling questions](/en-US/docs/Web/Security/Threat_modeling#1._what_are_we_working_on), in particular to the key question "What can go wrong". They do this by offering threat categories.

You can reference these categories in your threat model (for example, "STRIDE: Tampering") to indicate that you thought about a known threat framework category.

Two popular threat analysis frameworks are [STRIDE](#stride), which focuses on security, and [LINDDUN](#linddun), which focuses on privacy.

### STRIDE

The [STRIDE](https://en.wikipedia.org/wiki/STRIDE_model) framework is a widely recognized threat modeling method developed by Microsoft. Each letter in the STRIDE acronym represents one of the six security threat categories. Within each category we've included relevant questions that you can include in your threat model.

- **Spoofing**
  - : Impersonating another user or system to gain unauthorized access, such as an attacker faking a login user interface to steal user credentials.
    - Are cookies protected from theft or reuse?
    - Could an attacker reuse old credentials or sessions?
- **Tampering**
  - : Unauthorized modification of data or systems, such as changing a hidden input field in a checkout form.
    - Is everything encrypted with HTTPS?
    - Can users modify requests parameters, headers, API payloads?
- **Repudiation**
  - : Claiming not to have performed an action, such as a user deleting data and having no deletion audit trail.
    - Do we log security-relevant events like login failures?
    - Can we trace back actions to a specific user?
- **Information disclosure**
  - : Unauthorized exposure of confidential information, such as pushing sensitive environmental values to production.
    - Is personal data exposed via URL query strings?
    - Are secret credentials exposed to the client?
    - Is private production data exposed in a test environment?
- **Denial of Service (DoS)**
  - : Disrupting services to make them unavailable, such as client-side infinite loops that can freeze the browser or infinite requests that can bog down the server.
    - Can large uploads or heavy database queries be triggered by users?
    - Can API endpoints be called repeatedly without limits?
- **Elevation of privilege**
  - : Gaining higher access rights than allowed, such as a user impersonating an admin.
    - Can users guess admin endpoint URLs?
    - When are privilege checks performed?

### LINDDUN

The [LINDDUN](https://linddun.org) framework is a widely recognized threat modeling framework, inspired by STRIDE, that focuses on data privacy threats. Each letter in the LINDDUN acronym represents one of the seven categories of privacy threats. Within each threat model category, we've included questions you can include in your threat model relevant to the listed category.

- **Linking**
  - : The ability to associate data or actions to an individual or group.
    - Can third parties track user behaviors across sites?
- **Identifying**
  - : Learning the identity of an individual.
    - Are pseudonyms or user IDs truly non-identifying?
    - Could identities be revealed through combining publicly available data?
- **Non-repudiation**
  - : The ability to link or attribute a claim (or action) to an individual.
    - Can users perform actions without creating permanent records?
    - Are logs kept longer than necessary?
- **Detecting**
  - : Determining the involvement of an individual based on observation.
    - Does the login reveal if a user exists?
    - Does the system leak information when an admin is online?
- **Data disclosure**
  - : Collecting more information than needed, storing, processing, or sharing, personal data.
    - Are backups, logs, or exports protected?
    - Are analytics or other metric gathering embeds receiving personal data?
- **Unawareness**
  - : Insufficiently informing, involving or empowering individuals in the processing of personal data.
    - Do users understand opt-in or opt-out dialogs?
    - Do users understand what data is collected and why?
- **Non-compliance**
  - : Deviation from security and data management best practices, standards and legislation.
    - Can users request deletion or export of their data?
    - Are third-party services compliant with your policies?

## Other resources

The following documents list a broad and diverse set of threats and threat models for your consideration:

- [RFC 9620 Human Rights Considerations](https://datatracker.ietf.org/doc/rfc9620/)
- [W3C TAG: Ethical Web Principles](https://w3ctag.github.io/ethical-web-principles/)
- [W3C Self-Review Questionnaire: Security and Privacy](https://www.w3.org/TR/security-privacy-questionnaire/#missing-questions)
- [RFC 6973 Privacy Considerations for Internet Protocols](https://datatracker.ietf.org/doc/html/rfc6973)
- [RFC 3552 Guidelines for Writing RFC Text on Security Considerations](https://datatracker.ietf.org/doc/html/rfc3552)
- [Invariant-centric threat modeling](https://github.com/defuse/ictm)

## Threat modeling tools

An effective model is one that helps develop a better understanding of your system.
Threat modeling tools can make it easier to create diagrams, visualize data flows, and so on, that contribute to this goal.

It is important to note that you do not need expensive and powerful tools in order to create an effective threat model. What is important is the methodical approach and discussion around your system. Overly complex diagrams can actually be detrimental if they don't promote and support that discussion.

- [OWASP Threat Dragon](https://owasp.org/www-project-threat-dragon/)
- [Microsoft Threat Modeling Tool](https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool)

## See also

- [Guide to threat modeling](/en-US/docs/Web/Security/Threat_modeling/)
- [Example threat model](/en-US/docs/Web/Security/Threat_modeling/Example_threat_model)
- [Security](/en-US/docs/Web/Security)
- [Threat Modeling Manifesto](https://www.threatmodelingmanifesto.org)
- [W3C Threat Modeling Guide for specification authors](https://w3c.github.io/threat-modeling-guide/)
- [Threat Model for the Web Platform](https://w3c.github.io/threat-model-web/)
- [OWASP Threat Modeling Playbook](https://github.com/OWASP/threat-modeling-playbook)
- [OWASP Threat Modeling Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html)

---
title: Threat modeling
slug: Web/Security/Threat_modeling
page-type: guide
sidebar: security
---

This article describes how to perform threat modeling for a website or a web application. We will provide a lightweight overview of the threat modeling process.

Depending on your goal, threat modeling can be more involved than described here. Maybe you or your team wants to exercise lightweight threat modeling for your own benefit, so that security isn't an afterthought or neglected at all. Or maybe you are required to perform a more heavyweight assessment because, for example, your software will be audited for an Information Security Management System (ISMS) certification ([ISO 27001](https://www.iso.org/standard/27001)) and you use threat modeling to be prepared for that.

In any case, it always makes sense to think about threats and implementing a process to regularly assess the security of your systems. The goal of this article is to provide some inspiration for how to do threat modeling, but ultimately you'll have to introduce a process that works for you, your team, and your goals.

This page describes the overall threat modeling process. The following pages give practical advice and inspiration for threat modeling as well:

- [Example threat model](/en-US/docs/Web/Security/Threat_modeling/Example_threat_model)
  - : An example threat model document for a website.
- [Threat map](/en-US/docs/Web/Security/Threat_modeling/Threat_map)
  - : A map of threats and their responses. If you did THIS then do THAT for protection.

## What is a threat?

A threat is something that has a negative effect on an asset, if it happens.

In practice, security is about reducing the chances that a threat can reach something you care about.

Threats are always present but they don't have to turn into attacks. An attack is a realization of a threat on an operational system (a system is a collection of assets) and ideally, if the security posture of a system is strong enough, potential threats won't turn into actual attacks.

When thinking about threats, we can identify system weaknesses (vulnerabilities), unpatched software or cross-site scripting (XSS) are examples of this.

We then implement mitigations as a response to vulnerabilities: they defend the system to the extent they are able to.

Risk is typically a combination of how likely a threat is to occur and how severe its impact would be.

To illustrate the different terms, let's take a house as an example:

- Threat: a burglar.
- Vulnerability: an unlocked window or a weak door lock.
- Attack: the burglar climbing through the window or picking the lock.
- Mitigation: a strong deadbolt, an alarm system, policy to ensure all windows are locked.
- Risk: we announced publicly that we are away on vacation, which increases the risk for burglars to try to get into our house.

## What is threat modeling?

Threat modeling is a structured, repeatable process with the goal to secure systems and to identify vulnerabilities and to prioritize mitigations. It is a form of risk assessment with the goal to analyze the most probable attack vectors and to identify assets most desired by an attacker. Per the [Threat Modeling Manifesto](https://www.threatmodelingmanifesto.org) you typically try to answer four key questions:

1. What are we working on?
2. What can go wrong?
3. What are we going to do about it?
4. Did we do a good enough job?

## How to do threat modeling?

Ideally, threat modeling happens early and frequently. Much like you constantly iterate over your software, you should also continuously analyze the system's security using your threat model.

Threat modeling activities are not done by security auditors exclusively. Anyone who is concerned about the privacy or security of a system should be empowered to help with threat modeling. Cross-functional collaboration from a diverse set of participants makes the threat model stronger.

Documentation of the common understanding of your system in a threat model enables you to measure the robustness of your system. It can be quite some work to get to an initial threat modeling document. Often, the initial work gets done as part of a workshop with your team, either self-guided or mediated by a professional. The produced threat model document needs to be extensible for future re-assessment and ideally lives version-controlled within your codebase.

For any threat model, it helps to:

- Describe your system elements (assets, components)
- Describe data flows and interactions with third parties
- Identify stakeholders
- Discuss threats
- Consider threat responses
- Iterate

There is no single ideal threat modeling representation, therefore it is a good idea to use multiple threat modeling frameworks (see below for more on some popular ones) to illuminate different problems. We will focus on a lightweight threat modeling exercise which focuses on the four main questions from the Threat Modeling Manifesto.

The rest of this page walks through these steps in order.

## 1. What are we working on?

To answer this question, you typically create a diagram, map out your system, or illustrate the individual components and assets your system consists of.

To define the scope of the threat model, we need to delineate which threats target our own project and which target the browser or other layers of the web platform stack, which we can define are external dependencies to our threat model. The [Threat Model for the Web Platform](https://github.com/w3c/threat-model-web/blob/main/index.md) provides a useful starting point and gives an idea of the environment any website or web application resides in.

It is helpful to make yourself aware about which parts you will be responsible for vs. which parts will be taken care of by others, such as protections the browser usually provides for you. If you maintain a list of relevant existing threat models for your software dependencies and your environment, you can reference them in your own threat model and don't need to redo the modeling again. Threat modeling is not about completeness; it's about improving understanding over time.

For learning purposes, we can make the following example assumptions about a blog website. Note that these assumptions are incomplete and recognize that the assumptions you make yourself will likely also be incomplete. It is a good idea to brainstorm with your team to get a more complete overview of the system you want to protect.

### Components

Things that run code or store data. For example, we could say that our blog website will consist of several software components which will be interesting for our threat model:

- Web server
- Blog software (for example, 11ty)
- Static pages
- User authentication
- User-submitted content (for example, a comment section)
- Contact form
- Fetch calls to (your own or external) APIs
- Third-party scripts, for example displaying a map, or usage analytics

Of course, your website's complexity can vary quite a lot. Maybe you are building a static website, primarily with HTML and CSS, maybe you host a site with a CMS, a server, and a database, or maybe you are building a complex web application like an online game, an email client, or a drawing webapp. Depending on what you are doing, your threat model can either be quite short and self-contained, or it can be very long and maybe you prefer to create several threat models for different parts of your system, focusing on one part at a time.

To reference identified components, you index them with the letter C (C1, C2, C3, ...) in your diagram and in your table of contents.

### Assets

Things an attacker wants and are in need of protection. This could be:

- User data: General user data and personally identifying information (PII).
- User credentials: Login information, usernames, passwords, passkeys.
- Cookies and session information.
- Private content assets (for example, draft blog posts)

To reference identified assets, you index them with the letter A (A1, A2, A3, ...) in your diagram and in your table of contents.

### Data flows and trust boundaries

We identify the mechanism by which assets move between components. They may be uni- or bi-directional.

- Authentication flows
- Contact form flow
- Data flows to external services

When data flows between the user and your application, or between your application and third party services, it moves across trusted boundaries that are controlled by different authorities. Attacks often happen between these unequally privileged components and we should make ourselves aware of these attack surfaces, identifying where validation, encryption or other security controls are necessary.

To reference identified data flows, you index them with the letter F (F1, F2, F3, ...) in your diagram and in your table of contents. Trust boundaries are usually visualized using a dashed line.

### External dependencies

You do not model external dependencies in detail, but you should document your assumptions about them and track when those assumptions change. We can look at them like black boxes whose internals are unknown to us but ideally they also have their own threat models which we reference in our own. For example:

- Operating system (OS)
- Browser and the web platform (see also [web platform threat model](https://github.com/w3c/threat-model-web/blob/main/index.md))
- Browser extensions (WebExtensions)

To reference identified external dependencies, you index them with the letter E (E1, E2, E3, ...) in your diagram and in your table of contents.

### Stakeholders

Identify your audience and understand their interests, benefits, and potential harms. Who could be impacted by potential threats? Putting people and groups first helps you to avoid just thinking about the security of technical components. Instead, your focus is on how secure and trustworthy the relationship between real humans and your software is.

- Anonymous user
- Registered user
- Disabled user
- Blog administrator or developer

For example, an XSS vulnerability may primarily harm users, while credential leakage may harm both users and administrators.

Note that you don't model potential attackers. Over-characterizing attackers can lead to analysis bias.

To reference identified stakeholders, you index them with the letter S (S1, S2, S3, ...) in your diagram and in your table of contents.

## 2. What can go wrong?

Now that we've identified what we're working on, we can start thinking about what can go wrong with it. Threats can be identified in different ways and one common way is to look at threat lists. For example, we could start by taking a look at threat maps or rely on external threat lists such as OWASP top ten or others.

- [Threat map](/en-US/docs/Web/Security/Threat_modeling/Threat_map)
- [OWASP top ten](https://owasp.org/Top10/2025/)
- Security consideration sections in web platform specifications as well as on MDN Web Docs.

For a web application, this might include cross-site scripting, cross-site request forgery, account takeover, or data leakage via third-party scripts.

Another common way to identify threats is to use [threat analysis frameworks](#threat_analysis_frameworks) which are described in more details below.

You can decide whether you present identified threats in a table or prefer describing them more analytical, for example by writing down the chain of events that leading up to an attack ("kill chain"). The [W3C Threat Modeling Guide](https://w3c.github.io/threat-modeling-guide/#curatorial-storytelling) recommends to tell a story and give threats priorities, so that the most important threats are discussed first and that readers are not overwhelmed with extraneous details.

To reference the identified threats, you index them with the letter T (T1, T2, T3, ...) in your diagram and in your table of contents.

## 3. What are we going to do about it?

In step three, we will need to answer how we are going to respond to the threats we've identified in the second step.

There are various options for how we could respond to threats. In general, responses can be put in four categories using the **ERTA** mnemonics:

- **E**liminate: Remove the asset or the threat.
- **R**educe: Make it harder, e.g., adding a control, mitigation or countermeasure.
- **T**ransfer: Shift responsibility for mitigating the threat to another system or organization (for example, a third-party service).
- **A**ccept: that it is not possible to mitigate the threat for now; it is still open and needs to be monitored.

Examples:

- Eliminate: We remove the comment functionality from our blog as it is not widely used and we don't want to deal with securing it.
- Reduce: We only allow registered users to use the comment function.
- Transfer: We use an external plugin for comments.
- Accept: We accept that our comment functionality faces threats, like spam, but we accept this threat and we implement spam monitoring.

Document your responses and decisions. You will likely come back to them in step 4 when asking if these responses are good enough.

To reference the identified responses, you index them with the letter R (R1, R2, R3, ...) in your diagram and in your table of contents.

## 4. Did we do a good enough job?

Once you have done a round of threat modeling, file (private) issues with your project and describe your findings in a threat model document. Even if no action or bugfix is needed, the documentation of your threat model will be useful later.

You can revisit the issues you filed and the documentation you've written in the next round of threat modeling and see if anything changed or needs reassessment. It is helpful to revalidate your documented issues. With every iteration of threat modeling, your system should become more secure and you will be more aware of further threats and risks. The experience you gather over time will help you to make your threat modeling more robust; it doesn't need to be perfect or complete from the start.

We provide an [example threat model](/en-US/docs/Web/Security/Threat_modeling/Example_threat_model) for inspiration. Threat model documents don't get published very often and aren't shared broadly unfortunately; they are often an internal resource.

## Threat analysis frameworks

In our threat modeling above, we focus on the four key questions as defined in the [Threat Modeling Manifesto](https://www.threatmodelingmanifesto.org). There are also existing frameworks providing you with structure for threat modeling processes. Maybe you want to adopt some of these frameworks, or your security audit or certification process requires you to do threat modeling with them.

A diverse set of frameworks and techniques can help you to think about threats from different perspectives. In essence, these frameworks can help you to explore more structured answers to the second question "What can go wrong?" by thinking about a variety of threat categories. In your threat modeling diagram and in your table of contents you reference these categories (for example, "STRIDE: Tampering") to signal that you have thought about a certain threat category. However, you don't need to use all categories necessarily.

Two popular threat analysis frameworks are STRIDE (focus on security) and LINDDUN (focus on privacy):

### STRIDE

The [STRIDE](https://en.wikipedia.org/wiki/STRIDE_model) framework is a widely recognized threat modeling method developed by Microsoft. The acronym stands for six categories of security threats:

- Spoofing
  - : Impersonating another user or system to gain unauthorized access. Questions could be:
    - Are cookies protected from theft or reuse?
    - Could an attacker reuse old credentials or sessions?
- Tampering
  - : Unauthorized modification of data or systems. Questions could be:
    - Is everything encrypted with HTTPS?
    - Can users modify requests parameters, headers, API payloads?
- Repudiation
  - : Claiming not to have performed an action; lack of audit trails. Questions could be:
    - Do we log security-relevant events like login failures?
    - Can we trace back actions to a specific user?
- Information Disclosure
  - : Unauthorized access to confidential information. Questions could be:
    - Is personal data exposed via URL query strings?
    - Are secret credentials exposed to the client?
- Denial of Service (DoS)
  - : Disrupting services to make them unavailable. Questions could be:
    - Can large uploads or heavy database queries be triggered by users?
    - Can API endpoints be called repeatedly without limits?
- Elevation of Privilege
  - : Gaining higher access rights than permitted. Questions could be:
    - Can users guess admin endpoint URLs?
    - When are privilege checks performed?

### LINDDUN

The [LINDDUN](https://linddun.org) framework is a widely recognized threat modeling framework about data privacy and is inspired by STRIDE. The acronym stands for seven categories of privacy threats:

- Linking
  - : The ability to associate data or actions to an individual or group. Questions could be:
    - Are cookies used unnecessarily?
    - Can third parties track user behaviors across sites?
- Identifying
  - : Learning the identity of an individual. Questions could be:
    - Are pseudonyms or user IDs truly non-identifying?
    - Could identities be revealed through combining publicly available data?
- Non-repudiation
  - : The ability to link or attribute a claim (or action) to an individual. Questions could be:
    - Can users perform actions without creating permanent records?
    - Are logs kept longer than necessary?
- Detecting
  - : Determining the involvement of an individual based on observation. Questions could be:
    - Does the login reveal if a user exist?
    - Does the system leak if an admin is currently online?
- Data disclosure
  - : Excessively collecting, storing, processing or sharing personal data. Questions could be:
    - Are backups, logs, or exports protected?
    - Are analytics or other metric gathering embeds receiving personal data?
- Unawareness
  - : Insufficiently informing, involving or empowering individuals in the processing of personal data. Questions could be:
    - Do users understand opt-in or opt-out dialogs?
    - Do users understand what data is collected and why?
- Non-compliance
  - : Deviation from security and data management best practices, standards and legislation. Questions could be:
    - Can users request deletion or export of their data?
    - Are third-party services compliant with your policies?

### Other resources

A variety of other documents exists which can help you to think about a diverse set of threats even outside of the STRIDE and LINDDUN categories:

- [RFC 9620 Human Rights Considerations](https://datatracker.ietf.org/doc/rfc9620/)
- [W3C TAG: Ethical Web Principles](https://w3ctag.github.io/ethical-web-principles/)
- [W3C Self-Review Questionnaire: Security and Privacy](https://www.w3.org/TR/security-privacy-questionnaire/#missing-questions)
- [Invariant-centric threat modeling](https://github.com/defuse/ictm)

## Threat modeling tools

There are tools designed to make threat modeling easier through standards for visualizing system components, data flows, etc. These tools can help you with creating diagrams, for example. However, these tools are secondary. Even a (digital) drawing board would do it if it leads to discussions with your team. The primary goal should always be better understanding of your systems. The discussions had during threat modeling are more important than tool usage. Keep in mind that a complex diagram that is difficult to understand might not spark great interest in discussing your project's architecture and its threats.

- [OWASP Threat Dragon](https://owasp.org/www-project-threat-dragon/)
- [Microsoft Threat Modeling Tool](https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool)

## See also

- [Threat Modeling Manifesto](https://www.threatmodelingmanifesto.org)
- [W3C Threat Modeling Guide for specification authors](https://w3c.github.io/threat-modeling-guide/)
- [Threat Model for the Web Platform](https://github.com/w3c/threat-model-web/blob/main/index.md)
- [OWASP Threat Modeling Playbook](https://github.com/OWASP/threat-modeling-playbook)
- [OWASP Threat Modeling Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html)

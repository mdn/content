---
title: Threat Modeling
slug: Web/Security/Threat_modeling
page-type: guide
sidebar: security
---

This article describes how to perform threat modeling for a website or a web application. We will provide an overview of different threat modeling frameworks as well as discuss a blog as an example for how to do a lightweight threat modeling exercise.

Depending on your goal, threat modeling can be more involved than described here. Maybe you or your team wants to exercise lightweight threat modeling for your own benefit, so that security isn't an afterthought or neglected at all. Or maybe you are required a more heavyweight assessment because, for example, your software will be audited for a Information Security Management System (ISMS) certification ([ISO 27001](https://www.iso.org/standard/27001)) and you use threat modeling to be prepared for that.

In any case, it always makes sense to think about threats and implementing a process to regularly assess the security of your systems. The goal of this article is to provide some inspiration for how to do threat modeling, but ultimately you'll have to introduce a process that works for you, your team, and your goals.

## What is a threat?

A threat is something that has a negative effect on an asset, if it happens.

We can consider security a function that aims to create distance between the assets we want to protect and their threats.

Threats are always present but they don't have to turn into attacks. An attack is a realization of a threat on an operational system (a system is a collection of assets) and ideally, if the security posture of a system is strong enough, potential threats won't turn into actual attacks.

When thinking about threats, we can identify system weaknesses (vulnerabilities), for example things like unpatched software or cross-site scripting (XSS).

We then implement mitigations as a response to vulnerabilities: they defend the system to the extend they are able to.

To illustrate this, let's take a house as an example:

- Threat: a burglar.
- Vulnerability: an unlocked window or a weak door lock.
- Attack: the burglar climbing through the window or picking the lock.
- Mitigation: a strong deadbolt, an alarm system, policy to ensure all windows are locked.

## What is threat modeling?

Threat modeling is a structured, repeatable process with the goal to secure systems and to identify vulnerabilities and to prioritize mitigations. It is a form of risk assessment with the goal to analyze the most probable attack vectors and to identify assets most desired by an attacker. Per the [Threat Modeling Manifesto](https://www.threatmodelingmanifesto.org) you typically try to answer four key questions:

- What are we working on?
- What can go wrong?
- What are we going to do about it?
- Did we do a good enough job?

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

## What are we working on?

To answer this question, you typically create a diagram, map out your system, or illustrate the individual components and assets your system consists of.

We also want to define the scope of the threat model and assume that threats targeting the browser or other layers of the web platform stack are external dependencies. The [Threat Model for the Web Platform](https://github.com/w3c/threat-model-web/blob/main/index.md) provides a useful starting point and gives an idea of the environment any website or web application resides in. It is helpful to keep this in mind when deciding which components and assets are in scope when doing threat modeling for a website.

For learning purposes, let's make the following example assumptions about a blog website. Note that these assumptions are incomplete and recognize that your assumptions will likely also be incomplete and that it is a good idea to brainstorm with your team to get a more complete overview of the system you want to protect.

### Components

We define a simplified list of components on which we would like to focus on for our threat modeling. For example, our blog site will consist of several software components which will be interesting for our threat model:

- Web server
- Blog software (e.g., 11ty)
- Static pages
- User authentication
- User-submitted content (e.g., a comment section)
- Contact form
- Fetch calls to (your own or external) APIs
- Third-party scripts, for example displaying a map, or usage analytics

### Assets

We identify assets which are in need of protection. This could be:

- User data: General user data and personally identifying information (PII).
- User credentials: Login information, usernames, passwords, passkeys.
- Cookies and session information.
- Private content assets (e.g., draft blog posts)

### Data flows

We identify the mechanism by which data flows between the components. They may be uni- or bi-directional.

- Authentication flows
- Contact form flow
- ???

### External dependencies

External dependencies are out of scope for our threat model it's but worth keeping them in mind. We can look at them like black boxes whose internals are unknown to us. For example:

- Operating system (OS)
- Browser and the web platform (see also [web platform threat model](https://github.com/w3c/threat-model-web/blob/main/index.md))
- Browser extensions (WebExtensions)

### Stakeholders

Identify your audience and understand their interests, benefits, and potential harms. Who could be impacted by potential threats? Note that we don't model potential attackers, as over-characterizing attackers can lead to analysis bias.

- Anonymous user
- Registered user
- Disabled user
- Blog administrator or developer

## What can go wrong?

Now that we've identified what we're working on, we can start thinking about what can go wrong with it. Threats can be identified in different way and a common way is to look at threat lists. For example, we could start by taking a look at the following threat map or rely on external threat lists such as OWASP top 10 or others.

## Threat map

TBD map attacks documented on MDN here.

## What are we going to do about it?

The third question we will need to answer, concerns the question about how we are going to respond to the threats we've identified in the second step.

Responses can be summarized in the so called ERTA categories:

- **E**liminate: Remove the asset or the threat.
- **R**educe: Make it harder, e.g., adding a control, mitigation or countermeasure.
- **T**ransfer: To another element or component.
- **A**ccept: that it is not possible to mitigate the threat for now; it is still open and needs to be monitored.

Examples:

- Eliminate: We remove the comment functionality from our blog as it is not widely used and we don't want to deal with securing it.
- Reduce: We only allow registered users to use the comment function.
- Transfer: We use an external plugin for comments
- Accept: We accept that our comment functionality faces threats, like spam, but we accept this threat and we implement spam monitoring.

## Did we do a good enough job?

Once you have done a round of threat modeling, file (private) issues with your project and describe your findings in a threat model document. Even if no action or bugfix is needed, the documentation of your threat model will be useful later.

You can revisit the issues you filed and the documentation you've written in the next round of threat modeling and see if anything changed or needs reassessment. It is helpful to revalidate your documented issues. With every iteration of threat modeling, your system should become more secure and you will be more aware of further threats and risks. The experience you gather over time will help you to make your threat modeling more robust; it doesn't need to be perfect or complete from the start.

## Threat modeling frameworks

The following threat modeling frameworks exist and give structure to threat modeling processes. Maybe you want to adopt some of the frameworks, or your security audit or certification process requires you to do threat modeling using them.

- Security threads (STRIDE)
  - : TBD
- Privacy Threats (LINDDUN)
  - : TBD
- PASTA
  - : TBD
- Human Rights Considerations
  - : RFC 9620, Ethical Web Principles
- Security/Privacy/Trust Controls (OSSTMM)
  - : TBD

## Threat modeling tools

TBD

- OWASP Threat Dragon
- Microsoft Threat Modeling Tool

## TMBOM

Still WIP, like SBOMs but for Threat Modeling

## See also

- [Threat Modeling Manifesto](https://www.threatmodelingmanifesto.org)
- [W3C Threat Modeling Guide for specification authors](https://w3c.github.io/threat-modeling-guide/)
- [Threat Model for the Web Platform](https://github.com/w3c/threat-model-web/blob/main/index.md)

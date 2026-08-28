---
title: PWA example threat model
slug: Web/Security/Threat_modeling/PWA_threat_model
page-type: guide
sidebar: security
---

> [!NOTE]
> This page shows an example threat model for a Progressive Web Application (PWA). [CycleTracker](/en-US/docs/Web/Progressive_web_apps/Tutorials/CycleTracker) is a menstrual cycle tracking PWA that stores only start and end dates in [`localStorage`](/en-US/docs/Web/API/Window/localStorage) without third party or external scripts. It can be considered safer than many cloud‑based alternatives. However, even minimal cycle data can reveal sensitive reproductive information, so it makes sense to assess its security in a threat model.
>
> For more information and guidance on how to create a threat model, see the [threat modeling guide](/en-US/docs/Web/Security/Threat_modeling).

## Overview

- Project: Local‑only Menstrual Cycle Tracking PWA
- Description: A Progressive Web App for tracking menstrual cycles locally. Only stores start and end dates.
- Version: 1.0
- Last updated: 2026-04-23

## 1. What are we working on?

### Assumptions and scope

This threat model covers CycleTracker, a menstrual cycle tracking PWA that stores only start and end dates in `localStorage` without third party or external scripts.

### Components

| ID  | Component            | Description                  |
| --- | -------------------- | ---------------------------- |
| C1  | PWA frontend         | HTML/CSS/JS                  |
| C2  | Local storage        | Cycle data stored in browser |
| C3  | Service worker       | Caching static assets        |
| C4  | PWA manifest + icons |                              |

### Assets

| ID  | Asset                  | Description         |
| --- | ---------------------- | ------------------- |
| A1  | Cycle start dates      |                     |
| A2  | Cycle end dates        |                     |
| A3  | Derived cycle patterns | Inferred from A1/A2 |

### Data flows

| ID  | Flow            | Description                                                  |
| --- | --------------- | ------------------------------------------------------------ |
| F1  | Data submission | User enters cycle dates which gets written to localStorage   |
| F2  | App load        | Browser loads PWA assets over HTTPS or from a Service Worker |

### External dependencies

| ID  | Dependency  | Notes                                                                       |
| --- | ----------- | --------------------------------------------------------------------------- |
| E1  | Web Browser | Assuming default security settings like sandboxing, storage isolation, etc. |
| E2  | Device      | Assuming updated OS, lock screen, malware protection                        |
| E3  | Hosting     | Assuming safe guards, provide safeguards, such as DDoS protection           |

### Stakeholders

| ID  | Stakeholder         | Interests / potential harm                |
| --- | ------------------- | ----------------------------------------- |
| S1  | Cycle tracking user | Account safety, data protection           |
| S2  | Developer           | Maintainer of code base                   |
| S3  | Anonymous users     | Anyone with physical access to the device |

## 2. What can go wrong?

### Identified threats

| ID  | Threat                          | Affected elements | Description                                                                        |
| --- | ------------------------------- | ----------------- | ---------------------------------------------------------------------------------- |
| T1  | Local device access             | C2, A1–A3, F2, S3 | Someone with physical access to the device opens the PWA and views cycle data.     |
| T2  | Shared browser profile exposure | C2, A1–A3, E1, S1 | Another person using the same browser profile sees stored cycle data.              |
| T3  | Browser/OS sync leakage         | C2, A1–A3, E2     | Browser or operating system sync or backup uploads localStorage to cloud accounts. |
| T4  | Malicious browser extensions    | C2, A1–A3, E1     | Extensions with broad permissions read or modify localStorage.                     |
| T5  | XSS                             | C1, C2, A1–A3, 1  | Injection vulnerability leading to data theft / attacker can read localStorage.    |
| T6  | Compromised service worker      | C3, F2            | A malicious or tampered service worker exfiltrates data or alters app behavior.    |
| T7  | Hosting compromise              | C1, C3, A1-A3, E3 | Attacker modifies hosted JS to steal localStorage data.                            |
| T8  | Device malware                  | C2, A1–A3, E2     | Malware on the device reads storage.                                               |
| T9  | Data corruption                 | C2, A1-A-3, F1    | localStorage becomes corrupted, losing cycle data.                                 |
| T10 | Inference attacks               | A1–A3             | Even minimal data reveals missed periods or pregnancy likelihood.                  |
| T11 | Service worker DoS              | C3, F2            | Broken or malicious SW prevents app from loading offline.                          |
| T12 | Legal or forensic seizure       | A1–A3, S3         | Authorities accessing the device can read cycle data.                              |
| T13 | Lookalike malicious forks       | C1, C3, S1        | A forked version mimics the PWA but steals data.                                   |

## 3. What are we going to do about it?

### Threat responses

| Threat | Response ID                     | Strategy | Description                                                               |
| ------ | ------------------------------- | -------- | ------------------------------------------------------------------------- |
| T1     | Local device access             | Reduce   | Encourage users to secure their device with a passcode/biometrics.        |
| T1     | Local device access             | Reduce   | Optional app-level PIN or passphrase.                                     |
| T2     | Shared browser profile exposure | Reduce   | Provide guidance to use private browsing or separate profiles.            |
| T2     | Shared browser profile exposure | Reduce   | Add "Delete all data" button.                                             |
| T3     | Browser sync leakage            | Reduce   | Document that browser sync may upload data.                               |
| T4     | Malicious extensions            | Accept   | Outside app control; warn users about extension risks.                    |
| T5     | XSS                             | Reduce   | Apply strict Content Security Policy.                                     |
| T5     | XSS                             | Reduce   | Avoid inline scripts.                                                     |
| T5     | XSS                             | Reduce   | Keep code simple and auditable.                                           |
| T6     | Compromised service worker      | Reduce   | Keep SW minimal.                                                          |
| T6     | Compromised service worker      | Reduce   | Use versioning and integrity checks.                                      |
| T6     | Compromised service worker      | Reduce   | Avoid dynamic script loading.                                             |
| T7     | Hosting compromise              | Reduce   | Use HTTPS only hosting (required).                                        |
| T7     | Hosting compromise              | Reduce   | Monitor repository integrity.                                             |
| T7     | Hosting compromise              | Reduce   | Encourage users to code their own app or trust only official deployments. |
| T8     | Device malware                  | Accept   | Outside our control; recommend OS updates and antivirus.                  |
| T9     | Data corruption                 | Reduce   | Validate localStorage writes.                                             |
| T9     | Data corruption                 | Reduce   | Provide export/import functionality.                                      |
| T10    | Inference attacks               | Accept   | Inherent to the nature of menstrual data.                                 |
| T10    | Inference attacks               | Accept   | Minimize collected data (already done).                                   |
| T11    | Service worker DoS              | Reduce   | Provide fallback logic if SW fails.                                       |
| T11    | Service worker DoS              | Reduce   | Keep SW logic simple.                                                     |
| T12    | Legal seizure                   | Accept   | Outside our control; warn users; delete data button.                      |
| T12    | Legal seizure                   | Accept   | Optional local encryption.                                                |
| T13    | Malicious forks                 | Reduce   | Document official URLs.                                                   |
| T13    | Malicious forks                 | Reduce   | Encourage code signing or integrity verification where possible.          |

## 4. Did we do a good enough job?

### Review status

- All identified threats have at least one response.
- No high-impact threats are currently unaddressed.
- Residual risks (e.g., spam) are accepted with monitoring.

### Follow-up actions

- Revisit this threat model after:
  - Major feature changes
  - Addition of third-party dependencies
  - Security incidents
- Review at least once per year.

### Notes

This threat model is intentionally incomplete and will evolve. Its purpose is to improve shared understanding and guide security decisions, not to guarantee the absence of vulnerabilities.

## See also

- [Threat modeling guide](/en-US/docs/Web/Security/Threat_modeling)
- [Threat Model for the Web Platform](https://w3c.github.io/threat-model-web/)

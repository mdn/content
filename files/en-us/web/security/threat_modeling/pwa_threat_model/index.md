---
title: Example threat model
slug: Web/Security/Threat_modeling/PWA_threat_model
page-type: guide
sidebar: security
---

> [!NOTE]
> This page shows an example threat model for a web application. CycleTracker, a menstrual cycle tracking PWA that stores only start and end dates in localStorage without third party or external scripts, is far safer than cloud‑based alternatives. As even minimal cycle data can reveal sensitive reproductive information, this bare bones tracker still faces some security risks because the application is vulnerable device access, local storage is vulnerable to XSS, and the application relies on browser security and device settings.
>
> For more information and guidance on how to create a threat model, see the [threat modeling guide](/en-US/docs/Web/Security/Threat_modeling).

## Overview

- Threat Model: Local‑Only Menstrual Cycle Tracking PWA
- Project: CycleTracker PWA
- Description: Data stored in local storage; only start/end dates collected.
- Version: 1.0
- Last updated: 2024-02-23

## 1. What are we working on?

### Assumptions and scope

This threat model covers CycleTracker, a menstrual cycle tracking PWA that stores only start and end dates in localStorage without third party or external scripts, is far safer than cloud‑based alternatives. As even minimal cycle data can reveal sensitive reproductive information, this bare bones tracker still faces some security risks because the application is vulnerable device access, local storage is vulnerable to XSS, and the application relies on browser security and device settings.

### Components

| ID  | Component                         | Description                  |
| --- | --------------------------------- | ---------------------------- |
| C1  | PWA frontend                      | HTML/CSS/JS                  |
| C2  | Local storage                     | Cycle data stored in browser |
| C3  | Service worker                    | Caching static assets        |
| C4  | Browser                           |                              |
| C5  | Device                            | Operating system             |
| C6  | PWA manifest + icons              |                              |
| C7  | Network delivery of static assets | HTTPS                        |

### Assets

| ID  | Asset                            | Description                    |
| --- | -------------------------------- | ------------------------------ |
| A1  | Cycle start dates                |                                |
| A2  | Cycle end dates                  |                                |
| A3  | Derived cycle patterns           | Inferred from A1/A2            |
| A4  | Local storage                    |                                |
| A5  | Service worker                   |                                |
| A6  | User privacy and confidentiality |                                |
| A7  | PWA code                         | Integrity of HTML, JS, and CSS |

### Data flows

| ID  | Flow            | Description                                                   |
| --- | --------------- | ------------------------------------------------------------- |
| F1  | Data submission | User enters cycle dates via UI                                |
| F2  | LocalStorage    | PWA UI writes data to localStorage                            |
| F3  | LocalStorage    | PWA UI reads data from localStorage                           |
| F4  | App load        | Browser loads PWA assets over HTTPS                           |
| F5  | Service worker  | SW intercepts network requests                                |
| F6  | Physical device | Device-level trust boundary, device unlock enables app access |

### External dependencies

| ID  | Dependency             | Notes                                       |
| --- | ---------------------- | ------------------------------------------- |
| E1  | Browser security model | sandboxing, storage isolation               |
| E2  | Device security        | OS updates, lock screen, malware protection |
| E3  | HTTPS hosting          | GitHub Pages                                |
| E4  | Browser                | User profile configuration, extensions      |
| E5  | OS                     | Operating system syncs (iCloud)             |

### Stakeholders

| ID  | Stakeholder      | Interests / potential harm                |
| --- | ---------------- | ----------------------------------------- |
| S1  | End user         | Account safety, data protection           |
| S2  | Developer        | Maintainer of code base                   |
| S3  | Browser          |                                           |
| S4  | Hosting provider | Tracking app access and downloads         |
| S5  | Device users     | Anyone with physical access to the device |

## 2. What can go wrong?

### Identified threats

| ID  | Threat                          | Affected elements    | Description                                                                        |
| --- | ------------------------------- | -------------------- | ---------------------------------------------------------------------------------- |
| T1  | Local device access             | C2, A1–A3, F6, S5    | Someone with physical access to the device opens the PWA and views cycle data.     |
| T2  | Shared browser profile exposure | C2, A1–A3, E4, S1    | Another person using the same browser profile sees stored cycle data.              |
| T3  | Browser/OS sync leakage         | C2, A1–A3, E4        | Browser or operating system sync or backup uploads localStorage to cloud accounts. |
| T4  | Malicious browser extensions    | C2, A1–A3, E4        | Extensions with broad permissions read or modify localStorage.                     |
| T5  | XSS                             | C1, C2, A1–A4, F2–F3 | Injection vulnerability leading to data theft / attacker can read localStorage.    |
| T6  | Compromised service worker      | C3, A5, A7, F5       | A malicious or tampered service worker exfiltrates data or alters app behavior.    |
| T7  | Hosting compromise              | C1, C3, A7, E3       | Attacker modifies hosted JS to steal localStorage data.                            |
| T8  | Device malware                  | C2, A1–A3, E2        | Malware on the device reads storage.                                               |
| T9  | Data corruption                 | C2, A4, F2–F3        | localStorage becomes corrupted, losing cycle data.                                 |
| T10 | Inference attacks               | A1–A3, A6            | Even minimal data reveals missed periods or pregnancy likelihood.                  |
| T11 | Service worker DoS              | C3, F5               | Broken or malicious SW prevents app from loading offline.                          |
| T12 | Legal or forensic seizure       | A1–A3, A6, S5        | Authorities accessing the device can read cycle data.                              |
| T13 | Lookalike malicious forks       | C1, C3, A7, S1       | A forked version mimics the PWA but steals data.                                   |

## 3. What are we going to do about it?

### Threat responses

| Threat | Response ID                     | Strategy | Description                                                               |
| ------ | ------------------------------- | -------- | ------------------------------------------------------------------------- | --- |
| T1     | Local device access             | Reduce   | Encourage users to secure their device with a passcode/biometrics.        |
| T1     | Local device access             | Reduce   | Optional app-level PIN or passphrase.                                     |
| T2     | Shared browser profile exposure | Reduce   | Provide guidance to use private browsing or separate profiles.            |
| T2     | Shared browser profile exposure | Reduce   | Add "Delete all data" button.                                             |
| T3     | Browser sync leakage            | Reduce   | Document that browser sync may upload data.                               |
| T4     | Malicious extensions            | Accept   | Outside app control; warn users about extension risks.                    |     |
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

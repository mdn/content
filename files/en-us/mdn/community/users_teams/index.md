---
title: Owners and teams
slug: MDN/Community/Users_teams
page-type: mdn-community-guide
tags:
  - meta
  - community-guidelines
  - governance
---
{{MDNSidebar}}

The success and growth of MDN Web Docs is, in large part, due to our community of contributors. There are also employees, contractors, and a network of partners who are dedicated to the health, growth, and maintenance of the project as a whole. There are also some individuals who have committed a portion of their time to assist with the daily tasks of running MDN Web Docs. These people are part of our [_Invited experts program_](#invited_experts). To manage all these different groups, we rely heavily on roles and teams within our GitHub organization.

A list of the members of the organization can be [found here](https://github.com/orgs/mdn/people).

## Teams

- **Core**: Core MDN Web Docs team
- **Localization team leads**: People who lead our individual localization teams
- **MDN community engagement**: People responsible for community engagement across our repositories
- **MDN product**: People responsible for the MDN Plus product
- **OWD**: Contributors from the Open Web Docs non-profit organization
- **SRE**: Site reliability engineers who support MDN Web Docs
- **Yari content**: The umbrella team for all MDN Web Docs content reviewers
  - **Yari content MDN**: Responsible for reviewing docs under `/en-US/docs`
  - **Yari content Mozilla add-ons**: Responsible for reviewing docs under `/en-US/docs/Mozilla/Add-ons`
  - **Yari content JavaScript**: Responsible for reviewing docs under `/en-US/docs/Web/JavaScript`
  - **Yari content HTML**: Responsible for reviewing docs under `/en-US/docs/Web/HTML`
  - **Yari content Web API**: Responsible for reviewing docs under `/en-US/docs/Web/API`
  - **Yari content HTTP**: Responsible for reviewing docs under `/en-US/docs/Web/HTTP`
  - **Yari content CSS**: Responsible for reviewing docs under `/en-US/docs/Web/CSS`
  - **Yari content accessibility**: Responsible for reviewing docs under `/en-US/docs/Web/Accessibility`
  - **Yari content SVG**: Responsible for reviewing docs under `/en-US/docs/Web/SVG`
  - **Yari content Web Assembly**: Responsible for reviewing docs related to WebAssembly

  The following teams are specific to respective localization teams:
  - **Yari content ES**: Responsible for reviewing MDN docs in Spanish
  - **Yari content FR**: Responsible for reviewing MDN docs in French
  - **Yari content JA**: Responsible for reviewing MDN docs in Japanese
  - **Yari content KO**: Responsible for reviewing MDN docs in Korean
  - **Yari content PT-BR**: Responsible for reviewing MDN docs in Brazilian Portuguese
  - **Yari content RU**: Responsible for reviewing MDN docs in Russian
  - **Yari content ZH**: Responsible for reviewing MDN docs in Chinese

### What it means to be in a team

We manage teams using the [GitHub teams](https://docs.github.com/en/organizations/organizing-members-into-teams/about-teams) feature. When you are added to a team, it means that you have communicated your intent to be more closely involved in the project. This also means that you have some additional responsibilities and rights, as explained below:

1. A person on a team is commonly added to the [CODEOWNERS](https://github.com/mdn/content/blob/main/.github/CODEOWNERS) file for their respective area(s) as detailed above.
2. Based on the CODEOWNERS file and when a pull request touches files in your area of responsibility, you will be automatically assigned to pull requests using Github's [load-balancing algorithm](https://docs.github.com/en/organizations/organizing-members-into-teams/managing-code-review-settings-for-your-team#routing-algorithms).
3. Members of a team have a higher-level repository access. Repository permissions are assigned to only those repositories where a member needs access.

### How to request to be added to a team

To become a member of a team, you are required to:

- Agree to abide by our [Community Participation Guidelines](https://www.mozilla.org/en-US/about/governance/policies/participation/).
- Agree to Mozilla's [Commit Access Requirements](https://www.mozilla.org/en-US/about/governance/policies/commit/requirements/).
- Set up [two-factor authentication](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication) on your GitHub account.

If you wish to become a member of a team, you should start by [filing an issue in this repository](https://github.com/mdn/mdn/issues/new/choose).

After you have filed your issue, someone from our team will review it and give you the necessary privileges, provided our requirements are satisfied.

## Invited experts program

On MDN Web Docs, we have a commitment to document the open web. Not only does this mean that there is a large base of constantly evolving documentation to write and maintain, but we cannot possibly have intimate knowledge of all areas of the open web. To help fill in the gaps, we started the _Invited Experts_ program.

Invited experts are individuals who have demonstrated in-depth knowledge in a particular area and were nominated by the community, our partners, or the MDN Web Docs internal team.

Invited experts are required to:

- Agree to abide by our [Community Participation Guidelines](https://www.mozilla.org/en-US/about/governance/policies/participation/).
- Agree to Mozilla's [Commit Access Requirements](https://www.mozilla.org/en-US/about/governance/policies/commit/requirements/).
- Set up [two-factor authentication](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication) on your GitHub account.

As part of the invited experts group, individuals are:

- Invited to our weekly MDN Web Docs editorial call.
- Invited to our invited experts channel on Matrix.
- Added to the relevant topic team(s) for automatic pull request review assignments.
- Assigned merge privileges to the repositories where they will review pull requests.

If you wish to nominate someone to be considered as an invited expert, start by [filing an issue in this repository](https://github.com/mdn/mdn/issues/new/choose).

## Volunteer and partner maintainers

MDN Web Docs also has volunteers and partners who are assigned maintainer rights to certain repositories. This is the highest level of access afforded to volunteers and partner contributors. Volunteer maintainers are [nominated](https://github.com/mdn/mdn/issues/new/choose) by our partners or the MDN Web Docs team because they demonstrated a deep understanding of the area of responsibility. These individuals have also demonstrated their commitment to being responsive, reliable, trustworthy, and able to interact in a manner that fosters a welcoming and friendly environment.

Maintainers should:

- Agree to abide by our [Community Participation Guidelines](https://www.mozilla.org/en-US/about/governance/policies/participation/).
- Agree to Mozilla's [Commit Access Requirements](https://www.mozilla.org/en-US/about/governance/policies/commit/requirements/).
- Set up [two-factor authentication](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication) on your GitHub account.
- Have a vouched [Mozillians](https://people.mozilla.org) profile in the [NDA group](https://people.mozilla.org/a/nda/).

## Owners

Owners have wide permissions to manage users and teams, maintain access across repositories in the MDN organization, maintain repository settings, and deploy to production. Owners are currently limited to Mozilla staff and are also bound by all the requirements of the other user levels. In addition to all the responsibilities of the other user levels, owners have the following additional responsibilities:

- Follow and enforce MDN team norms, including the [Community Participation Guidelines](https://www.mozilla.org/en-US/about/governance/policies/participation/) and [Mozilla Policies](https://www.mozilla.org/en-US/about/governance/policies/).
- Follow and contribute to issues and discussions across the MDN organization.
- Ensure that an issue or pull request gets feedback from one or more members within one week.
- Follow MDN organization policies described in this repo and lead by example.
- Suggest, document, and implement new policies through the pull request process.
- Add and remove collaborators to repositories as needed.
- [Archive](https://help.github.com/articles/about-archiving-repositories/) or delete unmaintained repositories.
- Discuss GitHub features, decide which to use, and document decisions in this repository.

In addition, owners should:

- Add and remove organization owners and members as needed.
- Add repositories (as fresh projects or transfers) as needed.

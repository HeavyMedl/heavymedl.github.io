---
layout: ../layouts/CVLayout.astro
title: "Curriculum vitae"
---

> TL;DR You're viewing my expanded curriculum vitae / résumé. If you're looking for a summative CV in PDF form, click <a href="/kurt-medley-cv-2025.pdf" target="_blank">here</a>.

## Table of contents

---

## Bio

Kurt Medley is a Computer Science graduate and a full-stack engineer with over 10 years of industry experience. He specializes in solving complex platform problems using modern JavaScript tooling and scalable architecture patterns. As the lead on numerous high-profile projects for major retail corporations, Kurt ensures the delivery of optimized, resilient, and thoroughly tested software.

---

## Education

- **The Evergreen State College** — B.Sc in Computer Science, 2013
- **South Puget Sound Community College** — A.A. in Music Theory and Composition, 2009

---

## Industry achievements

Below are selected industry achievements demonstrating technical leadership and platform impact.

### Led the architecture and development of Alpine Composer, a Nuxt-based rendering platform integrated with Uniform to enable business-user-driven page creation via configuration and a Vue 3 component library

Alpine Composer provides a powerful, extensible foundation for dynamic page rendering across REI's digital ecosystem.

### I introduced Vite, Vitest, and Vue 3 at REI

After initial attempts to incrementally update our custom tools failed, I built a proof of concept replacing existing tools with Vite and Vitest. Additionally, I updated our back-end library to integrate Vite-compiled assets and rewrote our server-rendering solution for Vue to support Vue 3. This platform upgrade is now standard across all product engineering teams at REI. You can read the complete story [here](/posts/unleashing-the-power-of-vite-and-vitest-at-rei/).

### I revamped the REI Adventures website using Vue

When I joined REI, my team and I rewrote the REI Adventures property using Vue. We eliminated several overlapping frameworks, transferred functional requirements from legacy code, and created new user journeys.

### After VueConf 2023, I championed a TypeScript migration across REI's front-end ecosystem, improving developer productivity and application resilience

We converted our standard microsite and tools to TypeScript. With a validated functional example, we created documentation and guided the adoption of TypeScript at REI.

### I rewrote the analytics library for REI using TypeScript

After adopting TypeScript, I rewrote a legacy implementation of REI's analytics library using Vite and Vitest. This involved carefully analyzing a substantial amount of code that I didn't fully understand, and making informed decisions about creating a cohesive type interface. The introduction of TypeScript revealed underlying implementation issues that can now be addressed and corrected.

### Standardized the process of scaffolding NPM packages at REI

Led development of an [NPM initializer](http://github.com/rei/create-package). This CLI tool guides users through generating a new directory with pre-defined code templates, avoiding tedious setup of build tools, dependencies, and CI/CD configuration. It is now the official method for creating JavaScript and TypeScript-based code at REI.

### Architected middleware to enable server-side rendering of Vue applications at REI

Built an Express.js implementation using TypeScript that server-renders Vue applications within REI's stack. This dockerized server runs alongside the main microsite, handling HTTP requests to render server bundles and returning the resulting HTML to be injected into base templates.

### I implemented modern front-end build tools at Costco

I proposed using Webpack and other technologies to modernize Costco’s entire eCommerce front end. This enabled modern asset delivery and enhanced developer productivity.

---

## Industry experience

### Senior Software Engineer specializing in Front-end Platforms and Integrations at REI

Hybrid | April 2020 - Present

- Lead engineer of Alpine Composer, a Nuxt application integrated with Uniform for configuration-driven rendering using a Vue 3 DXP component library.
- Led development of applications, libraries, build-tool plugins, and configurations used by all product engineering teams at REI.
- Researched and developed front-end patterns and evaluated technologies adopted by the entire REI product engineering community.
- Provided troubleshooting support for runtime and setup issues.
- Addressed security vulnerabilities within the front-end ecosystem.
- Integrated vendor solutions.
- Analyzed properties for optimal performance.
- Monitored emerging technologies and industry trends.
- Delivered end-to-end technology direction and guidance.
- Collaborated closely with Design Systems, Platform Engineering, Web Performance, SEO, and Accessibility teams.
- Contributed to Cedar, REI's design system.

### Senior Software Engineer specializing in Front-end Development at REI Adventures

Bellevue, WA | July 2019 - April 2020

Led development of Vue applications and UI components for REI Adventures. Rewrote the platform using Vue and decommissioned overlapping frameworks. Followed agile methodologies and collaborated closely with UX designers, product and program managers, business analysts, and stakeholders. Participated in rotating on-call responsibilities.

### Full-Stack Software Engineer III at Costco eCommerce

Issaquah, WA | July 2016 - July 2019

Led complex projects including SMS notifications for LTL carriers, site redesign introducing React, gas prices integration into the warehouse locator, and member validation service for customer profiles. Created timelines aligning project requirements with stakeholder deadlines. Managed offshore contractor teams and mentored junior developers.

### Full-Stack Software Engineer II at Costco eCommerce

Issaquah, WA | July 2014 - July 2016

Led responsive design initiative delivering a modern website using Webpack, SCSS, and Mocha. Collaborated with business analysts, UX designers, stakeholders, QA experts, and consultants. Transformed disorganized legacy code into a well-structured system using industry-standard tools and best practices.

### Full-Stack Software Engineer I at Costco eCommerce

Issaquah, WA | July 2013 - July 2014

Collaborated on full-stack projects and handled bi-weekly on-call production issue responsibilities. Worked closely with DevOps, Sterling OMS, and Networking teams. Developed a manual authentication service for customer membership management, integrated internal and external web services, and performed general application maintenance.

### Full-Stack Software Engineer Intern at Costco eCommerce

Issaquah, WA | April 2013 - July 2013

Gained experience managing costco.com and costco.ca websites within Costco’s distributed architecture. Became familiar with IBM products including WebSphere Commerce, DB2, and MQ.

---

## Selected Projects

### Front-end

- REI Adventures: Delivered production Vue pages including [landing](https://www.rei.com/adventures), [search](https://www.rei.com/adventures/search/keyword?q=canada), [trip details](https://www.rei.com/adventures/trips/weekend/canadian-rockies-hiking-camping.html), and [resource](https://www.rei.com/adventures/resources/faqs) pages.

### Full-stack

- `@rei/ssr`: A Dockerized Express app that enables SSR for Vue apps. Integrated with Spring Boot via custom interceptor and Thymeleaf dialect.
- Climber’s Site: REI’s internal microsite archetype used as a reference by product teams. [Screenshot](/assets/img/screen-captures/climbers-site-screencapture.png)
- Packwood: Internal NPM package discovery tool turned platform utility. [Screenshot](/assets/img/screen-captures/packwood-screencapture.png)
- Costco eCommerce: Contributed to core front-end and full-stack flows including checkout, warehouse locator, product pages, and customer profile.

### Vite plugins, utilities, and configurations

- `@rei/create-package`: A CLI scaffolding tool for new packages, standardizing project setup with CI/CD, testing, and template generation. Now the official initializer for JavaScript/TypeScript code at REI.
- `@rei/vite-base-config`: A shared Vite/Vitest config with unit-tested defaults and browser polyfills, powering all Vue projects at REI.
- `@rei/vite-plugin-alpine-uploader`: Uploads Vite-built assets to Akamai NetStorage for CDN distribution.
- `@rei/vite-plugin-alpine-manifest-css`: Reorders manifest-injected CSS chunks to ensure correct stylesheet injection.
- `@rei/vite-plugin-alpine-stats`: Statistically analyzes repositories and pushes results to Grafana dashboards. [View a screen capture](/assets/img/screen-captures/alpine-stats-screencapture.png).

### CI/CD

- Wrote GitLab CI/CD scripts to automate NPM package publishing to REI’s private registry.
- `cov-stats`: A post-publish Node.js script that sends unit test coverage to Grafana dashboards for historical tracking. Integrated as a CI job.

<!--
Gas Prices Online
Built a REST API sourcing gas prices from Oracle DB and exposing them via a cache layer to warehouse locator and mobile platforms.

Site Redesign
Led redesign of major costco.com flows—including checkout, product detail, and search—collaborating across onshore and offshore teams.

SEO Improvements
Responded to third-party SEO audits by implementing prioritized enhancements, from minor fixes to major structural improvements.

Member-only Purchase
Led development of validation-based purchase restrictions, requiring account-linked membership to complete checkout. Drove flow creation for linking, buying, or renewing memberships via Costco’s Membership API.

SMS Notifications
Engineered SMS order status notifications in two phases: 1) OMS-to-LTL carriers using embedded phone data; 2) integration with Infobip via profile-level preferences.

Responsive Redesign
Replaced Costco’s legacy web application with a responsive solution built on Bootstrap. Supported 5 device breakpoints and delivered via Node, SCSS, Webpack, Mocha, and Selenium.

CRM and Manual Authentication
Built UI for managing membership profiles and enhanced back-end systems to onboard new members through warehouse-initiated sign-ups.
-->

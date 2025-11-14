---
title: AWS SAA-C03 · Part 1 · IAM & AWS CLI
pubDate: '2025-11-15'
---

I'm following an online course in preparation for taking the AWS Certified Solutions Architect Associate (SAA-C03) exam at a later date.

These posts will help me organize my thoughts, study the course topics, and practice technical writing.

Care for some jams while you read?

## AWS Cloud Overview

AWS is organized into geographic Regions, and each <span class="text-solid-mid">Region</span> contains multiple <span class="text-solid-end">Availability Zones</span> (AZs). Each AZ consists of one or more distinct data centers with independent power, networking, and cooling.

The AZs within a Region are interconnected with high-bandwidth, low-latency networking, allowing them to function as a highly available cluster while still being isolated for fault tolerance.

![AWS Regions contain multiple interconnected Availability Zones, each made up of one or more data centers.
](./_assets/aws-cloud-overview.svg)

## IAM: Users & Groups

IAM (Identity and Access Management) is a global AWS service used to control access to your AWS account. It manages users, groups, and roles. The root account is created by default but should never be shared or used for daily tasks. Users represent people in your organization, and they can be organized into groups. Groups can contain users (but not other groups), and a user can belong to multiple groups.

## IAM: Permissions

IAM permissions are controlled through JSON policies attached to users or groups. These policies define what actions they’re allowed to perform. AWS recommends always following the principle of least privilege; grant only the minimum permissions needed.

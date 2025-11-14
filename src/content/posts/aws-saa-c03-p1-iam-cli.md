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

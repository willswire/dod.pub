# dod.pub

## Overview

`dod.pub` is a streamlined solution to simplify access to Department of Defense (DoD) Certificate Authorities (CAs) for development purposes. The DoD CAs are often difficult and annoying to keep track of and use, especially in development environments. This project provides a Cloudflare Worker that serves these certificates in an easily consumable format.

## Features

- 📦 **Package of DoD Certificates**: Quickly access DoD CA certificates as plain text directly from the worker.
- 🚀 **Cloudflare Worker**: Deployed on Cloudflare's serverless platform for high availability and low latency.
- 🧪 **Testing**: Comprehensive test suite using Vitest and @cloudflare/vitest-pool-workers.

## Usage

### Linux

**Ubuntu/Debian:**
```bash
sudo apt-get install curl
curl https://dod.pub/ -o dod.pem
sudo mv dod.pem /usr/local/share/ca-certificates/dod.crt
sudo update-ca-certificates
```

**Red Hat/CentOS:**
```bash
sudo yum install curl
curl https://dod.pub/ -o dod.pem
sudo mv dod.pem /etc/pki/ca-trust/source/anchors/dod.pem
sudo update-ca-trust
```

**Fedora:**
```bash
sudo dnf install curl
curl https://dod.pub/ -o dod.pem
sudo mv dod.pem /etc/pki/ca-trust/source/anchors/dod.pem
sudo update-ca-trust
```

### macOS

For macOS users, please refer to the configuration available at [DoD Certificates for macOS](https://github.com/willswire/dod.mobileconfig).

## Motivation

The DoD CAs are annoying to manage and keep track of, especially for development purposes. This worker aims to simplify this process by providing a centralized, easily accessible source for the necessary certificates.

The certificates are also available for download directly at the following URL: [DoD Certificates ZIP](https://dl.dod.cyber.mil/wp-content/uploads/pki-pke/zip/unclass-certificates_pkcs7_DoD.zip)

# FredieTech Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Build Status](https://img.shields.io/travis/Fred1e/fredie-Tech/master)](https://travis-ci.org/Fred1e/fredie-Tech)
[![GitHub stars](https://img.shields.io/github/stars/Fred1e/fredie-Tech?style=social)](https://github.com/Fred1e/fredie-Tech/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Fred1e/fredie-Tech?style=social)](https://github.com/Fred1e/fredie-Tech/fork)

FredieTech Platform is a cloud deployment and hosting service inspired by Heroku – rebranded for Africa with a focus on ease of deployment, comprehensive payment options, and a user-friendly dashboard. This repository includes a complete demo codebase with:

- **Account Signup & Management**: Create and manage your account similar to Heroku.
- **Deployment Pipeline**: Trigger deployments from your Git repository.
- **Payment Integrations**: Multiple payment endpoints including Safaricom M-PESA, Vodacom, Halotel, bank transfers, and Visa card support.
- **Comprehensive Dashboard**: Manage deployments, billing, and account settings.
- **Documentation & API Guides**: A docs page to help you get started.
- **Modern UI**: Clean design with a color palette of red, blue, green, and white (no purple).

> **Important:**  
> This codebase is a demo/skeleton project intended for development and demonstration purposes only. In production, you must secure all endpoints, use HTTPS, integrate a persistent database, and replace placeholder payment integrations with secure API calls following each provider’s guidelines.

## Features

- **Account Management**  
  - Signup, login, and account dashboard similar to Heroku.
  - Manage deployments, billing history, and profile settings.

- **Deployment**  
  - Trigger deployments from your Git repository.
  - Simulated CI/CD pipeline integration (expandable for production).

- **Payment Processing**  
  - **Safaricom M-PESA**: Secure mobile money integration.
  - **Vodacom & Halotel**: Placeholder modules for Tanzanian mobile payments.
  - **Bank Transfer & Visa Card**: Additional options via third‑party payment gateways.
  - Payment endpoints route payments directly to designated accounts (e.g. Halotel: +255620814108, Vodacom: +255764182801).

- **Dashboard & Docs**  
  - A comprehensive dashboard for managing your projects.
  - Detailed documentation and guides available on the docs page.

## Getting Started

### Prerequisites

- **Node.js** (v14+ recommended)
- **npm** or **yarn**
- Environment variables for payment integrations (see below).

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Fred1e/freditech-platform.git
   cd freditech-platform

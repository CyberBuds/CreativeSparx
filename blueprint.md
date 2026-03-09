# Project Blueprint

## Overview

This project is a Next.js dashboard application that displays invoice and revenue data. It uses Firebase Firestore as its database.

## Implemented Features

*   Initial Next.js project setup.
*   Basic UI components for displaying data.
*   Corrected several TypeScript and build-related errors.
*   Replaced PostgreSQL data fetching logic with Firestore.
*   Added `firebase-admin` for server-side Firebase access.
*   Created a Firebase initialization file (`src/lib/firebase.ts`).
*   **Demo Mode:** A fully functional demo environment that showcases the application's features with sample data.
    *   **Demo Banner:** A clear, visually distinct banner to indicate that the user is in a demonstration environment.
    *   **Demo Dashboard:** A modern, visually appealing dashboard that includes:
        *   Summary cards for total revenue, invoices, and clients.
        *   A revenue chart (placeholder).
        *   A list of the latest invoices.
    *   **Demo Invoices Page:** A clean and modern table displaying a list of demo invoices.
    *   **Demo Customers Page:** A similar table for displaying a list of demo customers.

## Current Plan

All planned features for the demo environment are now complete. The application is ready for the next phase of development.

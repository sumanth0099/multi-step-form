# Multi-Step Registration Form
A React-based multi-step registration form with validation, localStorage persistence, and smooth 
step transitions.

## Live Demo
https://multi-step-form-bjo2.vercel.app/

## Demo Video
https://youtu.be/b-Jh7zOG5Gk

## Features
- Four-step registration flow:
  - Personal Information
  - Address
  - Account Creation
  - Review & Submit
- Step-based navigation with validation blocking
- Real-time field validation using React Hook Form & Zod
- Data persistence using localStorage
- Edit functionality from Review step
- Smooth animations using Framer Motion
- Keyboard navigation & focus management

## Technologies Used
- React
- React Hook Form
- Zod
- Framer Motion
- JavaScript
- CSS

## Installation & Setup

```bash
git clone https://github.com/YOUR_USERNAME/multi-step-registration-form.git
cd multi-step-registration-form
npm install
npm start

- Open http://localhost:3000
#Folder Structure
src/
├── components/
│   ├── steps/
│   └── UI/
├── hooks/
├── validation/
├── App.js
└── index.js

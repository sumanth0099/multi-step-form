# Design & Architecture Overview

This document describes the architectural decisions, state management strategy, and design 
considerations used in building the Multi-Step Registration Form application.

---

## Architecture Overview

The application is built using **React** and follows a **component-based architecture**. Each step 
of the form is encapsulated in its own component, allowing for better separation of concerns, 
maintainability, and scalability.

The core structure consists of:
- A central `MultiStepForm` container component
- Individual step components for each form stage
- Reusable UI components
- Custom hooks for persistence logic
- Schema-based validation

---

## Component Structure

- **MultiStepForm**
  - Manages the current step index
  - Handles step navigation logic
  - Controls form submission
  - Integrates animations and progress indicators

- **Step Components**
  - `PersonalInfoStep`
  - `AddressStep`
  - `AccountCreationStep`
  - `ReviewStep`

Each step component is responsible only for rendering its respective fields and displaying 
validation errors.

- **UI Components**
  - Reusable components such as `Button` and `ProgressBar` are abstracted for consistency and 
  reusability.

---

## State Management Strategy

The application uses **React Hook Form** combined with **React Context (FormProvider)** to manage 
global form state efficiently.

### Why React Hook Form?

- Minimizes re-renders for better performance
- Simplifies form state handling across multiple steps
- Provides built-in integration with validation libraries
- Works seamlessly with uncontrolled inputs

Form state includes:
- User-entered form data
- Validation errors
- Current step index

---

## Validation Strategy

Validation is implemented using **Zod** with step-specific schemas:
- `personalInfoSchema`
- `addressSchema`
- `accountSchema`

### Validation Characteristics
- Field-level validation triggered on blur
- Step-level validation blocks navigation if errors exist
- Strong password rules enforced
- Confirm password matching
- Age restriction (18+)
- Email and phone format validation

This schema-based approach keeps validation logic centralized and easy to maintain.

---

## Data Persistence

To prevent data loss and improve user experience, the entire form state is persisted using 
**localStorage**.

### Persistence Flow
- Form data is saved to localStorage on every change
- On page reload, saved data is restored automatically
- Upon successful submission, stored data is cleared

A custom hook (`useFormPersistence`) encapsulates this logic for reuse and clarity.

---

## Navigation & User Experience

- Step navigation is controlled programmatically
- Users cannot advance without completing required fields
- "Previous" button is disabled on the first step
- "Submit" button appears only on the final review step
- Users can jump back to any step from the Review screen to edit data

---

## Animations & Transitions

**Framer Motion** is used to provide smooth transitions between steps, improving user experience without impacting performance.

- Fade and slide animations on step change
- Animated presence ensures clean mounting/unmounting of steps

---

## Accessibility Considerations

Accessibility was a key design goal:
- All inputs are properly labeled
- Error messages are associated with inputs
- Full keyboard navigation supported
- Focus automatically moves to the first invalid field
- Focus is managed when switching steps

These practices ensure usability for keyboard and screen reader users.

---

## Conclusion

This architecture provides a robust, scalable, and user-friendly multi-step form solution. The 
combination of React Hook Form, Zod, and localStorage persistence ensures reliability, while 
modular components and accessibility considerations align with modern frontend best practices.

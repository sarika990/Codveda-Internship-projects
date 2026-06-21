/*
 * Project: Interactive Registration Form - Validation Scripts
 * Description: Contains form field models, event listeners (blur, input, focus),
 * and submission logic with error and success states.
 * Author: Antigravity Code Assistant
 */

document.addEventListener('DOMContentLoaded', () => {
    // Retrieve DOM elements
    const form = document.getElementById('registration-form');
    const successPanel = document.getElementById('success-confirmation');
    const resetBtn = document.getElementById('reset-form-btn');

    const nameInput = document.getElementById('name-input');
    const emailInput = document.getElementById('email-input');
    const phoneInput = document.getElementById('phone-input');
    const passwordInput = document.getElementById('password-input');

    // Fields configuration mapping and rules
    const fields = {
        name: {
            input: nameInput,
            group: document.getElementById('group-name'),
            errorElement: document.getElementById('error-name'),
            validate: (value) => {
                if (!value.trim()) return "Full Name is required.";
                return "";
            }
        },
        email: {
            input: emailInput,
            group: document.getElementById('group-email'),
            errorElement: document.getElementById('error-email'),
            validate: (value) => {
                if (!value.trim()) return "Email address is required.";
                // RFC 5322 Compliant Simple Email Regex
                const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                if (!emailRegex.test(value.trim())) return "Please enter a valid email address.";
                return "";
            }
        },
        phone: {
            input: phoneInput,
            group: document.getElementById('group-phone'),
            errorElement: document.getElementById('error-phone'),
            validate: (value) => {
                const cleanVal = value.trim();
                if (!cleanVal) return "Phone number is required.";
                const phoneRegex = /^\d+$/;
                if (!phoneRegex.test(cleanVal)) return "Phone number must contain only numeric digits.";
                if (cleanVal.length !== 10) return "Phone number must be exactly 10 digits.";
                return "";
            }
        },
        password: {
            input: passwordInput,
            group: document.getElementById('group-password'),
            errorElement: document.getElementById('error-password'),
            validate: (value) => {
                if (!value) return "Password is required.";
                if (value.length < 8) return "Password must be at least 8 characters long.";
                if (!/[a-zA-Z]/.test(value)) return "Password must contain at least one letter.";
                if (!/\d/.test(value)) return "Password must contain at least one number.";
                return "";
            }
        }
    };

    // Common validator function
    function checkField(fieldName, isTyping = false) {
        const field = fields[fieldName];
        const value = field.input.value;
        const errorMessage = field.validate(value);

        if (errorMessage) {
            // Update error text
            field.errorElement.textContent = errorMessage;
            
            // Only show full error styles when user focuses away (blur) or submits
            // typing behavior handles it gracefully to prevent immediate red styling
            if (!isTyping) {
                field.group.classList.add('error');
                field.group.classList.remove('success');
                field.group.querySelector('.feedback-icon').textContent = '✗';
            }
            return false;
        } else {
            // Clear errors on valid inputs
            field.errorElement.textContent = '';
            field.group.classList.remove('error');
            
            // If the user entered valid content, show green success outline and checkmark
            if (value.trim().length > 0) {
                field.group.classList.add('success');
                field.group.querySelector('.feedback-icon').textContent = '✓';
            } else {
                field.group.classList.remove('success');
            }
            return true;
        }
    }

    // Attach listeners to fields dynamically
    Object.keys(fields).forEach(key => {
        const field = fields[key];

        // Blur event: validate field when user shifts focus away
        field.input.addEventListener('blur', () => {
            checkField(key, false);
        });

        // Input event: clear errors in real-time as user resolves them
        field.input.addEventListener('input', () => {
            checkField(key, true);
        });

        // Focus event: remove error indicator to provide a cleaner layout for correction
        field.input.addEventListener('focus', () => {
            field.group.classList.remove('error');
        });
    });

    // Handle Form Submission
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent standard page refresh

        let isAllValid = true;

        // Perform final strict check on all fields
        Object.keys(fields).forEach(key => {
            const isValid = checkField(key, false);
            if (!isValid) {
                isAllValid = false;
            }
        });

        if (isAllValid) {
            // Hide the form panel completely
            form.style.display = 'none';
            // Trigger animation pop on success panel
            successPanel.classList.add('active');
        }
    });

    // Reset Form / Register another account
    resetBtn.addEventListener('click', () => {
        // Reset all text fields
        form.reset();

        // Clear layout indicators
        Object.keys(fields).forEach(key => {
            const field = fields[key];
            field.group.classList.remove('success', 'error');
            field.errorElement.textContent = '';
        });

        // Toggle visibility back to form
        successPanel.classList.remove('active');
        form.style.display = 'block';
    });
});

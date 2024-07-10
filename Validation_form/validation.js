import React, { useState } from 'react';

export const Validation = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    const validateForm = () => {
        let errors = {};
        if (!email) errors.email = "Email is required";
        if (!password) errors.password = "Password is required";

        setErrors(errors);

        const isValid = Object.keys(errors).length === 0;
        setIsFormValid(isValid);
        return isValid;
    };

    const handleLogin = () => {
        if (validateForm()) {
            console.log("Submitted:", email, password);
            setEmail("");
            setPassword("");
            setErrors({});
            return true; // Form is valid
        } else {
            return false; // Form is invalid
        }
    };

    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return {
        email,
        setEmail,
        password,
        setPassword,
        errors,
        isFormValid,
        validateForm,
        handleLogin,
        showPassword,
        togglePasswordVisibility
    };
};

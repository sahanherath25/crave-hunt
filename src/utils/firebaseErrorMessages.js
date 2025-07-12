export const getAuthError = (code) => {

    console.log("ERROR CODE IS ",code)

    const messages = {
        'auth/email-already-in-use': 'This email is already in use.',
        'auth/invalid-email': 'Please enter a valid email address.',
        'auth/weak-password': 'Password must be at least 6 characters.',
        'auth/user-not-found': 'No account found with this email.',
        'auth/invalid-credential': 'Invalid Credentials',
        'auth/wrong-password': 'Incorrect password.',
        'auth/missing-password': 'Password is required.',
    };

    return messages[code] || 'Something went wrong. Please try again.';
};
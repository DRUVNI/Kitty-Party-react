import React, { useState } from 'react';
import './InvitePage.css'; 

const InvitePage = () => {
    const [inviteCode, setInviteCode] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateInviteCode(inviteCode)) {
            setMessage('Invitation code is valid. You have joined the group!');
            setMessageColor('green');
        } else {
            setMessage('Invalid invitation code. Please try again.');
            setMessageColor('red');
        }
    };

    const validateInviteCode = (code) => {
        const validCodes = ['ABC123', 'XYZ789', 'GROUP2024']; // Example valid codes
        return validCodes.includes(code);
    };

    return (
        <div className="container">
            <h1>Join Our Group</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="invite-code">Enter Invitation Code:</label>
                <input
                    type="text"
                    id="invite-code"
                    value={inviteCode}
                    onChange={(e) => setInviteCode(e.target.value)}
                    required
                />
                <button type="submit">Join</button>
            </form>
            <div style={{ color: messageColor }}>{message}</div>
        </div>
    );
};

export default InvitePage;

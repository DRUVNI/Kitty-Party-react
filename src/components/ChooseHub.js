import React from 'react';
import './App.css';

class InviteCodePage extends React.Component {
  generateInviteCode(groupName) {
    // Mock function to generate an invite code
    const inviteCode = groupName + '-' + Math.random().toString(36).substr(2, 8);
    alert('Invite Code for ' + groupName + ': ' + inviteCode);
  }

  render() {
    return (
      <div className="invite-code-page">
        <div className="group">
          <h2>Group 1</h2>
          <button className="invite-button" onClick={() => this.generateInviteCode('Group 1')}>Invite Code</button>
        </div>

        <div className="group">
          <h2>Group 2</h2>
          <button className="invite-button" onClick={() => this.generateInviteCode('Group 2')}>Invite Code</button>
        </div>

        <div className="group">
          <h2>Group 3</h2>
          <button className="invite-button" onClick={() => this.generateInviteCode('Group 3')}>Invite Code</button>
        </div>
      </div>
    );
  }
}

export default InviteCodePage;

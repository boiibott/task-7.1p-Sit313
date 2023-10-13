import React from 'react';
import './Email.css';
function Email() {
    return (
        <div className="containeremail">
        <p>SIGN UP FOR OUR DAILY INSIDER</p>
        <input type="email" id="email" name="email" required />
        <button type="submit">Subscribe</button>
      </div>
    )
}
export default Email; 
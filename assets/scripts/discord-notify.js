const dotenv = require('dotenv')

document.getElementById('myForm').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const formData = new FormData(event.target);

    const dmURL = `https://discord.com/api/v10/users/@me/channels`;

    const sendMessageURL = `https://discord.com/api/v10/channels/${channelID}/messages`;


  
    // Process form data and construct the message
    const message = `New response:\nName: ${formData.get('name')}\nEmail: ${formData.get('email')}\nMessage: ${formData.get('message')}`;
  
    try {
      // Send message to Discord DM using axios
      const response = await axios.post(dmURL, { recipient_id: targetUserID }, {
        headers: {
          'Authorization': `Bot ${botToken}`,
          'Content-Type': 'application/json',
        },
      });
  
      if (response.status === 200) {
        console.log('Message sent successfully');
        // Redirect to the thank you page on success
        window.location.href = 'https://example.com/done';
      } else {
        console.error('Failed to send message');
        // Show an alert for failure
        window.alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error.message);
      // Show an alert for errors
      window.alert('An unknown error occurred. Please try again later.');
    }
  });
  
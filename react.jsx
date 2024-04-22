import React, { useState } from 'react';

function FeedbackForm() {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Send feedback to the backend
    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ feedback }),
      });
      
      if (response.ok) {
        console.log('Feedback submitted successfully');
        
        // Reset the form after successful submission
        setFeedback('');
      } else {
        console.error('Failed to submit feedback');
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  return (
    <div>
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Enter your feedback here..."
          rows="4"
          cols="50"
          required
        ></textarea>
        <br />
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
}

export default FeedbackForm;
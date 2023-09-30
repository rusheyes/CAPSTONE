import React, { useState } from 'react';
import '../styles/dashboard.css';

const Mailbox = () => {
  const [mails, setMails] = useState([
    {
      id: 1,
      sender: 'Management',
      timestamp: '2023-08-26 10:00 AM',
      message: (
        <>
          <p><b>Hello Mr. John Doe,</b></p>
          <br />
          <p>
            We'd like to extend a warm greeting and thank you for availing our services. We appreciate your trust and confidence in us. Your satisfaction is our top priority.
          </p>
          <p>
            We encourage you to explore all the important components available in your dashboard. These components provide valuable insights and tools to manage your taxes and financial matters efficiently.
          </p>
          <p>
            Additionally, we kindly request you to review your user profile and ensure all information is precise and up-to-date. If you notice any errors or missing information, please update it to ensure our records are complete and accurate.
          </p>
          <p>
            Thank you once again for choosing our services. We look forward to serving you.
          </p>
          <br />
          <p>Best regards,</p>
          <p><b>The Management</b></p>
        </>
      ),
      replied: false,
      reply: '',
      replyTimestamp: '',
    },
  ]);

  const [replyText, setReplyText] = useState('');
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleReply = (id) => {
    const updatedMails = mails.map(mail => {
      if (mail.id === id) {
        return {
          ...mail,
          replied: true,
          reply: replyText,
          replyTimestamp: new Date().toLocaleString(),
          replyImages: selectedFiles, 
        };
      }
      return mail;
    });

    setMails(updatedMails);
    setReplyText('');
    setSelectedFiles([]);
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);
  };

  return (
    <div className="mailbox-container">
      <div className="mailbox">
        {mails.map(mail => (
          <div key={mail.id} className="mail">
            <div className="sender">{mail.sender}</div>
            <div className="timestamp">{mail.timestamp}</div>
            <div className="message">
              <div className="justified-text">{mail.message}</div>
            </div>
            {mail.replied && (
              <div className="reply">
                <div className="client-name">You</div>
                <div className="reply-timestamp">{mail.replyTimestamp}</div>
                <div className="client-reply">{mail.reply}</div>
                {mail.replyImages && mail.replyImages.map((image, index) => (
                  <div className="reply-image" key={index}>
                    <img
                      src={URL.createObjectURL(image)}
                      alt={`Reply ${index + 1}`}
                      style={{ width: '700px', height: 'auto' }}
                    />
                  </div>
                ))}
              </div>
            )}
            {!mail.replied && (
              <div className="message-post">
                <textarea
                  placeholder="Your reply to message (minimum 500 characters)..."
                  value={replyText}
                  onChange={e => setReplyText(e.target.value)}
                  minLength={500}
                  maxLength={1000}
                ></textarea>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  multiple
                />
                <button className="btndes" onClick={() => handleReply(mail.id)}>Reply</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mailbox;

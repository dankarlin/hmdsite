import { useState, useEffect } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import PropTypes from 'prop-types';

const CaptchaModal = ({ show, onHide, onSuccess, title }) => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [error, setError] = useState('');
  const [attempts, setAttempts] = useState(0);
  const maxAttempts = 3;

  const generateQuestion = () => {
    const newNum1 = Math.floor(Math.random() * 10) + 1;
    const newNum2 = Math.floor(Math.random() * 10) + 1;
    setNum1(newNum1);
    setNum2(newNum2);
    setUserAnswer('');
    setError('');
  };

  useEffect(() => {
    if (show) {
      generateQuestion();
      setAttempts(0);
    }
  }, [show]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const correctAnswer = num1 + num2;
    const userAnswerNum = parseInt(userAnswer);

    if (userAnswerNum === correctAnswer) {
      onSuccess();
      onHide();
    } else {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      
      if (newAttempts >= maxAttempts) {
        setError(`Too many incorrect attempts. Please try again later.`);
        setTimeout(() => {
          onHide();
        }, 2000);
      } else {
        setError(`Incorrect answer. ${maxAttempts - newAttempts} attempts remaining.`);
        generateQuestion();
      }
    }
  };

  const handleClose = () => {
    setAttempts(0);
    setError('');
    setUserAnswer('');
    onHide();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title || 'Verify You Are Human'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="mb-3">Please solve this simple math problem to continue:</p>
        
        <Form onSubmit={handleSubmit}>
          <div className="text-center mb-3">
            <h4 className="d-inline-block mx-2">{num1}</h4>
            <h4 className="d-inline-block mx-2">+</h4>
            <h4 className="d-inline-block mx-2">{num2}</h4>
            <h4 className="d-inline-block mx-2">=</h4>
            <Form.Control
              type="number"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="?"
              className="d-inline-block mx-2"
              style={{ width: '80px' }}
              required
              autoFocus
              disabled={attempts >= maxAttempts}
            />
          </div>

          {error && (
            <Alert variant="danger" className="mb-3">
              {error}
            </Alert>
          )}

          <div className="d-flex justify-content-end gap-2">
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button 
              variant="primary" 
              type="submit"
              disabled={!userAnswer || attempts >= maxAttempts}
            >
              Verify
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

CaptchaModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  onSuccess: PropTypes.func.isRequired,
  title: PropTypes.string
};

export default CaptchaModal;
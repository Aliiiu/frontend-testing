import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import classes from './Login.module.css';
import './Login.scss';

const Login = (props) => {
	const navigate = useNavigate();
	const [enteredEmail, setEnteredEmail] = useState('');
	const [emailIsValid, setEmailIsValid] = useState();
	const [enteredPassword, setEnteredPassword] = useState('');
	const [passwordIsValid, setPasswordIsValid] = useState();
	const [formIsValid, setFormIsValid] = useState(false);

	const emailChangeHandler = (event) => {
		setEnteredEmail(event.target.value);

		setFormIsValid(
			event.target.value.includes('@') && enteredPassword.trim().length > 6
		);
	};

	const passwordChangeHandler = (event) => {
		setEnteredPassword(event.target.value);

		setFormIsValid(
			event.target.value.trim().length > 6 && enteredEmail.includes('@')
		);
	};

	const validateEmailHandler = () => {
		setEmailIsValid(enteredEmail.includes('@'));
	};

	const validatePasswordHandler = () => {
		setPasswordIsValid(enteredPassword.trim().length > 6);
	};

	const submitHandler = (event) => {
		event.preventDefault();
		navigate('/dashboard');
	};

	// const invalid = '.invalid';

	return (
		<div className='login'>
			<div className='login-content'>
				<h2>Welcome!</h2>
				<h3>Enter details to login.</h3>
				<form onSubmit={submitHandler}>
					<div className={`control ${emailIsValid === false ? 'invalid' : ''}`}>
						<input
							type='email'
							placeholder='Email'
							id='email'
							value={enteredEmail}
							onChange={emailChangeHandler}
							onBlur={validateEmailHandler}
						/>
					</div>
					<div
						className={`control ${passwordIsValid === false ? 'invalid' : ''}`}
					>
						<input
							type='password'
							placeholder='Password'
							id='pswd'
							value={enteredPassword}
							onChange={passwordChangeHandler}
							onBlur={validatePasswordHandler}
						/>
					</div>
					<h5>FORGOT PASSWORD?</h5>
					<button type='submit' disabled={!formIsValid} className={'login-btn'}>
						LOG IN
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;

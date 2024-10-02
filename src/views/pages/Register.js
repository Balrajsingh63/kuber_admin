/** @format */

import { ErrorToast } from "Helper/Toast";
import { SuccessToast } from "Helper/Toast";
import { useState } from "react";
import {
	Button,
	Card,
	CardHeader,
	CardBody,
	FormGroup,
	Form,
	Input,
	InputGroupAddon,
	InputGroupText,
	InputGroup,
	Row,
	Col,
} from "reactstrap";
import { ApiURL } from "services/apiConstants";
import { post } from "services/services";

const Register = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [checkBox, setCheckBox] = useState("");
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [checkBoxError, setCheckBoxError] = useState("");

	const adminRegister = () => {
		const formData = {
			email: email,
			password: password,
		};
		post(ApiURL.register, formData).then((res) => {
			if (res && res?.status == true) {
				SuccessToast(res?.message);
			} else {
				ErrorToast(res?.message);
			}
		});
	};

	const handleSubmit = () => {
		if (checkValidation() == false) {
			return;
		} else {
			adminRegister();
		}
	};

	const checkValidation = () => {
		const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
		const isValidEmail = emailRegex.test(email);
		if (email == "") {
			setEmailError("Email is required !");
			return false;
		} else if (password == "") {
			setPasswordError("Password is required !");
			return false;
		} else if (checkBox == "") {
			setCheckBoxError("CheckBox is required !");
			return false;
		}
	};

	return (
		<>
			<Col lg='6' md='8'>
				<Card className='bg-secondary shadow border-0'>
					<CardBody className='px-lg-5 py-lg-5'>
						<div className='text-center text-muted mb-4'>
							<h2>New Admin Register</h2>
						</div>
						<Form role='form'>
							<FormGroup></FormGroup>
							<FormGroup>
								<InputGroup className='input-group-alternative mb-3'>
									<InputGroupAddon addonType='prepend'>
										<InputGroupText>
											<i className='ni ni-email-83' />
										</InputGroupText>
									</InputGroupAddon>
									<Input
										placeholder='Email'
										type='email'
										autoComplete='new-email'
										onChange={(e) => {
											setEmail(e.target.value);
										}}
										value={email}
									/>
								</InputGroup>
								<p style={{ color: "red", fontSize: 15 }}>
									{email === "" ? emailError : ""}
								</p>
							</FormGroup>
							<FormGroup>
								<InputGroup className='input-group-alternative'>
									<InputGroupAddon addonType='prepend'>
										<InputGroupText>
											<i className='ni ni-lock-circle-open' />
										</InputGroupText>
									</InputGroupAddon>
									<Input
										placeholder='Password'
										type='password'
										autoComplete='new-password'
										onChange={(e) => {
											setPassword(e.target.value);
										}}
										value={password}
									/>
								</InputGroup>
								<p style={{ color: "red", fontSize: 15 }}>
									{password === "" ? passwordError : ""}
								</p>
							</FormGroup>
							<div className='text-muted font-italic'>
								<small>
									password strength:{" "}
									<span className='text-success font-weight-700'>
										strong
									</span>
								</small>
							</div>
							<Row className='my-4'>
								<Col xs='12'>
									<div className='custom-control custom-control-alternative custom-checkbox'>
										<input
											className='custom-control-input'
											id=' customCheckLogin'
											type='checkbox'
											onChange={(e) => {
												setCheckBox(e.target.value);
											}}
										/>

										<label
											className='custom-control-label'
											htmlFor=' customCheckLogin'>
											<span className='text-muted'>
												I agree with the{" "}
												<a
													href='#pablo'
													onClick={(e) => e.preventDefault()}>
													Privacy Policy
												</a>
											</span>
										</label>
										<p style={{ color: "red", fontSize: 15 }}>
											{checkBox == "" ? checkBoxError : ""}
										</p>
									</div>
								</Col>
							</Row>
							<div className='text-center'>
								<Button
									className='mt-4'
									color='primary'
									type='button'
									onClick={handleSubmit}>
									Create account
								</Button>
							</div>
						</Form>
					</CardBody>
				</Card>
			</Col>
		</>
	);
};

export default Register;

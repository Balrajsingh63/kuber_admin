/** @format */

import {
	Button,
	Card,
	CardHeader,
	CardBody,
	FormGroup,
	Form,
	Input,
	Container,
	Row,
	Col,
	Table,
	Media,
} from "reactstrap";
import UserHeader from "components/Headers/UserHeader.js";
import React, { useEffect, useState } from "react";
import { SuccessToast } from "Helper/Toast";
import { ErrorToast } from "Helper/Toast";
import { ApiURL } from "services/apiConstants";
import { get } from "services/services";
import moment from "moment";

const TodayResultScreen = () => {
	const [drop, setDrop] = useState("");
	const [resultDate, setDate] = useState(moment().format("YYYY-MM-DD"));
	const [resultList, setResultList] = useState([]);
	const [filterGameList, setFilterGameList] = useState([]);

	let resultList1 = filterGameList[0]?.gameRequest;
	let date = filterGameList[0]?.createdAt;

	let formatDate = moment(date).format("l");

	const getResult_List = () => {
		get(ApiURL.game_List).then((res) => {
			if (res && res?.status === true) {
				setResultList(res?.data);
			}
		});
	};

	useEffect(() => {
		getResult_List();
	}, []);

	const todayGame = () => {
		get(`${ApiURL.filter_game}?gameId=${drop}&date=${resultDate}`).then((res) => {
			if (res && res?.status === true) {
				setFilterGameList(res?.data);
				SuccessToast(res?.message);
			} else {
				ErrorToast(res?.message);
			}
		});
	};

	const handleSubmit = () => {
		if (checkValidation() === false) {
			return;
		} else {
			todayGame();
		}
	};

	const checkValidation = () => {
		if (drop === "") {
			ErrorToast("Game Name is required !");
			return false;
		} else if (resultDate === "") {
			ErrorToast("Result Date is required !");
			return false;
		}
	};

	return (
		<>
			<UserHeader />
			<Container className='mt--7' fluid>
				<Row>
					<Col className='order-xl-1' xl='12'>
						<Card className='bg-secondary shadow'>
							<CardHeader className='bg-white border-0'>
								<Row className='align-items-center'>
									<Col xs='8'>
										<h3 className='mb-0'>Add Games Result</h3>
									</Col>
								</Row>
							</CardHeader>
							<CardBody>
								<Form>
									<h6 className='heading-small text-muted mb-4'>
										User Add Games Result information
									</h6>
									<div className='pl-lg-4'>
										<Row>
											<Col lg='4'>
												<FormGroup>
													<label
														className='form-control-label'
														htmlFor='input-gameName'>
														Game Name
													</label>
													<Input
														id='exampleSelect'
														name='status'
														type='select'
														value={drop}
														onChange={(e) => {
															setDrop(e.target.value);
														}}>
														<option
															value={""}
															selected
															disabled>
															Game Name Selected
														</option>
														{resultList.map((item) => {
															return (
																<option value={item?._id}>
																	{item?.name}
																</option>
															);
														})}
													</Input>
												</FormGroup>
											</Col>

											<Col lg='4'>
												<FormGroup>
													<label
														className='form-control-label'
														htmlFor='input-number'>
														Date
													</label>
													<Input
														className='form-control-alternative'
														id='input-number'
														placeholder='Result'
														type='date'
														onChange={(e) => {
															setDate(e.target.value);
														}}
														value={resultDate}
														defaultValue={new Date()}
													/>
												</FormGroup>
											</Col>
											<Col lg='4'>
												<h1 className='heading-small text-muted mb-1'>
													Submit
												</h1>
												<Button
													color='info'
													onClick={handleSubmit}
													// size="lg"
													// style={{ alignSelf: 'center' }}
												>
													Today Result
												</Button>
											</Col>
										</Row>
									</div>
								</Form>
								<Table responsive>
									<thead className='thead-danger'>
										<tr className='table-danger'>
											<th scope='col'>Game Name</th>
											<th scope='col'>Game Number</th>
											<th scope='col'>Totle Number</th>
											<th scope='col'>Totle Amount</th>
											<th scope='col'>Date</th>
										</tr>
									</thead>
									{filterGameList.length > 0 && (
										<tbody>
											<tr className='table-success'>
												<th scope='row'>
													<Media className='align-items-center'>
														<Media>
															<span className='mb-0 text-sm'>
																{filterGameList[0]?.name}
															</span>
														</Media>
													</Media>
												</th>
												<td>
													{resultList1?.map((item, index) => (
														<tr>
															<td>{item?._id}</td>
														</tr>
													))}
												</td>
												<td>
													{resultList1?.map((item, index) => (
														<tr>
															<td>{item?.count}</td>
														</tr>
													))}
												</td>
												<td>
													{resultList1?.map((item, index) => (
														<tr>
															<td>{item?.totalPrice}</td>
														</tr>
													))}
												</td>
												<td>{formatDate}</td>
											</tr>
										</tbody>
									)}
								</Table>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default TodayResultScreen;

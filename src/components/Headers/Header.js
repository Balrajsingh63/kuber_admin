/** @format */

// reactstrap components
import { useSelector } from "react-redux";
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

const Header = () => {
	const totleUser = useSelector((state) => state.authReducer.totleUser);
	return (
		<>
			<div
				className='header pb-8 pt-5 pt-md-8'
				style={{
					minHeight: "400px",
					backgroundImage:
						"url(" +
						require("../../assets/img/theme/team-4-800x800.jpg") +
						")",
					backgroundSize: "cover",
					backgroundPosition: "center top",
				}}>
				<span className='mask bg-gradient-default opacity-8' />
				<Container fluid>
					<div className='header-body'>
						{/* Card stats */}
						<Row>
							<Col lg='6' xl='3'>
								<Card className='card-stats mb-4 mb-xl-0'>
									<CardBody>
										<Row>
											<div className='col'>
												<CardTitle
													tag='h5'
													className='text-uppercase text-muted mb-0'>
													Users
												</CardTitle>
												<span className='h2 font-weight-bold mb-0'>
													{totleUser}
												</span>
											</div>
											<Col className='col-auto'>
												<div className='icon icon-shape bg-danger text-white rounded-circle shadow'>
													<i className='fas fa-users' />
												</div>
											</Col>
										</Row>
										<p className='mt-3 mb-0 text-muted text-sm'>
											<span className='text-success mr-2'>
												<i className='fa fa-arrow-up' /> 3.48%
											</span>{" "}
											<span className='text-nowrap'>
												Since last month
											</span>
										</p>
									</CardBody>
								</Card>
							</Col>
							<Col lg='6' xl='3'>
								<Card className='card-stats mb-4 mb-xl-0'>
									<CardBody>
										<Row>
											<div className='col'>
												<CardTitle
													tag='h5'
													className='text-uppercase text-muted mb-0'>
													Game Request
												</CardTitle>
												<span className='h2 font-weight-bold mb-0'>
													2,356
												</span>
											</div>
											<Col className='col-auto'>
												<div className='icon icon-shape bg-warning text-white rounded-circle shadow'>
													<i className='fas fa-chart-bar' />
												</div>
											</Col>
										</Row>
										<p className='mt-3 mb-0 text-muted text-sm'>
											<span className='text-success mr-2'>
												<i className='fas fa-arrow-up' /> 3.48%
											</span>{" "}
											<span className='text-nowrap'>
												Since last week
											</span>
										</p>
									</CardBody>
								</Card>
							</Col>
							<Col lg='6' xl='3'>
								<Card className='card-stats mb-4 mb-xl-0'>
									<CardBody>
										<Row>
											<div className='col'>
												<CardTitle
													tag='h5'
													className='text-uppercase text-muted mb-0'>
													New Game
												</CardTitle>
												<span className='h2 font-weight-bold mb-0'>
													24
												</span>
											</div>
											<Col className='col-auto'>
												<div className='icon icon-shape bg-yellow text-white rounded-circle shadow'>
													<i className='fas fa-chart-pie' />
												</div>
											</Col>
										</Row>
										<p className='mt-3 mb-0 text-muted text-sm'>
											<span className='text-success mr-2'>
												<i className='fas fa-arrow-up' /> 1.10%
											</span>{" "}
											<span className='text-nowrap'>
												Since Monday
											</span>
										</p>
									</CardBody>
								</Card>
							</Col>
							<Col lg='6' xl='3'>
								<Card className='card-stats mb-4 mb-xl-0'>
									<CardBody>
										<Row>
											<div className='col'>
												<CardTitle
													tag='h5'
													className='text-uppercase text-muted mb-0'>
													Performance
												</CardTitle>
												<span className='h2 font-weight-bold mb-0'>
													49,65%
												</span>
											</div>
											<Col className='col-auto'>
												<div className='icon icon-shape bg-info text-white rounded-circle shadow'>
													<i className='fas fa-percent' />
												</div>
											</Col>
										</Row>
										<p className='mt-3 mb-0 text-muted text-sm'>
											<span className='text-success mr-2'>
												<i className='fas fa-arrow-up' /> 100%
											</span>{" "}
											<span className='text-nowrap'>
												Since last month
											</span>
										</p>
									</CardBody>
								</Card>
							</Col>
						</Row>
					</div>
				</Container>
			</div>
		</>
	);
};

export default Header;

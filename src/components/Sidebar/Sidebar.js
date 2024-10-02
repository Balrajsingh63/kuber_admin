/** @format */

import { useState } from "react";
import { NavLink as NavLinkRRD, Link, useLocation } from "react-router-dom";
// nodejs library to set properties for components
import { PropTypes } from "prop-types";

// reactstrap components
import {
	Collapse,
	DropdownMenu,
	DropdownItem,
	UncontrolledDropdown,
	DropdownToggle,
	Form,
	Input,
	InputGroupAddon,
	InputGroupText,
	InputGroup,
	Media,
	NavbarBrand,
	Navbar,
	NavItem,
	NavLink,
	Nav,
	Container,
	Row,
	Col,
} from "reactstrap";

const Sidebar = (props) => {
	const location = useLocation();
	const [collapseOpen, setCollapseOpen] = useState();
	// verifies if routeName is the one active (in browser input)
	const activeRoute = (routeName) => {
		return props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
	};
	// toggles collapse between opened and closed (true/false)
	const toggleCollapse = () => {
		setCollapseOpen((data) => !data);
	};
	// closes the collapse
	const closeCollapse = () => {
		setCollapseOpen(false);
	};
	const createLinks = (routes) => {
		return routes.map((prop, key) => {
			const isActive = location.pathname === prop.layout + prop.path;

			return (
				<NavItem
					key={key}
					style={{
						backgroundColor: isActive ? "#585FA0" : "white",
						marginBottom: 4,
					}}>
					<NavLink
						to={prop.layout + prop.path}
						tag={NavLinkRRD}
						onClick={closeCollapse}
						style={{
							textDecoration: "none", // Optional: Remove default underline from links
							color: isActive ? "black" : "gray", // Optional: Text color for active item
						}}>
						<i className={prop.icon} />
						{isActive ? (
							<span
								style={{
									fontSize: 17,
									fontWeight: 600,
									padding: "4px 4px", // Optional: Add padding around text
								}}>
								{prop.name}
							</span>
						) : (
							prop.name
						)}
					</NavLink>
				</NavItem>
			);
		});
	};

	const { bgColor, routes, logo } = props;
	let navbarBrandProps;
	if (logo && logo.innerLink) {
		navbarBrandProps = {
			to: logo.innerLink,
			tag: Link,
		};
	} else if (logo && logo.outterLink) {
		navbarBrandProps = {
			href: logo.outterLink,
			target: "_blank",
		};
	}

	return (
		<Navbar
			className='navbar-vertical fixed-left navbar-light bg-white'
			expand='md'
			id='sidenav-main'>
			<Container fluid>
				{/* Toggler */}
				<button className='navbar-toggler' type='button' onClick={toggleCollapse}>
					<span className='navbar-toggler-icon' />
				</button>
				{/* Brand */}
				{logo ? (
					<NavbarBrand className='pt-0 ' {...navbarBrandProps}>
						<img
							alt={logo.imgAlt}
							className='navbar-brand-img'
							src={logo.imgSrc}
							style={{ height: "20%", width: "20%", borderRadius: "100%" }}
						/>
					</NavbarBrand>
				) : null}
				{/* User */}
				<Nav className='align-items-center d-md-none'>
					<UncontrolledDropdown nav>
						<DropdownToggle nav className='nav-link-icon'>
							<i className='ni ni-bell-55' />
						</DropdownToggle>
						<DropdownMenu
							aria-labelledby='navbar-default_dropdown_1'
							className='dropdown-menu-arrow'
							right>
							<DropdownItem>Action</DropdownItem>
							<DropdownItem>Another action</DropdownItem>
							<DropdownItem divider />
							<DropdownItem>Something else here</DropdownItem>
						</DropdownMenu>
					</UncontrolledDropdown>
					<UncontrolledDropdown nav>
						<DropdownToggle nav>
							<Media className='align-items-center'>
								<span className='avatar avatar-sm rounded-circle'>
									<img
										alt='...'
										src={require("../../assets/img/theme/team-1-800x800.jpg")}
									/>
								</span>
							</Media>
						</DropdownToggle>
						<DropdownMenu className='dropdown-menu-arrow' right>
							<DropdownItem className='noti-title' header tag='div'>
								<h6 className='text-overflow m-0'>Welcome!</h6>
							</DropdownItem>
							<DropdownItem to='/admin/user-profile' tag={Link}>
								<i className='ni ni-single-02' />
								<span>My profile</span>
							</DropdownItem>
							<DropdownItem to='/admin/user-profile' tag={Link}>
								<i className='ni ni-settings-gear-65' />
								<span>Settings</span>
							</DropdownItem>
							<DropdownItem to='/admin/user-profile' tag={Link}>
								<i className='ni ni-calendar-grid-58' />
								<span>Activity</span>
							</DropdownItem>
							<DropdownItem to='/admin/user-profile' tag={Link}>
								<i className='ni ni-support-16' />
								<span>Support</span>
							</DropdownItem>
							<DropdownItem divider />
							<DropdownItem onClick={(e) => e.preventDefault()}>
								<i className='ni ni-user-run' />
								<span>Logout</span>
							</DropdownItem>
						</DropdownMenu>
					</UncontrolledDropdown>
				</Nav>
				{/* Collapse */}
				<Collapse navbar isOpen={collapseOpen}>
					{/* Collapse header */}
					<div className='navbar-collapse-header d-md-none'>
						<Row>
							{logo ? (
								<Col className='collapse-brand' xs='6'>
									{logo.innerLink ? (
										<Link to={logo.innerLink}>
											<img alt={logo.imgAlt} src={logo.imgSrc} />
										</Link>
									) : (
										<a href={logo.outterLink}>
											<img alt={logo.imgAlt} src={logo.imgSrc} />
										</a>
									)}
								</Col>
							) : null}
							<Col className='collapse-close' xs='6'>
								<button
									className='navbar-toggler'
									type='button'
									onClick={toggleCollapse}>
									<span />
									<span />
								</button>
							</Col>
						</Row>
					</div>
					{/* Form */}
					<Form className='mt-4 mb-3 d-md-none'>
						<InputGroup className='input-group-rounded input-group-merge'>
							<Input
								aria-label='Search'
								className='form-control-rounded form-control-prepended'
								placeholder='Search'
								type='search'
							/>
							<InputGroupAddon addonType='prepend'>
								<InputGroupText>
									<span className='fa fa-search' />
								</InputGroupText>
							</InputGroupAddon>
						</InputGroup>
					</Form>
					{/* Navigation */}
					<Nav navbar>{createLinks(routes)}</Nav>
					{/* Divider */}
					<hr className='my-3' />
				</Collapse>
			</Container>
		</Navbar>
	);
};

Sidebar.defaultProps = {
	routes: [{}],
};

Sidebar.propTypes = {
	// links that will be displayed inside the component
	routes: PropTypes.arrayOf(PropTypes.object),
	logo: PropTypes.shape({
		// innerLink is for links that will direct the user within the app
		// it will be rendered as <Link to="...">...</Link> tag
		innerLink: PropTypes.string,
		// outterLink is for links that will direct the user outside the app
		// it will be rendered as simple <a href="...">...</a> tag
		outterLink: PropTypes.string,
		// the image src of the logo
		imgSrc: PropTypes.string.isRequired,
		// the alt for the img
		imgAlt: PropTypes.string.isRequired,
	}),
};

export default Sidebar;

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
} from "reactstrap";
import UserHeader from "components/Headers/UserHeader.js";
import React, { useState } from "react";
import { post } from "services/services";
import { SuccessToast } from "Helper/Toast";
import { ErrorToast } from "Helper/Toast";
import { ApiURL } from "services/apiConstants";

const AddMoney = () => {
    const [name, setName] = useState('')
    const [resultTime, setResultTime] = useState('')
    const [openTime, setOpenTime] = useState('')
    const [closeTime, setCloseTime] = useState('')


    const addGame = () => {
        const formData = {
            mobile: name,
            price: resultTime,
        };
        post(ApiURL.update_wallet_Admin, formData).then(res => {
            if (res && res?.status == true) {
                SuccessToast(res?.message)
            } else {
                ErrorToast(res?.message)
            }
        });
    };

    const handleSubmit = () => {
        if (checkValidation() == false) {
            return;
        } else {
            addGame();
        }
    };

    const checkValidation = () => {
        if (name == '') {
            ErrorToast('Mobile is required !');
            return false;
        } else if (resultTime == '') {
            ErrorToast('Price is required !');
            return false;
        }
    };


    return (
        <>
            <UserHeader />
            <Container className="mt--7" fluid>
                <Row>
                    <Col className="order-xl-1" xl="12">
                        <Card className="bg-secondary shadow">
                            <CardHeader className="bg-white border-0">
                                <Row className="align-items-center">
                                    <Col xs="8">
                                        <h3 className="mb-0">Add Games</h3>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <Form>
                                    <h6 className="heading-small text-muted mb-4">
                                        User Add Games information
                                    </h6>
                                    <div className="pl-lg-4">
                                        <Row>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-gameName"
                                                    >
                                                        Mobile Number
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        defaultValue="Kuber"
                                                        id="input-GameName"
                                                        placeholder="Mobile Number"
                                                        type="text"
                                                        onChange={(e) => { setName(e.target.value) }}
                                                        value={name}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-number"
                                                    >
                                                        Price
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-number"
                                                        placeholder="Price"
                                                        type="text"
                                                        onChange={(e) => { setResultTime(e.target.value) }}
                                                        value={resultTime}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>

                                        <Button
                                            color="info"
                                            onClick={handleSubmit}
                                            size="lg"
                                            style={{ alignSelf: 'center' }}
                                        >
                                            Update wallet
                                        </Button>
                                    </div>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default AddMoney;

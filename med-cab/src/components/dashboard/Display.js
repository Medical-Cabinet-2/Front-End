import React from 'react';
import { Container, Col, Row, Button } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.css";
import SavedStrainsList from '../recommendations/SavedStrainsList';

const Display = (props) => {
    const routeChange = (e) => {
        e.preventDefault();
        let path = "/strainform";
        props.history.push(path);
    };

    return (
        <Row>
            <Col>
                <SavedStrainsList allowSearch />
                <Button
                    type='submit'
                    className="CustomButtonFilled"
                    onClick={routeChange}
                >
                    Find New Strains!
                </Button>
            </Col>
        </Row>
    );
};

export default Display;
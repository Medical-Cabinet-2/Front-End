import React from 'react';
import { Container, Col, Row, Button } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.css";
import SavedStrainsList from '../recommendations/SavedStrainsList';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

const Display = (props) => {
    const routeChange = (e) => {
        e.preventDefault();
        let path = "/strainform";
        props.history.push(path);
    };

    return (
        <Row>
            <AppHeader />
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
            <AppFooter />
        </Row>
    );
};

export default Display;
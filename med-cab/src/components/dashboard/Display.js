import React from 'react';
import { Container, Col, Row, Button } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.css";
import SavedStrainsList from '../recommendations/SavedStrainsList';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

import styled from 'styled-components';

const Saved = styled.div`
    marginTop: '5%
`;

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
                <Saved>
                    <SavedStrainsList allowSearch />
                </Saved>
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
import React from 'react';
import { Col, Row, Button } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.css";
import SavedStrainsList from '../recommendations/SavedStrainsList';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

import styled from 'styled-components';

const Saved = styled.div`
    marginTop: '5%
`;

const Head = styled.div`
    display: 'flex'
`;

const Foot = styled.div`
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    marginBottom: '5%',
    marginLeft: '50%'
`;

const Display = (props) => {
    const routeChange = (e) => {
        e.preventDefault();
        let path = "/strainform";
        props.history.push(path);
    };

    return (
        <div>
            <Row>
                <Head>
                    <AppHeader />
                </Head>
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
            </Row>
            <Foot>
                <AppFooter />
            </Foot>
        </div>
    );
};

export default Display;
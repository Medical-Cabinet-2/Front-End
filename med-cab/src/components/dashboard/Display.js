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
    display: 'flex',
    marginTop: '16%'
`;

const Cont = styled.div`
    marginLeft: '5%'
`;

const Foot = styled.div`
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    marginBottom: '5%',
    marginLeft: '50%'
`;

const BigButt = styled.div`
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center'
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
                <Cont>
                    <Col>
                        <Saved className="savedcont">
                            <SavedStrainsList allowSearch />
                        </Saved>
                        <BigButt className='big-butt'>
                            <Button
                                type='submit'
                                className="CustomButtonFilled"
                                onClick={routeChange}
                            >
                                Find New Strains!
                            </Button>
                        </BigButt>
                    </Col>
                </Cont>
            </Row>
            <Foot>
                <AppFooter />
            </Foot>
        </div>
    );
};

export default Display;
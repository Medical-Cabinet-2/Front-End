import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Col,
  Button,
  Form as StrapForm,
  FormGroup,
  Label,
  Input,
  FormText,
  Card
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

import Strain from "./Strain";


const SavedStrainsList = (props) => {
    const savedStrains = useSelector(state => state.strains.savedStrains);

    const [filters, setFilters] = useState({
        search: '',
        type: 'select',
        effect: 'select',
        symptom: 'select'
    })
    const [searchResults, setSearchResults] = useState(savedStrains);

    useEffect(() => {
        const lowerCaseSearch = filters.search.toLowerCase();
        let results = savedStrains.filter(strain => 
            strain.name.toLowerCase().includes(lowerCaseSearch)
            || strain.type.toLowerCase().includes(lowerCaseSearch)
            || strain.effects.toLowerCase().includes(lowerCaseSearch)
            || strain.description.toLowerCase().includes(lowerCaseSearch)
        );

        results = results.filter(strain => 
            filters.type === 'select' || strain.type.toLowerCase().includes(filters.type.toLowerCase())
            );

        results = results.filter(strain => 
            filters.effect === 'select' || strain.effects.toLowerCase().includes(filters.effect.toLowerCase())
        );

        results = results.filter(strain => 
            filters.symptom === 'select' || strain.description.toLowerCase().includes(filters.symptom.toLowerCase())
        );
        
        setSearchResults(results);
    },[filters])

    const handleChange = e => {
        setFilters({...filters, [e.target.name]: e.target.value});
    }

    return (
        <>
        <h2>Saved Strain Recommendations:</h2>
        {props.allowSearch &&
            <StrapForm>
            <FormGroup row>
                <Col sm={12}>
                <Input
                type="text"
                name="search"
                placeholder="Search saved strains..."
                onChange={handleChange}
                />
                </Col>
            </FormGroup>
            <h3>Type of Marijuana:</h3>
            <FormGroup row>
                <Col sm={12}>
                <Input
                    type="select"
                    name="type"
                    id="type"
                    onChange={handleChange}
                >
                    <option value='select' >Select type...</option>
                    <option value='indica' >Indica</option>
                    <option value='sativa' >Sativa</option>
                    <option value='hybrid' >Hybrid</option>
                </Input>
                </Col>
            </FormGroup>
            <h3>Desired Feeling:</h3>
            <FormGroup row>
                <Col sm={12}>
                <Input
                    type="select"
                    name="effect"
                    id="effect"
                    onChange={handleChange}
                >
                    <option value='select' >Select type...</option>
                    <option value='Relaxed'>Relaxed</option>
                    <option value='Sleepy' >Sleepy</option>
                    <option value='Happy' >Happy</option>
                    <option value='Uplifted' >Uplifted</option>
                    <option value='Focused' >Focused</option>
                    <option value='Hungry' >Hungry</option>
                    <option value='Creative' >Creative</option>
                    <option value='Cotton-Mouth' >Cotton Mouth</option>
                    <option value='Euphoric' >Euphoric</option>
            
                </Input>
                </Col>
            </FormGroup>
            <h3>Symptom Treated:</h3>
            <FormGroup row>
                <Col sm={12}>
                <Input
                    type="select"
                    name="symptom"
                    id="symptom"
                    onChange={handleChange}
                >
                    <option value='select' >Select type...</option>
                    <option value='Anxiety'>Anxiety</option>
                    <option value='Depression' >Depression</option>
                    <option value='Nausea' >Nausea</option>
                    <option value='Pain' >Pain</option>
                    <option value='Insomnia' >Insomnia</option>
                    <option value='Appetite' >Appetite</option>
                </Input>
                </Col>
            </FormGroup>
            </StrapForm>
        }
        <Card style={{padding:'1rem'}}>
            {searchResults.map((item, index) => (
            <Strain strain={item} key={index} allowRemove/>
            ))}
        </Card>
        </>
    );
};

export default SavedStrainsList;
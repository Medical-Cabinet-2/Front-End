import React, {useState} from 'react'; 
import {Input} from "reactstrap";


const SymptomsList = (props) => {
    const symptoms = useSelector(state => state.symptoms.SymptomsList);

    const [] = useState({
        search: '',
        type: 'select',
        effect: 'select'
    })



    return (
      <>
        <h3>Effects</h3>
        <div>
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
             </Input>
                
            </div>
        </>
    );
};

   export default SymptomsList;             
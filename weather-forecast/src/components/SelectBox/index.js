import React from 'react';
import citiesList from './citiesList';
import {useMain} from '../../context/MainContext';

function SelectBox() {
    const {selectedCity, setSelectedCity} = useMain();

    return (
        <div className='select-box'>
            <select defaultValue={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
                {
                    citiesList.map((city, i) => <option key={i} value={city} label={city} />)
                }
            </select>
        </div>
    )
}

export default SelectBox;
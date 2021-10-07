import React, { useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

// Image
import searchIcon from '../../images/search-icon.svg'

// Styles
import { Wrapper, Content } from './SearchBar.styles';

const SearchBar = ({setSearchTerm }) =>{
    const [state,setState]=useState('');
    const initial = useRef(true);

    useEffect(()=>{

        if(initial.current){
            initial.current=false;
            return;
        }

        const timer = setTimeout(()=>{
            setSearchTerm(state);
        },1000) // that will trigger each half second and call this set search term

        return()=> clearTimeout(timer)
    },[setSearchTerm,state])

    return(
        <Wrapper>
            <Content>
                <img src={searchIcon} alt='search-icon' />
                <input
                    type='text'
                    placeholder='Search Movie'
                    onChange={event => setState(event.currentTarget.value)}
                    value={state} />
            </Content>
        </Wrapper>
    );

};

SearchBar.propTypes = {  // validate prop type
    callback: PropTypes.func
  }



export default SearchBar;
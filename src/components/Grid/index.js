import react from "react";
import PropTypes from 'prop-types';

// Styles
import { Wrapper, Content } from "../Grid/Grid.styles";
import { Children } from "react";

const Grid=({ header, children}) => (
    <Wrapper>
        <h1>{header}</h1>
        <Content>{children}</Content>
    </Wrapper>
)

Grid.propTypes = {  // validate prop type
    header: PropTypes.string
  }

export default Grid;

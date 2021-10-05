import react from "react";

// Styles
import { Wrapper, Content } from "../Grid/Grid.styles";
import { Children } from "react";

const Grid=({ header, children}) => (
    <Wrapper>
        <h1>{header}</h1>
        <Content>{children}</Content>
    </Wrapper>
)

export default Grid;

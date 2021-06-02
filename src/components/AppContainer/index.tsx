import React from "react";
import { Container } from "./styles";

const AppContainer: React.FC = ({ children }) => {
    return <Container>{children}</Container>;
};

export default AppContainer;

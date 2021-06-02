import React from "react";
import { InputContainer, SvgContainer, Input } from "./styles";
import { ReactComponent as SearchSvg } from "../../assets/search.svg";

interface IProps {
    value: string;
    handleChange: (e: string) => void;
}

const SearchInput: React.FC<IProps> = ({ value, handleChange }) => {
    return (
        <InputContainer>
            <SvgContainer>
                <SearchSvg />
            </SvgContainer>
            <Input type="text" placeholder="Search book" value={value} onChange={(e) => handleChange(e.target.value)} />
        </InputContainer>
    );
};

export default SearchInput;

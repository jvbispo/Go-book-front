import React from "react";
import { Container, Button } from "./styles";
import { ReactComponent as AddSvg } from "../../assets/add.svg";
import { ReactComponent as HomeSvg } from "../../assets/home.svg";
import { ReactComponent as UserSvg } from "../../assets/user.svg";
import { Link } from "react-router-dom";

interface IProps {
  selected: 'home' | 'add';
};

const Footer: React.FC<IProps> = ({selected}) => {
    return (
        <Container>
            <Link to="/">
                <Button selected={selected === 'home'}>
                    <HomeSvg />
                </Button>
            </Link>
            <Link to="/create">
                <Button selected={selected === 'add'} fillSvg>
                    <AddSvg />
                </Button>
            </Link>
            <Button selected={false}>
                <UserSvg />
            </Button>
        </Container>
    );
};

export default Footer;

import React, { useCallback, useEffect, useState } from "react";
import {
    Container,
    ContentContainer,
    ReturnLink,
    BookImage,
    BookFullTitle,
    BookAuthor,
    BookDescription,
    OvalImage2Div,
} from "./styles";
import backgrounImage from "../../assets/ovalBackground.png";
import returnImage from "../../assets/Back.png";
import ovalImage from "../../assets/oval.png";
import ovalImage3 from "../../assets/oval3.png";
import ovalImage4 from "../../assets/oval4.png";
import DetailsMenu from "../../components/DetailsMenu";
import { useLocation } from "react-router";
import { IBook } from "../../interfaces/IBook";
import api from "../../service/api";

const Detail: React.FC = () => {
    const [book, setBook] = useState<IBook>();
    const location = useLocation<string>();
    const loadBook = useCallback(async () => {
        const id = location.pathname.split('/detail/')[1];
        const {data} = await api({
            url: `http://localhost:3333/book/${id}`,
            method: 'GET',
        })
        setBook(data);
    }, [location]);

    
    useEffect(() => {
        loadBook()
    }, [loadBook]);

    return (
        <Container>
            <img
                src={backgrounImage}
                alt="backgroundImage"
                className="backgroundImage"
            />
            <img src={ovalImage} alt="oval img" className="ovalImage" />
            <OvalImage2Div />

            <img src={ovalImage3} alt="oval img 3" className="ovalImage3" />
            <img src={ovalImage4} alt="oval img 4" className="ovalImage4" />

           {book && (
                <ContentContainer>
                <ReturnLink to="/">
                    <img src={returnImage} alt="return" />
                </ReturnLink>

                <BookImage src={book?.cover_url} alt="book" />

                <BookFullTitle>
                    <strong>{book.title}:</strong>
                    {book.subtitle}
                </BookFullTitle>

                <BookAuthor>{book.author}</BookAuthor>

                <BookDescription>
                    {book.description}
                </BookDescription>
            </ContentContainer>
           )}
            <DetailsMenu />
        </Container>
    );
};

export default Detail;

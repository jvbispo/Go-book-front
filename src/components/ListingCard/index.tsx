import React from "react";
import { Link } from "react-router-dom";
import { IBook } from "../../interfaces/IBook";
import { ItemContainer, ItemImage, ItemSubtitle, ItemTitle } from "./styles";



interface IProps {
    book: IBook;
}

const BookListItem: React.FC<IProps> = ({ book }) => {
    return (
        <Link to={`/detail/${book.id}`}>
            <ItemContainer>
                <ItemImage src={book.cover_url} />
                <ItemTitle>{book.title}</ItemTitle>
                <ItemSubtitle>by {book.author}</ItemSubtitle>
            </ItemContainer>
        </Link>
    );
};

export default BookListItem;

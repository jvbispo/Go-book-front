import React, { useCallback, useEffect, useState } from "react";
import Footer from "../../components/Footer";
import SearchInput from "../../components/SearchInput";
import {
    BookList,
    Container,
    ContentContainer,
    FooterContainer,
    LoadMoreButtonContainer,
    WelcomeText,
    NoBooksFoundContainer,
} from "./styles";
import handImage from "../../assets/hi.png";
import BookListItem from "../../components/ListingCard";
import api from "../../service/api";
import { IBook } from "../../interfaces/IBook";
import SnackbarComponent from "../../components/SnackBar";
import { ReactComponent as UnDrawBookSvg } from "../../assets/undraw_notebook.svg";

interface IProps {
    location?: {
        state?: {
            bookCreated?: boolean;
        };
    };
}

const Home: React.FC<IProps> = ({ location }) => {
    const [snackMessage, setSnackMessage] = useState("");
    const [snackOpen, setSnackOpen] = useState(false);
    const [snackSeverity, setSnackSeverity] =
        useState<"error" | "success">("success");
    const [books, setBooks] = useState<IBook[]>([]);
    const [renderedBooks, setRenderedBooks] = useState<IBook[]>([]);
    const [search, setSearch] = useState("");
    const [filteredBooks, setFilteredBooks] = useState<IBook[]>([]);
    const loadBooks = useCallback(async () => {
        const { data } = await api({
            url: "http://localhost:3333/books",
            method: "GET",
        });
        setBooks(data.books);
        setRenderedBooks(data.books.slice(0, 6));
    }, []);

    useEffect(() => {
        if (location?.state?.bookCreated) {
            setSnackMessage("book was successfully created!");
            setSnackSeverity("success");
            setSnackOpen(true);
            location.state = undefined;
        }
    }, [location]);

    useEffect(() => {
        loadBooks();
    }, [loadBooks]);

    const loadMoreBooks = useCallback(() => {
        const bookLength = renderedBooks.length;
        const newBooks = books.slice(bookLength, bookLength + 6);
        setRenderedBooks([...renderedBooks, ...newBooks]);
    }, [renderedBooks, books]);

    const handleSearchChange = useCallback(
        (value) => {
            setSearch(value);
            const results = books.filter((book) =>
                book.title.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredBooks(results);
        },
        [books]
    );

    return (
        <Container>
            <ContentContainer>
                <SearchInput
                    value={search}
                    handleChange={(e) => handleSearchChange(e)}
                />

                <WelcomeText>
                    <span>
                        Hi, <strong className="name">Mehmed Al Fatih</strong>
                    </span>
                    <img src={handImage} alt="testt" />
                </WelcomeText>

                <BookList>
                    {search ? (
                        filteredBooks.length > 0 ? (
                            filteredBooks.map((book) => (
                                <BookListItem book={book} key={book.id} />
                            ))
                        ) : (
                            <NoBooksFoundContainer>
                                <strong>No books were found</strong>
                                <UnDrawBookSvg />
                            </NoBooksFoundContainer>
                        )
                    ) : renderedBooks.length > 0 ? (
                        renderedBooks.map((book) => (
                            <BookListItem book={book} key={book.id} />
                        ))
                    ) : (
                        <NoBooksFoundContainer>
                            <strong>No books were found</strong>
                            <UnDrawBookSvg />
                        </NoBooksFoundContainer>
                    )}
                </BookList>

                {!search && renderedBooks.length !== books.length && (
                    <LoadMoreButtonContainer>
                        <button onClick={() => loadMoreBooks()}>
                            Carregar mais
                        </button>
                    </LoadMoreButtonContainer>
                )}
            </ContentContainer>

            <FooterContainer>
                <Footer selected="home" />
            </FooterContainer>

            <SnackbarComponent
                handleClose={() => setSnackOpen(false)}
                open={snackOpen}
                severity={snackSeverity}
                message={snackMessage}
            />
        </Container>
    );
};

export default Home;

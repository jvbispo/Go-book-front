import React, { useCallback, useState } from "react";
import {
    Container,
    AddButton,
    BigInput,
    InputLabel,
    SmallInput,
    FooterContainer,
    Title,
    ContentContainer,
} from "./styles";
import Footer from "../../components/Footer";
import ImageDnDComponent from "../../components/ImageDragAndDropComponent";
import * as Yup from "yup";
import api from "../../service/api";
import SnackbarComponent from "../../components/SnackBar";
import { useHistory } from "react-router";

interface IBook {
    title: string;
    subtitle: string;
    author: string;
    cover_picture?: any;
    description: string;
}

const Create: React.FC = () => {
    const history = useHistory();
    const [snackMessage, setSnackMessage] = useState("");
    const [snackOpen, setSnackOpen] = useState(false);
    const [snackSeverity, setSnackSeverity] =
        useState<"error" | "success">("success");
    const [book, setBook] = useState<IBook>({
        author: "",
        description: "",
        subtitle: "",
        title: "",
    });

    const handleSubmit = useCallback(
        async (e) => {
            e.preventDefault();
            try {
                const schema = Yup.object().shape({
                    author: Yup.string().required("Author is required"),
                    cover_picture: Yup.string().required(
                        "Cover picture is required"
                    ),
                    description: Yup.string().required(
                        "Description is required"
                    ),
                    subtitle: Yup.string().required("Subtitle is required"),
                    title: Yup.string().required("Title is required"),
                });

                await schema.validate(book);
                const data = new FormData();

                data.append("avatar", book.cover_picture, book.title);
                data.append("title", book.title);
                data.append("subtitle", book.subtitle);
                data.append("author", book.author);
                data.append("description", book.description);
                api.post("http://localhost:3333/book", data, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                    .then((response) => {
                        history.push("/", { bookCreated: true });
                    })
                    .catch((err) => {
                        setSnackMessage(err.response.data);
                        setSnackSeverity("error");
                        setSnackOpen(true);
                    });
            } catch (err) {
                setSnackMessage(err.message);
                setSnackSeverity("error");
                setSnackOpen(true);
            }
        },
        [book, history]
    );

    const handleChange = useCallback(
        (name, value) => {
            setBook({
                ...book,
                [name]: value,
            });
        },
        [book]
    );

    return (
        <Container>
            <form onSubmit={(e) => handleSubmit(e)}>
                <ContentContainer>
                    <Title>Add a new book</Title>

                    <InputLabel>Cover</InputLabel>
                    <ImageDnDComponent
                        handleChange={(e) => handleChange("cover_picture", e)}
                        value={book?.cover_picture}
                    />

                    <InputLabel>Title</InputLabel>
                    <SmallInput
                        onChange={(e) => handleChange("title", e.target.value)}
                        value={book.title}
                    />

                    <InputLabel>Subtitle</InputLabel>
                    <SmallInput
                        onChange={(e) =>
                            handleChange("subtitle", e.target.value)
                        }
                        value={book.subtitle}
                    />

                    <InputLabel>Author</InputLabel>
                    <SmallInput
                        onChange={(e) => handleChange("author", e.target.value)}
                        value={book.author}
                    />

                    <InputLabel>Description</InputLabel>
                    <BigInput
                        onChange={(e) =>
                            handleChange("description", e.target.value)
                        }
                        value={book.description}
                    />

                    <AddButton type="submit">Add new book</AddButton>
                </ContentContainer>
            </form>

            <FooterContainer>
                <Footer selected="add" />
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

export default Create;

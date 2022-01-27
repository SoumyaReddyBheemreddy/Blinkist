import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "../../atoms/typography/TypographyTag";
import Tab from "../../molecule/tab/ListTabs";
import Card from "../../molecule/card/BookCard";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/material";
import axios from "axios";
interface Book {
  id: number;
  title: string;
  author: string;
  image: string;
  readingTime: string;
  userCount: string;
  progress?: number;
  role: string;
  category:string;
}
const MyLibrary = () => {
  const useStyles = makeStyles({
    title: {
      marginBottom: "60px",
      marginTop: "89px"
    },
  });
  const classes = useStyles();
  const navigate = useNavigate();
  const [currentReadingBooks, setCurrentReadingBooks] = useState<Book[]>([]);
  const [finishedBooks, setFinishedBooks] = useState<Book[]>([]);
  const [currentState, setCurrentState] = useState("currently reading");
  useEffect(() => {
    const fetchBooks = async () => {
      let response = await axios.get("http://localhost:8086/books").then();
      let result = await response.data;
      setCurrentReadingBooks(
        result.filter((book: Book) => book.role === "currently reading")
      );
      setFinishedBooks(result.filter((book: Book) => book.role === "finished"));
    };
    fetchBooks();
  },[]);
  const handleState = (state: string) => {
    setCurrentState(state);
  };

  const cards = (books: Book[]) => {
    return books.map((book: Book,index) => {
      return (
        <Grid key={index} item xs={12} sm={12} md={6} lg={4}>
          <Card
            key={book.id}
            title={book.title}
            author={book.author}
            image={book.image}
            readingTime={book.readingTime}
            userCount={book.userCount}
            role={book.role}
            progress={book.progress}
            onClick={() => {
              navigate("/book?id="+book.id);
              window.scrollTo(0,0);
            }}
          />
        </Grid>
      );
    });
  };
  return (
    <Container fixed>
      <div className={classes.title}>
        <Typography variant="h1" children="My Library" />
      </div>
      <TabContext value={currentState}>
        <Tab stateHandler={handleState} />
        <TabPanel value="currently reading">
          <Grid
            container
            rowSpacing={3}
           
          >
            {cards(currentReadingBooks)}
          </Grid>
        </TabPanel>
        <TabPanel value="finished">
          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 2 }}
          >
            {cards(finishedBooks)}
          </Grid>
        </TabPanel>
      </TabContext>
    </Container>
  );
};

export default MyLibrary;

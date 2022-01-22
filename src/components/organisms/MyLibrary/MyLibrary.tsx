import { useState, useEffect } from "react";
import { Container, Box } from "@mui/material";
import Typography from "../../atoms/typography/TypographyTag";
import Tab from "../../molecule/tab/ListTabs";
import Card from "../../molecule/card/BookCard";
import CircularProgress from "@mui/material/CircularProgress";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
interface Book {
  id: number;
  title: string;
  author: string;
  image: string;
  readingTime: string;
  userCount: string;
  progress?: number;
  role: string;
}
const MyLibrary = () => {
  const useStyles = makeStyles({
    title: {
      marginBottom: "30px",
      marginLeft: "10px",
    },
  });
  const classes = useStyles();
  const navigate = useNavigate();
  const [data, setData] = useState<Book[]>([]);
  const [currentState, setCurrentState] = useState("currently reading");
  useEffect(() => {
    const processor = async () => {
      let response = await fetch("http://localhost:8086/books");
      let result = await response.json();
      setData(result);
    };
    processor();
  }, []);
  const handleState = (state: string) => {
    setCurrentState(state);
  };

  const cards = () => {
    let currentlyReading = data.filter(
      (book) => book.role === "currently reading"
    );

    let finishedReading = data.filter((book) => book.role === "finished");
    if (currentState === "currently reading") {
      return currentlyReading.map((currData: Book) => {
        return (
          <Card
            key={currData.id}
            title={currData.title}
            author={currData.author}
            image={currData.image}
            readingTime={currData.readingTime}
            userCount={currData.userCount}
            role={currData.role}
            progress={currData.progress}
          />
        );
      });
    } else {
      return finishedReading.map((currData: Book) => {
        return (
          <Card
            key={currData.id}
            title={currData.title}
            author={currData.author}
            image={currData.image}
            readingTime={currData.readingTime}
            userCount={currData.userCount}
            role={currData.role}
            progress={currData.progress}
            onClick={() => {
              navigate("/book");
            }}
          />
        );
      });
    }
  };
  return (
    <Container>
      <div className={classes.title}>
        <Typography variant="h1" children="My Library" />
      </div>
      <TabContext value={currentState}>
        <Tab stateHandler={handleState} />
        <TabPanel value="currently reading">{cards()}</TabPanel>
        <TabPanel value="finished">{cards()}</TabPanel>
      </TabContext>
    </Container>
  );
};

export default MyLibrary;

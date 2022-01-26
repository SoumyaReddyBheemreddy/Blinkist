import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Box, Container } from "@mui/material";
import TypographyTag from "../../atoms/typography/TypographyTag";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import BookViewPageTab from "../../molecule/bookViewPageTab/BookViewPageTab";
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
export default function BookView(props: any) {
  const query = new URLSearchParams(useLocation().search);
  const id = query.get("id");
  //const id = 1;
  const [book, setBook] = useState<Book>(Object);
  useEffect(() => {
    async function bookData() {
      await axios.get("http://localhost:8086/books/" + id).then((res) => {
        console.log(res.data);
        setBook(res.data);
      });
    }
    bookData();
  }, [id]);
  return (
    <Container fixed>
      <Box sx={{ marginTop: "60px" }}>
        <TypographyTag variant="body2" children="Get the key ideas from" />
      </Box>
      <Box sx={{ display: { sm: "block", md: "flex" }, marginTop: "40px" }}>
        <Box>
          <TypographyTag variant="h1" children={book.title} />
          <TypographyTag
            variant="subtitle1"
            sx={{ marginTop: "24px" }}
            children="Turning Your Business into an Enduring Great Company"
          />
          <TypographyTag
            variant="body2"
            sx={{ marginTop: "24px" }}
            children={`by ${book.author}`}
          />
          <Box sx={{ display: "flex", marginTop: "16px" }}>
            <AccessTimeIcon
              sx={{
                width: "20px",
                height: "20px",
                color: "#6D787E",
                marginRight: "10px",
              }}
            />
            <TypographyTag variant="caption" children={book.readingTime} />
          </Box>
          <Box sx={{ display: { md: "flex" }, marginTop: "83px" }}>
            <Button variant="outlined" sx={{ marginRight: "31.5px" }}>
              Read now
            </Button>

            <Button
              variant="contained"
              sx={{ marginTop: { xs: "10px", sm: "0px" } }}
            >
              Finished Reading
            </Button>

            <Button
              variant="text"
              endIcon={<ArrowForwardIcon />}
              sx={{
                marginLeft: { sm: "31.5px" },
                marginTop: { xs: "10px", sm: "0px" },
              }}
            >
              Send to Kindle
            </Button>
          </Box>
          <Box sx={{marginTop:"60px" }}>
            <BookViewPageTab
              synopsis="Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world."
              whoIsitFor="Turning Your Business into an Enduring Great Company"
              aboutAuthor="By Jim Collins and Bill Lazier"
            />
          </Box>
        </Box>
        <Box sx={{ alignItems: "center", marginLeft: { md: "125px" }}}>
          <img src={process.env.PUBLIC_URL + book.image} alt={book.title} />
        </Box>
      </Box>
      <hr style={{borderTop:"1px solid #E1ECFC",marginTop:"80px",marginBottom:"177px"}} />
    </Container>
  );
}

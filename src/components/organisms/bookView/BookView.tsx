import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Box, Container } from "@mui/material";
import TypographyTag from "../../atoms/typography/TypographyTag";
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
export default function BookView(props:any){
    const query = new URLSearchParams(useLocation().search);
    const id = query.get("id");
    const[book,setBook] = useState<Book>(Object);
    useEffect(()=>{
        async function bookData(){
            await axios.get("http://localhost:8086/books/"+id).then(res =>{
                console.log(res.data);
                setBook(res.data);
            })
           
       }
       bookData();
    },[id]);
    return(
        <Container fixed>
            <Box>
                <TypographyTag variant="body2" children="Get the key ideas from"/>
            </Box>
            <Box sx={{display:{sm:"none",md:"flex"}}}>
                <Box>
                    <TypographyTag variant="h1" children={book.title} />
                    <TypographyTag variant="subtitle1" children="Turning Your Business into an Enduring Great Company"/>
                </Box>
            </Box>
        </Container>
    );
}
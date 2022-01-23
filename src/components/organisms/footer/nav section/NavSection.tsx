import NavItem from "../nav item/NavItem";
import Box from "@mui/material/Box";
export default function NavSection(){
    const editorialList:string[] = ["Book List","What is Nonfiction?","What to read next?","Benefits of reading"];
    const usefulLinks:string[] = ["Pricing","Blinkist business","Gift cards","Blinkist magaine","Contact & help"];
    const companyLink:string[] = ["About","Careers","partners","Code of Conduct"];
    return(
        <Box sx={{display: "flex"}}>
            <Box sx={{width:"214px"}}><NavItem title="Editorial" items={editorialList}  /></Box>
            <Box sx={{width:"214px"}}><NavItem title="Useful Link" items={usefulLinks}  /></Box>
            <Box sx={{width:"214x"}}><NavItem title="Company" items={companyLink} /></Box>   
        </Box>
    );
}
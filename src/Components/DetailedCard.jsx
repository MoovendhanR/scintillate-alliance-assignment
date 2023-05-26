import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";
import { BoxShadow } from "./BoxShadow";



export const DetailedCard=({lists})=>{


    return(
        <>
        <Container>
        <Box boxShadow={BoxShadow} p="20px" textAlign={"center"} >
               <Text as='b'textDecoration={"underline"}>
                   {`Name:${lists?.name}`}
               </Text>
               <Text>
                   {`Gender:${lists?.gender}`}
               </Text>
               <Text>
                  {`Eye-color:${lists?.eye_color}`} 
               </Text>
               <Text>
                   {`Skin_color:${lists?.skin_color}`}
                   </Text>
                   <Text>
                   {`Hair_color:${lists?.hair_color}`}
                   </Text>
                   <Text>
                   {`Height:${lists?.height}`}
                   </Text>
                   <Text>
                   {`Mass:${lists?.mass}`}
                   </Text>
           </Box>
        </Container>
        </>
    )
}
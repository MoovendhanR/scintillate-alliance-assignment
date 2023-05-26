import { Box, Center, Flex, Heading, Spinner, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
// import { useParams } from "react-router";
import { BoxShadow, BoxShadow1 } from "../Components/BoxShadow";
import DetailedMovies from "../Components/DetailedMovies";
import { DetailedCard } from "../Components/DetailedCard";
// import { DetailedCard } from "./DetailedCard";


function DetailedView(){
    // let { id } = useParams();
    //  console.log("id",id)
    const [lists, setList] = useState();
    const [isLoading,setLoading] = useState(false);
    const [url, setUrl] = useState();
    //  const [data, setData] = useState([])

useEffect(() => {
  const item = JSON.parse(localStorage.getItem('data'));
  if (item) {
   setUrl(item);
  }
}, []);
//    console.log("item",url)
    FetchData(url)
    //function  calling
    function FetchData(url) {
        useEffect(()=>{
        
        setTimeout(()=>{
          setLoading(true);
        },500)
        axios.get(url).then((res)=>{
          setList(res.data)
         setLoading(false)
        })
      },[url])
    }
      // console.log(lists.films)


   
    return(
        <>
        <br />
        <Heading fontSize='5xl' textAlign='center' textDecoration={"underline overline"}
         bgGradient='linear(to-l, #7928ca, #FF0080)'
         bgClip='text'
        //  fontSize='6xl'
         fontWeight='extrabold'
        >Base Details</Heading>
          <br />
        <Center>
        <br/>
        <Box >
          {lists? (
                <DetailedCard lists={lists} />
              ) : (
                <Flex justify="center" mt={"5"}>
                  <Spinner
                    thickness="5px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="#3182ce"
                    size="lg"
                  />
                </Flex>
              )}
          </Box>
        </Center>
        <br />
        <br/>
        <Center>
          <Heading textDecoration={"underline overline"}
         bgGradient='linear(to-l, #7928CA, #FF0080)'
         bgClip='text'
        //  fontSize='6xl'
         fontWeight='extrabold'
          >MOVIES</Heading>
        </Center>
        <br />
          <Center>
            <Box boxShadow={BoxShadow1} p="20px">
              {lists?.films?.map((e)=>{
                   return <DetailedMovies movie_url={e}/>
              })}
            </Box>
          </Center>
          <br />
        <br/>
        <br />
        <br/>  <br />
        <br/>
        </>
    )
}

export default DetailedView;
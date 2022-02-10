import React from 'react'
import { useEffect, useState} from "react";  
import {Table, SelectColumnFilter, AvatarCell} from "../../components";

//
//  NOTE:   When loading locally not from an API url:   The images need to be loaded from any folder  under src, and also imported
//
// Initial local test data
import birdPic1 from "../../assets/images/great-tailed-grackle.png";     
import birdPic2 from "../../assets/images/california-quail.png" ;     
import birdPic3 from "../../assets/images/annas-hummingbird.png" ;       
const getData = () => {
  const birdData = [
   {    
    "birdId": 1,
    "name": "Great-Tailed Grackle",     
    "description": "Big black bird with iridescent purple sheen",      
      url:  birdPic1      
     },
   {
    "birdId": 2,
    "name": "California Quail",     
    "description": "Fat gray bird, that is a ground dweller",
    url:  birdPic2
    },
   {
    "birdId": 3,
    "name": "Annas Humming Bird",     
    "description": "Bright green body with dark head",
     url:  birdPic3
    } 
  ]
  return [...birdData, ...birdData, ...birdData]  // This is  to replicate data to test pagination.  REMOVE when done, and replace with return [...data]
} 

/************Served by API server***********/
//  NOTE:   When loading  using API url:   The images need to be loaded from public, as indicated by the url path specified in 
//               the json response paylload.
//  Data being served using the  WebAPI  also in  my github  repo
// const birdUrl = 'https://localhost:5001/api/Bird';   

const BirdListPage = () => {
   const columns = React.useMemo(
      () => [
        {
          Header: 'Image',
          accessor: 'url',
          Cell: AvatarCell,
          imgAccessor: "url",     
        },
        {
          Header: "Name",
          accessor: "name",
          Filter: SelectColumnFilter,   
          filter: 'includes',             
        },
        {
          Header: "Description",
          accessor: "description",   
          type: "string",
          url: true,              
        },      
      ],
      []
    );     


    

    // Local test data
    const birdData = React.useMemo(() => getData(), [])

//
// OR
//

 // From API server
 //  const[birdData, setBirdData] = useState([]);
  // useEffect only calls the fetch() {}  on a page refresh (rerender) 
  // useEffect( () => {
  //   fetch(birdUrl)
  //   .then ((response) =>response.json())
  //   .then ((data) => {
  //     console.log(data);          
  //     setBirdData(data);
  //   }).catch(()=> {console.log('ERROR with fetch'); } )
  // }, [] );
 
    return (
      // <>
      //   <h1>Bird Table</h1>
      <div className="min-h-screen bg-gray-100 ">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="">
          <h1 className="text-xl font-semibold text-red-700 ">Bird Table</h1>
        </div>
        <div className="mt-6">               
          <Table columns={columns} data={birdData} /> 
        </div>
      </main>
    </div>
      // </>
    );
}

export default BirdListPage;
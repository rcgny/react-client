import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FilterProps } from "react-table";
import Table, {SelectColumnFilter, AvatarCell} from "../../components/Table.";
 

import  './BirdList.css'


const getData = () => [
   {    
    "birdId": 1,
    name: "Great-Tailed Grackle",     
    "description": "Big black bird with iridescent purple sheen",
     "url": "../../../assets/images/great-tailed-grackle.png"  
     },
   {
    "birdId": 2,
    "name": "California Quail",     
    "description": "Fat gray bird, that is a ground dweller",
     "url": "../../../../assets/images/california-quail.png"   
    },
   {
    "birdId": 3,
    "name": "Annas Humming Bird",     
    "description": "Bright green body with dark head",
     "url": "./annas-hummingbird.png"
    }   
 ];

const BirdListPage = () => {
   const columns = React.useMemo(
      () => [
        {
          Header: "Image",
          accessor: "url",
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
  
    const data = React.useMemo(() => getData(), []);
  
    return (
      <>
        <h1>Hello React!</h1>
        <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="">
          <h1 className="text-xl font-semibold">React Table + Tailwind CSS = ❤</h1>
        </div>
        <div className="mt-4">
          <Table columns={columns} data={data} />
        </div>
      </main>
    </div>
      </>
    );
}

export default BirdListPage;
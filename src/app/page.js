"use client"
import { useEffect, useState } from "react";
import Card from "./Component/Card";
import Nav from "./Component/Navbar/Nav";
// import Searchbar from "./Component/Searchbar";

export default function Home() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://api.punkapi.com/v2/beers');
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await res.json();
        // console.log(jsonData)
        setData(jsonData);
        // setFilteredData(jsonData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  
  return (
    <main className="bg-black w-[100%] h-full ">
      <div className="w-[100%] h-[10%] flex justify-end">
        <Nav />
      </div>
      <div className="h-20 w-[100%] m-2">
      <form class="max-w-md mx-auto">   
    <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required
        onChange={(e)=>{
            setFilteredData(e.target.value.toLowerCase())
        }}
        />
        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>
      
      
      
      </div>
     
      <div className="h-[90%] w-[100%] flex flex-wrap space-x-8">
        {data.filter((item)=>{
          return filteredData.toLowerCase()===''?item : item.name.toLowerCase().includes(filteredData)
        })
        .map((beer, index) => (
          <Card key={index} beer={beer} />
        ))}
      </div>
    </main>
  );
}

'use client'

import CarsFiltersOption from "@/components/Home/CarsFiltersOption";
import CarsList from "@/components/Home/CarsList";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import { getCarsList } from "@/services";
import { useEffect, useState } from "react";

export default function Home() {
  const[carsList, setCarsList] = useState<any>([])
  const[carsOrgList, setCarsOrgList] = useState<any>([]);

  useEffect(() => {
    getCarsList_()
  },[]); 


  const getCarsList_ = async() => {
    const result: any = await getCarsList();
    setCarsList(result?.carLists);
    setCarsOrgList(result?.carLists)
  }

const filterCarList = (brand: string) => {
 const filterCar = carsOrgList.filter((item: any) => item.carBrand == brand
 );
 setCarsList(filterCar);

}

const orderCarsList = (order: any) => {
  const sortedData = [...carsOrgList].sort((a,b) => order == -1 ? a.price - b.price : b.price-a.price);
  setCarsList(sortedData)
}

  return (
    <div className="p-5 sm:px-10 md:px-20">
      {/* <div className="grid grid-col-1 md:grid-cols-3">
        <div className="">
    <Booking />
        </div>
        <div className="col-span-2 bg-blue-500 ">Map</div>
      </div> */}
      <Hero />
      <SearchInput />
      <CarsFiltersOption carsList={carsOrgList} setBrand={(value: string) => filterCarList(value)} orderCarsList={(value: string) => orderCarsList(value)}/>
      <CarsList carsList={carsList}/>
    </div>
  );
}

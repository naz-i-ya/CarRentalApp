import React, { useEffect, useState } from "react";

const CarsFiltersOption = ({ carsList, setBrand, orderCarsList }: any) => {
  const [brandList, setBrandList] = useState<any>();

  const BrandSet = new Set();

  useEffect(() => {
    if (carsList) {
      filterCarsList();
    }
  }, [carsList]);

  const filterCarsList = () => {
    carsList.forEach((element: any) => {
      BrandSet.add(element.carBrand);
    });
    console.log(BrandSet);
    setBrandList(Array.from(BrandSet));
  };

  return (
    <div className="mt-10 flex items-center justify-between">
      <div>
        <h2 className="text-[30px] font-bold">Cars Catalog</h2>
        <h2>explore our cars you might likes</h2>
      </div>
      <div className="flex gap-5">
        <select className="select select-warning w-full max-w-xs" onChange={(e) => orderCarsList(e.target.value)}>
          <option disabled selected>
            Price
          </option>
          <option value={-1}>Min to Max</option>
          <option value={1}>Max to Min</option>
        </select>
        <select className="select select-warning w-full max-w-xs md:block hidden" onChange={(e) => setBrand(e.target.value)}>
          <option disabled selected>
            Manufactural
          </option>
          {brandList && brandList.map((brand: string, index: number) => (
            <option key={index}>{brand}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CarsFiltersOption;

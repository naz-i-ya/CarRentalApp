import { createBooking, getStoreLocations } from "@/services";
import React, { useEffect, useState } from "react";

const Form = ({ car }: any) => {
  const [storeLocation, setStoreLocation] = useState<any>([]);
  const [formValue, setFormValue] = useState({
    location:'',
    pickUpDate: '',
    dropOffDate: '',
    pickUpTime:'',
    dropOffTime: '',
    contactNumber: '',
    name: "Naziya", 
    carList: ""
  })

  const today: any = new Date();

  useEffect(() => {
    getStoreLocation();
  }, []);


  useEffect(() => {
    if(car){
        setFormValue({
            ...formValue,
            carList: car.id
        })
    }
  },[car])

  const getStoreLocation = async () => {
    const res: any = await getStoreLocations();
    setStoreLocation(res?.storesLocations);
  };

  const handleChange = (event: any) => {
    setFormValue({
        ...formValue,
        [event.target.name]: event.target.value
    })
  }
    
    
      const handleSubmit = async() => {
        console.log(formValue)
        const res = await createBooking(formValue);
        console.log(res, "res")
      }
  return (
    <div>
      <div className="flex flex-col w-full mb-5">
        <label className="text-gray-400">Pickup Location</label>
        <select
          className="select select-bordered w-full max-w-lg"
          name="location"
          onChange={handleChange}
        >
          <option disabled selected>
            PickUp Location?
          </option>
          {
            storeLocation&&storeLocation.map((loc: any, index: number) => (
                <option key={index}>{loc?.address}</option>
            ))
          }
        </select>
      </div>
      <div className="flex flex-col gap-5 mb-5">
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Pick Up Date</label>
          <input
            type="date"
            min={today}
            onChange={handleChange}
            placeholder="Type Here"
            name="pickUpDate"
            className="input input-bordered w-full max-w-lg"
          />
        </div>

        <div className="flex flex-col w-full">
          <label className="text-gray-400">Drop Off Date</label>
          <input
            type="date"
            placeholder="Type Here"
            name="dropOffDate"
            onChange={handleChange}
            className="input input-bordered w-full max-w-lg"
          />
        </div>
      </div>
      <div className="flex gap-5">
        <div className="flex flex-col w-full mb-5">
          <label className="text-gray-400">Pick Up Time</label>
          <input
            type="time"
            name="pickUpTime"
            onChange={handleChange}
            placeholder="Type Here"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="flex flex-col w-full mb-5">
          <label className="text-gray-400">Drop Off Time</label>
          <input
            type="time"
            name="dropOffTime"
            onChange={handleChange}
            placeholder="Type Here"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
      </div>
      <div className="flex flex-col w-full mb-5">
        <label className="text-gray-400">Contact Number</label>
        <input
          type="text"
          placeholder="Type here"
          name="contactNumber"
          onChange={handleChange}
          className="input input-bordered w-full max-w-lg"
        />
      </div>
      <div className="modal-action">
        <button className="btn">Close</button>
        <button
          className="btn bg-yellow-500 text-white
hover:bg-yellow-800" onClick={handleSubmit}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Form;

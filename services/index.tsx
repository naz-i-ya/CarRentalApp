import request,{gql} from "graphql-request"

const MASTER_URL = 'https://api-ap-south-1.hygraph.com/v2/clm4kf9kj2mi301ukcay59ag6/master'

export const getCarsList = async() => {
const query = gql`
query MyQuery {
  carLists {
    carAvg
    createdAt
    id
    name
    price
    publishedAt
    seat
    updatedAt
    image {
      url
    }
    carType
    carBrand
  }
}
`

const result = await request(MASTER_URL,query);
return result;
}

export const getStoreLocations = async() => {
   const query = gql `
   query MyQuery {
    storesLocations {
      address
    }
  }`

  const result = await request(MASTER_URL, query);
  return result
}

export const createBooking=async(formValue:any)=>{
  const mutationQuery=gql`
  mutation MyMutation {
    createBooking(
      data:  {name: "`+formValue.userName+`", 
      pickUpDate: "`+formValue.pickUpDate+`", 
      pickUpTime: "`+formValue.pickUpTime+`", 
      dropOffDate: "`+formValue.dropOffDate+`", 
      dropOffTime: "`+formValue.dropOffTime+`", 
      contactNumber: "`+formValue.contactNumber+`", 
      carList: {connect: 
        {id: "`+formValue.carList+`"}}}
    ) {
      id
    }
  }
  
  `

  const result=await request(MASTER_URL,mutationQuery);
  return result;
}
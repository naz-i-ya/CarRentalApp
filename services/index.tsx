import request,{gql} from "graphql-request"

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

const result = await request('https://api-ap-south-1.hygraph.com/v2/clm4kf9kj2mi301ukcay59ag6/master',query);
return result;
}
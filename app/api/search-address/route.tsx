import { NextResponse } from "next/server";

const BASE_URL = "https://api.mapbox.com/search/searchbox/v1/suggest"

export async function GET(request: any){
    const {searchParams} = new URL(request.url)

    const searchText = searchParams.get('q');

    const res = await fetch(BASE_URL+'?q='+searchText+'?language=en&limit=6&session_token=5ccce4a4-ab0a-4a7c-943d-580e55542363&countary=US'
    +"&access_token="+process.env.MAPBOX_ACCESS_TOKEN,
    {
        headers:{
            "Content-Type": "application/json"
        }
    })

    const searchResult = await res.json();
    return NextResponse.json(searchResult);
}

// pages/api/mapdata.js
// import { NextResponse } from "next/server";

// export default async function handler(req, res) {
//   try {
//     const { source, destination } = req.query;

//     // Construct GeoJSON data based on source and destination
//     const geoJsonData = {
//       type: "FeatureCollection",
//       features: [
//         {
//           type: "Feature",
//           properties: { label: "Source" },
//           geometry: {
//             type: "Point",
//             coordinates: source.split(",").map(Number),
//           },
//         },
//         {
//           type: "Feature",
//           properties: { label: "Destination" },
//           geometry: {
//             type: "Point",
//             coordinates: destination.split(",").map(Number),
//           },
//         },
//       ],
//     };

//     res.status(200).json(geoJsonData);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// }

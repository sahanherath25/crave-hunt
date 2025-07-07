import {mocks,mockImages} from "../index";
import camelize from "camelize";



export const restaurantsRequest = (location = "43.653225,-79.383186") => {

    const restaurantsData = mocks[location]?.results.length
    return new Promise((resolve, reject) => {

        const mock = mocks[location]

        if (!mock) {
            reject("Data Not Found")
        }

        resolve(mock);

    })

}

export const restaurantsTransform = ({results=[]}) => {

    const newResults=results.map((restaurant)=>{

        restaurant.photos=restaurant.photos.map((photo)=>{
            return mockImages[Math.ceil(Math.random()*(mockImages.length))]

        })
        restaurant.address=restaurant.vicinity

        return {
            ...restaurant,
            isClosedTemporary:restaurant.business_status==="CLOSED_TEMPORARILY",
            isOpen:restaurant?.opening_hours?.open_now,


        }
    })

    return camelize(newResults)
}
// restaurantsRequest()
//     .then(restaurantsTransform)
//     .then((data)=>console.log(data))
//     .catch((err) => {
//             console.log("Error", err)
//         }
//     )


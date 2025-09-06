//what asyncHandler work ?
//nothing but it make a function and just export it .

//dfigning this function using Promises
const asyncHandler = (requestHandler) => {      //requestHandler == fn
    return (req, res, next) => {
     Promise.resolve(requestHandler(req, res, next)).catch((err) = next(err))
    }
}
export {asyncHandler}
//as this utility function asyncHandler communicate with connected dataBase so we use use asyc-await Or Promises .

//const  asyncHandler = () =>{} // Normal asyncHandler function 
//const asyncHandler = (function) = () => {}  //higher order function that taker another function as parameter and it can also return it
//const asyncHandler = (function) = async() => {} // async ayncHandler function 


// hear we doing nothing but only wraping a function that take connected database function as parameter and communicater for request and response 


//defined using async await
// const asyncHandler = (fn) => async(req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(error.code || 400).json({
//             success: false,
//             message: error.message
//         })
//     }
// }















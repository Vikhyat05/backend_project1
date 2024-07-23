const asyncHandler = (requestHandler)=>{
    return (req,res,next) =>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    }
}


export {asyncHandler}


 


/* SECOND APPROACH  
const asyncHandler = (fn)=> async (req, res, next) => {
    try {
        await fn(req, res, next)
    } catch (error) {
        res.status(error.code || 500).json({
            success: false,
            message: err.message
        })
    }
}
*/

// Explanation of above syntax
// const asyncHandler = ()=>{}
// const asyncHandler = (fun)=> {() => {}} passing a funciton in another function
// const asyncHandler = (fun)=> () => {} we can then also remove the {} brackets
// const asyncHandler = (fun)=> async () => {}


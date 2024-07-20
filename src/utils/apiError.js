class ApiError extends Error{
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        stack = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false
        this.errors = errors


        // The below is used to trace the error atm no clue why this syntax
        if(stack) {
            this.stack = stack
        }
        else{
            Error.captureStackTrace(this,this.constructor)
        }   
    }
}

export {ApiError};
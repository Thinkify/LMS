Loan management system enpoints

1. Users
    
    GET /users/getusers 
        Get all users registered
    GET /users/getuser/{emailid}
        Get users by email ID
    POST /user/registeruser
        body {
            email:string
            contact:string
            firstName:string
            lastName:string
            dateOfBirth: date
            adhaar: number
            pan: string
        }

2. Application

    GET /applications/getapplication/{applicationId}
        Get application by id
    GET /applications/getuserapplication/{userId}
        Get application by userId
    GET /applcations/getapplications
        Get all applications
    POST /applications/createapplication
        body {
            applicationType: string
            userId: mongoId
            value: number
            adhaarNumber: number
            pan: string
        }
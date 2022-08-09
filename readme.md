Loan management system enpoints

1. Users

    Get all users registered
    
        GET /users/getusers 

    Get users by email ID
    
        GET /users/getuser/{emailid}
        
    Register a new user
    
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

    
    Get application by id
        
        GET /applications/getapplication/{applicationId}
        
    Get application by userId
    
        GET /applications/getuserapplication/{userId}
       
    Get all applications
        
        GET /applcations/getapplications
        
    Create a new application
        
        POST /applications/createapplication
        
        body {
            applicationType: string
            userId: mongoId
            value: number
            adhaarNumber: number
            pan: string
        }

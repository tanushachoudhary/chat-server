export const signup = (req,res)=>{
    const { fullName, email, password } = req.body;
    try {
        
    } catch (error) {
        
    }
    res.send("signup route");
}

export const login = (req,res)=>{
    res.send("login route");
}

export const logout = (req,res)=>{
    res.send("logout route");
}
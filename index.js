const experess = require ("express");

const postcheck = experess();

postcheck.get ("/" , (req , res)=>{
    res.send("Success")
})

postcheck.post("/addUser", (req, res) =>{
    console.log(req.query);
    res.send("Success")
})

postcheck.put("/editUser/:num", (req, res) =>{
    console.log(req.params);
    res.send("Success")
})


postcheck.listen(6000);

// sending data 




const verifyuser = (req, res, err) => {

    const r = req.body

    if (r.action === "send_otp") {
        res.status(200).json({
            "success": true
        })
    }
    else if (r.action === "verify_otp") {
        let userDetails = r["user_details"]
        if (userDetails.otp == '8213') {
            res.status(200).json({
                "success": true,
                "verified": true
            })
        }
        else {
            res.status(200).json({
                "success": true,
                "verified": false
            })
        }

    }


}


const availableAppointments = (req, res, err) => {

    res.status(200).json({
        "available_time_slots": [
            "12:30 PM",
            "5:00 PM",
            "7:00 PM"
        ]
    })

}



const sendMessage = (req, res, err) =>{
    res.status(200).json({
        "success": true
    })
}



const putInServer = (req, res, err) =>{
    console.log(req.body)

    res.status(200).json({
        "success": true
    })
}






module.exports = { verifyuser, availableAppointments, sendMessage, putInServer}
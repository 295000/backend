const axios=require("axios")

const weather=async function (req,res){
    try {
        let country =req.query.q
        let appId=req.query.appid
        let options={
            method:"get",
            url:`http://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${appId}`
        }
        let results=await axios (options)
        res.status(200).send({msg:results.data})

        
    } catch (error) {
        res.status(500).send({msg:error.message})
    }
}

let tempOfLondon = async function(req,res){
    try{
        let city = "London"
        let key = req.query.appid
        if(key){
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
        }
        let result = await axios(options)
        res.status(200).send({status:true,country:result.data.name, data: result.data.main.temp})
    }else{
        res.status(400).send({status: false, msg: "Please provide valid  key"})
    }

    }catch (error){
        res.status(500).send({error: error.message})
    }
}

let tempOfCities = async function(req,res){
    try{
        let cities = ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let key = req.query.appid
        if(key){

            let temp = []
            for(let i=0; i<cities.length; i++){
                
                let options = {
                    method : "get",
                    url : `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=${key}`
                }
                let result = await axios (options)
                let tempOfCity = result.data.main.temp
                temp.push([cities[i] , tempOfCity] )
                
            }
            console.log(temp)
            let sortAccordingToTemp = (temp.sort((a,b) => (a[1]- b[1])))
            // let citiesAccordingToTemp = sortAccordingToTemp.map(x => x[0])
            
            res.status(200).send({status: true, msg: sortAccordingToTemp})
        }else{
            res.status(400).send({status: false, msg: "please provide valid key"})
        }

    }catch(error){
        res.status(500).send({error : error.message})
    }
}

module.exports.weather=weather
module.exports.tempOfLondon =tempOfLondon 
module.exports.tempOfCities =tempOfCities

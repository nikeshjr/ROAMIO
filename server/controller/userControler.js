import place from "../model/placeModel.js";

export const create = async (req, res) => {
  try {
    const { name, maplink, description, State, District } = req.body;
    const { path, filename } = req.file;

    const userExist = await place.findOne({ maplink });
    if (userExist) {
      return res.status(400).json({ message: "Place already posted" });
    }

    const newPlace = new place({ name,maplink,State , description, District, path, filename });
    const savedData = await newPlace.save();
    res.status(200).json(savedData);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};



export const getAllPlaces=async(req,res)=>{
    try{
          const userData= await place.find();
          if(!userData || userData.length === 0 ){
              return res.status(404).json({message: "User data not found"});
          }
         res.status(200).json(userData);
    } catch(error){
      return  res.status(500).json({errorMessage:error.message});
    }
};

export const getbystate=async(req,res)=>{
    try{
          const {State}= req.params;
          const places = await place.find({State});
          if(places.length===0){
            return res.status(404).json({message: "Place not found"});
        }
        res.status(200).json(places);
    } catch(error){
      return  res.status(500).json({errorMessage:error.message});
}
};


export const getbystateanddistrict=async(req,res)=>{
  try{
        const {State, District}= req.params;
        const places = await place.find({State, District});
        if(places.length===0){
          return res.status(404).json({message: "Place not found"});
      }
      res.status(200).json(places);
  } catch(error){
    return  res.status(500).json({errorMessage:error.message});
}
};




const Author=(model)=>async (req, res) => {
    try {
        const author = await model.find().lean().exec();
        return res.status(200).send({author:author})
    } catch (err) {
        return res.status(500).send({err:err.message});
    }
}


const Author1 =(model)=>async (req, res) => {
    try {
        const author = await model.create(req.body);
        return res.status(200).send({author:author});
    } catch (err) {
        return res.status(500).send({err:err.message});
    }
}


const authorone=(model)=>async (req, res) => {
    try {
        const book = await model.find({AuthorId:req.params.AuthorId}).lean().exec();
        return res.status(200).send({book})
    } catch (err) {
        return res.status(500).send({err:err.message});
    }
}



const Delete =(model)=>async (req, res) => {

    try {
        const section =await model.findByIdAndDelete(req.params.id).lean()
        .exec();
        return res.status(200).send({section})
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
}



module.exports={
    Author: Author,
    Author1: Author1,
    AuthorOne: authorone,
    Delete : Delete

}



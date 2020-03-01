const Collab = require('../models/collab-model')

createCollab = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a collab',
        })
    }

    const collab = new Collab(body)

    if (!collab) {
        return res.status(400).json({ success: false, error: err })
    }

    collab
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: collab._id,
                message: 'Collab created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Collab not created!',
            })
        })
}

updateCollab = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Collab.findOne({ _id: req.params.id }, (err, collab) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Collab not found!',
            })
        }
        collab.name = body.name
        collab.skill = body.skill
        collab.age = body.age
        collab
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: collab._id,
                    message: 'Collab updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Collab not updated!',
                })
            })
    })
}

deleteCollab = async (req, res) => {
    await Collab.findOneAndDelete({ _id: req.params.id }, (err, collab) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!collab) {
            return res
                .status(404)
                .json({ success: false, error: `Collab not found` })
        }

        return res.status(200).json({ success: true, data: collab })
    }).catch(err => console.log(err))
}

getCollabById = async (req, res) => {
    await Collab.findOne({ _id: req.params.id }, (err, collab) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!collab) {
            return res
                .status(404)
                .json({ success: false, error: `Collab not found` })
        }
        return res.status(200).json({ success: true, data: collab })
    }).catch(err => console.log(err))
}

getCollabs = async (req, res) => {
    await Collab.find({}, (err, collabs) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!collabs.length) {
            return res
                .status(404)
                .json({ success: false, error: `Collab not found` })
        }
        return res.status(200).json({ success: true, data: collabs })
    }).catch(err => console.log(err))
}

module.exports = {
    createCollab,
    updateCollab,
    deleteCollab,
    getCollabs,
    getCollabById,
}
const express = require('express')

const CollabCtrl = require('../controllers/collab-ctrl')

const router = express.Router()

router.post('/collab', CollabCtrl.createCollab)
router.put('/collab/:id', CollabCtrl.updateCollab)
router.delete('/collab/:id', CollabCtrl.deleteCollab)
router.get('/collab/:id', CollabCtrl.getCollabById)
router.get('/collab', CollabCtrl.getCollabs)

module.exports = router
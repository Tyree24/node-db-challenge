const express = require('express');
const Resource = require('./resource-model');
const router = express.Router();

router.get('/', (req, res) => {
  Resource.findResource()
    .then(resources => {
      res.json(resources)
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to find resource' })
    })
})

router.post("/", (req, res) => {
  const resource = req.body;

  Resource.addResource(resource)
    .then(count => {
      res.status(201).json(count);
    })
    .catch(err => {
      res.status(500).json({ message: "Could not add resources" });
    });
});


module.exports = router;
const express = require("express");
router.use(require('./partyRoutes'));
const db = require("../../db/connection");

// Get all parties
router.get('/parties', (req, res) => {
    // internal logic remains the same
  });
  
  // Get single party
  router.get('/party/:id', (req, res) => {});
  
  // Delete a party
  router.delete('/party/:id', (req, res) => {});
  
  module.exports = router;
  
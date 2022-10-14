const kits = require('../data/dataKits')

exports.getKits = async (req, res) => {
  try {
    res.status(200).json({
      kits,
    })
  } catch (err) {
    res.status(404).json({
      status: 'not found',
    })
  }
}

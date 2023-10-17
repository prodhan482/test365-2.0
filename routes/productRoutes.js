// const express = require('express')
// const router = express.Router()
// const { 
//     getProducts, 
//     setProduct, 
//     updateProduct,
//     deleteProduct,
// } = require('../controllers/productController')


// // router.post('/', (req, res) => {
// //     res.status(200).json({ message: 'Set Products' })
// // })

// // router.put('/:id', (req, res) => {
// //     res.status(200).json({ message: `Update products ${req.params.id}` })
// // })

// // router.delete('/:id', (req, res) => {
// //     res.status(200).json({ message: `Delete products ${req.params.id}` })
// // })



// router.route('/').get(getProducts).post(setProduct)
// router.route('/:id').delete(deleteProduct).put(updateProduct)


// module.exports = router 




const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.route('/')
  .get(productController.getProducts)
  .post(productController.setProduct);

router.route('/:id')
  .put(productController.updateProduct)
  .delete(productController.deleteProduct);

module.exports = router;
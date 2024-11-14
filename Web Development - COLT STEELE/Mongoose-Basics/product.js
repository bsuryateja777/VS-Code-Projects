const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopApp') //returns a promise
    .then(() => {
        console.log("Connection Open");
    })
    .catch((err) => {
        console.log("OHHH NOOO ERROR!!!!");
        console.log(err);
    })

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required:true
    },
    onSale: {
        type: Boolean,
        default:false
    },
    categories: [String],
    qty: {
        online: {
            type: Number,
            default:0
        },
        inStore: {
            type: Number,
            default:0
        }
    }
 
});
const Product = mongoose.model('Product', productSchema);


const bike = new Product({ name: 'mountain bike', price: 599, categories:['Off-Roading', 'dirt-Bike'] });
bike.save()
    .then(data => {
        console.log("IT WORKED!");
        console.log(data);
    })
    .catch(err => {
        console.log("OHH NOO EROORRR!!");
        console.log(err);
})

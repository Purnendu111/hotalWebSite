import items from './items.json'
// import product from './productData.json'


export default {
    getProd(cb) {
        setTimeout(() => cb(items), 3000)
    },
    // getProdTable(cb) {
    //     setTimeout(() => cb(product), 3000)
    // },
    buyProd() {

    }
}
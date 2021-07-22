export const productsService = {

    requestGetProducts: () => {
        return fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => json)
    },

    requestAddProducts: (newProduct) => {
        return fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                {
                    title: newProduct.title,
                    price: newProduct.price,
                    description: newProduct.description,
                    image: newProduct.image,
                    category: newProduct.category,
                }
            )
        })
            .then(res => res.json())
            .then(json => json)
    },

    requestEditProducts: (index, newProduct) => {
        return fetch('https://fakestoreapi.com/products/' + index,{
            method:"PUT",
            body:JSON.stringify(
                {
                    title: newProduct.title,
                    price: newProduct.price,
                    description: newProduct.description,
                    image: newProduct.image,
                    category: newProduct.category,
                }
            )
        })
            .then(res => res.json())
            .then(json => json)
    },

    requestDeleteProducts: (index) => {
        return fetch('https://fakestoreapi.com/products/' + index,{
            method:"DELETE"
        })
            .then(res => res.json())
            .then(json => json);
    }
}





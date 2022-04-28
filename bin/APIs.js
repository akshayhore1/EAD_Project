const getProducts = async ()=>{
    // can be found on mdn
    const response = await  fetch('http://localhost:8080/products/',
        {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            }
        }
    )
    return response.json();
}

const updateProduct = async (id,body) =>{

    const strigifiedBody = JSON.stringify(body);
    const response = await  fetch('http://localhost:8080/api/products/' + id,
        {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body:strigifiedBody
        }
    )
    return  response.json();
}

const deleteProduct = async (id) =>{

    const response = await  fetch('http://localhost:8080/api/deleteProduct/' + id,
        {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            }
        }
    )
    return  response.json();

}

const addProduct = async (body) =>{

    const strigifiedBody = JSON.stringify(body);
    const response = await  fetch('http://localhost:8080/api/addProduct',
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body:strigifiedBody
        }
    )
    return  response.json();
}


const getProductById = async (id)=>{
    const response = await  fetch('http://localhost:8080/product_id/' + id,
        {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            }
        }
    )
    return response.json();
}

const getProductByName = async (name)=>{
    const response = await  fetch('http://localhost:8080/product_name?search=' + name,
        {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            }
        }
    )
    return response.json();
}

const getProductsByColor = async (color)=>{
    const response = await  fetch('http://localhost:8080/product_color?search=' + color,
        {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            }
        }
    )
    return response.json();
}

const getProductsByType = async (Type)=>{
    const response = await  fetch('http://localhost:8080/product_type?search=' + Type,
        {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            }
        }
    )
    return response.json();
}

const getProductsByBrand = async (Brand)=>{
    const response = await  fetch('http://localhost:8080/product_brand?search=' + Brand,
        {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            }
        }
    )
    return response.json();
}

const getProductsByStore = async (Store)=>{
    const response = await  fetch('http://localhost:8080/product_store?search=' + Store,
        {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            }
        }
    )
    return response.json();
}

const getProductsByPrice = async ()=>{
    // can be found on mdn
    const response = await  fetch('http://localhost:8080/productsByPrice',
        {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            }
        }
    )
    return response.json();
}

const getProductsBySize = async ()=>{
    // can be found on mdn
    const response = await  fetch('http://localhost:8080/productsBySize',
        {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            }
        }
    )
    return response.json();
}

const getProductsByAvailability = async ()=>{
    // can be found on mdn
    const response = await  fetch('http://localhost:8080/productsByAvailability',
        {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            }
        }
    )
    return response.json();
}

const getProductsByDiscount = async ()=>{
    // can be found on mdn
    const response = await  fetch('http://localhost:8080/productsByDiscount',
        {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            }
        }
    )
    return response.json();
}
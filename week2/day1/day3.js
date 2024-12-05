fetch('https://my-json-server.typicode.com/duyvutb873/demo/products/')
    .then(response => response.json()) 
    .then(jsonData => {
        const tableBody = document.querySelector('#product-table tbody');

        jsonData.forEach(product => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.price.toLocaleString()} VND</td>
                <td>${product.quantity}</td>
                <td>${product.category}</td>
                <td>${new Date(product.created_at).toLocaleString()}</td>
            `;
            tableBody.appendChild(row);
        });
    })
    .catch(error => {
        
        console.log(error.message)
    });
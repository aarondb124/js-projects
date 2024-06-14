fetch("products.json")
  .then(function(response) {
    return response.json();
  })
  .then(function (products) {
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for (let product of products) {   
      out += `
        <tr>
            <td>${product.id}</td>
            <td>${product.first_name}</td>
            <td>${product.last_name}</td>
            <td>${product.age}</td>
            <td>${product.birthday}</td>
        </tr>
        `;
    }

    placeholder.innerHTML = out;
  });

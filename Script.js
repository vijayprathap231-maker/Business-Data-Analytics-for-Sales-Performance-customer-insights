function calculateSales() {

    let customers = Number(document.getElementById("customers").value);
    let price = Number(document.getElementById("price").value);

    let totalSales = customers * price;

    document.getElementById("result").innerHTML =
        "Total Sales: ₹" + totalSales;
}
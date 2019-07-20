let products =[
    {
        pname:"Samsung S5",
        price:"$5.00",
        pcode:"xxx1",
        description:"old",
        manufacturer:"Samsung",
        stocks:"1000",
        url:"https://www.91-img.com/gallery_images_uploads/a/3/a36cc45ad157610a394e578726972931d361ec24.jpg?w=0&h=901&q=80&c=1",
        imgurl:"https://p.ipricegroup.com/uploaded_f1bd36c91b6bd97835c3c224224a6ab9.jpg",
    },
    {
        pname:"Samsung S6",
        price:"$10.00",
        pcode:"xxx2",
        description:"brand new",
        manufacturer:"Samsung",
        stocks:"89",
        url:"https://www.amazon.com/Samsung-Galaxy-G920P-Gold-Platinum/dp/B01MSDQY33",
        imgurl:"https://images-na.ssl-images-amazon.com/images/I/81mE4HPNGfL._SL1500_.jpg"
    },
    {
        pname:"Samsung S7",
        price:"$20.00",
        pcode:"xxx3",
        description:"new",
        manufacturer:"Samsung",
        stocks:"55",
        url:"https://www.amazon.com/Samsung-Galaxy-unlocked-smartphone-Warranty/dp/B01HFD0XJM",
        imgurl:"https://images-na.ssl-images-amazon.com/images/I/71a5okghrPL._SY550_.jpg"
    },
    {
        pname:"Samsung S8",
        price:"$30.00",
        pcode:"xxx4",
        description:"used",
        manufacturer:"Samsung",
        stocks:"42",
        url:"https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjW1cqe58LjAhVyzIsBHW7DAFIQjRx6BAgBEAU&url=https%3A%2F%2Fph.priceprice.com%2FSamsung-Galaxy-S8-18755%2F&psig=AOvVaw3zeh7ZoJvmuhjBCVy_kEZl&ust=1563688363951087",
        imgurl:"https://d2pa5gi5n2e1an.cloudfront.net/global/images/product/mobilephones/Samsung_Galaxy_S8/Samsung_Galaxy_S8_L_1.jpg"
    },
    {
        pname:"Samsung S9",
        price:"$50.00",
        pcode:"xxx5",
        description:"new",
        manufacturer:"Samsung",
        stocks:"12",
        url:"https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjd84fN58LjAhUaK6YKHZ98AEMQjRx6BAgBEAU&url=https%3A%2F%2Fwww.amazon.in%2FSamsung-Galaxy-Coral-Storage-Offers%2Fdp%2FB07C9Y8TSW&psig=AOvVaw2_qSAw5r9U2jDJF8Yy1fYV&ust=1563688451616483",
        imgurl:"https://images-na.ssl-images-amazon.com/images/I/61dJ6-YESJL._SL1497_.jpg"
    },
    {
        pname:"Samsung S10",
        price:"$100.45",
        pcode:"xxx6",
        description:"new",
        manufacturer:"Samsung",
        stocks:"0",
        url:"https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjL1tno58LjAhWlwosBHUgqCk4QjRx6BAgBEAU&url=https%3A%2F%2Fwww.amazon.co.uk%2FSamsung-Galaxy-Sim-Free-Smartphone-International%2Fdp%2FB07NXVM3DG&psig=AOvVaw2r4EB9qx6sRIxWIUp31dK9&ust=1563688514368444",
        imgurl:"https://images-na.ssl-images-amazon.com/images/I/61O%2Bh99cFEL._SL1334_.jpg"
    },
    {
        pname:"Samsung A10",
        price:"$6.78",
        pcode:"xxx7",
        description:"brand new",
        manufacturer:"Samsung",
        stocks:"642",
        url:"https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjr3NyJ6MLjAhVryIsBHU_4ADcQjRx6BAgBEAU&url=http%3A%2F%2Fshopnagar.com%2Fproduct%2Fsamsung-galaxy-a10%2F&psig=AOvVaw1b9WXJoqjucDO1zCFuW8P0&ust=1563688585186287",
        imgurl:"http://shopnagar.com/wp-content/uploads/2019/04/Samsung-Galaxy-A10-4.jpg"
    },
    {
        pname:"Samsung A20",
        price:"$12.90",
        pcode:"xxx8",
        description:"used",
        manufacturer:"Samsung",
        stocks:"56",
        url:"https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwic4JXB6MLjAhWpF6YKHeMeAh0QjRx6BAgBEAU&url=https%3A%2F%2Fwww.gadgetsnow.com%2Fmobile-phones%2FSamsung-Galaxy-A20&psig=AOvVaw0zE48eIqPq3JyuH55a9_pL&ust=1563688661677876",
        imgurl:"https://static.toiimg.com/photo/67674421/Samsung-Galaxy-A20.jpg"
    },
    {
        pname:"Samsung A30",
        price:"$45.00",
        pcode:"xxx9",
        description:"new",
        manufacturer:"Samsung",
        stocks:"456",
        url:"https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiAvOLK6cLjAhUGE6YKHXy-DnMQjRx6BAgBEAU&url=https%3A%2F%2Fph.priceprice.com%2FSamsung-Galaxy-A30-27669%2F&psig=AOvVaw3ycxEfAHdRD4G_Kt_ndQuE&ust=1563688737560011",
        imgurl:"https://d2pa5gi5n2e1an.cloudfront.net/global/images/product/mobilephones/samsung_galaxy_a30/samsung_galaxy_a30_L_1.jpg"
    }
]

let output = "";
products.forEach(function(item){
    if (item.imgurl == undefined)
    {
        item.imgurl = "https://via.placeholder.com/300"
    }

   output += 
   `
   <div class = 'item'>
    
   <img style="width:300px;height:400px" src = ${item.imgurl}>

    <a href = "${item.url}"> ${item.pname} </a>
    <p> PRICE: ${item.price} </p>
    <p> PRICE CODE: ${item.pcode} </p>
    <p> DESCRIPTION: ${item.description} </p>
    <p> STOCKS: ${item.stocks} </p>
  
    </div>
    `
})

document.getElementById('container').innerHTML = output


//<img src="img_mountains.jpg" alt="Mountains" width="600" height="400">

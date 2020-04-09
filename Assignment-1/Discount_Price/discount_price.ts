function discount(productName:string,price:number,discount:number){

    const afterDiscount=price - ( price*discount/100 );
    console.log('Product Name : ' +productName +
                ', Total Price : '+price +', Discount '+discount +'% on total price is : '+afterDiscount);
}

discount('Mobile',10000,50);
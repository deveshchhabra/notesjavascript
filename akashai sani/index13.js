// err.mesage is not working  

const cart=["shoes","kurta","pants"];

createOrder(cart)
    .then(function(orderID){
    console.log(orderID);
    return orderID;
    })
    // .catch(function (err){
    //     return console.log(err.message)
    // })//-->next line working ignore catch 
 
    .then(function(orderID){
       return proceedTopayment(orderID);
    })
    .then(function(PaymentInfo){
        console.log(PaymentInfo);
    })

    .then(function(orderID){
        console.log("nono non")
    })
    .catch(function (err){
        return console.log(err.message);
    })  //----->all thisnot working
    
function createOrder(cart){
    const pr= new Promise(function(resolve,reject){
        if(!validateCart(cart)){
            var err= new Error("cart  kkk is not valid");
            reject (err);
        }
        const orderID="12345";
        if(orderID){..
            
            setTimeout(function(){
                resolve(orderID);
            },5000);
        }
    });

return pr;

}

function proceedTopayment(orderID){
    return new Promise(function(resolve,reject){
        resolve("Payment Successful");
    })
}
function validateCart(cart){
    return false;
}
   
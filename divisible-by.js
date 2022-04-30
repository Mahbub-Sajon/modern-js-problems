for (i=1; i<=50; i++){
    if(i%3==0){
        if(i%5==0){
            console.log(i, "Foobar");
        }
        else{
            console.log(i, "Foo");
        }
    
    }
    else if(i%5==0){
        console.log(i, "Bar");
    }
    // else if(i%3==0 && i%5==0){
    //     console.log(i, "FooBar");
    // }
    else{
        console.log(i);
    }
}
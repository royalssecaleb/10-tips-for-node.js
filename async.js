function sayHello(name) {
    return name;
}

async function myFunction(inputValue){
    try{
        const a  = await sayHello(inputValue);
        const b = await sayHello(a);
        const c = sayHello(b);
        const d = await sayHello(c);
    }catch(err){
        console.error(err);
    }
};
console.log(myFunction('john'))
async function rainbow() {
    await delayed(1);
    await delayed(2);
    await delayed(3);
    await delayed(4);
    console.log("done with the exection")
}


const delayed = async (number) => {
    setTimeout(() => {
        return console.log(`waiting for 1sec ${number}`)
    },5000)
}

rainbow();
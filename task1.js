const delay = (ms) => new Promise(resolve => setTimeout(resolve,ms));

const asyncawait = async (value) => {
    for (const value of values){
        console.log(value);
        await sleep (1000)
    }
};

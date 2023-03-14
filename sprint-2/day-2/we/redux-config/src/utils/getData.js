export const getData = (key) =>{
    let data = JSON.parse(localStorage.getItem(key)); //or GET request
    return data;
};

export const setData =(key,value) =>{
    localStorage.setItem(key,JSON.stringify(value)); // or Put requset try yourself
};
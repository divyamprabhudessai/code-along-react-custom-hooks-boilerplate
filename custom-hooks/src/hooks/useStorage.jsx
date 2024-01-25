function useStorage(){

    const setStorage = (value)=>{
        localStorage.setItem("data",value);
        sessionStorage.setItem("data",value);
    }
    // {returning the entire function}
    // function()= calls function and gives only the output
    return {setStorage}
}

export default useStorage
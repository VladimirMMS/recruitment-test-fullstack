function reverseKeep(array) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    let special_array=[]
    let arrayFiltered = array.filter((element, index) => {
        if(!specialChars.test(element)) {
            return element
        }
        else {
            special_array.push({
                character: array[index],
                index
            })
        }
    })
    arrayFiltered.reverse()
    for(let e=0; e<=special_array.length-1;e=e+1) {
        arrayFiltered.splice(special_array[e].index, 0, special_array[e].character);
    }
    console.log(arrayFiltered)
    
}

reverseKeep(['n',2,'&', 'a', 'l', 9, '$','q', 47, 'i', 'a', 'j', 'b', 'z', '%', 8])
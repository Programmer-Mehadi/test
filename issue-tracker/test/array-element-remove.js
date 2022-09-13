let array = [{ name: 'Mehadi' }, { name: 'Mehadi2' }, { name: 'Mehadi3' }]
array.forEach(element => {
    console.log(element)
});
array.splice(1,1)
console.log(array)
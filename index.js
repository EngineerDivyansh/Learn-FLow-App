document.querySelectorAll('button').forEach((btn)=>{
    btn.addEventListener('click',()=>{
        alert({name:'Divyansh'})
    })
})

const obj={
    name:'Divyansh',
    age:22,

    fun:()=>{
        document.write("fun");
    }
}


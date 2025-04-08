 // document.getElementById('river').onclick = () => {
        //     alert('River Clicked')
        // }

        // document.getElementById('river').addEventListener('click',(e)=>{
        //    console.log(e);
           
        // },false)



        // document.getElementById('images').addEventListener('click',(e)=>{
        //    console.log("image container");
           
        // },false)


        // document.getElementById('river').addEventListener('click',(e)=>{
        //    console.log("River");
        //    e.stopPropagation()
        // },false)

        // document.getElementById("images").addEventListener('click',(e) => {
        //     console.log(e.target.parentNode);
        //     let removeIt = e.target.parentNode
        //     removeIt.remove()
            // removeIt.parentNode.removeChild(removeIt)
        // })

        document.getElementById("images").addEventListener('click',(e) => {
            console.log(e.target.tagName);
            if(e.target.tagName === "IMG")
              {
                let removeIt = e.target.parentNode
                removeIt.remove()
              }
        })
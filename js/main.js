const addButton = document.getElementById('add');

const updateLSData = ()=>{
  const textAreaData = document.querySelectorAll('textarea');
  const content_boxs = new Array();
  
  textAreaData.forEach((content_box)=>{
          return content_boxs.push(content_box.value);
  })
  
  localStorage.setItem('content_boxs',JSON.stringify(content_boxs));

}


const addNewNote = (text = '') => {
     const content_box = document.createElement('div');
     content_box.classList.add('content-box');

    const htmlData = `
      <div class="button-section">
         <button id="edit"><i class="fas fa-edit fa-sm"></i></button>
         <button id="del"><i class="fas fa-trash-alt fa-sm"></i></button>
      </div>
      <div class="content-writing">
        <div id="main" class="${text ? '' : 'hidden'}"></div>
        <textarea name="" id="" cols="30" rows="10" class="${text ? 'hidden':''}"></textarea>
     </div>   `;

    content_box.insertAdjacentHTML("afterbegin", htmlData);
    // console.log(note);
    document.getElementById('content').appendChild(content_box);
  

    const editBtn = content_box.querySelector("#edit");
    const deletBtn = content_box.querySelector("#del");
    const saveSection = content_box.querySelector("#main");
    const textArea = content_box.querySelector("textarea");


    // Delet operation
    deletBtn.addEventListener('click',()=>{ 
      content_box.remove();
      updateLSData();
      });



    //Toggle using edit icon
    textArea.value = text;
    saveSection.innerHTML = text;

    editBtn.addEventListener('click',()=>{
           saveSection.classList.toggle('hidden');
           textArea.classList.toggle('hidden');
    })
    textArea.addEventListener('change',(event)=>{
         const value = event.target.value;
         saveSection.innerHTML = value;
        //  console.log(value);

        updateLSData();
    })



}

// Getting data back from local straoage
const content_boxs = JSON.parse(localStorage.getItem('content_boxs'));
if(content_boxs){
  content_boxs.forEach((content_box) => addNewNote(content_box));
};



addButton.addEventListener('click', () => addNewNote());
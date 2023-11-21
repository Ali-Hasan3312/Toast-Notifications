var toastBox = document.querySelector(".toastBox");
var successMsg = '<i class="fa-solid fa-circle-check"></i>  Submitted Successfully';
var errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Please fix the error';
var invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid Message';
function showToast(msg){
    var toast = document.createElement("div");
    toast.classList.add('tst');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);
    if(msg.includes('error')){
        toast.classList.add('error');
    }
    if(msg.includes('Invalid')){
        toast.classList.add('Invalid');
    }
    setTimeout(()=>{
        toast.remove();
    }, 6000)
}

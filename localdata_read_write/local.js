// 브라우저 로컬 스토리지에 데이터 저장, 읽기, 삭제
//로컬 스토리지에 데이터 저장
function saveData(){
    //로컬 스토리지에 데이터 저장
    localStorage.setItem(document.getElementById("key").value, document.getElementById("text_save").value);
    readAllData();
}
//로컬 스토리지에 저장된 데이터 읽기
function loadData(){
    //로컬 스토리지에 저장된 데이터 읽기
    document.getElementById("text_read").value = localStorage.getItem("text");
}
//로컬 스토리지에 저장된 데이터 삭제
function deleteData(){
    //로컬 스토리지에 저장된 데이터 삭제
    localStorage.removeItem("text");
}
//로컬 스토리지에 저장된 모든 데이터 삭제
function deleteAllData(){
    localStorage.clear();
    readAllData();
}
//로컬 스토리지에 저장된 데이터 전체 읽기
function readAllData(){
    let content = "";
    //로컬 스토리지에 저장된 데이터 전체 읽기
    for(var i=0; i<localStorage.length; i++){
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
        console.log(key + " : " + value);
        content += "<tr>";
        content += "<td><input type='text' class='key' value='" + key + "'></td>";
        content += "<td><input type='text' class='data' value='" + value + "'></td>";
        content += "<td><input type='button' class='btn_remove' value='삭제'></td>";
        content += "</tr>";
    }
    document.querySelector("tbody").innerHTML = content;
    // btn_remove 선택
    var btn_remove = document.querySelectorAll(".btn_remove");
    for(var i=0; i<btn_remove.length; i++){
        btn_remove[i].onclick = function(){
            var key = this.parentNode.parentNode.querySelector(".key").value;
            localStorage.removeItem(key);
            readAllData();
        }
    }
}

window.onload = () => {
    readAllData();
    //btn_save 선택
    document.getElementById("btn_save").onclick = saveData;
    //btn_all_delete 선택
    document.getElementById("btn_all_delete").addEventListener("click", deleteAllData);
}
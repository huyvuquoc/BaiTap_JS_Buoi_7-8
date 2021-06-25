var getEle = function (id) {
    return document.getElementById(id);
}

var btnThemSo = getEle('btnThemSo');

var a = [];

btnThemSo.onclick = function() {
    var sn = getEle('ipSN').value;
    a.push(sn);
    console.log(a);
}
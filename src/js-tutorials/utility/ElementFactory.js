export function createImg(blob){
    let img = document.createElement('img');
    img.style = 'position:fixed;top:10px;left:10px;width:100px';
    document.body.append(img);

    img.src = URL.createObjectURL(blob);
}
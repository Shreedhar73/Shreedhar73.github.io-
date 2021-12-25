h1 = document.createElement('h1');
h1.class = "heading1";
h1.innerHTML = "Scatter Plot"
document.body.appendChild(h1);

box = document.createElement('div');
box.setAttribute("id", "box");
box.style.width="80%";
box.style.height="500px";
box.style.border = "2px solid black"
box.style.position="absolute"
box.style.margin = "50px"



document.body.appendChild(box)



var points = [
    {x: 180, y: 0},
    {x: 150, y: 60},
    {x: 200, y: 180},
    {x: 260, y: 120},
    {x: 210, y: 250},
    {x: 100, y: 210},
    {x: 275, y: 320}
];

console.log(points);

for (i=0; i<points.length ;i++) {
    const point = document.createElement("div");
    point.style.width = "10px";
    point.style.height = "10px";
    point.style.borderRadius = "5px"
    point.style.position = "absolute";
    point.style.top = points[i].y + "px";
    point.style.left = points[i].x + "px";
    point.style.background = "black";

    document.getElementById('box').append(point);
}
export const square = [ //value can't be modified in the imported file no matter what constructor to use
    [
        [-50, -50, 0],
        [50, -50, 0],
        [50, 50, 0],
        [-50, 50, 0],
    ]
]

export const doubleSquare = [ //value can't be modified in the imported file no matter what constructor to use
    [
        [-50, -50, 0],
        [50, -50, 0],
        [50, 50, 0],
        [-50, 50, 0],
    ],
    [
        [-50, -50, -50],
        [50, -50, -50],
        [50, 50, -50],
        [-50, 50, -50],
    ]
]

let hypercube = []; 
function createCube(vertices){
    hypercube.push([vertices[0], vertices[1], vertices[2], vertices[3]]);
    hypercube.push([vertices[2], vertices[3], vertices[4], vertices[5]]);
    hypercube.push([vertices[4], vertices[5], vertices[6], vertices[7]]);
    hypercube.push([vertices[0], vertices[1], vertices[6], vertices[7]]);
    hypercube.push([vertices[1], vertices[2], vertices[5], vertices[6]]);
    hypercube.push([vertices[0], vertices[3], vertices[4], vertices[7]]);
}


function tesseract(x, y, z, w, len){
    createCube([[x,y,z,w], [x+len,y,z,w], [x+len,y+len,z,w], [x,y+len,z,w], [x,y+len,z+len,w], [x+len,y+len,z+len,w], [x+len,y,z+len,w], [x,y,z+len,w]])
    createCube([[x,y,z,w], [x,y+len,z,w], [x,y+len,z+len,w], [x,y,z+len,w], [x,y,z+len,w+len], [x,y+len,z+len,w+len], [x,y+len,z,w+len], [x,y,z,w+len]])
    createCube([[x,y,z,w], [x,y,z+len,w], [x,y,z+len,w+len], [x,y,z,w+len], [x+len,y,z,w+len], [x+len,y,z+len,w+len], [x+len,y,z+len,w], [x+len,y,z,w]])
    createCube([[x,y,z,w], [x,y,z,w+len], [x+len,y,z,w+len], [x+len,y,z,w], [x+len,y+len,z,w], [x+len,y+len,z,w+len], [x,y+len,z,w+len], [x,y+len,z,w]])
    x+=len;y+=len;z+=len;w+=len;
    len = -len
    createCube([[x,y,z,w], [x+len,y,z,w], [x+len,y+len,z,w], [x,y+len,z,w], [x,y+len,z+len,w], [x+len,y+len,z+len,w], [x+len,y,z+len,w], [x,y,z+len,w]])
    createCube([[x,y,z,w], [x,y+len,z,w], [x,y+len,z+len,w], [x,y,z+len,w], [x,y,z+len,w+len], [x,y+len,z+len,w+len], [x,y+len,z,w+len], [x,y,z,w+len]])
    createCube([[x,y,z,w], [x,y,z+len,w], [x,y,z+len,w+len], [x,y,z,w+len], [x+len,y,z,w+len], [x+len,y,z+len,w+len], [x+len,y,z+len,w], [x+len,y,z,w]])
    createCube([[x,y,z,w], [x,y,z,w+len], [x+len,y,z,w+len], [x+len,y,z,w], [x+len,y+len,z,w], [x+len,y+len,z,w+len], [x,y+len,z,w+len], [x,y+len,z,w]])

}

function cantor(x, y, z, w, len, depth){
    if (depth <= 0){
        tesseract(x,y,z,w,len)
    }else{
        for (var i = 0; i<2; i++){
            for (var j = 0; j<2; j++){
                for (var k = 0; k<2; k++){
                    for (var l = 0; l<2; l++){
                        cantor(x + (2*(len/3)*i), y + (2*(len/3)*j), z + (2*(len/3)*k), w + (2*(len/3)*l), len/3, depth-1)
                    }
                }
            }
        }
    }
}

cantor(-50, -50, -50, -50, 100, 1);
// tesseract(-50,-50,-50,-50,100);
// createCube(cube, [[50, 50, 50], [-50, 50, 50], [-50, -50, 50], [50, -50, 50], [50, -50, -50], [50, 50, -50], [-50, 50, -50], [50, 50, 50], [-50, -50, -50]]);

export {hypercube};
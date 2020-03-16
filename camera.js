
function perspective(point, distance) {
    const fov = point.z + distance;
    point.x /= fov;
    point.y /= fov;
}

function project4d(point, distance){
    const fov = point.w + distance;
    point.x /= fov;
    point.y /= fov;
    point.z /= fov;
    // return [((x-playerPos[0])/(w-playerPos[3]))*distance * resizerw, 
    //         ((y-playerPos[1])/(w-playerPos[3]))*distance * resizerw, 
    //         ((z-playerPos[2])/(w-playerPos[3]))*distance * resizerw,
    //         null ]
}

function zoom(point, factor) {
    const scale = Math.pow(factor, 2);
    point.x *= scale;
    point.y *= scale;
}

export class Camera {
    constructor(){
        this.pos = {z: 100};
        this.zoom = 8;
    }

    transform(point) {
        project4d(point, this.pos.w)
        perspective(point, this.pos.z);
        zoom(point, this.zoom);
    }
}

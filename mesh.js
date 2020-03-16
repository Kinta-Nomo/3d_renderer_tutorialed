
function toPoint(values) {
    return {
        x: values[0],
        y: values[1],
        z: values[2],
        w: values[3],
    };
}

function toPolygon(face) {
    return face.map(toPoint);
}

export function toMesh(shape) {
    return new Mesh(shape.map(toPolygon));
}

class Vec {
    constructor(x, y, z, w) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }
}

class Rotation4 {
    constructor(xy, xz, xw, yz, yw, zw) {
        this.xy = xy;
        this.xz = xz;
        this.xw = xw;
        this.yz = yz;
        this.yw = yw;
        this.zw = zw;
    }
}

export class Mesh {
    constructor(faces) {
        this.faces = faces;
        this.offsetPosition = new Vec(0, 0, 0, 0);
        this.rotation = new Rotation4(0, 0, 0, 0, 0, 0);
    }

    transform(point) {
        rotate(point, this.rotation);
        offset(point, this.offsetPosition)
    }
}

function rotate(point, rotation) {
    const sin = new Rotation4(
        Math.sin(rotation.xy),
        Math.sin(rotation.xz),
        Math.sin(rotation.xw),
        Math.sin(rotation.yz),
        Math.sin(rotation.yw),
        Math.sin(rotation.zw),
    );

    
    const cos = new Rotation4(
        Math.cos(rotation.xy),
        Math.cos(rotation.xz),
        Math.cos(rotation.xw),
        Math.cos(rotation.yz),
        Math.cos(rotation.yw),
        Math.cos(rotation.zw),
    );
    
    let temp1, temp2;

    temp1 = cos.xy * point.x + sin.xy * point.y;
    temp2 = -sin.xy * point.x + cos.xy * point.y;
    point.x = temp1;
    point.y = temp2;
    
    temp1 = cos.xz * point.x + sin.xz * point.z;
    temp2 = -sin.xz * point.x + cos.xz * point.z;
    point.x = temp1;
    point.z = temp2;
    
    temp1 = cos.xw * point.x + sin.xw * point.w;
    temp2 = -sin.xw * point.x + cos.xw * point.w;
    point.x = temp1;
    point.w = temp2;

    temp1 = cos.yz * point.y + sin.yz * point.z;
    temp2 = -sin.yz * point.y + cos.yz * point.z;
    point.y = temp1;
    point.z = temp2;
    
    temp1 = cos.yw * point.y + sin.yw * point.w;
    temp2 = -sin.yw * point.y + cos.yw * point.w;
    point.y = temp1;
    point.w = temp2;
    
    temp1 = cos.zw * point.z + sin.zw * point.w;
    temp2 = -sin.zw * point.z + cos.zw * point.w;
    point.z = temp1;
    point.w = temp2;
    
}

function offset(point, offsetPosition){
    point.x += offsetPosition.x;
    point.y += offsetPosition.y;
    point.z += offsetPosition.z;
    point.w += offsetPosition.w;
}
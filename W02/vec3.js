class Vec3{
// Constructor
    constructor( x, y, z ){
        this.x = x;
        this.y = y;
        this.z = z;
    }

    add( v ){
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
    }
    sum(){
        sum=this.x+this.y+this.z;
        return sum;
    }
    max(){
        max=this.x;
        if(max<this.y){
            max=this.y;
        }
        if(max<this.z){
            max=this.z;
        }
        return max;
    }
    min(){
        min=this.x;
        if(min>this.y){
            min=this.y;
        }
        if(min>this.z){
            min=this.z;
        }
        return min;
    }
    mid(){
        mid=this.x;
        if((mid>this.y && mid>this.z)){
            if(this.y>this.z){
                mid=this.z;
            }else{
                mid=this.y;
            }
            return mid;
        }
        if((mid<this.y && mid<this.z)){
            if(this.y>this.z){
                mid=this.y;
            }else{
                mid=this.z;
            }
            return mid;
        }
        return mid;
    }

}
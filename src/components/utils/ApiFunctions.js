import axios from "axios";

export const api=axios.create({
    baseURL:"http://localhost:9192"
})

// this function add new room to database
export async function addRoom(photo,roomType,roomPrice) {
    const formData=new FormData();
    formData.append("photo",photo);
    formData.append("roomType",roomType),
    formData.append("roomPrice",roomPrice)
    const response= await api.post("/rooms/add/new-room",formData);
    if(response.status == 201){
        return true;
    }else{
        return false
    }
}
// get all types of room from the database
export async function getRoomTypes() {
    try {
        const resp= await api.get("/rooms/room/types")
        return resp.data;
    } catch (error) {
        throw new Error("Error fetching row tyeps")
    }
    
}
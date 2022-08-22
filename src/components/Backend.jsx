import React from "react"
import TopScrollBar from "./TopScrollBar";
function backend() {


    return <div>
        <TopScrollBar />
        <div className="container flex-box">

            <div>
                <h1>Education</h1>
                <hr />
                <div className="flex-box my-5">
                    <a href="#"><button className=" btn  btn-md px-4 mx-2 mt-2 ">Add</button></a>
                    <a href="#"><button className=" btn  btn-md px-4 mx-2 mt-2 ">Update</button></a>
                    <a href="https://portfolioreactappbackend.herokuapp.com/educations"><button className=" btn  btn-md px-4 mx-2 mt-2 ">Show</button></a>
                    <a href="#"><button className=" btn  btn-md px-4 mx-2 mt-2 ">Delete</button></a>
                </div>
            </div>

            <div>
                <h1>Skills</h1>
                <hr />
                <div className="flex-box my-5">
                    <a href="#"><button className=" btn  btn-md px-4 mx-2 mt-2 ">Add</button></a>
                    <a href="#"><button className=" btn  btn-md px-4 mx-2 mt-2 ">Update</button></a>
                    <a href="http://localhost:5000/messages"><button className=" btn  btn-md px-4 mx-2 mt-2 ">Show</button></a>
                    <a href="#"><button className=" btn  btn-md px-4 mx-2 mt-2 ">Delete</button></a>
                </div>
            </div>

            <div>
                <h1>Projects</h1>
                <hr />
                <div className="flex-box my-5">
                    <a href="#"><button className=" btn  btn-md px-4 mx-2 mt-2 ">Add</button></a>
                    <a href="#"><button className=" btn  btn-md px-4 mx-2 mt-2 ">Update</button></a>
                    <a href="https://portfolioreactappbackend.herokuapp.com/projects"><button className=" btn  btn-md px-4 mx-2 mt-2 ">Show</button></a>
                    <a href="#"><button className=" btn  btn-md px-4 mx-2 mt-2 ">Delete</button></a>
                </div>
            </div>

            <div>
                <h1>Experience</h1>
                <hr />
                <div className="flex-box my-5">
                    <a href="#"><button className=" btn  btn-md px-4 mx-2 mt-2 ">Add</button></a>
                    <a href="#"><button className=" btn  btn-md px-4 mx-2 mt-2 ">Update</button></a>
                    <a href="https://portfolioreactappbackend.herokuapp.com/experiences"><button className=" btn  btn-md px-4 mx-2 mt-2 ">Show</button></a>
                    <a href="#"><button className=" btn  btn-md px-4 mx-2 mt-2 ">Delete</button></a>
                </div>
            </div>


        </div>

    </div>

}

export default backend;
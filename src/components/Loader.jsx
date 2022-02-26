import React, { Component } from 'react'
import Spinner  from './Spinner.gif'

const Loader=()=>{
// export class Loader extends Component {
  // render() {
    return (
      <div className="text-center">
        <img style={{width:"50 px", height:"50px"}} className="my-5" src={Spinner} alt="Loading..." />
      </div>
    )
  }
// }
// }

export default Loader;
//import {useState, useEffect,useRef} from 'react'
//import Account from './components/Account' 
import {Link} from 'react-router-dom'
const Account = (props)=>{

return(
<>

<div className="bg-[#161616] h-[450px] w-full text-white">

<div className="py-[60px] mx-24">
    <h1 className="mb-3 text-3xl font-semibold">My Accounts</h1>
    <hr/>

    <div className="block justify-start items-start mt-8 md:flex">
        <div className="bg-[#0D0D0D] w-96 h-60 rounded">
            <div className="px-6 py-4 mt-4">
                
                <h1 className="text-xl font-semibold">My Payment Information</h1>
                <p className="mt-2 text-sm">Add new payment method</p>
                <button className="mt-[96px] p-1 px-4 hover:bg-[#FFB319] bg-[#f7a809] rounded-md text-black text-sm font-semibold">EDIT</button>
            </div>
        </div>
        <div className="bg-[#0D0D0D] w-96 h-60 rounded ml-3">
            <div className="px-6 py-4 mt-4">
                
                <h1 className="text-xl font-semibold">Order History</h1>
                <p className="mt-2 text-sm">For order and billing questions, please visit</p>
                <Link to="" className="mt-1 text-sm underline">Rockstar Customer Support</Link>
            </div>
        </div>
    </div>

</div>
</div>

</>

)
}

export default Account;
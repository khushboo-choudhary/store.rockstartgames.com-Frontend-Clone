import { useEffect } from "react"

export const PaymentSuccess = ()=>{

    useEffect(()=>{
        setTimeout(()=>{
            window.location.href = "/";
        }, 4000)
    }, [])
    localStorage.setItem("store_cart", JSON.stringify([]));
    return (
        <div style={{textAlign:"center"}}>
            <h1 style={{fontSize:"40px", fontWeight: "bold"}}>Your Order Has been Placed Successfully</h1>
            <p>Wait for 5 Seconds then you will get redirected to home page.</p>
            <img src="https://www.beauty-addict.com/wp-content/uploads/2021/02/Payment-success.png" alt="Payment Successful"/>
        </div>
    )
}
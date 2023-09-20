const doPayment = (amount, desc) => {
  const paymentData = {
    amount,
    desc,
  };
  let token =
    JSON.parse(localStorage.getItem("token")) ||
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYyNDNmMzllYTZkOTRhYTBkYzNkZmJkYiIsIm5pY2tOYW1lIjoiU2hyZXlhczcwMCIsImVtYWlsIjoic2hyZXlhc0BnLmNvbSIsInBhc3N3b3JkIjoiJDJhJDA4JEVDWVF3cUlUSnRwdWsuUEwwMlp5QnVJTktPYUxwMTV2UWxlOXpDaS9JSC82aVFTM1FlTEMuIiwiZG9iIjoiMTk5OC0wNi0wMVQwMDowMDowMC4wMDBaIiwiY291bnRyeSI6IkluZGlhIiwiY3JlYXRlZEF0IjoiMjAyMi0wMy0zMFQwNjowNzoyNi45NTJaIiwidXBkYXRlZEF0IjoiMjAyMi0wMy0zMFQwNjowNzoyNi45NTJaIn0sImlhdCI6MTY0ODkxMDExNX0.uSOxuD4eX67nwMDLS110EIi73r0SwQF8HFdKnURybtY";

  if (!token || token === "") {
    alert("Please login to continue");
    return;
  }

  const paymentOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(paymentData),
  };

  fetch("https://clear-pear-tuna.cyclic.app/payment/pay", paymentOptions)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.success) {
        window.location.href = data.payment_request.longurl;
      } else {
        console.log(data);
        alert("Payment Failed / Something went wrong");
      }
    })
    .catch((error) => console.log(error));
};

export default doPayment;

//   const buyNow = () => {
//     let disc = "payment for" + " " + name;
//     amount = amount * 84;
//     doPayment(amount, disc);
//   };

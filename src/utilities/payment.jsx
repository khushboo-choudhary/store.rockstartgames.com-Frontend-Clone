const doPayment = (amount, desc) => {
  const paymentData = {
    amount,
    desc,
  };
  let token =
    JSON.parse(localStorage.getItem("token")) ||
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYyNDNmMzllYTZkOTRhYTBkYzNkZmJkYiIsIm5pY2tOYW1lIjoiU2hyZXlhczcwMCIsImVtYWlsIjoic2hyZXlhc0BnLmNvbSIsInBhc3N3b3JkIjoiJDJhJDA4JEVDWVF3cUlUSnRwdWsuUEwwMlp5QnVJTktPYUxwMTV2UWxlOXpDaS9JSC82aVFTM1FlTEMuIiwiZG9iIjoiMTk5OC0wNi0wMVQwMDowMDowMC4wMDBaIiwiY291bnRyeSI6IkluZGlhIiwiY3JlYXRlZEF0IjoiMjAyMi0wMy0zMFQwNjowNzoyNi45NTJaIiwidXBkYXRlZEF0IjoiMjAyMi0wMy0zMFQwNjowNzoyNi45NTJaIn0sImlhdCI6MTY0ODkxMDExNX0.uSOxuD4eX67nwMDLS110EIi73r0SwQF8HFdKnURybtY" ||
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY1MDgyMDA5NGMzM2E1ZjU3YWNjMDMwMiIsIm5pY2tOYW1lIjoia2todXNoYm9vMzIxIiwiZW1haWwiOiJra2h1c2hib28zMjFAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMDgkTmphSzI3Nk00dmdSM1R6ZEMyV25QdXd4eS5ub1k3R1FOTTIzNWR2RTVlakhlSy5UUlhCNi4iLCJwcm9maWxlSW1hZ2UiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NKZlJvNV9IbTNvMkw0c2ItcjZTS2dyVUdZOHdyQWRKcEFZNEJkWlk1QnlZQ3M9czk2LWMiLCJjcmVhdGVkQXQiOiIyMDIzLTA5LTE4VDEwOjAxOjQ1Ljk2OVoiLCJ1cGRhdGVkQXQiOiIyMDIzLTA5LTE4VDEwOjAxOjQ1Ljk2OVoifSwiaWF0IjoxNjk1MjAxOTE0fQ";

  if (!token || token === "") {
    alert("Please login to continue");
    return;
  }

  console.log("dijwhdui2gdiug1fuig1fibkjhf87gt", paymentData);
  const paymentOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(paymentData),
  };
  console.log("knhihqihqcijhc89yf981rf", paymentOptions);
  fetch("https://clear-pear-tuna.cyclic.app/payment/pay", paymentOptions)
    .then((response) => response.json())
    .then((data) => {
      console.log("=============================", data);
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

document.addEventListener("DOMContentLoaded", async () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const urlusername = urlParams.get("username");

  document.getElementById("notificationbell").addEventListener("click", () => {
    const newpage = "../notificationfolder/notif.html";
    // C:\Users\chokk\OneDrive\Desktop\axios\public\notificatiofolder\notif.html
    let fullurl = newpage + "?username=" + encodeURIComponent(urlusername);
    window.location.href = fullurl;
  });

  document.getElementById("allProducts").addEventListener("click", () => {
    const newpage = "../All-products/all.html";
    let fullurl = newpage + "?username=" + encodeURIComponent(urlusername);
    window.location.href = fullurl;
  });

  document.getElementById("myRepo").addEventListener("click", () => {
    const newpage = "../Myrepo/repo.html";
    let fullurl = newpage + "?username=" + encodeURIComponent(urlusername);
    window.location.href = fullurl;
  });
  document.getElementById("payment").addEventListener("click", () => {
    const newpage = "../1_payment/demo.html";
    let fullurl = newpage + "?username=" + encodeURIComponent(urlusername);
    window.location.href = fullurl;
  });

  console.log("hellooooo");
  const productContainer = document.getElementById("product-container");
  const rightproducts = document.getElementById("rightproducts");
  const ownproducts = document.getElementById("own-two");
  let points = document.getElementById("points");

  try {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const urlusername = urlParams.get("username");
    const apipathGetcoins = "/api/v2/getcoins";
    const fullUrlGetcoins = `${baseUrl}${apipathGetcoins}`;
    // const getcoin = await axios.post('http://localhost:5501/api/v2/getcoins',{urlusername: urlusername});
    const getcoin = await axios.post(fullUrlGetcoins, {
      urlusername: urlusername,
    });
    points.textContent = getcoin.data.data;
    console.log("coins", points.textContent);

    console.log("notif");
    const notifNum = document.getElementById("notif-num");
    try {
      const apipathNotificationproducts = "/api/v3/notificationProducts";
      const fullUrlNotificationproducts = `${baseUrl}${apipathNotificationproducts}`;
      // const notification = await axios.post(
      //   "http://localhost:5501/api/v3/notificationProducts",
      //   {
      //     urlusername: urlusername,
      //   }
      // );
      const notification = await axios.post(fullUrlNotificationproducts, {
        urlusername: urlusername,
      });
      if (notification.data.msg === "yes") {
        notifNum.textContent = notification.data.datacount;
      } else {
        notifNum.textContent = 0;
      }
    } catch (error) {
      notifNum.textContent = 0;
    }

    //console.log("count",notification.data.datacount)
    console.log(notifNum.textContent);

    console.log("before");
    const apipathGetuserproducts = "/api/v3/getUserProducts";
    const fullUrlGetuserproducts = `${baseUrl}${apipathGetuserproducts}`;
    // const getrightproducts = await axios.get(
    //   "http://localhost:5501/api/v3/getUserProducts",
    //   {
    //     params: {
    //       username: urlusername,
    //     },
    //   }
    // );
    const getrightproducts = await axios.get(fullUrlGetuserproducts, {
      params: {
        username: urlusername,
      },
    });
    const demoproducts = getrightproducts.data.data;

    console.log(demoproducts);

    demoproducts.forEach(async (productId) => {
      try {
        const apipathDeleteproducts = "/api/v3/deleteProducts";
        const fullUrlDeleteproducts = `${baseUrl}${apipathDeleteproducts}`;
        // const deleteresponse = await axios.post(
        //   "http://localhost:5501/api/v3/deleteProducts",
        //   { urlusername: urlusername, productId: productId }
        // );
        const deleteresponse = await axios.post(fullUrlDeleteproducts, {
          urlusername: urlusername,
          productId: productId,
        });

        //updating coins
        const apipathGetcoins = "/api/v2/getcoins";
        const fullUrlGetcoins = `${baseUrl}${apipathGetcoins}`;
        // const getcoins = await axios.post(
        //   "http://localhost:5501/api/v2/getcoins",
        //   { urlusername: urlusername }
        // );
        const getcoins = await axios.post(fullUrlGetcoins, {
          urlusername: urlusername,
        });
        points.textContent = getcoins.data.data;
        const apipathGetproductdetail = "/api/v2/getproductdetail";
        const fullUrlGetproductdetail = `${baseUrl}${apipathGetproductdetail}`;
        if (deleteresponse.data.msg === "matched") {
          // let productdetail = await axios.get(
          //   "http://localhost:5501/api/v2/getproductdetail",
          //   {
          //     params: {
          //       productid: productId,
          //     },
          //   }
          // );
          let productdetail = await axios.get(fullUrlGetproductdetail, {
            params: {
              productid: productId,
            },
          });

          if (productdetail.data.data.userID === urlusername) {
            var card = document.createElement("div");
            card.className = "card";
            var cardId = productdetail.data.data._id;
            card.setAttribute("id", cardId);

            var img = document.createElement("img");
            img.src = productdetail.data.data.url;
            img.alt = productdetail.data.data.name;
            img.style.width = "100%";
            img.style.height = "80%";
            img.style.objectFit = "cover";

            var details = document.createElement("div");
            details.className = "details";

            var name = document.createElement("span");
            name.className = "name";
            name.textContent = productdetail.data.data.name;

            var price = document.createElement("div");
            price.className = "price";

            var newPrice = document.createElement("span");
            newPrice.className = "new-price";
            newPrice.textContent = productdetail.data.data.initial_price;

            var oldPrice = document.createElement("span");
            oldPrice.className = "old-price";
            oldPrice.textContent = productdetail.data.data.normal_price;

            // Append elements to card
            details.appendChild(name);
            price.appendChild(newPrice);
            price.appendChild(oldPrice);
            details.appendChild(price);
            card.appendChild(img);
            card.appendChild(details);
            rightproducts.appendChild(card);

            card.addEventListener("click", () => {
              const newpage = "../cards/card.html";
              let fullurl =
                newpage +
                "?username=" +
                encodeURIComponent(urlusername) +
                "&id=" +
                encodeURIComponent(cardId);
              window.location.href = fullurl;
            });
          } else {
            console.log("nested if");
          }
        }
      } catch (error) {
        console.log("error in deleting and updating the user products");
        console.log(error);
      }
    });

    //Owned products
    if (getrightproducts.data.own === "Yes") {
      const myproducts = getrightproducts.data.owndata;

      //demoproducts.forEach(async(productId)=> {
      myproducts.forEach(async (productId) => {
        try {
          const apipathGetproductdetail = "/api/v2/getproductdetail";
          const fullUrlGetproductdetail = `${baseUrl}${apipathGetproductdetail}`;
          // let productdetail = await axios.get(
          //   "http://localhost:5501/api/v2/getproductdetail",
          //   {
          //     params: {
          //       productid: productId,
          //     },
          //   }
          // );
          let productdetail = await axios.get(
           fullUrlGetproductdetail,
            {
              params: {
                productid: productId,
              },
            }
          );
          var card = document.createElement("div");
          card.className = "card";

          var img = document.createElement("img");
          img.src = productdetail.data.data.url;
          img.alt = productdetail.data.data.name;
          img.style.width = "100%";
          img.style.height = "80%";
          img.style.objectFit = "cover";

          var details = document.createElement("div");
          details.className = "details";

          var name = document.createElement("span");
          name.className = "name";
          name.textContent = productdetail.data.data.name;

          var price = document.createElement("div");
          price.className = "price";

          var newPrice = document.createElement("span");
          newPrice.className = "new-price";
          newPrice.textContent = productdetail.data.data.initial_price;

          var oldPrice = document.createElement("span");
          oldPrice.className = "old-price";
          oldPrice.textContent = productdetail.data.data.normal_price;

          // Append elements to card
          details.appendChild(name);
          price.appendChild(newPrice);
          price.appendChild(oldPrice);
          details.appendChild(price);
          card.appendChild(img);
          card.appendChild(details);
          ownproducts.appendChild(card);
        } catch (error) {
          console.log("Error in own products");
          console.log(error);
        }
      });
    } else {
      var text = document.createElement("div");
      text.className = "own-one";
      var h4 = document.createElement("h4");
      h4.innerText = "You have no OWNED products";
      text.appendChild(h4);
      ownproducts.appendChild(text);
    }
  } catch (error) {}
});

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const urlusername = urlParams.get("username");

document.getElementById("home").addEventListener("click", () => {
  const newpage = "../dashboard/dashboard.html";
  // C:\Users\chokk\OneDrive\Desktop\axios\public\notificatiofolder\notif.html
  let fullurl = newpage + "?username=" + encodeURIComponent(urlusername);
  window.location.href = fullurl;
});

document.getElementById("profile").addEventListener("click", () => {
  const newpage = "../Profilepage/profile.html";
  let fullurl = newpage + "?username=" + encodeURIComponent(urlusername);
  window.location.href = fullurl;
});

document.getElementById("logout").addEventListener("click", () => {
  const newpage = "../login.html";
  let fullurl = newpage; //+'?username='+encodeURIComponent(urlusername)
  window.location.href = fullurl;
});

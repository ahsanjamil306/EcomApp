import "./App.css";
import Navbar from "../src/components/Navbar";
import Card from "./components/Card";
import { images, icons } from "../src/utils/assets";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { connect } from "react-redux";
import RegistrationForm from "./pages/Registrationform";
import LoginForm from "./pages/Loginform";
import axios from "axios";
function App(props) {
  const [search, setSearch] = useState("");
  const [productData, setProductData] = useState([]);
  let { products } = props;

  axios.defaults.baseURL = "http://localhost:7894/";
  //api call
  axios
    .get("/")
    .then(function (response) {
      // handle success
      setProductData(response?.data);
      // console.log("Data after", productData);
      // console.log("======>>>", response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });

  const cout_product = products.length;
  // const productData = [
  //   {
  //     id: 1,
  //     prodectImg: images.smartWatch,
  //     detail: "Brand New Analog Watch",
  //     description: `Multisport GPS watch with a 1.2” display in a resilient 42 mm fiber-reinforced polymer case with a steel or titanium bezel and rear cover. The Amazfit GTR 4 is the industry’s first smartwatch with anti-glare technology on the glass bezel cover, and the AMOLED display has an anti-fingerprint coating to keep your watch looking pristine.
  //       Contact Detail: 123456789`,
  //     price: 300,
  //   },
  //   {
  //     id: 2,
  //     prodectImg: images.wallet,
  //     detail: "Lather Original wallet for men",
  //     description: `a flat, folding pocketbook, especially one large enough to hold paper money, credit cards, driver's license, etc., and sometimes having a compartment for coins.
  //       Contact Detail: 123456789`,
  //     price: 600,
  //   },
  //   {
  //     id: 3,
  //     prodectImg: images.ladiesWallet,
  //     detail: "Brand New Smart Watch 2023",
  //     description: `The Clutch style is a cross between a women’s wallet and a purse.  It holds money, credit cards and a mobile phone at the very least. It is handheld and can be carried instead of a purse depending on the size. The one above is by Madewell and is 6” x 9”.  It has seven credit card slots and a coin pouch. It is made from English saddle leather, comes in three colors,  and can be personalized.
  //       Contact Detail: 123456789`,
  //     price: 300,
  //   },
  //   {
  //     id: 4,
  //     prodectImg: images.watch,
  //     detail: "New Modern Smart Watch 2023",
  //     description: `Here are many benefits to owning a smartwatch, from extensive health tracking to easy access to apps, smartwatches offer exceptional convenience and versatility. Some of the top Galaxy smartwatch benefits include: Advanced health and fitness tracking features that can help you lead a healthier lifestyle.Seamless integration with other Galaxy devices and the wider Samsung Ecosystem.Convenient access to your favourite apps and services.Long battery life and wireless charging capabilities.
  //     Contact detail: 123456789`,
  //     price: 300,
  //   },
  //   {
  //     id: 5,
  //     prodectImg: images.airpod,
  //     detail: "Brand New Smart Watch 2023",
  //     description: `There are two microphones inside each AirPod, one facing outward at ear level and another at the bottom of the stem. Each AirPod weighs 0.14 oz (4.0 g), and its charging case weighs 1.34 oz (38 g). The AirPods are capable of holding a charge of around five hours.AirPods and the Lightning Charging Case is rated IPX4 sweat and water resistant, so they’ll withstand anything from heavy workouts to rain.
  //       Contact Detail: 12456789`,
  //     price: 300,
  //   },
  //   {
  //     id: 6,
  //     prodectImg: images.longWallet,
  //     detail: "Long Wallet and Mobile Cover",
  //     description: `This wallet was designed to carry unfolded bills, a lot of cards, and even your checkbook. For those of us who like the minimalist approach, but refuse to downsize the cards we carry. Featuring an optional lever snap chain so you can always have the Long Wallet by your side. Contact Details: 123456798`,
  //     price: 300,
  //   },
  //   {
  //     id: 7,
  //     prodectImg: images.car,
  //     detail: "Car For Sale",
  //     description: `It is available with Manual & Automatic transmission. Depending upon the variant and fuel type the Corolla has a mileage of 11.3 to 13.4 kmpl & Ground clearance of Corolla is 170 mm. The Corolla is a 5 seater 4 cylinder car and has length of 4,530 mm, width of 1,705 mm and a wheelbase of 2,600 mm Contact Details: 123456798`,
  //     price: 1000,
  //   },
  //   {
  //     id: 8,
  //     prodectImg: images.bike,
  //     detail: "New Bike For Sale",
  //     description: `The CD 70 comes with a backbone-type frame. Its design is aimed at making the vehicle look sleek while also making the ride comfortable. The comfortable seat comes with a seat bar for additional security. The new 2023 model also has some tweaks in the external design of the fuel tank and an all-new cover sticke. Contact Details: 123456798`,
  //     price: 500,
  //   },
  //   {
  //     id: 9,
  //     prodectImg: images.pods,
  //     detail: "Wireless Water proof Bluetooth Earbuds",
  //     description: `Model BTH-F9-5Bluetooth Specification V5.0Working Voltage 3.1V 4.2VCharging Voltage 5V 1ABattery Capacity of the Headset 50MAHTransmission Distance 10MCharging time of Headset 30 to 45 mintcharging time of the Charging Box 1h products includeCharging Boxcharging Cable 3500 MAHTWSTouch Headset. Contact Deails: 123456789`,
  //     price: 500,
  //   },
  //   {
  //     id: 10,
  //     prodectImg: images.phone,
  //     detail: "Samsung A04 for Sale",
  //     description: `eneral FeaturesRelease Date2023-05-10SIM SupportHybrid Dual SIM (Nano-SIM, dual stand-by)Phone Dimensions165.66 x 75.96 x 7.85 mmPhone Weight183.5gOperating SystemMIUI 14 based on Android 13DisplayScreen Size6.67 inchesScreen Resolution1080 x 2400 pixelsScreen TypeAMOLED Capacitive Touchscreen, MultitouchScreen ProtectionCorning Gorilla Glass 3MemoryInternal Memory128 GBRAM8 GBCard SlotmicroSDXC (uses shared SIM slot)PerformanceProcessorQualcomm Snapdragon 685 (6nm)GPUAdreno 610BatteryTypeLi-Po 5000 mAh, non-removableCameraFront Camera13 MPFront Flash LightNoFront Video Recording1080p@30fpsBack Flash LightYesBack Camera50 MP + 8 MP + 2 MPBack Video. Contact Deails: 123456789`,
  //     price: 500,
  //   },
  // ];

  const navigate = useNavigate();

  return (
    <div className=" h-full w-screen">
      <Navbar
        isSearch={true}
        search={search}
        setSearch={setSearch}
        count={cout_product}
        isHome={true}
      />

      {/* PRODUCT IMAGES */}
      <div className="gap-4 flex flex-wrap justify-start p-16 self-center w-full  ">
        <Card data={productData} search={search} />
      </div>

      {/* PRODUCT IMAGES */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state,
    // Add other reducer variables as needed
  };
};

export default connect(mapStateToProps)(App);

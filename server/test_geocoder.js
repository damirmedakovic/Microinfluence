const NodeGeocoder = require("node-geocoder");

const options = {
  provider: "mapquest",
  apiKey: "zTpO1FAxn9zazfLlI9DyhmKvuw7Plq1u",
  formatter: null,
};

const geocoder = NodeGeocoder(options);

async function coder(address) {
  const loc = await geocoder.geocode({
    address: "Lundheimsveien 23",
    country: "NO",
    zipcode: "4460",
  });
  console.log(loc);
}

coder("Oslo, Norway");

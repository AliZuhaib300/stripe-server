import Stripe from "stripe";
const stripe = new Stripe(
  "sk_test_51J7Lb0FOIsNwIWTqEB51dDnT51NL3wmTcWbUdZGKv4VkhGsuQNFMmyPZG7oV40zXGERV4clXJLDT2akpMrbKvNAG00G5nisys4"
);

// get stripe coupon from stripe dashboard api
export const getStripeCoupons = async (request, response) => {
  // const user = request.body;
  // console.log("inside")

  // const newUser = new User(user);
  try {
    const coupons = await stripe.coupons.list({
      limit: 10,
    });
    console.log("coupons", coupons);
    response.status(201).json({
      data: coupons,
    });
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
// create stripe coupon from stripe dashboard api
export const createStripeCoupons = async (request, response) => {
  try {
    const coupon = await stripe.coupons.create(request.body);
    console.log("coupon", coupon);
    response.status(201).json({
      data: coupon,
    });
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

// delete stripe coupon from stripe dashboard api
export const deleteStripeCoupons = async (request, response) => {
  try {
    console.log(request.params);
    const deleted = await stripe.coupons.del(request.params.id);
    console.log("deleted", deleted);
    response.status(201).json({
      data: deleted,
    });
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

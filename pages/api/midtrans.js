// integration midtrans payment gateway using nextjs

const midtransClient = require('midtrans-client');
const core = new midtransClient.CoreApi({
  isProduction: false,
  serverKey: 'SB-Mid-server-skuMDfeTKGJfiOzsw3pcxXwa',
  clientKey: 'SB-Mid-client-reQFae-nSyVbkQPe',
});

export default midtrans = async (req, res) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const parameter = {
          transaction_details: {
            order_id: 'order-123',
            gross_amount: 100000,
          },
          credit_card: {
            secure: true,
          },
          customer_details: {
            first_name: 'John',
            last_name: 'Doe',
            email: 'a@gmail.com',
            phone: '08111222333',
          },
          item_details: [
            {
              id: 'a1',
              price: 100000,
              quantity: 1,
              name: 'Apple',
            },
          ],
        };
        const snap = await core.transaction.charge(parameter);
        res.status(200).json({ snap });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};

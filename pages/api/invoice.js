const Xendit = require('xendit-node');

const x = new Xendit({
  secretKey:
    'xnd_development_XZOlxBJZBcQ722ZbUteissPxjt0EU94qcA40zERr3gTAAGi09uSanvnvQTxs7vz',
});

export default async function handler(req, res) {
  const randomUID = Math.floor(Math.random() * 1000000000);
  const { Invoice } = x;
  const invoiceSpecificOptions = {};
  const i = new Invoice(invoiceSpecificOptions);
  const httpMethod = req.method;
  const { email, description, amount } = req.body;

  switch (httpMethod) {
    case 'GET':
      const invoice = await i.createInvoice({
        externalID: 'dasdef21q3rdf3q2f',
        payerEmail: 'stanley@xendit.co',
        description: 'Invoice for Shoes Purchase',
        amount: 100000,
      });
      res.status(200).json({ invoice });
      break;
    case 'POST':
      const invoicez = await i.createInvoice({
        externalID: 'ZAKAT-' + randomUID,
        payerEmail: email,
        description: 'Invoice zakat for ' + description,
        amount: amount,
      });
      res.status(200).json({ invoicez });
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${httpMethod} Not Allowed`);
  }
}

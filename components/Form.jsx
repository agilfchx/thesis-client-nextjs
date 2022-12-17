import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faEnvelope,
  faPhone,
  faCheckCircle,
  faXmarkCircle,
} from '@fortawesome/free-solid-svg-icons';

export default function Form() {
  const [isPaid, setIsPaid] = useState(false);
  const [nominal, setNominal] = useState(0);
  const [zakatNominal, setZakatNominal] = useState(0);
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const calculateZakat = (nominal) => {
    const zakat = nominal * 0.025;
    return zakat;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const test = await fetch('/api/invoice', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        description: name,
        amount: zakatNominal,
      }),
    });
    const response = await test.json();
    window.open(response.invoicez.invoice_url, '', 'width=800, height=800');
  };

  useEffect(() => {
    setZakatNominal(calculateZakat(nominal));
  }, [nominal]);

  return (
    <>
      <h1 className="text-4xl font-bold mt-8">Pay Zakat</h1>
      <div className="m-8">
        <form className="flex flex-col items-center justify-center w-full h-full">
          <div>
            <label
              className="block mb-2 text-sm font-medium text-gray-900"
              htmlFor="income"
            >
              Income
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm  rounded-l-md border border-r-0 bg-gray-300 border-black font-bold">
                Rp.
              </span>
              <input
                type="number"
                className="rounded-none rounded-r-lg border block flex-1 w-96 text-sm p-2.5 bg-white border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your income"
                onChange={(e) => setNominal(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-900 pt-2"
                htmlFor="nominal"
              >
                Zakat Nominal
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 text-sm  rounded-l-md border border-r-0 bg-gray-300 border-black font-bold">
                  Rp.
                </span>
                <input
                  type="text"
                  className="rounded-none rounded-r-lg border block flex-1 w-96 text-sm p-2.5 bg-slate-100 border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                  disabled={true}
                  value={calculateZakat(nominal)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                />
              </div>
            </div>

            <div className="flex flex-col items-center justify-center w-full h-full mt-4">
              <p className="text-sm text-gray-500">
                —Fill the field above for your personal data—
              </p>
            </div>

            <h3 className="block mb-2 text-sm font-medium text-gray-900 pt-2">
              Title
            </h3>
            <ul className="grid gap-6 w-full md:grid-cols-2">
              <li>
                <input
                  type="radio"
                  id="mister"
                  name="title"
                  value="Mr."
                  className="hidden peer"
                  required
                  onChange={(e) => setTitle(e.target.value)}
                />
                <label
                  htmlFor="mister"
                  className="inline-flex justify-between items-center px-2 py-1 w-full rounded-lg border cursor-pointer border-gray-700  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-slate-400 text-slate-300 bg-gray-800 hover:bg-gray-700"
                >
                  <div className="block">
                    <div className="w-full text-lg font-semibold">Mr.</div>
                  </div>
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  id="miss"
                  name="title"
                  value="Mrs."
                  className="hidden peer"
                  required
                  onChange={(e) => setTitle(e.target.value)}
                />
                <label
                  htmlFor="miss"
                  className="inline-flex justify-between items-center px-2 py-1 w-full rounded-lg border cursor-pointer border-gray-700  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-slate-400 text-slate-300 bg-gray-800 hover:bg-gray-700"
                >
                  <div className="block">
                    <div className="w-full text-lg font-semibold">Mrs.</div>
                  </div>
                </label>
              </li>
            </ul>

            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-900 pt-2"
                htmlFor="name"
              >
                Name
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-[1.1rem] text-sm rounded-l-md border border-r-0 bg-gray-300 border-black font-bold">
                  <FontAwesomeIcon icon={faUser} />
                </span>
                <input
                  type="text"
                  className="rounded-none rounded-r-lg border block flex-1 w-96 text-sm p-2.5 bg-white border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your name"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 pt-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-[1.1rem] text-sm rounded-l-md border border-r-0 bg-gray-300 border-black font-bold">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  <input
                    type="email"
                    className="rounded-none rounded-r-lg border block flex-1 w-96 text-sm p-2.5 bg-white border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 pt-2"
                  htmlFor="phone"
                >
                  Phone
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-[1.1rem] text-sm rounded-l-md border border-r-0 bg-gray-300 border-black font-bold">
                    <FontAwesomeIcon icon={faPhone} />
                  </span>
                  <input
                    type="phone"
                    className="rounded-none rounded-r-lg border block flex-1 w-96 text-sm p-2.5 bg-white border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your phone"
                    required
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <button
              className="focus:ring-gray-600 bg-gray-800 border-gray-700 text-white hover:bg-gray-700 w-[436px] p-2.5 my-2 font-medium rounded-lg text-lg uppercase"
              onClick={handleSubmit}
            >
              Pay
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

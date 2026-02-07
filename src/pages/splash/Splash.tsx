import { Button } from '../../components/ui/button/Button';
import {
  FaArrowRightLong,
  FaMoneyBillTransfer,
  FaCreditCard,
  FaPiggyBank,
} from 'react-icons/fa6';

const Splash = () => {
  const transactionCards = [
    {
      card: '**** **** 2341',
      amount: '-$21.95',
      icon: <FaCreditCard />,
    },
    {
      card: '**** **** 4268',
      amount: '-$8.71',
      icon: <FaMoneyBillTransfer />,
    },
    {
      card: '**** **** 1356',
      amount: '+$110.00',
      icon: <FaPiggyBank />,
    },
    {
      card: '**** **** 2341',
      amount: '-$26.32',
      icon: <FaCreditCard />,
    },
    {
      card: '**** **** 2341',
      amount: '-$26.32',
      icon: <FaCreditCard />,
    },
    {
      card: '**** **** 4268',
      amount: '+$17.00',
      icon: <FaMoneyBillTransfer />,
    },
    {
      card: '**** **** 8364',
      amount: '-$400.00',
      icon: <FaMoneyBillTransfer />,
    },
  ];
  const transactions = transactionCards.map((transactionCards, index) => (
    <div className="text-white relative rounded-xl overflow-hidden" key={index}>
      <div className="bg-indigo-500 p-6">
        <p className="text-sm">Transaction</p>
        <p className="font-bold text-xl leading-none pb-8">
          {transactionCards.card}
        </p>
      </div>
      <div className="bg-indigo-900 p-6 flex justify-between items-center">
        <div className="text-4xl">{transactionCards.icon}</div>
        <p className="font-bold text-xl leading-none">
          {transactionCards.amount}
        </p>
      </div>
    </div>
  ));

  const goalCards = [
    {
      icon: <FaPiggyBank />,
      goal: 'Feel organized about my expenses',
      cta: 'Level Up Adulthood',
    },
    {
      icon: <FaPiggyBank />,
      goal: 'Be less stressed about money',
      cta: 'Take Charge',
    },
    {
      icon: <FaPiggyBank />,
      goal: 'Give myself permission to spend',
      cta: 'Treat Yo Self',
    },
    {
      icon: <FaPiggyBank />,
      goal: 'Save towards my future',
      cta: 'Crush My Goals',
    },
  ];
  const goals = goalCards.map((goalCards, index) => (
    <a
      className="p-6 text-center relative rounded-xl border border-b-5 border-zinc-200 bg-white hover:border-indigo-500 transition"
      key={index}
    >
      <div className="text-5xl bg-gradient-to-b from-indigo-50 to-indigo-700 border-3 border-indigo-300 border- text-white rounded-full mx-auto mb-8 w-fit p-3 shadow-lg">
        {goalCards.icon}
      </div>
      <p className="font-rokkitt text-lg leading-none">{goalCards.goal}</p>
      <p className="text-indigo-500 font-medium px-4 py-2 underline-offset-4 hover:underline flex items-center mx-auto w-fit text-shadow-l">
        {goalCards.cta}{' '}
        <span className="ml-2">
          <FaArrowRightLong />
        </span>
      </p>
    </a>
  ));

  return (
    <div className="min-h-screen">
      <section className="jumbotron px-6">
        <div className="container-lg md:flex md:items-center py-12">
          <div className="w-full md:w-1/2">
            <h1 className="font-rokkitt text-5xl md:text-6xl lg:text-8xl">
              Budgetier
            </h1>
            <p className="text-lg mb-4 md:text-xl lg:text-2xl md:w-3/4">
              A common sense approach to money. Easily manage your budget, track
              your expenses, and hit your goals!
            </p>
            <Button variant="default" size="lg" className='bg-indigo-900'>
              Get Started
            </Button>
          </div>

          <div className="md:w-1/2 columns-2 md:columns-3 gap-4 space-y-4">
            {transactions}
          </div>
        </div>
      </section>
      <section className="bg-zinc-50 px-6 py-12">
        <div className="container-lg text-center">
          <h2 className="font-rokkitt text-3xl lg:text-4xl mt-6 mb-2">
            What will you accompish with Budgetier?
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl mt-6 mb-4">
            I want to...
          </p>
          <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
            {goals}
          </div>
        </div>
      </section>
      <section className="px-6 py-12">
        <div className="container-lg text-center">
          <h2 className="font-rokkitt text-3xl lg:text-4xl mb-10">
            Works for every budget, big or small
          </h2>
          <div className="md:flex gap-4">
            <div className="text-left bg-indigo-300 p-6 rounded-xl mb-4 md:mb-0">
              <h3 className="text-indigo-900 text-lg font-bold md:text-xl lg:text-2xl mb-4">Free</h3>
              <p className="text-indigo-900">
                Get the most out of your money without paying any. Run the app
                locally to enjoy budgeting how you want.
              </p>
              <Button variant="outline" size="lg" className="border-indigo-900 text-indigo-900 hover:bg-indigo-900 hover:text-white hover:border-indigo-900 mt-4">
                Try for Free
              </Button>
            </div>
            <div className="text-left bg-indigo-900 p-6 rounded-xl md:flex gap-4">
              <div>
              <h3 className="text-white font-bold text-lg md:text-xl lg:text-2xl mb-4">Paid</h3>
              <p className="text-indigo-300">
                Tapping into our paid version solution opens up features not
                available on the free plan.
              </p>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-indigo-900 hover:border-white mt-4">
                Get Started
              </Button>
              </div>
              <div className='border-t md:border-t-0 md:border-l border-indigo-300 pt-6 md:pl-6 md:pt-0 mt-6 md:mt-0'>
                <p className="text-indigo-300 uppercase">Features</p>
                <ul className="text-white list-disc list-inside mt-4">
                  <li>Access Budgetier on your phone, tablet, or computer</li>
                  <li>Share your subscription with partners or family</li>
                  <li>Customizable views - so you can budget how you like</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Splash;

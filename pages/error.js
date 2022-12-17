import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
export default function Success() {
  return (
    <div className="flex flex-col items-center justify-center h-[35.1rem] py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <FontAwesomeIcon
          icon={faExclamationCircle}
          className="text-red-500 text-6xl h-24 w-24"
        />

        <h1 className="text-6xl font-bold mt-4">Error!</h1>
        <p className="mt-3 text-2xl">
          Looks like your payment failed. Please try again.
        </p>
      </main>
    </div>
  );
}